export default function OurWorkHero() {
  return (
    <section className="w-full overflow-hidden bg-[#f8f7f2]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center px-6 py-12 sm:px-10 md:px-14 md:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-16 lg:py-14 xl:py-16">
        
        {/* LEFT — CONTENT */}
        <div className="relative z-10 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b89a55]">
            Our Work
          </p>

          <h1
            className="mt-4 text-4xl font-medium leading-[1.05] text-[#073d29] sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Creating change
            <br />
            where it
            <br />
            matters most.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-[#4d5752] md:text-lg">
            We work alongside communities to create practical opportunities
            through education, clean water, housing and sustainable community
            development.
          </p>

          {/* IMPACT LINE */}
          <div className="mt-7 max-w-sm">
            <div className="flex items-center justify-between text-xs font-semibold text-[#073d29]">
              <span>Our impact</span>
              <span className="text-[#b89a55]">Growing together</span>
            </div>

            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#dedbd2]">
              <div className="h-full w-[72%] rounded-full bg-[#d8b85c]" />
            </div>

            <p className="mt-2 text-xs text-[#69716c]">
              Supporting communities through long-term, practical action.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md bg-[#d8b85c] px-6 py-3 text-sm font-semibold text-[#073d29] transition hover:bg-[#c9a94f]"
            >
              Explore Our Work
              <span className="ml-2">→</span>
            </a>

           
          </div>
        </div>

        {/* RIGHT — IMAGE COMPOSITION */}
        <div className="relative mt-12 min-h-[430px] sm:min-h-[520px] lg:mt-0 lg:min-h-[590px]">
          
          {/* Large subtle circle behind */}
          <div className="absolute right-[5%] top-[6%] h-[360px] w-[360px] rounded-full border border-[#d8b85c]/30 sm:h-[440px] sm:w-[440px] lg:right-[3%] lg:top-[4%] lg:h-[500px] lg:w-[500px]" />

          {/* Small decorative circle */}
          <div className="absolute right-[8%] top-[2%] h-5 w-5 rounded-full border-2 border-[#d8b85c] sm:right-[10%] sm:h-6 sm:w-6" />

          {/* MAIN IMAGE */}
          <div className="absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[8px] border-white shadow-xl sm:h-[390px] sm:w-[390px] lg:h-[455px] lg:w-[455px]">
            <img
              src="/images/sujawal-ration-distribution.jpg"
              alt="Community members"
              className="h-full w-full object-cover"
            />
          </div>

          {/* TOP RIGHT SMALL IMAGE */}
          <div className="absolute right-[3%] top-[10%] h-[100px] w-[100px] overflow-hidden rounded-full border-4 border-white shadow-lg sm:right-[5%] sm:h-[125px] sm:w-[125px] lg:right-[6%] lg:h-[135px] lg:w-[135px]">
            <img
              src="/images/hindu-community-ration-distribution.jpg"
              alt="Children in a community"
              className="h-full w-full object-cover"
            />
          </div>

          {/* LEFT SMALL IMAGE */}
          <div className="absolute bottom-[16%] left-[3%] h-[105px] w-[105px] overflow-hidden rounded-full border-4 border-white shadow-lg sm:bottom-[13%] sm:left-[5%] sm:h-[130px] sm:w-[130px]">
            <img
              src="/images/sufi p5.jpg"
              alt="Children learning"
              className="h-full w-full object-cover"
            />
          </div>

          {/* SMALL GOLD DOT */}
          <div className="absolute left-[16%] top-[19%] h-3 w-3 rounded-full bg-[#d8b85c] sm:left-[15%] sm:h-4 sm:w-4" />

          {/* SMALL GREEN DOT */}
          <div className="absolute bottom-[19%] right-[12%] h-3 w-3 rounded-full bg-[#2b8a68] sm:h-4 sm:w-4" />

          {/* IMPACT BUBBLE */}
          <div className="absolute bottom-[3%] right-[5%] rounded-2xl bg-white px-5 py-4 shadow-lg sm:bottom-[5%] sm:right-[8%]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b89a55]">
              Communities
            </p>

            <p className="mt-1 text-2xl font-bold leading-none text-[#073d29]">
              40+
            </p>

            <p className="mt-1 text-xs text-[#69716c]">
              supported through our work
            </p>
          </div>

          {/* GOLD RING DETAIL */}
          <div className="absolute bottom-[8%] left-[20%] h-12 w-12 rounded-full border-2 border-[#d8b85c] sm:bottom-[10%] sm:left-[22%] sm:h-16 sm:w-16" />
        </div>
      </div>
    </section>
  );
}