import Hero from "@/components/Hero";
import Scene from "@/components/Scene";

export default function Home() {
  return (
    <main>
      {/* ================= PAGE 1 ================= */}
      <section className="relative h-screen overflow-hidden">
        <Hero />

        <div className="absolute inset-0 z-10 h-screen w-screen">
          <Scene />
        </div>
      </section>

      {/* ================= PAGE 2 ================= */}
      <section className="relative h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/skills-bg.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content will go here */}
        <div className="relative z-10 h-full">
          {/* Skill cards later */}
        </div>
      </section>
    </main>
  );
}