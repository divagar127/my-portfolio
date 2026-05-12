import { motion } from "framer-motion";
import { Section } from "./Section";
import { Github, GitFork, Star, Code2, Activity } from "lucide-react";

const stats = [
  { icon: Code2, label: "Repositories", value: "30+" },
  { icon: Star, label: "Stars", value: "Growing" },
  { icon: GitFork, label: "Contributions", value: "Daily" },
  { icon: Activity, label: "Active Streak", value: "365d" },
];

const langs = [
  { name: "Python", pct: 52, color: "oklch(0.7 0.18 250)" },
  { name: "TypeScript", pct: 22, color: "oklch(0.7 0.16 220)" },
  { name: "JavaScript", pct: 14, color: "oklch(0.8 0.16 90)" },
  { name: "C/C++", pct: 8, color: "oklch(0.65 0.18 25)" },
  { name: "SQL", pct: 4, color: "oklch(0.65 0.2 295)" },
];

export function GitHubSection() {
  return (
    <Section
      id="github"
      eyebrow="GitHub"
      title={<>Open source <span className="text-gradient">activity</span>.</>}
      subtitle="A snapshot of my code contributions, languages, and active projects."
    >
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-7"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                <Github className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-semibold">@divagar127</div>
                <div className="text-xs text-muted-foreground">github.com/divagar127</div>
              </div>
            </div>
            <a
              href="https://github.com/divagar127"
              target="_blank"
              rel="noreferrer"
              className="text-xs rounded-full px-3 py-1.5 glass hover:text-primary transition"
            >
              Follow
            </a>
          </div>

          <div className="mt-6">
            <img
              src="https://ghchart.rshah.org/6366f1/divagar127"
              alt="GitHub contribution graph for divagar127"
              loading="lazy"
              className="w-full rounded-lg opacity-90"
            />
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl p-3 bg-secondary/40 border border-border/30">
                <s.icon className="h-3.5 w-3.5 text-primary" />
                <div className="mt-2 text-lg font-semibold">{s.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-2xl p-7"
        >
          <h3 className="font-semibold">Top Languages</h3>
          <p className="text-xs text-muted-foreground mt-1">Distribution across pinned repositories.</p>
          <div className="mt-5 space-y-4">
            {langs.map((l, i) => (
              <div key={l.name}>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono">{l.name}</span>
                  <span className="text-muted-foreground">{l.pct}%</span>
                </div>
                <div className="mt-1.5 h-1.5 w-full rounded-full bg-secondary/60 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${l.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.1 + i * 0.05 }}
                    className="h-full rounded-full"
                    style={{ background: l.color }}
                  />
                </div>
              </div>
            ))}
          </div>
          <a
            href="https://github.com/divagar127"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-xs text-primary hover:underline"
          >
            <Github className="h-3.5 w-3.5" /> View full profile →
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
