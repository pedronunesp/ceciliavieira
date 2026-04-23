import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import floral from "@/assets/floral-corner.png";
import brasao from "@/assets/brasao.png";

export const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Garantir que o video comece tocando mutado (unica forma de burlar o bloqueio de autoplay)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay blocked", e));
    }
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
      // Caso estivesse pausado, forçamos o play novamente com o som ativado
      videoRef.current.play(); 
    }
  };

  return (
    <>
      {/* Video Section */}
      <section className="relative w-full h-[100svh] overflow-hidden bg-black/5" onClick={isMuted ? toggleSound : undefined}>
        <video 
          ref={videoRef}
          src="/15 ANOS CECILIA - VERTICAL CONVITE.mp4"
          autoPlay 
          playsInline 
          loop 
          muted={true} // Tem que iniciar mutado pro navegador aceitar autoplay
          controls={false}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            maskImage: "linear-gradient(to bottom, black 40%, transparent 95%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 95%)"
          }}
        />
        
        {/* Unmute Button Overlay */}
        {isMuted && (
          <button 
            onClick={(e) => { e.stopPropagation(); toggleSound(); }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-3 bg-black/40 backdrop-blur-md px-6 py-4 rounded-2xl animate-pulse text-white shadow-xl border border-white/20"
          >
            <VolumeX size={32} />
            <span className="font-display tracking-widest text-xs uppercase">Tocar com Som</span>
          </button>
        )}
        
        {/* Scroll cue over the video */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
          <span className="font-display text-[10px] tracking-[0.45em] text-ink/80 drop-shadow-sm">
            DESLIZE
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-ink/60 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Brasão Section */}
      <section className="relative min-h-[80svh] flex flex-col items-center justify-center px-6 py-10 overflow-hidden mt-[-10vh]">
        {/* Floral decorations */}
        <img
          src={floral}
          alt=""
          aria-hidden="true"
          className="absolute top-0 -left-20 w-64 md:w-80 opacity-70 animate-sway-slow pointer-events-none mix-blend-multiply"
        />
        <img
          src={floral}
          alt=""
          aria-hidden="true"
          className="absolute -bottom-20 -right-16 w-64 md:w-80 opacity-70 animate-sway pointer-events-none mix-blend-multiply"
          style={{ transform: "scaleX(-1)" }}
        />

        {/* Soft glow halo */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "var(--gradient-glow)" }}
        />

        <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full">
          {/* Brasão centerpiece */}
          <div
            className="relative mb-6 animate-scale-in w-full flex justify-center"
            style={{ animationDelay: "0.2s" }}
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
            className="gold-divider w-32 my-6 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          />

          <p
            className="font-script text-4xl text-gold-deep mb-2 animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            celebra seus
          </p>

          <p
            className="font-display text-2xl tracking-[0.3em] text-ink animate-fade-in"
            style={{ animationDelay: "0.9s" }}
          >
            QUINZE ANOS
          </p>
        </div>
      </section>
    </>
  );
};
