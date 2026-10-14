import { useState, useEffect } from "react";
import { Brain, Database, Cloud, Code, TerminalSquare, Layout, Cpu, Activity } from "lucide-react";

const COMMAND = "npm list -g --depth=0";

type StackItem = { name: string; url?: string; Icon?: any; color?: string };

const stackItems: StackItem[] = [
  // Languages & Web
  { name: "Python", url: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "C++", url: "https://cdn.simpleicons.org/cplusplus/00599C" },
  { name: "JavaScript", url: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "SQL", Icon: Database, color: "#3b82f6" },
  { name: "HTML", url: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS", url: "https://cdn.simpleicons.org/css/663399" },

  // Frameworks & Databases
  { name: "Flask", url: "https://cdn.simpleicons.org/flask/white" },
  { name: "FastAPI", url: "https://cdn.simpleicons.org/fastapi/009688" },
  { name: "SQLite", url: "https://cdn.simpleicons.org/sqlite/003B57" },
  { name: "MySQL", url: "https://cdn.simpleicons.org/mysql/4479A1" },

  // Cybersecurity & Networking
  { name: "Linux", url: "https://cdn.simpleicons.org/linux/FCC624" },
  { name: "Nmap", Icon: TerminalSquare, color: "#22c55e" },
  { name: "Gobuster", Icon: TerminalSquare, color: "#14b8a6" },
  { name: "FFUF", Icon: TerminalSquare, color: "#06b6d4" },
  { name: "WhatWeb", Icon: TerminalSquare, color: "#8b5cf6" },
  { name: "Computer Networks", Icon: Activity, color: "#06b6d4" },
  { name: "Cryptography", Icon: Brain, color: "#a78bfa" },

  // Infrastructure & Tools
  { name: "Docker", url: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Git", url: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub", url: "https://cdn.simpleicons.org/github/white" },
  { name: "Nginx", url: "https://cdn.simpleicons.org/nginx/009639" },
  { name: "Vercel", url: "https://cdn.simpleicons.org/vercel/white" },
  { name: "Render", Icon: Cloud, color: "#8b5cf6" },

  // Core Computer Science
  { name: "Object-Oriented Programming", Icon: Code, color: "#f97316" },
  { name: "Data Structures & Algorithms", Icon: Cpu, color: "#eab308" },
  { name: "DBMS", Icon: Database, color: "#3b82f6" },
  { name: "Operating Systems", Icon: TerminalSquare, color: "#22c55e" },
];

// Split into 3 visually appealing rows
const row1 = stackItems.slice(0, 9);
const row2 = stackItems.slice(9, 18);
const row3 = stackItems.slice(18);

export function StackView() {
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

  return (
    <div className="pb-12 overflow-hidden flex flex-col h-full w-full justify-center">
      <div className="mb-10 lg:mb-14 font-mono text-sm sm:text-base text-muted-foreground shrink-0">
        <span className="text-primary font-bold">~/cheenu</span> ${" "}
        <span className="text-foreground">{typed}</span>
        <span className="caret" />
      </div>

      <div
        className="animate-in fade-in slide-in-from-bottom-4 duration-1000 flex-1 flex flex-col justify-center gap-8 sm:gap-12 lg:gap-14 pause-on-hover mask-edges fill-mode-both py-6"
        style={{ animationDelay: `${COMMAND.length * 50}ms`, animationFillMode: "both" }}
      >
        <MarqueeTrack items={row1} reverse={false} speed="45s" />
        <MarqueeTrack items={row2} reverse={true} speed="50s" />
        <MarqueeTrack items={row3} reverse={false} speed="40s" />
      </div>
    </div>
  );
}

function MarqueeTrack({
  items,
  reverse,
  speed,
}: {
  items: StackItem[];
  reverse: boolean;
  speed: string;
}) {
  // Duplicate 4 times so it can seamlessly translate by 25%
  const duplicated = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`flex w-max gap-5 sm:gap-8 lg:gap-10 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      style={{ animationDuration: speed }}
    >
      {duplicated.map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-4 sm:gap-5 rounded-2xl border border-border bg-panel px-6 py-4 sm:px-8 sm:py-5 lg:px-9 lg:py-6 transition-all hover:border-primary/60 hover:bg-panel-2 hover:shadow-xl hover:-translate-y-1 cursor-default"
        >
          {item.url ? (
            <img
              src={item.url}
              alt={item.name}
              loading="lazy"
              className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 object-contain"
            />
          ) : item.Icon ? (
            <item.Icon
              className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12"
              style={{ color: item.color }}
            />
          ) : (
            <Cpu className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-primary" />
          )}
          <span className="font-mono text-base sm:text-lg lg:text-xl font-bold text-foreground whitespace-nowrap">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
}
