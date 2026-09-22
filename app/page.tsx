"use client";

import { useState } from "react";

import Hero from "@/components/Hero";
import Scene from "@/components/Scene";
import PageTransitions from "@/components/PageTransitions";
import SkillCard from "@/components/SkillCard";
import SkillCategories from "@/components/SkillCategories";

import { skills } from "@/constants/skills";
import { skillCategories } from "@/constants/skillCategories";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(
    skillCategories[0].id
  );

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

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

        <section className="portfolio-page-2 relative min-h-screen overflow-hidden">

          {/* Background */}

          <div className="absolute inset-0">
            <img
              src="/images/skills-bg.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>


          {/* Page 2 Content */}

          <div className="relative z-10 flex min-h-screen flex-col">


            {/* ================= CATEGORY NAVIGATION ================= */}

            <div className="flex justify-center pt-28 mt-30">
              <SkillCategories
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            </div>


            {/* ================= SKILL CARDS ================= */}

            <div className="flex flex-1 items-center justify-center gap-10 px-8 pb-4">
              {filteredSkills.map((skill) => (
                <SkillCard
                  key={skill.number}
                  skill={skill}
                />
              ))}
            </div>


            {/* ================= NOTE ================= */}

            <div className="relative h-[100px]">

              <div className="absolute translate-x-[2800px] bottom-170 flex items-center ">


                {/* LEFT DECORATIVE LINE */}

                <div className="h-[2px] w-40 bg-gradient-to-r from-transparent via-orange-500/40 to-orange-400/80" />


                {/* NOTE CONTENT */}

                <div className="flex items-center gap-6">


                  {/* ORANGE SYSTEM INDICATOR */}

                  <div className="relative flex h-10 w-10 items-center justify-center">

                    <div className="absolute inset-0 rotate-45 border-2 border-orange-400/70" />

                    <div className="h-2.5 w-2.5 animate-pulse bg-orange-400 shadow-[0_0_15px_rgba(255,120,30,1)]" />

                  </div>


                  {/* NOTE LABEL */}

                  <span className="font-mono text-[70px] font-bold text-orange-400">
                    NOTE : 
                  </span>


                  {/* MESSAGE */}

                  <span className="font-mono text-[70px] font-semibold  text-white/70">
                    CLICK ANY CARD TO EXPLORE MORE
                  </span>

                </div>


                {/* RIGHT DECORATIVE LINE */}

                <div className="h-[2px] w-40 bg-gradient-to-l from-transparent via-orange-500/40 to-orange-400/80" />

              </div>

            </div>

          </div>

        </section>

      </main>
    </PageTransitions>
  );
}