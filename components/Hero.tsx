export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/background.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center px-10">
        <div>
          <p className="mb-4 text-sm tracking-[0.3em] uppercase">
            Welcome to my
          </p>

          <h1 className="text-7xl font-bold tracking-tight">
            PORTFOLIO
          </h1>

          <p className="mt-6 max-w-lg text-lg">
            Hi, I'm Kashif — a CSE student and developer
            building interactive digital experiences.
          </p>

          <button className="mt-8 rounded-full border px-6 py-3">
            Explore Work
          </button>
        </div>
      </div>

    </section>
  );
}