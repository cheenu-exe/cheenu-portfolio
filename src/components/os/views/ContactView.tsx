import { useState, useEffect, useRef } from "react";
import { Copy, Check, Linkedin } from "lucide-react";
import { toast } from "sonner";
import { contact, projects, experience, education, stackGroups } from "@/data/portfolio";

const COMMAND = "ssh cheenu.me -p 22";

export function ContactView() {
  const [copied, setCopied] = useState(false);
  const [typed, setTyped] = useState("");
  const [command, setCommand] = useState("");
  const terminalOutputRef = useRef<HTMLDivElement>(null);
  const [terminalLines, setTerminalLines] = useState<string[]>([
    "Welcome to the terminal. Type \"help\" to see available commands.",
    "",
    "© 2026 Cheenu Terminal. All rights reserved.",
    "",
    "$ help",
    "Available commands:",
    "- help: Show this help message",
    "- about: About me",
    "- skills: My technical skills",
    "- projects: List of my projects",
    "- contact: Contact information",
    "- experience: My work experience",
    "- education: My educational background",
    "- languages: Languages I speak",
    "- copy-email: Copy my email address",
    "- clear: Clear the terminal",
    "- reload: Reload the terminal",
    "",
  ]);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(COMMAND.slice(0, i));
      if (i >= COMMAND.length) clearInterval(id);
    }, 50);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const output = terminalOutputRef.current;
    if (output) output.scrollTop = output.scrollHeight;
  }, [terminalLines]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      toast.success("email copied to clipboard");
      setTimeout(() => setCopied(false), 1500);
    } catch {
      toast.error("Clipboard access failed. Check browser permissions.");
    }
  };

  const runCommand = (rawCommand: string) => {
    const value = rawCommand.trim().toLowerCase();
    if (!value) return;
    if (value === "clear") {
      setTerminalLines([]);
      setCommand("");
      return;
    }
    if (value === "reload") {
      setTerminalLines([
        "Welcome to the terminal. Type \"help\" to see available commands.",
        "",
        "© 2026 Cheenu Terminal. All rights reserved.",
        "",
      ]);
      setCommand("");
      return;
    }

    let output: string[];
    switch (value) {
      case "help":
        output = [
          "Available commands:",
          "- help: Show this help message",
          "- about: About me",
          "- skills: My technical skills",
          "- projects: List of my projects",
          "- contact: Contact information",
          "- experience: My work experience",
          "- education: My educational background",
          "- languages: Languages I speak",
          "- copy-email: Copy my email address",
          "- clear: Clear the terminal",
          "- reload: Reload the terminal",
        ];
        break;
      case "about":
        output = ["I'm Cheenu, a Computer Science & Business Systems student building software and exploring cybersecurity and AI security."];
        break;
      case "skills":
        output = stackGroups.flatMap((group) => [group.label + ":", ...group.items.map((item) => "  - " + item)]);
        break;
      case "projects":
        output = projects.map((project) => "- " + project.name + ": " + project.short);
        break;
      case "contact":
        output = ["Email: " + contact.email, "GitHub: " + contact.github, "LinkedIn: " + contact.linkedin, "Instagram: instagram.com/mystivox.lol"];
        break;
      case "experience":
        output = experience.flatMap((item) => [item.org + " — " + item.role, ...item.bullets.map((bullet) => "  - " + bullet), ""]);
        break;
      case "education":
        output = education.flatMap((item) => [item.institution, item.degree, ...item.bullets.map((bullet) => "  - " + bullet), ""]);
        break;
      case "languages":
        output = ["English", "Tamil"];
        break;
      case "copy-email":
        void copyEmail();
        output = ["Copying " + contact.email + " to clipboard..."];
        break;
      default:
        output = ["Command not found: " + value, 'Type "help" to see available commands.'];
    }
    setTerminalLines((lines) => [...lines, "$ " + rawCommand, ...output, ""]);
    setCommand("");
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
        <div className="min-w-0 flex-1 flex flex-col justify-between space-y-8">
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

        {/* RIGHT SIDE: Retro Terminal Contact Area */}
        <div className="w-full min-w-0 lg:flex-[1.08] lg:w-auto lg:max-w-[720px] shrink-0 overflow-hidden rounded-2xl border border-border/70 bg-panel/80 shadow-xl backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-border/70 bg-panel-2/80 px-5 py-3">
            <span className="font-mono text-xs sm:text-sm font-bold tracking-widest uppercase text-primary">CHEENU Terminal</span>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
            </div>
          </div>
          <div className="flex h-[540px] min-h-[420px] max-h-[72vh] flex-col bg-background/30 p-4 sm:p-5 font-mono text-xs sm:text-sm text-foreground/85">
            <div ref={terminalOutputRef} role="log" aria-live="polite" className="min-h-0 flex-1 overflow-y-auto overscroll-contain whitespace-pre-wrap break-words pr-1 leading-6 ">
              {terminalLines.map((line, index) => (
                <div key={index} className={line.startsWith("$ ") ? "font-bold" : ""}>{line || "\u00a0"}</div>
              ))}
            </div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                runCommand(command);
              }}
              className="mt-3 flex shrink-0 items-center gap-2 border-t border-border/70 pt-3 text-primary"
            >
              <span className="font-bold">$</span>
              <input
                aria-label="Terminal command"
                value={command}
                onChange={(event) => setCommand(event.target.value)}
                autoComplete="off"
                spellCheck={false}
                className="min-w-0 flex-1 border-0 bg-transparent py-1 text-foreground outline-none placeholder:text-muted-foreground/70 focus:ring-0"
                placeholder="type a command..."
              />
              <button type="submit" className="sr-only">Run command</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
