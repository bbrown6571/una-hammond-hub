import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import presidentImg from "@/assets/president.jpg";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership — UNA-USA Hammond Chapter" },
      { name: "description", content: "Meet the student leaders of the UNA-USA Hammond Chapter." },
      { property: "og:title", content: "Leadership Board" },
      { property: "og:description", content: "The student leaders of the UNA-USA Hammond Chapter." },
      { property: "og:url", content: "/leadership" },
    ],
    links: [{ rel: "canonical", href: "/leadership" }],
  }),
  component: LeadershipPage,
});

const board = [
  { name: "Saanvi Venumbaka", role: "President" },
  { name: "Malaika Hijazi", role: "Vice President of Advocacy" },
  { name: "Sophia James", role: "Vice President of Membership" },
  { name: "Mira Higdon", role: "Secretary" },
  { name: "Eislyn Adewale", role: "Treasurer" },
];

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("");
}

function LeadershipPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary/40 border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-medium">Leadership</div>
            <h1 className="mt-4 font-display text-5xl md:text-6xl font-semibold text-foreground leading-[1.05]">
              The students <span className="text-primary italic font-light">leading the way.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Meet the board running the UNA-USA Hammond Chapter this year.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {board.map((p, i) => (
              <div
                key={p.name}
                className={`group rounded-3xl border border-border bg-card p-8 hover:border-primary hover:shadow-[var(--shadow-card)] transition-all ${
                  i === 0 ? "lg:col-span-3 lg:flex lg:items-center lg:gap-10 lg:p-12 bg-gradient-to-br from-primary to-primary-deep border-transparent text-primary-foreground hover:border-transparent" : ""
                }`}
              >
                <div
                  className={`h-20 w-20 rounded-2xl flex items-center justify-center font-display text-2xl font-semibold ${
                    i === 0 ? "bg-white/15 text-white lg:h-28 lg:w-28 lg:text-4xl" : "bg-accent text-primary"
                  }`}
                >
                  {initials(p.name)}
                </div>
                <div className={i === 0 ? "mt-6 lg:mt-0" : "mt-6"}>
                  <div className={`text-xs uppercase tracking-[0.2em] ${i === 0 ? "text-white/70" : "text-primary"}`}>{p.role}</div>
                  <div className={`mt-2 font-display font-semibold ${i === 0 ? "text-3xl lg:text-4xl" : "text-xl text-foreground"}`}>
                    {p.name}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-border p-8 md:p-10 bg-secondary/40">
            <h2 className="font-display text-2xl font-semibold text-foreground">Get in touch with the board</h2>
            <p className="mt-2 text-muted-foreground">The fastest way to reach us is on Instagram or email.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://instagram.com/una_hahs" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-deep transition-colors">
                @una_hahs
              </a>
              <a href="mailto:hahsunausa@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors">
                hahsunausa@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
