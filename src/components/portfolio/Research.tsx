import { motion } from "framer-motion";
import { Section } from "./Section";
import { FileText, Award } from "lucide-react";

const papers = [
  {
    venue: "DravidianLangTech 2026",
    status: "Accepted",
    title: "LIMP: Linguistically-Informed Multi-Strategy Prompting for Telugu Multi-Turn Dialogue Generation",
    bullets: [
      "Engineered Rasa-Guided Framework: Developed a domain-specialized prompting architecture for Telugu multi-turn dialogue, integrating classical Indian aesthetic theory and Chain-of-Thought scaffolds to encode cultural nuances.",
      "Built High-Fidelity ML Pipeline: Constructed an end-to-end system utilizing Gemma 3, MuRIL embeddings, and FAISS Vector DB to achieve 99% semantic fidelity across 10,000+ dialogue samples.",
      "Validated Model Performance: Produced an ACL-format paper identifying \"semantic–lexical dissociation,\" proving that small models (1B-2B) can outperform larger, non-specialized systems in low-resource language tasks.",
    ],
    tags: ["NLP", "LLM Prompting", "Low-Resource Languages"],
  },
  {
    venue: "IEEE RECCAP 2026",
    status: "Accepted",
    title: "Multi-Level Domain Adaptation for Subject-Independent ERP Classification Using Domain Adversarial Neural Networks",
    desc: "Real-world ERP-based BCIs often require lengthy calibration due to inter-subject variability. To address this, we propose a Multi-Level Domain Adversarial Neural Network (ML-DANN) for zero-calibration, cross-subject classification.",
    bullets: [
      "Challenge: Overcomes inter-subject variability in ERP-based BCIs by eliminating subject-specific calibration.",
      "Methodology: Uses ML-DANN with CNN-LSTM-Attention architectures, GRL for domain invariance, and Supervised Contrastive Learning for class-wise clustering.",
      "Results: Outperforms Vanilla DANN and Deep CORAL on the GIB-UVA dataset, achieving a 0.8294 mean accuracy.",
    ],
    tags: ["BCI", "Domain Adaptation", "Deep Learning"],
  },
];

export function Research() {
  return (
    <Section
      id="research"
      eyebrow="Research & Publications"
      title={<>Pushing the boundary, <span className="text-gradient">paper by paper</span>.</>}
      subtitle="Peer-reviewed work in low-resource NLP and brain–computer interfaces."
    >
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
        <div className="space-y-10">
          {papers.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative md:grid md:grid-cols-2 md:gap-12 items-start"
            >
              <div className="pl-12 md:pl-0 md:text-right md:pr-12">
                <div className="absolute left-4 md:left-1/2 top-2 h-3 w-3 rounded-full bg-primary -translate-x-1/2 ring-4 ring-background glow" />
                <div className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary`}>
                  <Award className="h-3.5 w-3.5" /> {p.venue}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">Status: {p.status}</div>
              </div>
              <div className="pl-12 md:pl-12 mt-3 md:mt-0">
                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <FileText className="h-4 w-4" />
                    <span className="text-xs uppercase tracking-widest">Paper</span>
                  </div>
                  <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                  {p.desc && <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>}
                  {p.bullets && (
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                      {p.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-secondary/60 text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}