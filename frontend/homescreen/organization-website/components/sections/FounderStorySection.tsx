
export default function FounderStorySection() {
  return (
    <section className="w-full overflow-hidden bg-[#083b32]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-8 py-14 sm:px-12 md:px-16 md:py-16 lg:grid-cols-2 lg:gap-16 lg:px-20 lg:py-20 xl:px-24">

        {/* Story */}
        <div className="order-2 lg:order-1">
          <p className="text-sm font-semibold text-[#d8b85c]">
            Our Story
          </p>

          <h2
            className="mt-4 max-w-xl text-3xl font-medium leading-tight text-white sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A commitment to
            <br />
            lasting change.
          </h2>

          <div className="mt-6 max-w-xl space-y-4 text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
            <p>
              Sufi Humanity Aid began with a simple belief: meaningful
              change starts by standing alongside people and understanding
              what their communities truly need.
            </p>

            <p>
              What began as a commitment to helping others has grown into
              work focused on education, clean water, housing and community
              development.
            </p>

            <p>
              Today, we continue to build on that foundation, working with
              communities to create opportunities that can last for
              generations.
            </p>
          </div>

          <div className="mt-7 h-px w-16 bg-[#d8b85c]" />
        </div>

        {/* Founder Image */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative h-[390px] w-full max-w-[520px] sm:h-[460px]">

            {/* Decorative cream shape */}
            <div className="absolute right-4 top-2 h-32 w-32 rounded-full bg-[#f8f7f2]/15 sm:right-8 sm:h-40 sm:w-40" />

            {/* Decorative gold shape */}
            <div className="absolute bottom-8 left-4 h-24 w-24 rounded-full bg-[#d8b85c]/25 sm:left-8 sm:h-32 sm:w-32" />

            {/* Main image */}
            <div className="absolute inset-x-5 top-5 bottom-5 overflow-hidden rounded-[42%_58%_48%_52%/45%_42%_58%_55%] sm:inset-x-8">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/sufi-founder.jpg')",
                }}
              />

              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Small caption */}
            <div className="absolute bottom-2 right-0 max-w-[190px] rounded-full bg-[#f8f7f2] px-5 py-3 shadow-lg sm:bottom-4 sm:right-2">
              <p className="text-center text-xs font-semibold leading-4 text-[#083b32]">
                Standing alongside
                <br />
                communities
              </p>
            </div>

            {/* Gold accent line */}
            <div className="absolute left-0 top-1/2 h-px w-12 bg-[#d8b85c] sm:w-16" />
          </div>
        </div>

      </div>
    </section>
  );
}
