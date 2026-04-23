import floral from "@/assets/floral-corner.png";

export const Hero = () => {
  const name = "Cecília Vieira".split("");

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Floral decorations */}
      <img
        src={floral}
        alt=""
        aria-hidden="true"
        className="absolute -top-16 -left-20 w-64 md:w-80 opacity-80 animate-sway-slow pointer-events-none"
      />
      <img
        src={floral}
        alt=""
        aria-hidden="true"
        className="absolute -bottom-20 -right-16 w-64 md:w-80 opacity-80 animate-sway pointer-events-none"
        style={{ transform: "scaleX(-1)" }}
      />

      {/* Soft glow halo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-md">
        <p
          className="font-display text-xs tracking-[0.5em] text-gold-deep/80 mb-6 animate-fade-in opacity-0"
          style={{ animationDelay: "0.2s" }}
        >
          ✦  CONVITE  ✦
        </p>

        {/* Monogram */}
        <div
          className="relative mb-8 animate-scale-in opacity-0"
          style={{ animationDelay: "0.5s" }}
        >
          <div
            className="w-28 h-28 rounded-full flex items-center justify-center animate-glow-pulse"
            style={{
              background: "var(--gradient-gold)",
              boxShadow: "0 8px 32px hsl(35 55% 35% / 0.4), inset 0 2px 6px hsl(42 80% 92% / 0.7)",
            }}
          >
            <span className="font-display text-5xl text-pearl">C</span>
          </div>
        </div>

        <p
          className="font-script text-5xl text-gold-deep mb-2 animate-fade-in opacity-0"
          style={{ animationDelay: "1.2s" }}
        >
          Quinze
        </p>

        <h1 className="font-display text-4xl md:text-5xl text-ink leading-tight tracking-wide mb-4">
          {name.map((ch, i) => (
            <span
              key={i}
              className="type-word"
              style={{ animationDelay: `${1.6 + i * 0.05}s` }}
            >
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </h1>

        <div
          className="gold-divider w-32 my-4 animate-fade-in opacity-0"
          style={{ animationDelay: "2.6s" }}
        />

        <p
          className="font-serif-elegant italic text-lg text-ink/70 animate-fade-in opacity-0"
          style={{ animationDelay: "2.8s" }}
        >
          celebra seus quinze anos
        </p>

        {/* Scroll cue */}
        <div
          className="absolute -bottom-32 left-1/2 -translate-x-1/2 animate-fade-in opacity-0"
          style={{ animationDelay: "3.4s" }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-display text-[10px] tracking-[0.4em] text-ink/50">DESLIZE</span>
            <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
