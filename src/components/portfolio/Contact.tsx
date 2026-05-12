import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "./Section";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "div27122005@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 94876 71796" },
  { icon: MapPin, label: "Location", value: "Puducherry, India" },
  { icon: Github, label: "GitHub", value: "GitHub Profile", href: "https://github.com/divagar127" },
  { icon: Linkedin, label: "LinkedIn", value: "Divagar S", href: "https://www.linkedin.com/in/divagar-s-298342312" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build something <span className="text-gradient">intelligent</span>.</>}
      subtitle="Open to AI/ML internships, research collaborations, and full-time opportunities."
    >
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
        <div className="glass rounded-2xl p-7">
          <div className="space-y-4">
            {contacts.map((c) => {
              const Inner = (
                <div className="flex items-center gap-4 group">
                  <div className="h-10 w-10 rounded-xl glass flex items-center justify-center text-primary group-hover:scale-110 transition">
                    <c.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest">{c.label}</div>
                    <div className="text-sm">{c.value}</div>
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {Inner}
                </a>
              ) : (
                <div key={c.label}>{Inner}</div>
              );
            })}
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={async (e) => {
            e.preventDefault();
            setError(null);
            setSending(true);
            const formEl = e.currentTarget;
            const formData = new FormData(formEl);
            formData.append("access_key", "37d0027f-2bb7-4867-b79e-dab39a8ba257");
            formData.append("from_name", "Portfolio Contact Form");
            formData.append("subject", (formData.get("subject") as string) || "New message from portfolio");
            try {
              const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
              });
              const data = await res.json();
              if (data.success) {
                setSent(true);
                formEl.reset();
                setTimeout(() => setSent(false), 4000);
              } else {
                setError(data.message || "Something went wrong. Please try again.");
              }
            } catch {
              setError("Network error. Please try again.");
            } finally {
              setSending(false);
            }
          }}
          className="glass rounded-2xl p-7 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="Name" name="name" placeholder="Your name" />
            <Input label="Email" name="email" type="email" placeholder="you@email.com" />
          </div>
          <Input label="Subject" name="subject" placeholder="What's this about?" />
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea
              required
              rows={5}
              name="message"
              className="mt-2 w-full rounded-xl bg-secondary/40 border border-border/40 px-4 py-3 text-sm focus:outline-none focus:border-primary/60 transition"
              placeholder="Tell me a little about it..."
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-primary-foreground disabled:opacity-60"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
          >
            <Send className="h-4 w-4" /> {sending ? "Sending..." : sent ? "Message sent ✓" : "Send message"}
          </button>
          {error && <p className="text-sm text-destructive">{error}</p>}
        </motion.form>
      </div>
    </Section>
  );
}

function Input({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        required
        {...props}
        className="mt-2 w-full rounded-xl bg-secondary/40 border border-border/40 px-4 py-3 text-sm focus:outline-none focus:border-primary/60 transition"
      />
    </div>
  );
}