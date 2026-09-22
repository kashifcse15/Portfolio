import Hero from "@/components/Hero";
import Scene from "@/components/Scene";
import PageTransitions from "@/components/PageTransitions";
import SkillCard from "@/components/SkillCard";

export default function Home() {
  return (
    <PageTransitions>
      <main>

        {/* ================= PAGE 1 ================= */}

        <section className="portfolio-page-1 relative h-screen overflow-hidden">
          <Hero />

          <div className="absolute inset-0 z-10 h-screen w-screen">
            <Scene />
          </div>
        </section>


        {/* ================= PAGE 2 ================= */}

        <section className="portfolio-page-2 relative h-screen overflow-hidden">

          {/* Background */}
          <div className="absolute inset-0">
            <img
              src="/images/skills-bg.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          {/* C++ Card */}
          <div className="relative z-10 flex h-full items-center justify-center">
            <SkillCard />
            <SkillCard />
            <SkillCard />
            <SkillCard />
            <SkillCard />


          </div>

        </section>

      </main>
    </PageTransitions>
  );
}