import { useEffect, useState } from "react";
import floral from "@/assets/floral-corner.png";
import brasao from "@/assets/brasao.png";

interface EnvelopeProps {
  onOpened: () => void;
}

export const Envelope = ({ onOpened }: EnvelopeProps) => {
  const [stage, setStage] = useState<"idle" | "opening" | "rising" | "done">("idle");
  const [hide, setHide] = useState(false);

  // Auto open after 2s
  useEffect(() => {
    const t = setTimeout(() => triggerOpen(), 2000);
    return () => clearTimeout(t);
  }, []);

  const triggerOpen = () => {
    setStage((s) => {
      if (s !== "idle") return s;
      // Sequence: flap opens (slow) → card rises → brasão emerges → envelope flies away
      setTimeout(() => setStage("rising"), 3200);
      setTimeout(() => {
        onOpened();
      }, 4800);
      setTimeout(() => setHide(true), 5800);
      return "opening";
    });
  };

  if (hide) return null;

  const isOpen = stage !== "idle";
  const isRising = stage === "rising" || stage === "done";

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-700 ${
        isRising ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "radial-gradient(ellipse at center, hsl(350 45% 92%) 0%, hsl(25 40% 84%) 60%, hsl(15 30% 70%) 100%)" }}
    >
      {/* Ambient golden glow */}
      <div
        className="absolute inset-0 pointer-events-none animate-glow-pulse"
        style={{ background: "radial-gradient(circle at 50% 55%, hsl(42 80% 80% / 0.55) 0%, transparent 65%)" }}
      />

      {/* Soft floating particles behind envelope */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="absolute block rounded-full animate-float-up"
            style={{
              left: `${(i * 8.3) % 100}%`,
              width: "4px",
              height: "4px",
              background: "radial-gradient(circle, hsl(42 80% 82% / 0.9) 0%, transparent 70%)",
              boxShadow: "0 0 10px hsl(42 80% 75% / 0.7)",
              animationDuration: `${15 + (i % 5) * 2}s`,
              animationDelay: `${i * 1.2}s`,
            }}
          />
        ))}
      </div>

      {/* Click-anywhere fallback */}
      <button
        onClick={triggerOpen}
        aria-label="Abrir convite"
        className="absolute inset-0 w-full h-full cursor-pointer"
        disabled={isOpen}
      />

      {/* Envelope stage */}
      <div
        className="absolute inset-0 flex items-center justify-center px-8 pointer-events-none"
        style={{ perspective: "1800px" }}
      >
        <div
          className={`relative w-full max-w-[320px] aspect-[4/5.2] transition-all duration-[1600ms] ${
            isRising ? "translate-y-[-120vh] scale-110" : "translate-y-0 scale-100"
          }`}
          style={{
            transformStyle: "preserve-3d",
            transitionTimingFunction: "cubic-bezier(0.65, 0, 0.35, 1)",
          }}
        >
          {/* Back of envelope */}
          <div
            className="absolute inset-0 rounded-[3px] overflow-hidden"
            style={{
              background:
                "linear-gradient(155deg, hsl(25 35% 78%) 0%, hsl(20 30% 72%) 100%)",
              boxShadow:
                "0 30px 60px -20px hsl(15 30% 25% / 0.45), 0 10px 20px -10px hsl(15 30% 25% / 0.3), inset 0 0 40px hsl(15 25% 35% / 0.15)",
            }}
          >
            {/* Subtle paper grain */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(hsl(15 30% 20% / 0.08) 1px, transparent 1px)",
                backgroundSize: "3px 3px",
              }}
            />
          </div>

          {/* Inner card (slides up when opened) */}
          <div
            className={`absolute inset-x-3 bottom-3 top-[18%] rounded-[2px] overflow-hidden transition-all duration-[1800ms] paper-texture ${
              isOpen ? "translate-y-[-22%]" : "translate-y-0"
            }`}
            style={{
              background:
                "linear-gradient(180deg, hsl(30 50% 98%) 0%, hsl(30 45% 95%) 100%)",
              boxShadow:
                "0 8px 25px -8px hsl(15 30% 20% / 0.35), inset 0 0 30px hsl(35 40% 85% / 0.4)",
              transitionTimingFunction: "cubic-bezier(0.65, 0, 0.35, 1)",
              transitionDelay: isOpen ? "1400ms" : "0ms",
              transform: `translateZ(2px) ${isOpen ? "translateY(-22%)" : ""}`,
            }}
          >
            {/* Card content - elegant brasão preview */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
              <div className="gold-divider w-12 mb-3" />
              <p className="font-display text-[9px] tracking-[0.5em] text-gold-deep/80 mb-2">
                CONVITE
              </p>
              <p className="font-script text-3xl text-blush-deep leading-none mb-1">
                Cecília
              </p>
              <p className="font-display text-[10px] tracking-[0.45em] text-ink/70">
                XV ANOS
              </p>
              <div className="gold-divider w-12 mt-3" />
            </div>
          </div>

          {/* Front pocket (lower triangular flap, static) */}
          <div
            className="absolute inset-x-0 bottom-0 h-[55%]"
            style={{
              background:
                "linear-gradient(170deg, hsl(25 38% 76%) 0%, hsl(20 32% 68%) 100%)",
              clipPath: "polygon(0 30%, 50% 0, 100% 30%, 100% 100%, 0 100%)",
              boxShadow: "inset 0 4px 12px hsl(15 30% 25% / 0.2)",
              transform: "translateZ(4px)",
            }}
          />

          {/* Top flap (animated open) */}
          <div
            className="absolute inset-x-0 top-0 h-[58%] envelope-flap-pro"
            style={{
              background:
                "linear-gradient(180deg, hsl(28 42% 82%) 0%, hsl(22 35% 74%) 100%)",
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              boxShadow:
                "inset 0 -6px 18px hsl(15 30% 25% / 0.25), 0 2px 8px hsl(15 30% 25% / 0.15)",
              transformOrigin: "top center",
              transform: isOpen ? "rotateX(-180deg)" : "rotateX(0deg)",
              transition: "transform 2.4s cubic-bezier(0.65, 0, 0.35, 1)",
              backfaceVisibility: "hidden",
            }}
          >
            {/* Inner shading on flap */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 60%, hsl(15 30% 25% / 0.1) 100%)",
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              }}
            />
          </div>

          {/* Wax seal (fades when opening) */}
          <div
            className={`absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
              isOpen ? "opacity-0 scale-50" : "opacity-100 scale-100"
            }`}
            style={{ transform: "translate(-50%, -50%) translateZ(8px)" }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center animate-glow-pulse relative"
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, hsl(355 70% 65%) 0%, hsl(350 60% 45%) 60%, hsl(345 65% 30%) 100%)",
                boxShadow:
                  "0 6px 20px hsl(350 60% 25% / 0.6), inset 0 -3px 8px hsl(345 70% 20% / 0.6), inset 0 3px 6px hsl(355 80% 80% / 0.5)",
              }}
            >
              <span className="font-display text-pearl text-2xl drop-shadow-sm">C</span>
              {/* Wax drip texture */}
              <div
                className="absolute inset-0 rounded-full opacity-40 mix-blend-overlay"
                style={{
                  background:
                    "radial-gradient(circle at 70% 70%, transparent 40%, hsl(0 0% 0%) 100%)",
                }}
              />
            </div>
          </div>

          {/* Floral accent on envelope corners */}
          <img
            src={floral}
            alt=""
            aria-hidden="true"
            className="absolute -bottom-6 -left-10 w-24 opacity-90 animate-sway pointer-events-none"
            style={{ transform: "rotate(-15deg)", zIndex: 5 }}
          />
          <img
            src={floral}
            alt=""
            aria-hidden="true"
            className="absolute -top-6 -right-10 w-20 opacity-80 animate-sway-slow pointer-events-none"
            style={{ transform: "rotate(195deg) scaleX(-1)", zIndex: 5 }}
          />

          {/* Brasão emerging from inside (visible after flap opens) */}
          <img
            src={brasao}
            alt="Brasão Cecília Vieira"
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 w-[80%] transition-all pointer-events-none ${
              isOpen
                ? "opacity-100 -translate-y-[55%] scale-100"
                : "opacity-0 -translate-y-[40%] scale-75"
            }`}
            style={{
              transitionDuration: "1200ms",
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              transitionDelay: isOpen ? "900ms" : "0ms",
              filter: "drop-shadow(0 8px 16px hsl(350 50% 40% / 0.25))",
              zIndex: 6,
            }}
          />
        </div>
      </div>

      {/* Subtle hint text */}
      <div
        className={`absolute bottom-16 left-1/2 -translate-x-1/2 transition-opacity duration-700 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      >
        <p className="font-display text-[10px] tracking-[0.5em] text-ink/50 animate-pulse whitespace-nowrap">
          ABRINDO CONVITE
        </p>
      </div>
    </div>
  );
};
