"use client";

export default function SkillCard() {
  return (
    <div className="group relative h-[360px] w-[260px]">
      {/* Outer orange glow */}
      <div className="absolute inset-0 bg-orange-500/30 blur-xl transition-all duration-500 group-hover:bg-orange-500/50" />

      {/* Card */}
      <div
        className="relative h-full w-full overflow-hidden border border-orange-500/80 bg-black/80"
        style={{
          clipPath:
            "polygon(12% 0%, 88% 0%, 100% 12%, 100% 88%, 88% 100%, 12% 100%, 0% 88%, 0% 12%)",
        }}
      >
        {/* Inner border */}
        <div
          className="absolute inset-[3px] border border-orange-500/30"
          style={{
            clipPath:
              "polygon(12% 0%, 88% 0%, 100% 12%, 100% 88%, 88% 100%, 12% 100%, 0% 88%, 0% 12%)",
          }}
        />

        {/* Top-left number */}
        <span className="absolute left-5 top-5 font-mono text-xs tracking-[0.3em] text-orange-400">
          01
        </span>

        {/* Top-right arrow */}
        <span className="absolute right-5 top-4 text-lg text-orange-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
          ↗
        </span>

        {/* Main content */}
        <div className="flex h-full flex-col items-center justify-center">
          
          {/* C++ Icon */}
          <div className="mb-6 flex h-24 w-24 items-center justify-center border border-orange-500/40 bg-orange-500/5">
            <span className="font-mono text-4xl font-bold text-orange-400">
              C++
            </span>
          </div>

          {/* Skill name */}
          <h2 className="font-mono text-3xl font-bold tracking-wider text-white">
            C++
          </h2>

          {/* Category */}
          <p className="mt-3 font-mono text-xs tracking-[0.35em] text-orange-400">
            LANGUAGES
          </p>
        </div>

        {/* Bottom orange line */}
        <div className="absolute bottom-6 left-8 right-8 h-[2px] bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.9)]" />

        {/* Tiny decorative corners */}
        <div className="absolute left-8 top-10 h-1 w-1 bg-orange-400" />
        <div className="absolute bottom-10 right-8 h-1 w-1 bg-orange-400" />
      </div>
    </div>
  );
}