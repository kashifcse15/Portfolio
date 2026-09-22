"use client";

export default function SkillCard() {
  return (
    <div className="skill-card-float relative h-[320px] w-[210px] shrink-0">
      {/* Outer atmospheric glow */}
      <div className="absolute -inset-3 rounded-[22px] bg-orange-500/10 blur-2xl" />

      {/* Main card */}
      <div
        className="
          group
          relative
          h-full
          w-full
          overflow-hidden
          border border-orange-400/70
          bg-[#070707]/90
          shadow-[0_0_30px_rgba(255,115,0,0.14)]
          backdrop-blur-md
          transition-all duration-500
          hover:scale-[1.04]
          hover:border-orange-300
          hover:shadow-[0_0_45px_rgba(255,115,0,0.30)]
        "
        style={{
          clipPath:
            "polygon(9% 0%, 91% 0%, 100% 9%, 100% 91%, 91% 100%, 9% 100%, 0% 91%, 0% 9%)",
        }}
      >
        {/* Inner frame */}
        <div
          className="pointer-events-none absolute inset-[3px] border border-orange-500/20"
          style={{
            clipPath:
              "polygon(9% 0%, 91% 0%, 100% 9%, 100% 91%, 91% 100%, 9% 100%, 0% 91%, 0% 9%)",
          }}
        />

        {/* Top metallic highlight */}
        <div className="absolute left-[8%] right-[8%] top-0 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent opacity-80" />

        {/* Orange corner lights */}
        <div className="absolute left-4 top-4 h-[2px] w-8 bg-orange-400 shadow-[0_0_10px_rgba(255,140,40,0.8)]" />
        <div className="absolute right-4 top-4 h-[2px] w-4 bg-orange-400/70" />

        {/* Number */}
        <div className="absolute left-5 top-5">
          <span className="font-mono text-[11px] font-semibold tracking-[0.3em] text-orange-300">
            01
          </span>

          <div className="mt-1 h-[2px] w-2 bg-orange-500" />
        </div>

        {/* Arrow */}
        <div className="absolute right-5 top-4">
          <span className="font-mono text-lg text-orange-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </div>

        {/* Subtle scan/grid texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,120,0,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,120,0,0.5)_1px,transparent_1px)] bg-[size:22px_22px]" />
        </div>

        {/* Central glow */}
        <div className="absolute left-1/2 top-[43%] h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/5 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5">
          {/* C++ badge */}
          <div
            className="
              relative
              mb-7
              flex
              h-[92px]
              w-[92px]
              items-center
              justify-center
              border
              border-orange-400/50
              bg-gradient-to-br
              from-orange-500/[0.12]
              to-transparent
              shadow-[inset_0_0_25px_rgba(255,100,0,0.08)]
              transition-all
              duration-500
              group-hover:border-orange-300
              group-hover:shadow-[0_0_25px_rgba(255,100,0,0.15)]
            "
            style={{
              clipPath:
                "polygon(12% 0%, 88% 0%, 100% 12%, 100% 88%, 88% 100%, 12% 100%, 0% 88%, 0% 12%)",
            }}
          >
            {/* Badge inner line */}
            <div className="absolute inset-2 border border-orange-400/10" />

            <span className="font-mono text-[25px] font-bold tracking-tight text-orange-300 drop-shadow-[0_0_10px_rgba(255,130,40,0.35)]">
              C++
            </span>

            {/* Small tech marks */}
            <span className="absolute bottom-2 left-3 text-[7px] tracking-widest text-orange-400/50">
              SYS
            </span>

            <span className="absolute right-3 top-2 text-[7px] tracking-widest text-orange-400/50">
              01
            </span>
          </div>

          {/* Name */}
          <h2 className="font-mono text-[25px] font-bold tracking-[0.08em] text-white">
            C++
          </h2>

          {/* Category */}
          <p className="mt-3 font-mono text-[9px] font-medium tracking-[0.42em] text-orange-300/80">
            LANGUAGES
          </p>
        </div>

        {/* Bottom separator */}
        <div className="absolute bottom-7 left-7 right-7">
          <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent shadow-[0_0_10px_rgba(255,110,20,0.7)]" />

          <div className="mt-2 flex items-center justify-between">
            <span className="font-mono text-[7px] tracking-[0.3em] text-orange-300/40">
              SYSTEM
            </span>

            <span className="font-mono text-[7px] tracking-[0.25em] text-orange-300/40">
              ACTIVE
            </span>
          </div>
        </div>

        {/* Bottom corner lights */}
        <div className="absolute bottom-6 left-5 h-1 w-1 bg-orange-400 shadow-[0_0_7px_rgba(255,140,40,0.9)]" />
        <div className="absolute bottom-6 right-5 h-1 w-1 bg-orange-400 shadow-[0_0_7px_rgba(255,140,40,0.9)]" />
      </div>
    </div>
  );
}