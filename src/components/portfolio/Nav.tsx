import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#experience", label: "Experience" },
  { href: "#github", label: "GitHub" },
  { href: "https://www.linkedin.com/in/divagar-s-298342312", label: "LinkedIn", external: true },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`mx-auto max-w-6xl px-6 flex items-center justify-between rounded-2xl transition-all ${scrolled ? "glass" : ""}`}>
        <a href="#top" className="font-display font-semibold tracking-tight text-foreground py-3">
          <span className="text-gradient">Divagar.</span>
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground py-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noreferrer" : undefined}
              className="hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 my-2">
          <ThemeToggle />
          <a
            href="/Resume_Divagar.pdf"
            download
            className="hidden sm:inline-flex items-center text-sm rounded-full px-4 py-2 bg-foreground text-background hover:opacity-90 transition"
          >
            Resume
          </a>
          <button
            className="lg:hidden h-9 w-9 rounded-full glass flex items-center justify-center"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mx-auto max-w-6xl px-6 mt-2">
          <div className="glass rounded-2xl p-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="text-sm py-2 px-3 rounded-lg hover:bg-secondary/50 text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  );
}