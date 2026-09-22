"use client";

import { useState } from "react";

type SkillCardProps = {
  skill: {
    number: string;
    name: string;
    category: string;
    icon: string;
    summary: string;
    topics: string[];
  };
};

export default function SkillCard({ skill }: SkillCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="skill-card-float relative h-[910px] w-[600px] shrink-0 left-200 [perspective:1800px] cursor-pointer"
      onClick={() => setFlipped((prev) => !prev)}
    >
      {/* ===================================================== */}
      {/* 3D FLIP WRAPPER */}
      {/* ===================================================== */}

      <div
        className={`
          relative h-full w-full
          [transform-style:preserve-3d]
          transition-transform duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${flipped ? "[transform:rotateY(180deg)]" : ""}
        `}
      >

        {/* ===================================================== */}
        {/* FRONT — YOUR ORIGINAL CARD */}
        {/* ===================================================== */}

        <div
          className="
            absolute inset-0
            [backface-visibility:hidden]
          "
        >
          {/* ===================================================== */}
          {/* OUTER AMBIENT GLOW */}
          {/* ===================================================== */}

          <div className="absolute -inset-4 bg-orange-500/[0.08] blur-2xl transition-all duration-500 group-hover:bg-orange-500/[0.16]" />

          {/* ===================================================== */}
          {/* CARD */}
          {/* ===================================================== */}

          <div
            className="
              group
              relative
              h-full
              w-full
              overflow-hidden
              border
              border-orange-400/60
              bg-[#050607]/95
              shadow-[0_0_25px_rgba(255,95,0,0.10)]
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-4
              hover:border-orange-300/90
              hover:shadow-[0_0_45px_rgba(255,100,0,0.25)]
            "
            style={{
              clipPath:
                "polygon(7% 0%, 93% 0%, 100% 7%, 100% 93%, 93% 100%, 7% 100%, 0% 93%, 0% 7%)",
            }}
          >
            {/* INNER FRAME */}

            <div
              className="pointer-events-none absolute inset-[4px] border border-orange-500/[0.18]"
              style={{
                clipPath:
                  "polygon(7% 0%, 93% 0%, 100% 7%, 100% 93%, 93% 100%, 7% 100%, 0% 93%, 0% 7%)",
              }}
            />

            {/* TOP EDGE LIGHT */}

            <div className="absolute left-[9%] right-[9%] top-0 h-px bg-gradient-to-r from-transparent via-orange-300/90 to-transparent shadow-[0_0_10px_rgba(255,130,40,0.7)]" />

            {/* Small orange top corners */}

            <div className="absolute left-5 top-5 h-[2px] w-9 bg-orange-400 shadow-[0_0_8px_rgba(255,120,20,0.8)]" />

            <div className="absolute right-5 top-5 h-[2px] w-5 bg-orange-400/60" />

            {/* NUMBER */}

            <div className="absolute left-6 top-6 z-20">
              <span className="font-mono text-[50px] font-semibold tracking-[0.35em] text-orange-300">
                {skill.number}
              </span>

              <div className="mt-1.5 h-[2px] w-3 bg-orange-500 shadow-[0_0_8px_rgba(255,100,0,0.9)]" />
            </div>

            {/* ARROW */}

            <div className="absolute right-6 top-5 z-20">
              <span className="font-mono text-[50px] text-orange-300/80 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-200">
                ↗
              </span>
            </div>

            {/* BACKGROUND GRID */}

            <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,120,0,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,120,0,0.8)_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            {/* VERTICAL SCAN LIGHT */}

            <div className="pointer-events-none absolute right-0 top-[20%] h-[35%] w-px bg-gradient-to-b from-transparent via-orange-400/50 to-transparent" />

            <div className="pointer-events-none absolute left-0 top-[55%] h-[20%] w-px bg-gradient-to-b from-transparent via-orange-500/30 to-transparent" />

            {/* CENTRAL ATMOSPHERIC GLOW */}

            <div className="pointer-events-none absolute left-1/2 top-[43%] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/[0.045] blur-3xl transition-all duration-700 group-hover:bg-orange-500/[0.10]" />

            {/* MAIN CONTENT */}

            <div className="relative z-10 flex h-full flex-col mt-40 ml-39 px-6">

              {/* ICON CONTAINER */}

              <div
                className="
                  relative
                  mb-8
                  flex
                  h-[250px]
                  w-[250px]
                  items-center
                  justify-center
                  border
                  border-orange-400/45
                  bg-gradient-to-br
                  from-orange-500/[0.10]
                  via-transparent
                  to-orange-500/[0.02]
                  shadow-[inset_0_0_35px_rgba(255,100,0,0.06)]
                  transition-all
                  duration-500
                  group-hover:border-orange-300/80
                  group-hover:shadow-[0_0_30px_rgba(255,100,0,0.12),inset_0_0_35px_rgba(255,100,0,0.08)]
                "
                style={{
                  clipPath:
                    "polygon(12% 0%, 88% 0%, 100% 12%, 100% 88%, 88% 100%, 12% 100%, 0% 88%, 0% 12%)",
                }}
              >
                {/* Inner icon frame */}

                <div
                  className="absolute inset-[7px] border border-orange-400/[0.10]"
                  style={{
                    clipPath:
                      "polygon(12% 0%, 88% 0%, 100% 12%, 100% 88%, 88% 100%, 12% 100%, 0% 88%, 0% 12%)",
                  }}
                />

                <i
                  className={`
                    ${skill.icon}
                    relative
                    z-10
                    text-[88px]
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  `}
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(58%) sepia(95%) saturate(2500%) hue-rotate(5deg) brightness(105%) contrast(105%)",
                  }}
                  aria-hidden="true"
                />

                {/* Tiny system labels */}

                <span className="absolute bottom-3 left-4 font-mono text-[7px] tracking-[0.25em] text-orange-400/40">
                  SYS
                </span>

                <span className="absolute right-4 top-3 font-mono text-[7px] tracking-[0.2em] text-orange-400/40">
                  {skill.number}
                </span>
              </div>

              {/* SKILL NAME */}

              <h2 className="max-w-full truncate px-2 mt-10 font-mono text-[85px] font-bold tracking-[0.06em] text-white">
                {skill.name}
              </h2>

              {/* CATEGORY */}

              <p className="mt-3 font-mono text-[39px] font-medium tracking-[0.35em] text-orange-300/75">
                {skill.category}
              </p>
            </div>

            {/* BOTTOM SYSTEM BAR */}

            <div className="absolute bottom-7 left-7 right-7">
              <div className="h-px bg-gradient-to-r from-transparent via-orange-400/90 to-transparent shadow-[0_0_10px_rgba(255,100,0,0.7)]" />

              <div className="mt-2.5 flex items-center justify-between">
                <span className="font-mono text-[7px] tracking-[0.3em] text-orange-300/35">
                  SYSTEM
                </span>

                <span className="font-mono text-[7px] tracking-[0.25em] text-orange-300/35">
                  ACTIVE
                </span>
              </div>
            </div>

            {/* BOTTOM CORNER LIGHTS */}

            <div className="absolute bottom-6 left-5 h-1 w-1 bg-orange-400 shadow-[0_0_8px_rgba(255,130,40,0.9)]" />

            <div className="absolute bottom-6 right-5 h-1 w-1 bg-orange-400 shadow-[0_0_8px_rgba(255,130,40,0.9)]" />

            {/* SIDE MICRO DETAILS */}

            <div className="absolute left-4 top-1/2 h-8 w-px -translate-y-1/2 bg-orange-500/30" />

            <div className="absolute right-4 top-1/2 h-8 w-px -translate-y-1/2 bg-orange-500/30" />
          </div>
        </div>

        {/* ===================================================== */}
        {/* BACK */}
        {/* ===================================================== */}

        <div
          className="
            absolute
            inset-0
            overflow-hidden
            border
            border-orange-400/60
            bg-[#050607]/98
            shadow-[0_0_45px_rgba(255,95,0,0.18)]
            backdrop-blur-xl
            [backface-visibility:hidden]
            [transform:rotateY(180deg)]
          "
          style={{
            clipPath:
              "polygon(7% 0%, 93% 0%, 100% 7%, 100% 93%, 93% 100%, 7% 100%, 0% 93%, 0% 7%)",
          }}
        >
          {/* Inner frame */}

          <div
            className="pointer-events-none absolute inset-[4px] border border-orange-500/[0.18]"
            style={{
              clipPath:
                "polygon(7% 0%, 93% 0%, 100% 7%, 100% 93%, 93% 100%, 7% 100%, 0% 93%, 0% 7%)",
            }}
          />

          {/* Top edge */}

          <div className="absolute left-[9%] right-[9%] top-0 h-px bg-gradient-to-r from-transparent via-orange-300/90 to-transparent shadow-[0_0_10px_rgba(255,130,40,0.7)]" />

          {/* Header */}

          <div className="absolute left-8 right-8 top-8 flex items-start justify-between">
            <div>
              <p className="font-mono text-[18px] tracking-[0.35em] text-orange-300">
                SYSTEM MODULE
              </p>

              <p className="mt-2 font-mono text-[12px] tracking-[0.3em] text-white/30">
                {skill.number} // KNOWLEDGE DATABASE
              </p>
            </div>

            <span className="font-mono text-[50px] text-orange-300/80">
              ↙
            </span>
          </div>

          {/* BACK CONTENT */}

<div className="relative z-10 flex h-full flex-col px-12 pt-[115px]">

  {/* TOP META */}

  <div className="flex items-center justify-between">
    <span className="font-mono text-[20px] tracking-[0.25em] text-orange-300">
      {skill.number} / 28
    </span>

    <span className="font-mono text-[42px] text-orange-300/80">
      ↙
    </span>
  </div>

  {/* SKILL NAME */}

  <h2 className="mt-7 font-mono text-[82px] font-bold leading-none tracking-[0.04em] text-orange-400">
    {skill.name}
  </h2>

  {/* CATEGORY */}

  <p className="mt-4 font-mono text-[20px] font-medium tracking-[0.3em] text-white/45">
    {skill.category}
  </p>

  {/* DIVIDER */}

  <div className="mt-8 h-[2px] w-full bg-gradient-to-r from-orange-400 via-orange-500/40 to-transparent shadow-[0_0_10px_rgba(255,100,0,0.5)]" />

  {/* WHAT I WORK WITH */}

  <div className="mt-10">

    <p className="font-mono text-[21px] font-semibold tracking-[0.25em] text-white">
      WHAT I WORK WITH
    </p>

    {/* KEY POINTS */}

    <div className="mt-8 space-y-6">

      {skill.topics.map((topic) => (
        <div
          key={topic}
          className="flex items-center gap-5"
        >

          <span className="font-mono text-[34px] font-bold text-orange-400">
            &gt;
          </span>

          <span className="font-mono text-[36px] font-medium tracking-[0.02em] text-white/75">
            {topic}
          </span>

        </div>
      ))}

    </div>

  </div>

  {/* BOTTOM SYSTEM BAR */}

  <div className="mt-auto pb-8">

    <div className="h-px bg-gradient-to-r from-transparent via-orange-400/80 to-transparent shadow-[0_0_10px_rgba(255,100,0,0.5)]" />

    <div className="mt-4 flex items-center justify-between">

      <span className="font-mono text-[11px] tracking-[0.3em] text-white/30">
        CODE
      </span>

      <span className="font-mono text-[11px] tracking-[0.3em] text-orange-400/60">
        OPTIMISE
      </span>

      <span className="font-mono text-[11px] tracking-[0.3em] text-white/30">
        SOLVE
      </span>

    </div>

  </div>

</div>

          {/* Corner lights */}

          <div className="absolute left-6 top-6 h-2 w-2 bg-orange-400 shadow-[0_0_10px_rgba(255,130,40,0.9)]" />

          <div className="absolute right-6 bottom-6 h-2 w-2 bg-orange-400 shadow-[0_0_10px_rgba(255,130,40,0.9)]" />

          {/* Side details */}

          <div className="absolute left-5 top-1/2 h-16 w-px -translate-y-1/2 bg-orange-500/30" />

          <div className="absolute right-5 top-1/2 h-16 w-px -translate-y-1/2 bg-orange-500/30" />
        </div>
      </div>
    </div>
  );
}