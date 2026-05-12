import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 mt-10">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-5">
        <div>
          <div className="font-display font-semibold text-gradient text-lg">Divagar.</div>
          <p className="text-xs text-muted-foreground mt-1">Built with passion for AI & innovation.</p>
        </div>
        <div className="flex items-center gap-2">
          <a href="https://github.com/divagar127" target="_blank" rel="noreferrer" className="p-2.5 rounded-full glass hover:text-primary transition">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/divagar-s-298342312" target="_blank" rel="noreferrer" className="p-2.5 rounded-full glass hover:text-primary transition">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="#contact" className="p-2.5 rounded-full glass hover:text-primary transition">
            <Mail className="h-4 w-4" />
          </a>
        </div>
        <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Divagar Senthamil Selvan</div>
      </div>
    </footer>
  );
}