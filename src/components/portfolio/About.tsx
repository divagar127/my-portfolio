import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap, Brain, Code2, Sparkles } from "lucide-react";

const stats = [
  { label: "CGPA", value: "7.75" },
  { label: "Research Papers", value: "2" },
  { label: "Major Projects", value: "3+" },
  { label: "Tech Stack", value: "20+" },
];

const pillars = [
  { icon: Brain, title: "Research-driven", text: "Exploring novel architectures in NLP and BCI." },
  { icon: Code2, title: "Engineering mindset", text: "Scalable systems with production-grade quality." },
  { icon: Sparkles, title: "Real-world AI", text: "Building intelligent products people actually use." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>An aspiring AI engineer building <span className="text-gradient">intelligent systems</span>.</>}
      subtitle="Focused on NLP, deep learning, scalable systems, and real-world AI applications — combining research innovation with practical engineering."
    >
      <div className="grid lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 glass rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 text-primary mb-4">
            <GraduationCap className="h-5 w-5" />
            <span className="text-xs font-mono uppercase tracking-widest">Education</span>
          </div>
          <h3 className="text-2xl font-semibold">B.Tech, Computer Science & Engineering (AI)</h3>
          <p className="mt-1 text-muted-foreground">Amrita Vishwa Vidyapeetham, Coimbatore</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
            <div><span className="text-muted-foreground">Duration · </span>2023 – 2027</div>
            <div><span className="text-muted-foreground">CGPA · </span><span className="text-gradient font-semibold">7.75 / 10</span></div>
          </div>

          <div className="mt-6 pt-6 border-t border-border/40">
            <h3 className="text-lg font-semibold">Higher Secondary Certificate</h3>
            <p className="mt-1 text-muted-foreground">Petit Seminaire Hr. Sec School, Puducherry</p>
            <div className="mt-3 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm">
              <div><span className="text-muted-foreground">Year · </span>2023</div>
              <div><span className="text-muted-foreground">Score · </span><span className="text-gradient font-semibold">83.5%</span></div>
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-xl border border-border/50 p-4 hover:border-primary/40 transition">
                <p.icon className="h-4 w-4 text-primary mb-2" />
                <div className="text-sm font-medium">{p.title}</div>
                <div className="text-xs text-muted-foreground mt-1">{p.text}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 gap-3"
        >
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-1 transition">
              <div className="text-3xl md:text-4xl font-semibold text-gradient">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-3 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}