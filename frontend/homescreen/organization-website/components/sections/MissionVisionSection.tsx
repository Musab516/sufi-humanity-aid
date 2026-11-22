
export default function MissionVisionSection() {
  return (
    <section className="w-full bg-[#f8f7f2] px-8 py-12 sm:px-12 md:px-16 md:py-16 lg:px-20 xl:px-24">
      <div className="mx-auto max-w-7xl">
      
        {/* Mission + Vision */}
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2">
          {/* Mission */}
          <div className="pb-8 md:pr-12 md:pb-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#69716c]">
              Mission
            </p>

            <h2
              className="mt-3 max-w-xl text-3xl font-medium leading-tight text-[#073d29] sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Creating sustainable change with communities.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-[#4d5752] sm:text-base">
              Sufi Humanity Aid works with communities to create practical,
              lasting opportunities through education, clean water, housing
              and community development.
            </p>
          </div>

          {/* Vision */}
          <div className="border-t border-[#dedbd2] pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#69716c]">
              Vision
            </p>

            <h2
              className="mt-3 max-w-xl text-3xl font-medium leading-tight text-[#073d29] sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Communities that can build brighter futures.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-[#4d5752] sm:text-base">
              We envision communities that are more resilient, self-reliant
              and equipped with the opportunities they need to thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
