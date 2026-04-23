import { useEffect, useState } from "react";
import { Envelope } from "@/components/Envelope";
import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { EventDetails } from "@/components/EventDetails";
import { Actions } from "@/components/Actions";
import { Finale } from "@/components/Finale";
import { Particles } from "@/components/Particles";

const Index = () => {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (opened) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [opened]);

  return (
    <main className="relative min-h-screen paper-texture">
      {!opened && <Envelope onOpened={() => setOpened(true)} />}

      {opened && <Particles count={30} />}

      <div
        className={`transition-all duration-1000 ${
          opened ? "opacity-100 blur-0" : "opacity-0 blur-md"
        }`}
      >
        <Hero />
        <Gallery />
        <EventDetails />
        <Actions />
        <Finale />
      </div>
    </main>
  );
};

export default Index;
