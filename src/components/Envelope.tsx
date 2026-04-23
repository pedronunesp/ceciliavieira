import { useEffect, useState } from "react";
import floral from "@/assets/floral-corner.png";

interface EnvelopeProps {
  onOpened: () => void;
}

export const Envelope = ({ onOpened }: EnvelopeProps) => {
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);

  const handleOpen = () => {
    if (open) return;
    setOpen(true);
    setTimeout(() => {
      onOpened();
      setTimeout(() => setHide(true), 800);
    }, 1800);
  };

  if (hide) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-envelope transition-opacity duration-1000 ${
        open ? "opacity-0" : "opacity-100"
      }`}
      style={{ perspective: "1400px" }}
    >
      {/* Soft glow background */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />

      <div
        className={`relative w-[88vw] max-w-[420px] aspect-[4/5] envelope-card ${open ? "envelope-open" : ""}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Envelope body */}
        <div
          className="absolute inset-0 rounded-sm shadow-luxe overflow-hidden paper-texture"
          style={{
            background: "linear-gradient(160deg, hsl(350 50% 92%) 0%, hsl(25 45% 86%) 100%)",
          }}
        >
          {/* Inner card peek */}
          <div className="absolute inset-x-6 bottom-6 top-[40%] glass-gold rounded-md flex flex-col items-center justify-center p-4">
            <p className="font-script text-3xl text-gold-deep leading-none">Cecília</p>
            <div className="gold-divider w-20 my-3" />
            <p className="font-display text-xs tracking-[0.4em] text-ink/70">XV ANOS</p>
          </div>
        </div>

        {/* Envelope flap (animated) */}
        <div
          className={`absolute inset-x-0 top-0 h-1/2 envelope-flap ${open ? "" : ""}`}
          style={{
            background: "linear-gradient(180deg, hsl(25 45% 80%) 0%, hsl(350 50% 88%) 100%)",
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            boxShadow: "inset 0 -4px 12px hsl(15 30% 30% / 0.15)",
            transformOrigin: "top",
          }}
        >
          {/* Wax seal */}
          <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center animate-glow-pulse"
              style={{
                background: "var(--gradient-gold)",
                boxShadow: "0 4px 16px hsl(35 55% 35% / 0.5), inset 0 2px 4px hsl(42 80% 90% / 0.6)",
              }}
            >
              <span className="font-display text-pearl text-xl">C</span>
            </div>
          </div>
        </div>

        {/* Floral corner accents */}
        <img
          src={floral}
          alt=""
          aria-hidden="true"
          className="absolute -bottom-8 -left-8 w-32 opacity-90 animate-sway pointer-events-none"
          style={{ transform: "rotate(-15deg)" }}
        />
      </div>

      {/* CTA */}
      <button
        onClick={handleOpen}
        disabled={open}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 glass px-8 py-3 rounded-full btn-glow group"
      >
        <span className="font-display text-sm tracking-[0.3em] text-ink">
          {open ? "ABRINDO..." : "TOQUE PARA ABRIR"}
        </span>
      </button>

      {/* Tap anywhere */}
      <button
        onClick={handleOpen}
        aria-label="Abrir convite"
        className="absolute inset-0 z-[-1]"
        disabled={open}
      />
    </div>
  );
};
