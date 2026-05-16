import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function Header() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/leadership", label: "Leadership" },
    { to: "/join", label: "Get Involved" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="UNA-USA Hammond Chapter logo" className="h-10 w-10 rounded-full" />
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold text-primary-deep">UNA-USA</div>
            <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">Hammond Chapter</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/join"
          className="hidden md:inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-card)] hover:bg-primary-deep transition-colors"
        >
          Join the chapter
        </Link>
      </div>
    </header>
  );
}
