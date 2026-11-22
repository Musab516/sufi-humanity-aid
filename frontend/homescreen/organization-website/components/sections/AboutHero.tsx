
export default function AboutHero() {
  return (
    <section className="relative flex min-h-[420px] w-full items-center overflow-hidden bg-[#073d29] sm:min-h-[460px] lg:min-h-[500px]">
      {/* Background photograph */}
      <img
        src="/images/about-hero.jpg"
        alt="Sufi Humanity Aid supporting families through food distribution"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark overlay for readable text */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#073d29]/95 via-[#073d29]/75 to-[#073d29]/20" />

      {/* Text content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-8 py-14 sm:px-12 sm:py-16 md:px-16 lg:px-20 xl:px-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d2b166] sm:text-sm">
            About Sufi Humanity Aid
          </p>

          <h1
            className="mt-5 text-4xl font-medium leading-[1.12] text-[#f5f2e9] sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Compassion that
            <br />
            turns into action.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            Sufi Humanity Aid works alongside communities to support access
            to clean water, food assistance and practical community support.
          </p>
        </div>
      </div>

      
    </section>
  );
}
