import { Calendar, Clock, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import floral from "@/assets/floral-corner.png";

const details = [
  { icon: Calendar, label: "Sábado", value: "15 de Março, 2026" },
  { icon: Clock, label: "Recepção", value: "20h00" },
  { icon: MapPin, label: "Local", value: "Espaço Belle Époque", sub: "Av. das Rosas, 1500 — São Paulo" },
];

export const EventDetails = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <img
        src={floral}
        alt=""
        aria-hidden="true"
        className="absolute -bottom-10 -left-20 w-64 opacity-60 animate-sway pointer-events-none"
      />

      <Reveal variant="blur" className="text-center mb-12">
        <p className="font-display text-xs tracking-[0.5em] text-gold-deep mb-2">✦ DETALHES ✦</p>
        <h2 className="font-display text-4xl text-ink">A Celebração</h2>
        <div className="gold-divider w-20 mx-auto mt-4" />
      </Reveal>

      <div className="max-w-md mx-auto space-y-4">
        {details.map(({ icon: Icon, label, value, sub }, i) => (
          <Reveal key={i} variant="fade" delay={i * 120}>
            <div className="glass rounded-2xl p-5 flex items-center gap-5 shadow-soft">
              <div
                className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: "var(--gradient-gold)",
                  boxShadow: "0 4px 16px hsl(35 55% 35% / 0.3)",
                }}
              >
                <Icon className="w-5 h-5 text-pearl" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <p className="font-display text-[10px] tracking-[0.3em] text-gold-deep/80 uppercase">{label}</p>
                <p className="font-serif-elegant text-xl text-ink leading-tight">{value}</p>
                {sub && <p className="font-serif-elegant italic text-sm text-ink/60 mt-0.5">{sub}</p>}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
