import { useState, useEffect } from "react";
import { Copy, Check, Linkedin, Mail, Terminal, FileText } from "lucide-react";
import { toast } from "sonner";
import { contact } from "@/data/portfolio";

const COMMAND = "ssh cheenu.me -p 22";

export function ContactView() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageCopied, setMessageCopied] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState("");

  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(COMMAND.slice(0, i));
      if (i >= COMMAND.length) clearInterval(id);
    }, 50);
    return () => clearInterval(id);
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(contact.email);
    setCopied(true);
    toast.success("email copied to clipboard");
    setTimeout(() => setCopied(false), 1500);
  };

  const generateMessage = () => {
    if (!name.trim() || !senderEmail.trim() || !message.trim()) {
      toast.error("Enter your name, email, and message first.");
      return;
    }
    setGeneratedMessage(
      `To: ${contact.email}\nSubject: Portfolio message from ${name.trim()}\n\nName: ${name.trim()}\nEmail: ${senderEmail.trim()}\n\nMessage:\n${message.trim()}`,
    );
    setMessageCopied(false);
    toast.success("Message generated.");
  };

  const copyPreparedMessage = async () => {
    if (!generatedMessage) {
      toast.error("Generate your message first.");
      return;
    }
    try {
      await navigator.clipboard.writeText(generatedMessage);
      setMessageCopied(true);
      toast.success("Message copied to clipboard.");
      setTimeout(() => setMessageCopied(false), 1800);
    } catch {
      toast.error("Clipboard access failed. Check your browser permissions.");
    }
  };

  const openGmail = () => {
    if (!generatedMessage) {
      toast.error("Generate your message first.");
      return;
    }
    const subject = `Portfolio message from ${name.trim()}`;
    const body = `Name: ${name.trim()}\nEmail: ${senderEmail.trim()}\n\nMessage:\n${message.trim()}`;
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pb-12 w-full">
      <div className="mb-10 font-mono text-sm text-muted-foreground">
        <span className="text-primary font-bold">~/cheenu</span> ${" "}
        <span className="text-foreground">{typed}</span>
        <span className="caret" />
      </div>

      <div
        className="animate-in fade-in slide-in-from-bottom-4 duration-1000 flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch fill-mode-both"
        style={{ animationDelay: `${COMMAND.length * 50}ms`, animationFillMode: "both" }}
      >
        {/* LEFT SIDE: Connect Hub */}
        <div className="flex-1 flex flex-col justify-between space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 tracking-tight mb-3">
              Let's build something.
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
              Open to AI engineering roles, internships, freelance projects, and tech discussions.
              Reach out directly using the form or connect through socials below.
            </p>

            {/* Quick Info Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs sm:text-sm">
              <div className="p-4 sm:p-5 rounded-2xl border border-border/60 bg-panel/70 backdrop-blur-md shadow-sm">
                <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1.5 font-semibold">
                  // LOCATION
                </div>
                <div className="text-foreground font-bold text-sm sm:text-base">
                  Coimbatore, India (IST +5:30)
                </div>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl border border-border/60 bg-panel/70 backdrop-blur-md shadow-sm">
                <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1.5 font-semibold">
                  // RESPONSE TIME
                </div>
                <div className="text-emerald-400 font-bold text-sm sm:text-base flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  Within 12 Hours
                </div>
              </div>
            </div>

            {/* Email Copy Card */}
            <div className="mt-5 p-5 rounded-2xl border border-border bg-panel flex items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3.5 overflow-hidden">
                <img
                  src="https://cdn.simpleicons.org/gmail/EA4335"
                  alt="Gmail"
                  className="h-6 w-6 shrink-0"
                />
                <span className="font-mono text-sm sm:text-base text-foreground font-semibold truncate">
                  {contact.email}
                </span>
              </div>
              <button
                onClick={copyEmail}
                className="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-panel-2 hover:bg-background font-mono text-xs sm:text-sm font-bold text-foreground transition-all cursor-pointer active:scale-95"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-emerald-400" />
                ) : (
                  <Copy className="h-4 w-4 text-primary" />
                )}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-4">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-3.5 font-bold">
              // SOCIAL & NETWORKS
            </div>
            <div className="flex flex-wrap gap-3.5">
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-panel hover:bg-panel-2 border border-border hover:border-primary/50 transition-all font-mono text-xs sm:text-sm font-bold text-foreground group"
              >
                <img
                  src="https://cdn.simpleicons.org/github/white"
                  alt="GitHub"
                  className="h-5 w-5 group-hover:scale-110 transition-transform"
                />
                <span>GitHub</span>
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-panel hover:bg-panel-2 border border-border hover:border-primary/50 transition-all font-mono text-xs sm:text-sm font-bold text-foreground group"
              >
                <Linkedin className="h-5 w-5 text-[#0A66C2] fill-[#0A66C2] group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://www.instagram.com/mystivox.lol/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-panel hover:bg-panel-2 border border-border hover:border-primary/50 transition-all font-mono text-xs sm:text-sm font-bold text-foreground group"
              >
                <img
                  src="https://cdn.simpleicons.org/instagram/E4405F"
                  alt="Instagram"
                  className="h-5 w-5 group-hover:scale-110 transition-transform"
                />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Terminal Contact Console */}
        <div className="w-full lg:w-[480px] xl:w-[540px] shrink-0 overflow-hidden rounded-2xl border border-border bg-[#0b0d10] shadow-2xl shadow-black/40">
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-5 py-4">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="ml-3 font-mono text-xs text-white/50">cheenu@portfolio: ~/contact</span>
          </div>
          <div className="p-6 sm:p-8 font-mono">
            <div className="mb-2 flex items-center gap-2 text-xs text-emerald-400">
              <Terminal className="h-4 w-4" /> CONTACT_PROTOCOL v1.0
            </div>
            <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">Initialize connection</h3>
            <p className="mb-6 text-sm leading-relaxed text-white/55">
              Compose your message here. Generate it, then copy it or open Gmail with the details filled in.
            </p>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label htmlFor="terminal-contact-name" className="block text-xs text-white/60">NAME</label>
                <input id="terminal-contact-name" value={name} onChange={(e) => { setName(e.target.value); setGeneratedMessage(""); }} maxLength={100} placeholder="Your name" className="w-full rounded-lg border border-white/10 bg-black/40 px-3.5 py-3 text-sm text-white placeholder:text-white/25 outline-none transition-colors focus:border-emerald-400/60" />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="terminal-contact-email" className="block text-xs text-white/60">YOUR EMAIL</label>
                <input id="terminal-contact-email" type="email" value={senderEmail} onChange={(e) => { setSenderEmail(e.target.value); setGeneratedMessage(""); }} maxLength={320} placeholder="you@example.com" className="w-full rounded-lg border border-white/10 bg-black/40 px-3.5 py-3 text-sm text-white placeholder:text-white/25 outline-none transition-colors focus:border-emerald-400/60" />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="terminal-contact-message" className="block text-xs text-white/60">MESSAGE</label>
                <textarea id="terminal-contact-message" value={message} onChange={(e) => { setMessage(e.target.value); setGeneratedMessage(""); }} maxLength={5000} rows={4} placeholder="Type your message..." className="w-full resize-y rounded-lg border border-white/10 bg-black/40 px-3.5 py-3 text-sm text-white placeholder:text-white/25 outline-none transition-colors focus:border-emerald-400/60" />
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3 text-xs leading-relaxed">
                <div className="mb-1 text-white/40">$ recipient --show</div>
                <div className="break-all text-emerald-300">{contact.email}</div>
                <div className="mt-3 text-white/40">$ status</div>
                <div className="text-white/70">{generatedMessage ? "Message generated — ready to send" : "Waiting for input"}</div>
              </div>
              {generatedMessage && (
                <div className="max-h-36 overflow-auto whitespace-pre-wrap rounded-lg border border-white/10 bg-black/40 p-3 text-xs leading-relaxed text-white/70">
                  {generatedMessage}
                </div>
              )}
              <button type="button" onClick={generateMessage} className="flex w-full items-center justify-center gap-2 rounded-lg border border-emerald-400/40 bg-emerald-400/10 px-5 py-3 text-sm font-bold text-emerald-300 transition-all hover:bg-emerald-400/20 active:scale-[0.98]">
                <FileText className="h-4 w-4" /> Generate Message
              </button>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button type="button" onClick={copyPreparedMessage} disabled={!generatedMessage} className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-white transition-all hover:bg-white/[0.08] disabled:cursor-not-allowed disabled:opacity-40">
                  {messageCopied ? <Check className="h-4 w-4 text-emerald-300" /> : <Copy className="h-4 w-4" />}
                  {messageCopied ? "Copied" : "Copy Message"}
                </button>
                <button type="button" onClick={openGmail} disabled={!generatedMessage} className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40">
                  <Mail className="h-4 w-4" /> Open Gmail
                </button>
              </div>
              <p className="text-center text-[11px] text-white/40">Gmail opens in a new browser tab. You review and send the email yourself.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
