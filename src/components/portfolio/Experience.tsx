import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Section } from "./Section";
import { Briefcase, Award, Download, Eye, X } from "lucide-react";

export function Experience() {
  const [open, setOpen] = useState(false);
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>Where I've <span className="text-gradient">contributed</span>.</>}
    >
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 items-start">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass rounded-2xl p-8 md:p-10"
      >
        <div className="flex items-start gap-5">
          <div className="h-12 w-12 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
            <Briefcase className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold">Research Intern</h3>
              <span className="text-xs font-mono text-muted-foreground">Dec 2025 – Mar 2026</span>
            </div>
            <div className="text-sm text-primary mt-1">Amrita Vishwa Vidyapeetham</div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Worked on EEG-based Brain Computer Interface applications including P300 speller and
              motor imagery tasks. Gained hands-on experience in EEG signal acquisition using
              Emotiv Epoch X and contributed to AI-driven BCI research.
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {["EEG", "BCI", "P300", "Motor Imagery", "Emotiv Epoch X"].map((t) => (
                <span key={t} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-secondary/60 text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass rounded-2xl p-7 group"
      >
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
            <Award className="h-4 w-4 text-primary-foreground" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Internship Certificate</div>
            <div className="font-semibold">Amrita Vishwa Vidyapeetham</div>
          </div>
        </div>

        <div className="relative mt-5 aspect-[4/3] rounded-xl overflow-hidden border border-border/40 bg-secondary/40 flex items-center justify-center">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="relative text-center px-6">
            <Award className="h-10 w-10 text-primary mx-auto" />
            <div className="mt-3 font-display font-semibold">Certificate of Internship</div>
            <div className="mt-1 text-xs text-muted-foreground">Awarded to Divagar Senthamil Selvan</div>
            <div className="mt-1 text-[10px] font-mono text-muted-foreground">EEG • BCI Research • 2025–2026</div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-primary-foreground"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Eye className="h-3.5 w-3.5" /> Preview
          </button>
          <a
            href="/certificate.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium glass hover:text-primary transition"
          >
            <Download className="h-3.5 w-3.5" /> Download
          </a>
        </div>
      </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-2xl p-6 max-w-2xl w-full relative"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 h-8 w-8 rounded-full glass flex items-center justify-center hover:text-primary"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-border/40 relative bg-secondary/40 flex items-center justify-center">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="relative text-center px-6">
                  <Award className="h-14 w-14 text-primary mx-auto" />
                  <div className="mt-4 font-display text-2xl font-semibold">Certificate of Internship</div>
                  <div className="mt-2 text-sm text-muted-foreground">Awarded to</div>
                  <div className="mt-1 text-lg font-semibold text-gradient">Divagar Senthamil Selvan</div>
                  <div className="mt-3 text-xs text-muted-foreground max-w-md mx-auto">
                    For successful completion of research work on EEG-based Brain Computer Interface
                    at Amrita Vishwa Vidyapeetham, Dec 2025 – Mar 2026.
                  </div>
                </div>
              </div>
              <div className="mt-5 flex justify-end">
                <a
                  href="/certificate.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Download className="h-3.5 w-3.5" /> Download Certificate
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}