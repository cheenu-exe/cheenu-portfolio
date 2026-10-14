import { useState, useEffect } from "react";
import { Copy, Check, Linkedin } from "lucide-react";
import { toast } from "sonner";
import { contact } from "@/data/portfolio";

const COMMAND = "ssh cheenu.me -p 22";

export function ContactView() {
  const [copied, setCopied] = useState(false);
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

        {/* RIGHT SIDE: Simple Email Contact Card */}
        <div className="w-full lg:w-[480px] xl:w-[540px] shrink-0 bg-panel/90 backdrop-blur-xl border border-border shadow-2xl shadow-black/40 rounded-2xl p-7 sm:p-9 flex flex-col justify-center">
          <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-5 font-bold">
            // DIRECT CONTACT
          </div>
          <div className="flex items-center justify-center h-16 w-16 rounded-2xl border border-border bg-panel-2 mb-6">
            <img
              src="https://cdn.simpleicons.org/gmail/EA4335"
              alt="Gmail"
              className="h-8 w-8"
            />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Keep it simple.
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-7">
            Have an opportunity, project idea, or question? Copy my email address and reach out whenever you're ready.
          </p>
          <div className="rounded-xl border border-border bg-background/70 p-4 mb-4">
            <div className="font-mono text-xs text-muted-foreground mb-2">EMAIL ADDRESS</div>
            <div className="font-mono text-sm sm:text-base text-foreground font-semibold break-all">
              {contact.email}
            </div>
          </div>
          <button
            type="button"
            onClick={copyEmail}
            className="w-full flex items-center justify-center gap-2.5 rounded-xl bg-primary text-primary-foreground px-6 py-4 text-base font-bold transition-all hover:bg-primary/90 shadow-lg shadow-primary/25 cursor-pointer active:scale-95"
          >
            {copied ? (
              <Check className="h-5 w-5" />
            ) : (
              <Copy className="h-5 w-5" />
            )}
            {copied ? "Email Copied" : "Copy Email Address"}
          </button>
          <p className="mt-4 text-center text-xs text-muted-foreground font-mono">
            No forms. No waiting. Just reach out.
          </p>
        </div>
      </div>
    </div>
  );
}
