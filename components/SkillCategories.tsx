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
    <nav className="flex w-full justify-center px-6 translate-x-200 translate-y-100">
      <div className="flex items-center gap-4">
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
                h-[100px]
                min-w-[350px]
                items-center
                justify-center
                gap-5
                px-7
                font-mono
                transition-all
                duration-300

                ${
                  isActive
                    ? `
                      border
                      border-orange-400
                      bg-orange-500/[0.10]
                      text-orange-300
                      shadow-[0_0_25px_rgba(255,100,0,0.18)]
                    `
                    : `
                      border
                      border-transparent
                      bg-transparent
                      text-white/55
                      hover:text-white
                    `
                }
              `}
            >
              {/* Category name */}
              <span
                className={`
                  whitespace-nowrap
                  text-[50px]
                  font-semibold
                  tracking-[0.18em]
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "text-orange-300"
                      : "text-white/60 group-hover:text-orange-200"
                  }
                `}
              >
                {category.label}
              </span>

              {/* Number */}
              <span
                className={`
                  text-[13px]
                  tracking-[0.2em]
                  transition-colors
                  duration-300

                  ${
                    isActive
                      ? "text-orange-400"
                      : "text-white/25 group-hover:text-orange-400/70"
                  }
                `}
              >
                {category.number}
              </span>

              {/* Active bottom line */}
              <span
                className={`
                  absolute
                  bottom-0
                  left-[15%]
                  h-[2px]
                  bg-orange-400
                  shadow-[0_0_12px_rgba(255,100,0,0.9)]
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "w-[70%]"
                      : "w-0"
                  }
                `}
              />

              {/* Active corner indicator */}
              {isActive && (
                <>
                  <span className="absolute left-2 top-2 h-1.5 w-1.5 bg-orange-400 shadow-[0_0_8px_rgba(255,120,30,1)]" />

                  <span className="absolute right-2 top-2 h-1.5 w-1.5 bg-orange-400 shadow-[0_0_8px_rgba(255,120,30,1)]" />

                  <span className="absolute bottom-2 left-2 h-1.5 w-1.5 bg-orange-400 shadow-[0_0_8px_rgba(255,120,30,1)]" />

                  <span className="absolute bottom-2 right-2 h-1.5 w-1.5 bg-orange-400 shadow-[0_0_8px_rgba(255,120,30,1)]" />
                </>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}