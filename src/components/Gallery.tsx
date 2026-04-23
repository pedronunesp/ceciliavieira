import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import floral from "@/assets/floral-corner.png";
import { Reveal } from "./Reveal";

const photos = [
  { src: photo1, alt: "Cecília em vestido rosa florido", caption: "delicadeza" },
  { src: photo2, alt: "Cecília entre peônias", caption: "essência" },
  { src: photo3, alt: "Cecília iluminada por velas", caption: "encanto" },
];

export const Gallery = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <img
        src={floral}
        alt=""
        aria-hidden="true"
        className="absolute top-10 -right-24 w-56 opacity-50 animate-sway-slow pointer-events-none"
      />

      <Reveal variant="blur" className="text-center mb-16">
        <p className="font-display text-[10px] tracking-[0.5em] text-gold-deep/80 mb-3">
          ENSAIO
        </p>
        <p className="font-script text-4xl text-gold-deep mb-2">retratos</p>
        <div className="gold-divider w-24 mx-auto" />
      </Reveal>

      <div className="max-w-md mx-auto space-y-12">
        {photos.map((photo, i) => (
          <div key={i} className="mb-12">
            <Reveal variant="blur" delay={150}>
              <figure
                className={`relative group ${i % 2 === 0 ? "" : "ml-8"}`}
              >
                <div
                  className="relative overflow-hidden rounded-[40%_60%_55%_45%/50%_45%_55%_50%] shadow-petal"
                  style={{ aspectRatio: "3/4" }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full object-cover animate-ken-burns"
                  />
                  <div
                    className="absolute inset-0 mix-blend-soft-light"
                    style={{ background: "linear-gradient(180deg, hsl(42 70% 85% / 0.3) 0%, hsl(350 55% 85% / 0.2) 100%)" }}
                  />
                  <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 60px hsl(15 30% 30% / 0.25)" }} />
                </div>

                <figcaption className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass-gold px-5 py-1.5 rounded-full">
                  <span className="font-script text-xl text-gold-deep whitespace-nowrap">{photo.caption}</span>
                </figcaption>

                <img
                  src={floral}
                  alt=""
                  aria-hidden="true"
                  className={`absolute w-24 opacity-80 animate-sway pointer-events-none ${
                    i % 2 === 0 ? "-bottom-6 -right-8" : "-top-6 -left-8"
                  }`}
                  style={{ transform: i % 2 === 0 ? "rotate(20deg)" : "rotate(-20deg) scaleX(-1)" }}
                />
              </figure>
            </Reveal>

            {i === 0 && (
              <div className="py-16 text-center">
                <Reveal variant="blur">
                  <p className="font-script text-4xl text-gold-deep">— um sonho —</p>
                </Reveal>
              </div>
            )}
            
            {i === 1 && (
              <div className="py-16 text-center">
                <Reveal variant="blur">
                  <p className="font-display text-3xl md:text-4xl leading-[1.4] text-ink">
                    Uma noite para
                    <br />
                    <em className="font-serif-elegant italic text-blush-deep">florescer instantes</em>
                    <br />
                    e celebrar a vida.
                  </p>
                </Reveal>
              </div>
            )}
            
            {i === 2 && (
              <div className="pt-16 pb-8 text-center">
                <Reveal variant="blur">
                  <div className="gold-divider w-20 mx-auto mb-8" />
                  <p className="font-serif-elegant italic text-xl text-ink/80 leading-relaxed">
                    "Quinze rosas desabrocharam,<br />
                    quinze desejos ao vento.<br />
                    Vem comigo viver este momento."
                  </p>
                </Reveal>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
