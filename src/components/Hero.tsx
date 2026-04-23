import floral from "@/assets/floral-corner.png";
import brasao from "@/assets/brasao.png";

export const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Floral decorations */}
      <img
        src={floral}
        alt=""
        aria-hidden="true"
        className="absolute -top-16 -left-20 w-64 md:w-80 opacity-70 animate-sway-slow pointer-events-none"
      />
      <img
        src={floral}
        alt=""
        aria-hidden="true"
        className="absolute -bottom-20 -right-16 w-64 md:w-80 opacity-70 animate-sway pointer-events-none"
        style={{ transform: "scaleX(-1)" }}
      />

      {/* Soft glow halo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full">
        <p
          className="font-display text-[10px] tracking-[0.55em] text-gold-deep/80 mb-8 animate-fade-in opacity-0"
          style={{ animationDelay: "0.2s" }}
        >
          ✦  CONVITE  ✦
        </p>

        {/* Brasão centerpiece */}
        <div
          className="relative mb-6 animate-scale-in opacity-0 w-full flex justify-center"
          style={{ animationDelay: "0.5s" }}
        >
          <img
            src={brasao}
            alt="Brasão Cecília Vieira — Quinze Anos"
            className="relative w-[90%] max-w-[400px] animate-sway-slow"
            style={{
              filter:
                "drop-shadow(0 0 18px hsl(42 85% 78% / 0.85)) drop-shadow(0 0 38px hsl(42 80% 75% / 0.55)) drop-shadow(0 0 60px hsl(350 60% 80% / 0.35)) drop-shadow(0 10px 22px hsl(350 50% 40% / 0.18))",
            }}
          />
        </div>

        <div
          className="gold-divider w-32 my-6 animate-fade-in opacity-0"
          style={{ animationDelay: "1.6s" }}
        />

        <p
          className="font-script text-4xl text-gold-deep mb-2 animate-fade-in opacity-0"
          style={{ animationDelay: "1.8s" }}
        >
          celebra seus
        </p>

        <p
          className="font-display text-2xl tracking-[0.3em] text-ink animate-fade-in opacity-0"
          style={{ animationDelay: "2.1s" }}
        >
          QUINZE ANOS
        </p>

        {/* Scroll cue */}
        <div
          className="mt-20 flex flex-col items-center gap-3 animate-fade-in opacity-0"
          style={{ animationDelay: "2.6s" }}
        >
          <span className="font-display text-[10px] tracking-[0.45em] text-ink/50">
            DESLIZE
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};
