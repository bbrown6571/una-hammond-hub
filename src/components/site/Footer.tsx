import { Link } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-10 w-10 rounded-full" />
            <div>
              <div className="font-display font-semibold text-primary-deep">UNA-USA</div>
              <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">Hammond Chapter</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            A safe place where all people are included — speak your thoughts and ideas without fear of judgement.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About the chapter</Link></li>
            <li><Link to="/leadership" className="hover:text-primary">Leadership board</Link></li>
            <li><Link to="/join" className="hover:text-primary">Get involved</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-3">Reach out</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://instagram.com/una_hahs" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Instagram className="h-4 w-4" /> @una_hahs
              </a>
            </li>
            <li>
              <a href="mailto:hahsunausa@gmail.com" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Mail className="h-4 w-4" /> hahsunausa@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} UNA-USA Hammond Chapter · Affiliated with the United Nations Association of the USA
      </div>
    </footer>
  );
}
