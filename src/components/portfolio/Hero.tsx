import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import profile from "@/assets/profile.jpg";

const roles = [
  "AI/ML Developer",
  "NLP Researcher",
  "Deep Learning Enthusiast",
  "Full Stack AI Builder",
  "Computer Vision Engineer",
];

function useTypewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = roles[i % roles.length];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del && text === current) {
        setTimeout(() => setDel(true), 1400);
        return;
      }
      if (del && text === "") {
        setDel(false);
        setI((v) => v + 1);
        return;
      }
      setText(del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);
  return text;
}

export function Hero() {
  const role = useTypewriter();
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl animate-float-orb" />
      <div className="absolute top-1/3 -right-32 h-[460px] w-[460px] rounded-full bg-accent/20 blur-3xl animate-float-orb" style={{ animationDelay: "-6s" }} />

      <div className="relative mx-auto max-w-6xl w-full px-6 grid lg:grid-cols-[1.4fr_1fr] gap-14 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_oklch(0.7_0.2_150)]" />
            Available for AI/ML opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight"
          >
            Divagar
            <br />
            <span className="text-gradient">Senthamil Selvan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground font-mono caret"
          >
            {role || "\u00A0"}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Motivated undergraduate at Amrita Vishwa Vidyapeetham with a strong interest in
            Artificial Intelligence and Deep Learning. Passionate about solving real-world
            problems using AI systems, scalable architectures, and modern research-driven approaches.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="/Resume_Divagar.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-primary-foreground hover-glow"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium hover-glow hover:text-primary"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
            <div className="flex items-center gap-1 ml-1">
              <a href="https://github.com/divagar127" target="_blank" rel="noreferrer" className="p-2.5 rounded-full glass hover-glow hover:text-primary">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/divagar-s-298342312" target="_blank" rel="noreferrer" className="p-2.5 rounded-full glass hover-glow hover:text-primary">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 rounded-full blur-3xl" style={{ background: "var(--gradient-primary)", opacity: 0.45 }} />
          <div className="relative h-72 w-72 md:h-80 md:w-80 rounded-full p-[2px]" style={{ background: "var(--gradient-primary)" }}>
            <div className="h-full w-full rounded-full overflow-hidden bg-background flex items-center justify-center">
              <img
                src={profile}
                alt="Divagar Senthamil Selvan"
                width={768}
                height={768}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-6 rounded-full border border-dashed border-primary/30"
          />
        </motion.div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/60 hover:text-foreground transition cursor-pointer hover:drop-shadow-[0_0_12px_var(--primary)]">
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}