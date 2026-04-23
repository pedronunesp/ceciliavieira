import { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export const Particles = ({ count = 25 }: { count?: number }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const arr: Particle[] = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 5 + 2,
      duration: Math.random() * 12 + 14,
      delay: Math.random() * 15,
      opacity: Math.random() * 0.6 + 0.3,
    }));
    setParticles(arr);
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute block rounded-full animate-float-up"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: `radial-gradient(circle, hsl(42 80% 80% / ${p.opacity}) 0%, hsl(350 60% 85% / ${p.opacity * 0.5}) 60%, transparent 100%)`,
            boxShadow: `0 0 ${p.size * 3}px hsl(42 80% 75% / 0.6)`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
