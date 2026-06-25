import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Sparkles, TrendingUp, Layers, Target } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sfiner — Growth Partner para marcas ecommerce" },
      { name: "description", content: "Sfiner es el growth partner que ayuda a marcas ecommerce a escalar sus ventas y construir una imagen de marca consolidada." },
      { property: "og:title", content: "Sfiner — Growth Partner para marcas ecommerce" },
      { property: "og:description", content: "Escalamos marcas ecommerce y consolidamos su imagen de marca." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#top" className="font-display text-2xl font-semibold tracking-tight">
          <span className="text-gradient-brand">sfiner</span>
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#servicios" className="transition-colors hover:text-foreground">Servicios</a>
          <a href="#metodo" className="transition-colors hover:text-foreground">Método</a>
          <a href="#contacto" className="transition-colors hover:text-foreground">Contacto</a>
        </nav>
        <a
          href="#contacto"
          className="hidden items-center gap-1.5 rounded-full bg-gradient-brand px-4 py-2 text-sm font-medium text-white shadow-soft transition-transform hover:scale-[1.02] md:inline-flex"
        >
          Hablemos <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-32 h-[480px] w-[480px] rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-brand)" }} />
          <div className="absolute top-20 -right-32 h-[420px] w-[420px] rounded-full opacity-20 blur-3xl" style={{ background: "var(--orange-brand)" }} />
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Growth Partner para ecommerce
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
              Escalamos tu marca <br />
              <span className="text-gradient-brand">con estrategia y alma.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
              Somos el equipo que acompaña a marcas ecommerce a multiplicar sus ventas
              y construir una imagen de marca consolidada, premium y reconocible.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-white shadow-elegant transition-transform hover:scale-[1.02]"
              >
                Empezar a crecer <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Ver servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
          {[
            { k: "+3.4x", v: "ROAS medio" },
            { k: "+180%", v: "crecimiento anual" },
            { k: "25+", v: "marcas escaladas" },
            { k: "100%", v: "enfoque DTC" },
          ].map((s) => (
            <div key={s.v} className="bg-card p-8 text-center">
              <div className="font-display text-3xl font-semibold text-gradient-brand md:text-4xl">{s.k}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Servicios</span>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Todo lo que tu marca necesita para <span className="text-gradient-brand">escalar de verdad.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: TrendingUp,
              title: "Performance Marketing",
              desc: "Campañas en Meta, TikTok y Google diseñadas para escalar con rentabilidad real, no vanity metrics.",
            },
            {
              icon: Layers,
              title: "Branding & Identidad",
              desc: "Construimos la imagen consolidada que diferencia tu marca y la posiciona como referente de su categoría.",
            },
            {
              icon: Target,
              title: "CRO & Estrategia",
              desc: "Optimizamos tu tienda, embudos y comunicación para convertir cada visita en una oportunidad de marca.",
            },
          ].map((s) => (
            <article key={s.title} className="group rounded-3xl border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Método */}
      <section id="metodo" className="mx-auto max-w-6xl px-6 pb-28">
        <div className="rounded-[2rem] border border-border bg-card p-10 shadow-soft md:p-16">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Nuestro método</span>
              <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
                No somos una agencia. <span className="text-gradient-brand">Somos tu partner.</span>
              </h2>
              <p className="mt-6 text-muted-foreground">
                Nos integramos en tu equipo, entendemos tu marca y tomamos decisiones contigo.
                Cada cliente recibe foco, estrategia y ejecución como si fuera nuestro propio negocio.
              </p>
            </div>
            <ol className="space-y-6">
              {[
                { n: "01", t: "Diagnóstico", d: "Analizamos tu marca, datos y posicionamiento para detectar oportunidades reales." },
                { n: "02", t: "Estrategia", d: "Diseñamos un plan a medida con objetivos claros y un roadmap accionable." },
                { n: "03", t: "Ejecución", d: "Activamos campañas, branding y CRO con un equipo dedicado a tu cuenta." },
                { n: "04", t: "Escala", d: "Iteramos, optimizamos y escalamos lo que funciona, mes a mes." },
              ].map((step) => (
                <li key={step.n} className="flex gap-5 border-b border-border pb-5 last:border-0">
                  <span className="font-display text-2xl text-gradient-brand">{step.n}</span>
                  <div>
                    <h4 className="font-semibold">{step.t}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-10 text-center shadow-elegant md:p-20">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-40" style={{ background: "radial-gradient(circle at 50% 0%, color-mix(in oklab, var(--purple-brand) 30%, transparent), transparent 60%)" }} />
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Contacto</span>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight md:text-6xl">
            ¿Listo para <span className="text-gradient-brand">escalar tu marca</span>?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-muted-foreground">
            Cuéntanos sobre tu proyecto. Te responderemos en menos de 24h con una primera lectura de tu marca.
          </p>

          <a
            href="mailto:marcos.marbla@sfiner.com"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-brand px-7 py-4 text-base font-medium text-white shadow-elegant transition-transform hover:scale-[1.02]"
          >
            <Mail className="h-4 w-4" />
            marcos.marbla@sfiner.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
          <div className="font-display text-lg font-semibold">
            <span className="text-gradient-brand">sfiner</span>
          </div>
          <p>© {new Date().getFullYear()} Sfiner. Growth partner para marcas ecommerce.</p>
          <a href="mailto:marcos.marbla@sfiner.com" className="transition-colors hover:text-foreground">
            marcos.marbla@sfiner.com
          </a>
        </div>
      </footer>
    </div>
  );
}
