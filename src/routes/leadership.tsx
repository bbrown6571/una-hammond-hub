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
            {board.map((p, i) => {
              if (i === 0) {
                return (
                  <div
                    key={p.name}
                    className="lg:col-span-3 overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-deep text-primary-foreground grid md:grid-cols-[1fr_1.1fr]"
                  >
                    <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[420px] overflow-hidden">
                      <img
                        src={presidentImg}
                        alt={`${p.name}, ${p.role}`}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-10 md:p-14 flex flex-col justify-center">
                      <div className="text-xs uppercase tracking-[0.25em] text-white/70">{p.role}</div>
                      <div className="mt-3 font-display text-4xl md:text-5xl font-semibold leading-tight">
                        {p.name}
                      </div>
                      <p className="mt-5 text-white/85 max-w-md">
                        Leading the chapter this year — setting the agenda, championing our service
                        projects, and making sure every member has a voice.
                      </p>
                    </div>
                  </div>
                );
              }
              return (
                <div
                  key={p.name}
                  className="group rounded-3xl border border-border bg-card p-8 hover:border-primary hover:shadow-[var(--shadow-card)] transition-all"
                >
                  <div className="h-20 w-20 rounded-2xl bg-accent text-primary flex items-center justify-center font-display text-2xl font-semibold">
                    {initials(p.name)}
                  </div>
                  <div className="mt-6">
                    <div className="text-xs uppercase tracking-[0.2em] text-primary">{p.role}</div>
                    <div className="mt-2 font-display text-xl font-semibold text-foreground">
                      {p.name}
                    </div>
                  </div>
                </div>
              );
            })}
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
