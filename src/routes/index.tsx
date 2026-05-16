import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe2, HeartHandshake, Sparkles, Users, Calendar, Instagram, Mail } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UNA-USA Hammond Chapter — Students for the United Nations" },
      { name: "description", content: "The UNA-USA Hammond Chapter empowers students to tackle global issues at the local level through service, advocacy, and the UN Sustainable Development Goals." },
      { property: "og:title", content: "UNA-USA Hammond Chapter" },
      { property: "og:description", content: "Students for the United Nations — service projects, advocacy, and global goals at the local level." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 -z-10"
            style={{ background: "var(--gradient-hero)" }}
          />
          <div className="absolute inset-0 -z-10 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] [background-size:32px_32px]" />

          <div className="mx-auto max-w-7xl px-6 pt-20 pb-28 md:pt-28 md:pb-36 grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            <div className="text-primary-foreground">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-3 py-1 text-xs uppercase tracking-[0.2em]">
                <Sparkles className="h-3 w-3" /> Hammond High School Chapter
              </div>
              <h1 className="mt-6 font-display text-5xl md:text-7xl font-semibold leading-[1.02]">
                Global goals,<br />
                <span className="italic font-light">acted on locally.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/85">
                We're students getting involved with the work of the United Nations — planning service
                projects, connecting with professionals across America, and turning the UN Sustainable
                Development Goals into action right here at home.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/join"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-primary-deep shadow-[var(--shadow-elegant)] hover:bg-white/95 transition-all"
                >
                  Join the chapter
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                >
                  Learn what we do
                </Link>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-white/10 blur-3xl" />
              <div className="relative aspect-square w-full max-w-sm rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-10 flex items-center justify-center">
                <img src={logo} alt="UNA-USA Hammond Chapter logo" className="w-full drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* MISSION STRIP */}
        <section className="mx-auto max-w-7xl px-6 -mt-16 relative z-10">
          <div className="rounded-3xl bg-card border border-border shadow-[var(--shadow-elegant)] p-8 md:p-12 grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe2, title: "Global perspective", text: "Discuss real-world issues and the UN Sustainable Development Goals with peers and professionals." },
              { icon: HeartHandshake, title: "Local impact", text: "Plan and lead service projects that move our community forward." },
              { icon: Users, title: "Inclusive space", text: "A safe place where every voice matters — share ideas without fear of judgement." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <div className="shrink-0 h-12 w-12 rounded-2xl bg-accent flex items-center justify-center text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="mx-auto max-w-7xl px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-medium">Who we are</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight">
              A student chapter of <span className="text-primary">UNA-USA</span>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              The United Nations Association of the USA is a nonprofit grassroots organization
              dedicated to educating, inspiring, and mobilizing Americans to support the
              principles and work of the United Nations.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The Hammond Chapter brings that mission into our school — getting students
              more involved with the UN and helping tackle large-scale issues at the local level.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              More about the chapter <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-deep p-6 text-primary-foreground aspect-square flex flex-col justify-between">
              <Calendar className="h-7 w-7" />
              <div>
                <div className="font-display text-3xl font-semibold">Weekly</div>
                <div className="text-sm text-white/80 mt-1">Meetings in Mrs. Mukhtar's room</div>
              </div>
            </div>
            <div className="rounded-2xl bg-accent p-6 aspect-square flex flex-col justify-between mt-8">
              <HeartHandshake className="h-7 w-7 text-primary" />
              <div>
                <div className="font-display text-3xl font-semibold text-foreground">Service</div>
                <div className="text-sm text-muted-foreground mt-1">Large-scale community projects</div>
              </div>
            </div>
            <div className="rounded-2xl bg-secondary p-6 aspect-square flex flex-col justify-between -mt-4">
              <Globe2 className="h-7 w-7 text-primary" />
              <div>
                <div className="font-display text-3xl font-semibold text-foreground">17 SDGs</div>
                <div className="text-sm text-muted-foreground mt-1">UN Sustainable Development Goals</div>
              </div>
            </div>
            <div className="rounded-2xl border border-border p-6 aspect-square flex flex-col justify-between mt-4">
              <Users className="h-7 w-7 text-primary" />
              <div>
                <div className="font-display text-3xl font-semibold text-foreground">All in</div>
                <div className="text-sm text-muted-foreground mt-1">Every student welcome</div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="bg-secondary/50 py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.25em] text-primary font-medium">What we do</div>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight">
                Service, conversation, and a seat at the table.
              </h2>
            </div>
            <div className="mt-14 grid md:grid-cols-3 gap-6">
              {[
                { n: "01", title: "Plan service projects", text: "Large-scale community service tied to real Sustainable Development Goals." },
                { n: "02", title: "Connect with professionals", text: "Conversations with leaders across America working on the issues we care about." },
                { n: "03", title: "Advocate and educate", text: "Bring UN principles into our school and raise awareness on global issues." },
              ].map((c) => (
                <div key={c.n} className="group rounded-3xl bg-card p-8 border border-border hover:border-primary hover:shadow-[var(--shadow-card)] transition-all">
                  <div className="font-display text-5xl text-primary/30 group-hover:text-primary transition-colors">{c.n}</div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-6 py-28">
          <div className="relative overflow-hidden rounded-[2rem] p-10 md:p-16" style={{ background: "var(--gradient-hero)" }}>
            <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-10 items-end text-primary-foreground">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                  Ready to get involved?
                </h2>
                <p className="mt-4 text-white/85 max-w-lg">
                  Come to a weekly meeting, message us, or just say hi. New voices and new ideas
                  are exactly what we're here for.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a href="https://instagram.com/una_hahs" target="_blank" rel="noreferrer" className="inline-flex items-center justify-between gap-3 rounded-full bg-white/10 backdrop-blur border border-white/20 px-6 py-3.5 hover:bg-white/20 transition-colors">
                  <span className="inline-flex items-center gap-2"><Instagram className="h-4 w-4" />@una_hahs</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="mailto:hahsunausa@gmail.com" className="inline-flex items-center justify-between gap-3 rounded-full bg-white px-6 py-3.5 text-primary-deep hover:bg-white/95 transition-colors">
                  <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" />hahsunausa@gmail.com</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
