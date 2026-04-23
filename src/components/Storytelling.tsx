import { Reveal } from "./Reveal";

export const Storytelling = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-md mx-auto text-center">
        <Reveal variant="blur">
          <p className="font-script text-3xl text-gold-deep mb-6">— um sonho —</p>
        </Reveal>

        <Reveal variant="blur" delay={200}>
          <p className="font-display text-3xl md:text-4xl leading-[1.4] text-ink mb-6">
            Uma noite para
            <br />
            <em className="font-serif-elegant italic text-blush-deep">florescer instantes</em>
            <br />
            e celebrar a vida.
          </p>
        </Reveal>

        <Reveal variant="blur" delay={400}>
          <div className="gold-divider w-20 mx-auto my-8" />
          <p className="font-serif-elegant italic text-lg text-ink/70 leading-relaxed">
            "Quinze rosas desabrocharam,<br />
            quinze desejos ao vento.<br />
            Vem comigo viver este momento."
          </p>
        </Reveal>
      </div>
    </section>
  );
};
