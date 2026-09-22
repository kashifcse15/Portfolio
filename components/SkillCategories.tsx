"use client";

import { skillCategories } from "@/constants/skillCategories";

type SkillCategoriesProps = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

export default function SkillCategories({
  activeCategory,
  setActiveCategory,
}: SkillCategoriesProps) {
  return (
    <nav className="w-full overflow-x-auto">
      <div className="flex min-w-max items-center border-y border-orange-500/20">
        {skillCategories.map((category) => {
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                group
                relative
                flex
                h-[64px]
                items-center
                gap-8
                border-r
                border-orange-500/20
                px-8
                font-mono
                transition-all
                duration-300
                ${
                  isActive
                    ? "bg-orange-500/[0.08] text-orange-400"
                    : "text-white/60 hover:bg-orange-500/[0.04] hover:text-white"
                }
              `}
            >
              {/* Category name */}
              <span className="text-sm font-semibold tracking-[0.2em]">
                {category.label}
              </span>

              {/* Number */}
              <span
                className={`
                  text-xs tracking-[0.2em]
                  ${
                    isActive
                      ? "text-orange-400"
                      : "text-white/30 group-hover:text-orange-400/70"
                  }
                `}
              >
                {category.number}
              </span>

              {/* Active underline */}
              <span
                className={`
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  bg-orange-500
                  shadow-[0_0_12px_rgba(249,115,22,0.8)]
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }
                `}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
}