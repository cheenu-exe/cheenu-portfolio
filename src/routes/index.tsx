import { createFileRoute } from "@tanstack/react-router";
import { OsShell } from "@/components/os/OsShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "~/cheenu | Cheenu Portfolio" },
      {
        name: "description",
        content:
          "Cheenu Portfolio — AI Engineer & B.Tech AI/DS student. Agentic systems, LLM orchestration, and production AI shipped from Coimbatore, India.",
      },
      { property: "og:title", content: "~/cheenu | Cheenu S Portfolio" },
      {
        property: "og:description",
        content: "Cheenu S Portfolio: Agentic systems, LLM orchestration, and production AI.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <OsShell />;
}
