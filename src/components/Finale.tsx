import floral from "@/assets/floral-corner.png";
import { Reveal } from "./Reveal";

export const Finale = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <img
        src={floral}
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-72 opacity-70 animate-sway-slow pointer-events-none"
      />
      <img
        src={floral}
        alt=""
        aria-hidden="true"
        className="absolute -bottom-12 -left-16 w-48 opacity-60 animate-sway pointer-events-none"
      />
      <img
        src={floral}
        alt=""
        aria-hidden="true"
        className="absolute -bottom-12 -right-16 w-48 opacity-60 animate-sway-slow pointer-events-none"
        style={{ transform: "scaleX(-1)" }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="relative z-10 max-w-md mx-auto text-center pt-24">
        <Reveal variant="blur">
          <p className="font-display text-xs tracking-[0.5em] text-gold-deep mb-4">✦ ✦ ✦</p>
        </Reveal>

        <Reveal variant="blur" delay={150}>
          <p className="font-script text-6xl md:text-7xl text-gold-deep leading-tight">
            Espero você
          </p>
        </Reveal>

        <Reveal variant="blur" delay={350}>
          <p className="font-display text-3xl text-ink mt-2">✨</p>
        </Reveal>

        <Reveal variant="blur" delay={500}>
          <div className="gold-divider w-32 mx-auto my-8" />
          <p className="font-serif-elegant italic text-base text-ink/60">
            com amor,
          </p>
          <p className="font-script text-3xl text-blush-deep mt-1">Cecília</p>
        </Reveal>
      </div>

      <Reveal variant="fade" delay={800} className="relative z-10 text-center mt-20">
        <p className="font-display text-[10px] tracking-[0.4em] text-ink/40">
          FEITO COM CARINHO ✦ MMXXVI
        </p>
      </Reveal>
    </section>
  );
};
