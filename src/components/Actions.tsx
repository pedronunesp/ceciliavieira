import { Heart, Instagram, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";

const buttons = [
  {
    icon: Heart,
    label: "Confirmar Presença",
    sub: "via WhatsApp",
    href: "https://wa.me/5511999999999?text=Ol%C3%A1!%20Confirmo%20presen%C3%A7a%20nos%2015%20anos%20da%20Cec%C3%ADlia%20%E2%9C%A8",
    primary: true,
  },
  {
    icon: MapPin,
    label: "Ver Localização",
    sub: "Toth Eventos",
    href: "https://maps.google.com/?q=Toth+eventos,+Av.+Otacílio+Negrão+de+Lima,+7200+-+Bandeirantes+(Pampulha)",
  },
  {
    icon: Instagram,
    label: "Instagram",
    sub: "@xv_ceciliav",
    href: "https://instagram.com/xv_ceciliav",
  },
];

export const Actions = () => {
  return (
    <section className="relative py-20 px-6">
      <Reveal variant="blur" className="text-center mb-10">
        <p className="font-script text-4xl text-gold-deep">aguardo você</p>
      </Reveal>

      <div className="max-w-md mx-auto space-y-4">
        {buttons.map(({ icon: Icon, label, sub, href, primary }, i) => (
          <Reveal key={i} variant="fade" delay={i * 120}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-glow group flex items-center gap-4 rounded-2xl px-6 py-5 border ${
                primary
                  ? "bg-gold-grad text-pearl shadow-luxe border-transparent"
                  : "glass-gold text-ink shadow-petal border-gold-deep/30"
              }`}
            >
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${
                  primary ? "bg-pearl/20" : "bg-pearl/40"
                }`}
              >
                <Icon className={`w-5 h-5 ${primary ? "text-pearl" : "text-gold-deep"}`} strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <p className={`font-display text-xl tracking-wide font-medium ${primary ? "text-pearl" : "text-ink"}`}>
                  {label}
                </p>
                <p className={`font-serif-elegant italic text-sm ${primary ? "text-pearl/90" : "text-ink/70"}`}>
                  {sub}
                </p>
              </div>
              <span className={`font-display text-lg ${primary ? "text-pearl/70" : "text-gold-deep/70"}`}>
                →
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
