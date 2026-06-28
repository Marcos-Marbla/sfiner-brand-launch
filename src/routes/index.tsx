import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Sparkles, TrendingUp, Layers, Target, Globe, Check, Code2, Workflow, PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";
import { z } from "zod";
import logoAsset from "../assets/favicon.png.asset.json";
import bgHero from "../assets/bg-hero.jpg";
import bgServices from "../assets/bg-services.jpg";
import bgMethod from "../assets/bg-method.jpg";
import bgContact from "../assets/bg-contact.jpg";

const SEO = {
  es: {
    title: "Sfiner — Growth Partner para marcas ecommerce",
    description: "Sfiner es el growth partner que ayuda a marcas ecommerce a escalar ventas y construir una imagen de marca consolidada. Performance, branding y CRO.",
    ogTitle: "Sfiner — Growth Partner para marcas ecommerce",
    ogDescription: "Escalamos marcas ecommerce y consolidamos su imagen de marca.",
  },
  en: {
    title: "Sfiner — Growth Partner for ecommerce brands",
    description: "Sfiner is the growth partner helping ecommerce brands scale sales and build a consolidated brand image. Performance, branding and CRO.",
    ogTitle: "Sfiner — Growth Partner for ecommerce brands",
    ogDescription: "We scale ecommerce brands and consolidate their brand image.",
  },
} as const;

export const Route = createFileRoute("/")({
  validateSearch: z.object({
    lang: z.enum(["es", "en"]).optional(),
  }),
  head: ({ match }) => {
    const lang = (match.search as { lang?: "es" | "en" }).lang === "en" ? "en" : "es";
    const seo = SEO[lang];
    return {
      meta: [
        { title: seo.title },
        { name: "description", content: seo.description },
        { property: "og:title", content: seo.ogTitle },
        { property: "og:description", content: seo.ogDescription },
        { property: "og:locale", content: lang === "en" ? "en_US" : "es_ES" },
        { property: "og:url", content: lang === "en" ? "/?lang=en" : "/" },
      ],
      links: [
        { rel: "canonical", href: lang === "en" ? "/?lang=en" : "/" },
        { rel: "alternate", hrefLang: "es", href: "/" },
        { rel: "alternate", hrefLang: "en", href: "/?lang=en" },
        { rel: "alternate", hrefLang: "x-default", href: "/" },
      ],
    };
  },
  component: Index,
});

type Lang = "es" | "en";

const translations = {
  es: {
    nav: { services: "Servicios", method: "Método", contact: "Contacto", cta: "Hablemos" },
    hero: {
      badge: "Growth Partner para ecommerce",
      slogan1: "En un océano de marcas,",
      slogan2: "nadan los tiburones.",
      tagline: "The fin behind your momentum.",
      desc: "Convertimos marcas ecommerce en depredadores de su categoría: más ventas, más marca, más mordida en cada lanzamiento.",
      ctaPrimary: "Empezar a cazar",
      ctaSecondary: "Ver servicios",
    },
    services: {
      kicker: "Servicios",
      title1: "Todo lo que tu marca necesita para",
      title2: "escalar de verdad.",
      intro: "Somos tu growth partner: combinamos estrategia de marca y performance con tecnología — webs a medida, automatizaciones y asistentes de llamadas con IA — para que tu negocio escale sin fricción.",
      items: [
        { title: "Growth Partner", desc: "Estrategia y ejecución end-to-end para escalar tu marca ecommerce. Foco en rentabilidad, marca y crecimiento sostenido." },
        { title: "Performance Marketing", desc: "Campañas en Meta, TikTok y Google diseñadas para escalar con rentabilidad real, no vanity metrics." },
        { title: "Branding & Identidad", desc: "Construimos la imagen consolidada que diferencia tu marca y la posiciona como referente de su categoría." },
        { title: "Diseño Web & CRO", desc: "Diseñamos y desarrollamos webs rápidas, elegantes y optimizadas para convertir cada visita en una oportunidad de marca." },
        { title: "Automatización de Servicios", desc: "Conectamos tus herramientas y automatizamos procesos comerciales, operativos y de marketing para que tu equipo escale sin contratar más." },
        { title: "Asistentes de Llamadas IA", desc: "Implementamos asistentes de voz con IA que atienden, cualifican y agendan 24/7 con la voz y el tono de tu marca." },
      ],
    },
    method: {
      kicker: "Nuestro método",
      title1: "No somos una agencia.",
      title2: "Somos tu partner.",
      desc: "Nos integramos en tu equipo, entendemos tu marca y tomamos decisiones contigo. Cada cliente recibe foco, estrategia y ejecución como si fuera nuestro propio negocio.",
      steps: [
        { t: "Diagnóstico", d: "Analizamos tu marca, datos y posicionamiento para detectar oportunidades reales." },
        { t: "Estrategia", d: "Diseñamos un plan a medida con objetivos claros y un roadmap accionable." },
        { t: "Ejecución", d: "Activamos campañas, branding y CRO con un equipo dedicado a tu cuenta." },
        { t: "Escala", d: "Iteramos, optimizamos y escalamos lo que funciona, mes a mes." },
      ],
    },
    contact: {
      kicker: "Contacto",
      title1: "¿Listo para",
      title2: "escalar tu marca",
      title3: "?",
      desc: "Cuéntanos sobre tu proyecto. Te responderemos en menos de 24h con una primera lectura de tu marca.",
    },
    footer: "Growth partner para marcas ecommerce.",
  },
  en: {
    nav: { services: "Services", method: "Method", contact: "Contact", cta: "Let's talk" },
    hero: {
      badge: "Growth Partner for ecommerce",
      slogan1: "In an ocean of brands,",
      slogan2: "sharks are the ones swimming.",
      tagline: "The fin behind your momentum.",
      desc: "We turn ecommerce brands into predators of their category: more sales, more brand, more bite in every launch.",
      ctaPrimary: "Start hunting",
      ctaSecondary: "See services",
    },
    services: {
      kicker: "Services",
      title1: "Everything your brand needs to",
      title2: "truly scale.",
      intro: "We're your growth partner: we combine brand strategy and performance with technology — custom websites, automations and AI call assistants — so your business scales without friction.",
      items: [
        { title: "Growth Partner", desc: "End-to-end strategy and execution to scale your ecommerce brand. Focused on profitability, brand and sustained growth." },
        { title: "Performance Marketing", desc: "Meta, TikTok and Google campaigns designed to scale with real profitability — not vanity metrics." },
        { title: "Branding & Identity", desc: "We build the consolidated image that sets your brand apart and positions it as the reference in its category." },
        { title: "Web Design & CRO", desc: "We design and build fast, elegant websites optimized to turn every visit into a brand opportunity." },
        { title: "Service Automation", desc: "We connect your tools and automate commercial, ops and marketing processes so your team scales without new hires." },
        { title: "AI Call Assistants", desc: "We deploy AI voice assistants that answer, qualify and book 24/7 with your brand's voice and tone." },
      ],
    },
    method: {
      kicker: "Our method",
      title1: "We're not an agency.",
      title2: "We're your partner.",
      desc: "We embed in your team, understand your brand and make decisions with you. Every client gets focus, strategy and execution as if it were our own business.",
      steps: [
        { t: "Diagnosis", d: "We analyze your brand, data and positioning to spot real opportunities." },
        { t: "Strategy", d: "We design a tailored plan with clear goals and an actionable roadmap." },
        { t: "Execution", d: "We activate campaigns, branding and CRO with a team dedicated to your account." },
        { t: "Scale", d: "We iterate, optimize and scale what works, month after month." },
      ],
    },
    contact: {
      kicker: "Contact",
      title1: "Ready to",
      title2: "scale your brand",
      title3: "?",
      desc: "Tell us about your project. We'll get back to you in under 24h with an initial read on your brand.",
    },
    footer: "Growth partner for ecommerce brands.",
  },
} as const;

function Index() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const lang: Lang = search.lang === "en" ? "en" : "es";
  const [open, setOpen] = useState(false);

  const changeLang = (l: Lang) => {
    navigate({ search: l === "en" ? { lang: "en" } : {}, replace: true });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("sfiner-lang", lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

  // Restore language from localStorage only when no URL param is present
  useEffect(() => {
    if (search.lang) return;
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("sfiner-lang");
    if (stored === "en") navigate({ search: { lang: "en" }, replace: true });
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, [open]);

  const t = translations[lang];

  const LangSwitcher = (
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur transition-colors hover:bg-secondary"
      >
        <Globe className="h-3.5 w-3.5" />
        {lang.toUpperCase()}
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-32 overflow-hidden rounded-xl border border-border bg-card shadow-elegant"
        >
          {(["es", "en"] as Lang[]).map((l) => (
            <li key={l}>
              <button
                type="button"
                role="option"
                aria-selected={lang === l}
                onClick={() => { changeLang(l); setOpen(false); }}
                className="flex w-full items-center justify-between px-3 py-2 text-sm hover:bg-secondary"
              >
                <span>{l === "es" ? "Español" : "English"}</span>
                {lang === l && <Check className="h-3.5 w-3.5 text-foreground" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#top" className="font-display text-2xl font-semibold tracking-tight">
          <span className="text-gradient-brand">sfiner</span>
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#servicios" className="transition-colors hover:text-foreground">{t.nav.services}</a>
          <a href="#metodo" className="transition-colors hover:text-foreground">{t.nav.method}</a>
          <a href="#contacto" className="transition-colors hover:text-foreground">{t.nav.contact}</a>
        </nav>
        <div className="flex items-center gap-3">
          {LangSwitcher}
          <a
            href="#contacto"
            className="hidden items-center gap-1.5 rounded-full bg-gradient-brand px-4 py-2 text-sm font-medium text-white shadow-soft transition-transform hover:scale-[1.02] md:inline-flex"
          >
            {t.nav.cta} <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        {/* Background image */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <img
            src={bgHero}
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
          />
          {/* Soft beige veil for elegance + readability */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, color-mix(in oklab, var(--beige) 78%, transparent) 0%, color-mix(in oklab, var(--beige) 92%, transparent) 60%, var(--beige) 100%)" }} />
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-24 pt-12 md:pt-20">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <img
              src={logoAsset.url}
              alt="Logo de Sfiner"
              style={{ mixBlendMode: "multiply" }}
              className="mb-6 h-28 w-28 object-contain drop-shadow-[0_10px_30px_rgba(120,40,180,0.25)] md:h-36 md:w-36"
            />
            <h1 className="font-display text-7xl font-semibold leading-none tracking-tight md:text-9xl">
              <span className="text-gradient-brand">Sfiner</span>
            </h1>
            <p className="mt-4 font-display text-lg italic text-muted-foreground md:text-xl">
              {t.hero.tagline}
            </p>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> {t.hero.badge}
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] md:text-5xl">
              {t.hero.slogan1} <br />
              <span className="text-gradient-brand">{t.hero.slogan2}</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
              {t.hero.desc}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-white shadow-elegant transition-transform hover:scale-[1.02]"
              >
                {t.hero.ctaPrimary} <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-secondary"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services — dark ocean section */}
      <section id="servicios" className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <img src={bgServices} alt="" aria-hidden loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,5,30,0.92), rgba(20,10,50,0.86) 50%, rgba(10,5,30,0.95))" }} />
        </div>

        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-widest text-white/60">{t.services.kicker}</span>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white md:text-5xl">
              {t.services.title1} <span className="text-gradient-brand">{t.services.title2}</span>
            </h2>
            <p className="mt-5 text-white/70">{t.services.intro}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map((s, i) => {
              const Icon = [Sparkles, TrendingUp, Layers, Code2, Workflow, PhoneCall][i] ?? Target;
              return (
                <article
                  key={s.title}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white/10 hover:shadow-elegant"
                >
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{s.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Método — light section with iridescent shape backdrop */}
      <section id="metodo" className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <img src={bgMethod} alt="" aria-hidden loading="lazy" className="h-full w-full object-cover opacity-60" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, var(--beige) 0%, color-mix(in oklab, var(--beige) 70%, transparent) 40%, color-mix(in oklab, var(--beige) 70%, transparent) 60%, var(--beige) 100%)" }} />
        </div>

        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[2rem] border border-border bg-card/80 p-10 shadow-soft backdrop-blur-xl md:p-16">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{t.method.kicker}</span>
                <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
                  {t.method.title1} <span className="text-gradient-brand">{t.method.title2}</span>
                </h2>
                <p className="mt-6 text-muted-foreground">
                  {t.method.desc}
                </p>
              </div>
              <ol className="space-y-6">
                {t.method.steps.map((step, i) => (
                  <li key={step.t} className="flex gap-5 border-b border-border pb-5 last:border-0">
                    <span className="font-display text-2xl text-gradient-brand">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h4 className="font-semibold">{step.t}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{step.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto — dark ocean ripple */}
      <section id="contacto" className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <img src={bgContact} alt="" aria-hidden loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(8,4,28,0.85), rgba(20,8,50,0.78) 50%, rgba(8,4,28,0.92))" }} />
        </div>

        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center shadow-elegant backdrop-blur-2xl md:p-20">
            <span className="text-xs font-medium uppercase tracking-widest text-white/60">{t.contact.kicker}</span>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
              {t.contact.title1} <span className="text-gradient-brand">{t.contact.title2}</span>{t.contact.title3}
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-white/70">
              {t.contact.desc}
            </p>

            <a
              href="mailto:marcos.marbla@sfiner.com"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-brand px-7 py-4 text-base font-medium text-white shadow-elegant transition-transform hover:scale-[1.02]"
            >
              <Mail className="h-4 w-4" />
              marcos.marbla@sfiner.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
          <div className="font-display text-lg font-semibold">
            <span className="text-gradient-brand">sfiner</span>
          </div>
          <p>© {new Date().getFullYear()} Sfiner. {t.footer}</p>
          <a href="mailto:marcos.marbla@sfiner.com" className="transition-colors hover:text-foreground">
            marcos.marbla@sfiner.com
          </a>
        </div>
      </footer>
    </div>
  );
}
