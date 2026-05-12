import { motion } from "framer-motion";
import { Section } from "./Section";
import { Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "NLP Telugu Multi-Turn Dialogue System",
    desc: "Domain-specialized prompting framework for Telugu multi-turn dialogue using Gemma 3 and Sarvam-1 on the IndicDialogue corpus.",
    highlights: ["99% semantic fidelity (BERTScore)", "10,000+ dialogue samples", "MuRIL + FAISS Vector DB"],
    stack: ["Python", "Transformers", "Gemma 3", "FAISS", "Hugging Face"],
    accent: "from-primary/30 to-accent/30",
    link: "https://github.com/divagar127/NLP_Telugu-Multi-Turn-Dialogue",
  },
  {
    title: "Bluesky Sentiment Analysis Pipeline",
    desc: "Scalable real-time sentiment analysis system using Kafka, Spark, HDFS, and RoBERTa with sub-2s latency.",
    highlights: ["Sub-2s latency", "Real-time visualization", "Grafana + Superset dashboards"],
    stack: ["Kafka", "Spark", "HDFS", "RoBERTa", "Docker", "Airflow"],
    accent: "from-accent/30 to-primary/30",
    link: "https://github.com/divagar127/Bluesky-sentiment-Analysis",
  },
  {
    title: "SQL Fitness Tracker",
    desc: "Calorie and nutrition tracking platform with AI-powered recommendations and analytics dashboards.",
    highlights: ["AI nutrition assistant", "Interactive analytics", "Optimized backend APIs"],
    stack: ["ReactJS", "Node.js", "PostgreSQL", "NLP"],
    accent: "from-primary/20 to-accent/20",
    link: "https://github.com/divagar127/AI-powered-Fitness-Tracker",
  },
  {
    title: "AI Skin Doctor Master",
    desc: "Multimodal AI healthcare platform integrating Computer Vision and LLM-based medical assistance for intelligent skin disease analysis and patient guidance.",
    highlights: [
      "ResNet18 + Attention U-Net hybrid diagnostics",
      "Gemini & Azure OpenAI medical chat",
      "Real-time WebSocket consultations",
      "Dockerized Azure deployment, A100 HPC training",
    ],
    stack: ["FastAPI", "ResNet18", "Attention U-Net", "Gemini", "Azure OpenAI", "Docker", "Slurm"],
    accent: "from-accent/30 to-primary/20",
    link: "https://github.com/divagar127/AI-skin-doctor-master",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title={<>Selected <span className="text-gradient">work</span>.</>}
      subtitle="A blend of research-grade NLP systems, big-data pipelines, and product-focused AI applications."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            className="group relative glass rounded-2xl p-7 flex flex-col hover:-translate-y-1 transition-all duration-300 hover:border-primary/40"
          >
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-100 transition pointer-events-none -z-10 blur-xl`} />
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-semibold leading-snug">{p.title}</h3>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition">
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              )}
            </div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            <ul className="mt-5 space-y-1.5 text-sm">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-muted-foreground">
                  <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-border/40 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span key={s} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-secondary/60 text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition"
              >
                <Github className="h-3.5 w-3.5" /> View on GitHub
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </Section>
  );
}