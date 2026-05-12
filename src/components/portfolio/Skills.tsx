import { motion } from "framer-motion";
import { Section } from "./Section";

const groups = [
  {
    title: "Programming",
    items: ["C++", "Python", "DSA", "SQL"],
  },
  {
    title: "ML / DL Frameworks",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost"],
  },
  {
    title: "Deep Learning",
    items: ["Neural Networks & Transformers", "LLMs", "CV and NLP", "GANs"],
  },
  {
    title: "Big Data Analysis",
    items: ["Apache Spark", "HDFS", "Pandas", "NumPy"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Azure", "Docker", "Kubernetes"],
  },
  {
    title: "Tools & Technologies",
    items: ["Git and GitHub", "Linux", "RAG", "PostgreSQL", "Hugging Face"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>The toolkit behind the <span className="text-gradient">work</span>.</>}
      subtitle="Languages, frameworks, and platforms I use to ship research and production-grade AI systems."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g, idx) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="group glass rounded-2xl p-6 hover:border-primary/40 transition relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition" />
            <div className="text-2xl font-display font-semibold tracking-tight mb-4">{g.title}</div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="text-xs rounded-full px-3 py-1.5 bg-secondary/60 border border-border/40 hover:border-primary/50 hover:text-primary transition"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}