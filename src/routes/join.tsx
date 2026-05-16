import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Instagram, Mail, MapPin, Sparkles } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Get Involved — UNA-USA Hammond Chapter" },
      { name: "description", content: "Join the UNA-USA Hammond Chapter. Weekly meetings in Mrs. Mukhtar's room — every student welcome." },
      { property: "og:title", content: "Join the UNA-USA Hammond Chapter" },
      { property: "og:description", content: "Come to a weekly meeting in Mrs. Mukhtar's room — every student welcome." },
      { property: "og:url", content: "/join" },
    ],
    links: [{ rel: "canonical", href: "/join" }],
  }),
  component: JoinPage,
});

function JoinPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-border" style={{ background: "var(--gradient-hero)" }}>
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] [background-size:32px_32px]" />
          <div className="relative mx-auto max-w-5xl px-6 py-24 text-primary-foreground">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-3 py-1 text-xs uppercase tracking-[0.2em]">
              <Sparkles className="h-3 w-3" /> All students welcome
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-6xl font-semibold leading-[1.05]">
              Come build something <span className="italic font-light">that matters.</span>
            </h1>
            <p className="mt-6 text-lg text-white/85 max-w-2xl">
              No experience needed. Just curiosity, ideas, and a willingness to show up. Here's
              everything you need to get started with the Hammond Chapter.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-24 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="h-12 w-12 rounded-2xl bg-accent flex items-center justify-center text-primary">
              <Calendar className="h-6 w-6" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-semibold text-foreground">Weekly meetings</h2>
            <p className="mt-2 text-muted-foreground">We meet once a week to plan projects, discuss issues, and connect with professionals.</p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="h-12 w-12 rounded-2xl bg-accent flex items-center justify-center text-primary">
              <MapPin className="h-6 w-6" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-semibold text-foreground">Where to find us</h2>
            <p className="mt-2 text-muted-foreground">In Mrs. Mukhtar's room. Just walk in — we'll show you the ropes.</p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-24">
          <div className="rounded-[2rem] p-10 md:p-14 bg-secondary/50 border border-border">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">Reach out anytime</h2>
            <p className="mt-3 text-muted-foreground max-w-xl">
              Questions, ideas, or want to know when the next meeting is? Message us — we
              respond.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <a
                href="https://instagram.com/una_hahs"
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl bg-card border border-border p-6 flex items-center gap-4 hover:border-primary transition-colors"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Instagram className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Instagram</div>
                  <div className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">@una_hahs</div>
                </div>
              </a>
              <a
                href="mailto:hahsunausa@gmail.com"
                className="group rounded-2xl bg-card border border-border p-6 flex items-center gap-4 hover:border-primary transition-colors"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</div>
                  <div className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">hahsunausa@gmail.com</div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
