import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Play, Pause, Maximize2, Volume2, VolumeX } from "lucide-react";
import logoMark from "../assets/logo-mark.png";
import { trackPixel } from "../lib/meta-pixel";


export const Route = createFileRoute("/presentacion")({
  head: () => ({
    meta: [
      { title: "Sfiner — Presentación exclusiva" },
      { name: "description", content: "La fórmula garantizada de 3 pasos para escalar tu marca ecommerce a 7/8 cifras." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Presentacion,
});

function LockedVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const lastTimeRef = useRef(0);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onTime = () => {
      // Allow forward progress only; block seeks ahead.
      if (v.currentTime > lastTimeRef.current + 1) {
        v.currentTime = lastTimeRef.current;
      } else {
        lastTimeRef.current = v.currentTime;
      }
      setProgress(v.duration ? (v.currentTime / v.duration) * 100 : 0);
    };
    const onSeeking = () => {
      if (Math.abs(v.currentTime - lastTimeRef.current) > 0.5) {
        v.currentTime = lastTimeRef.current;
      }
    };
    const onEnd = () => setPlaying(false);

    v.addEventListener("timeupdate", onTime);
    v.addEventListener("seeking", onSeeking);
    v.addEventListener("ended", onEnd);
    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("seeking", onSeeking);
      v.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
      trackPixel("ViewContent", { content_name: "VSL Sfiner", content_type: "video" });
    } else { v.pause(); setPlaying(false); }
  };
  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };
  const goFullscreen = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.requestFullscreen) v.requestFullscreen();
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-black shadow-elegant">
      <video
        ref={videoRef}
        className="block w-full aspect-video"
        playsInline
        muted
        preload="metadata"
        onContextMenu={(e) => e.preventDefault()}
        controlsList="nodownload noplaybackrate nofullscreen"
        disablePictureInPicture
        // Reemplaza el src por tu video (puedes subirlo a /public y usar "/tu-video.mp4")
        src="/video.mp4"
        poster=""
      />
      {/* Overlay para bloquear el clic derecho / evitar interacción con controles nativos */}
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={toggle}
        onContextMenu={(e) => e.preventDefault()}
      />
      {!playing && (
        <button
          onClick={toggle}
          className="absolute inset-0 flex items-center justify-center bg-black/30 transition hover:bg-black/40"
          aria-label="Reproducir"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 shadow-2xl">
            <Play className="h-8 w-8 translate-x-0.5 text-black" fill="currentColor" />
          </span>
        </button>
      )}

      {/* Barra inferior custom: sólo indica progreso, no permite arrastrar */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-8">
        <button
          onClick={toggle}
          className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/25"
          aria-label={playing ? "Pausar" : "Reproducir"}
        >
          {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" fill="currentColor" />}
        </button>
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/20">
          <div
            className="h-full bg-white transition-[width] duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
        <button
          onClick={toggleMute}
          className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/25"
          aria-label={muted ? "Activar sonido" : "Silenciar"}
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
        <button
          onClick={goFullscreen}
          className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/25"
          aria-label="Pantalla completa"
        >
          <Maximize2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function Presentacion() {
  const scrollToCalendly = () => {
    trackPixel("Lead", { content_name: "Agenda Demo CTA" });
    document.getElementById("agenda")?.scrollIntoView({ behavior: "smooth" });
  };

  const brands = ["LUNA", "AURA", "NOVA", "KORA", "ELIA", "VESTA"];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO oscuro */}
      <section className="relative bg-ink text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 pt-6">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={logoMark} alt="Sfiner" className="h-7 w-7" />
              <span className="font-display text-lg font-semibold tracking-tight">SFINER</span>
            </div>
            <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
              <a href="#proceso" className="hover:text-white">Nuestro Proceso</a>
              <a href="#sobre" className="hover:text-white">Sobre Nosotros</a>
              <button
                onClick={scrollToCalendly}
                className="rounded-full border border-white/30 bg-transparent px-4 py-2 text-white transition hover:bg-white hover:text-ink"
              >
                Agenda Demo
              </button>
            </nav>
          </header>
        </div>

        <div className="mx-auto max-w-4xl px-6 pt-10 pb-10 text-center">
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            La fórmula garantizada de 3 pasos para escalar
            <br className="hidden md:block" />
            una marca de cosmética a <span className="text-gradient-brand">7/8 cifras</span> en 2026
          </h1>
          <p className="mt-4 text-sm uppercase tracking-[0.25em] text-white/60">
            Sin depender de Facebook Ads, agencias o influencers
          </p>
        </div>

        {/* Video sobresaliendo del hero */}
        <div className="mx-auto -mb-36 max-w-4xl px-6">
          <LockedVideo />
        </div>
      </section>

      {/* CALENDLY */}
      <section id="agenda" className="bg-background pt-72 pb-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Reserva una hora abajo
          </h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
            <iframe
              src="https://calendly.com/marcos-marbla-sfiner/30min?hide_gdpr_banner=1&background_color=ffffff&text_color=0b0b0f&primary_color=a855f7"
              title="Reserva una llamada con Sfiner"
              className="h-[720px] w-full border-0"
              loading="lazy"
            />
          </div>

        </div>
      </section>

      {/* LOGOS */}
      <section className="border-t border-border bg-background py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            El growth partner de confianza para
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {brands.map((b) => (
              <span
                key={b}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-ink font-display text-xs font-semibold text-primary-foreground"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE / QUIEN SOMOS */}
      <section id="sobre" className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Quiénes somos
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-2 md:items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink shadow-elegant">
              <div className="absolute inset-0 bg-gradient-brand opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={logoMark} alt="Sfiner" className="h-32 w-32 opacity-90" />
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Sobre ti</p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                El fin detrás de tu momentum.
              </h3>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                No somos una agencia más. Actuamos como tu growth partner: nuestro enfoque está
                orientado a resultados, con una fórmula de crecimiento 360º basada en performance,
                branding y CRO, no en fijar precios por servicios sueltos.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Combinamos estrategia, tecnología (webs a medida, automatizaciones y asistentes de
                llamadas con IA) y ejecución diaria para escalar marcas de cosmética a 7 y 8 cifras.
              </p>
              <button
                onClick={scrollToCalendly}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                Agenda tu Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIO */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-display text-xl italic leading-relaxed text-foreground md:text-2xl">
            “Sfiner cambió por completo cómo entendemos nuestro crecimiento. En 6 meses pasamos
            de estancados a un canal directo rentable y escalable.”
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Pedro Rodríguez · VP of Marketing
          </p>
        </div>
      </section>

      {/* AUTORIDAD / PARTNERS */}
      <section className="border-t border-border bg-secondary/40 py-16">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-display text-xl font-semibold tracking-tight md:text-2xl">
              Partners tecnológicos que respaldan cada implementación.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 md:justify-end">
            {["Klaviyo Partner", "Meta Business", "Shopify Plus"].map((p) => (
              <span
                key={p}
                className="rounded-full border border-border bg-background px-5 py-2 text-sm font-medium text-foreground"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex items-center gap-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <a href="#proceso" className="hover:text-foreground">Nuestro Proceso</a>
              <div className="flex items-center gap-2">
                <img src={logoMark} alt="Sfiner" className="h-6 w-6" />
                <span className="font-display text-sm font-semibold text-foreground">SFINER</span>
              </div>
              <a href="#sobre" className="hover:text-foreground">Sobre</a>
            </div>
            <p className="text-xs text-muted-foreground">
              © 2026 Sfiner · Privacy · Terms
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
