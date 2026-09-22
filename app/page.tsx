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

            <div className="pt-24">
              <SkillCategories
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            </div>


            {/* ================= SKILL CARDS ================= */}

            <div className="flex flex-1 items-center justify-center gap-7 px-8 py-12">

              {filteredSkills.map((skill) => (
                <SkillCard
                  key={skill.number}
                  skill={skill}
                />
              ))}

            </div>

          </div>

        </section>

      </main>
    </PageTransitions>
  );
}