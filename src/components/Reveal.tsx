import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  variant?: "fade" | "blur";
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}

export const Reveal = ({ children, className = "", variant = "fade", delay = 0, as: Tag = "div" }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  const baseClass = variant === "blur" ? "reveal-blur" : "reveal";

  return (
    <Tag
      // @ts-expect-error - dynamic tag with ref
      ref={ref}
      className={`${baseClass} ${visible ? "in-view" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
};
