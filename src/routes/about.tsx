import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe2 } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — UNA-USA Hammond Chapter" },
      { name: "description", content: "Learn about the UNA-USA Hammond Chapter — our mission, our work, and our connection to the United Nations Association of the USA." },
      { property: "og:title", content: "About the Hammond Chapter" },
      { property: "og:description", content: "Our mission, our work, and our connection to UNA-USA." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary/40 border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-medium">About the chapter</div>
            <h1 className="mt-4 font-display text-5xl md:text-6xl font-semibold text-foreground leading-[1.05]">
              Bringing the United Nations <span className="text-primary italic font-light">into our school.</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-3xl leading-relaxed">
              The UNA-USA Hammond Chapter exists to get students more involved with the United
              Nations and assist large-scale issues at the local level. We plan service projects,
              host conversations with professionals from across America, and explore the UN's
              Sustainable Development Goals together.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-24 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-3xl font-semibold text-foreground">Our mission</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Get students involved with the work of the United Nations and tackle large-scale
              issues right here at the local level. We believe young people have a real role in
              global progress — and that starts with showing up in our own community.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold text-foreground">Our space</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              This is a safe place where all people are included. Members should feel free to
              share their thoughts and ideas without fear of judgement. Different perspectives
              are how we get to better answers.
            </p>
          </div>
        </section>

        <section className="bg-secondary/40 border-y border-border">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <div className="flex items-start gap-6">
              <div className="shrink-0 h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Globe2 className="h-7 w-7" />
              </div>
              <div>
                <h2 className="font-display text-3xl font-semibold text-foreground">Our parent organization</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
                  <span className="font-semibold text-foreground">UNA-USA</span> is a nonprofit
                  grassroots organization dedicated to educating, inspiring, and mobilizing
                  Americans to support the principles and work of the United Nations. The
                  Hammond Chapter is part of that national network — bringing UNA-USA's mission
                  into our school.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-24">
          <h2 className="font-display text-3xl font-semibold text-foreground">When we meet</h2>
          <div className="mt-6 rounded-3xl border border-border p-8 md:p-10 bg-card flex flex-wrap items-center justify-between gap-6">
            <div>
              <div className="font-display text-2xl text-foreground">Once a week</div>
              <div className="text-muted-foreground mt-1">In Mrs. Mukhtar's room</div>
            </div>
            <Link to="/join" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-deep transition-colors">
              How to join <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
