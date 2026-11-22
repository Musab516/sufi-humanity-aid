
import Image from "next/image";
import Link from "next/link";
import { HandHeart, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#073d29]">

      {/* DESKTOP HERO */}
      <div className="relative hidden min-h-[560px] lg:block">

        {/* Main photograph with organic feathered edge */}
        <div
          className="absolute inset-y-0 left-0 z-[1] w-[67%]"
          style={{
            maskImage:
              "radial-gradient(ellipse 105% 125% at 0% 50%, black 48%, rgba(0,0,0,0.95) 57%, rgba(0,0,0,0.72) 66%, rgba(0,0,0,0.25) 79%, transparent 94%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 105% 125% at 0% 50%, black 48%, rgba(0,0,0,0.95) 57%, rgba(0,0,0,0.72) 66%, rgba(0,0,0,0.25) 79%, transparent 94%)",
          }}
        >
          <Image
            src="/images/water-hand-pump.jpg"
            alt="Children and community members using a newly installed water hand pump"
            fill
            priority
            sizes="67vw"
            className="object-cover object-[center_45%]"
          />
        </div>

        {/* Soft photographic edge texture */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-[67%]"
          style={{
            maskImage:
              "radial-gradient(ellipse 90% 110% at 0% 50%, transparent 48%, black 68%, transparent 94%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 110% at 0% 50%, transparent 48%, black 68%, transparent 94%)",
          }}
        >
          <Image
            src="/images/water-hand-pump.jpg"
            alt=""
            fill
            sizes="67vw"
            className="scale-105 object-cover object-[center_45%] blur-[12px] opacity-50"
          />
        </div>

        {/* Additional soft green transition */}
        <div
          className="pointer-events-none absolute inset-0 z-[3]"
          style={{
            background:
              "linear-gradient(to right, transparent 40%, rgba(7,61,41,0.04) 50%, rgba(7,61,41,0.35) 62%, rgba(7,61,41,0.78) 72%, #073d29 82%)",
          }}
        />

        {/* TEXT — RIGHT */}
        <div className="relative z-10 ml-auto flex min-h-[560px] w-[42%] items-center justify-end pr-10 pl-5 xl:pr-16">
          <div className="ml-auto w-full max-w-[520px] text-right">

            {/* Eyebrow */}
            <p
              className="text-xs font-medium uppercase leading-6 tracking-[0.2em] text-[#d8b85c]"
              style={{
                fontFamily: "var(--font-libre-franklin), sans-serif",
              }}
            >
              People | Communities |
              <br />
              A Brighter Tomorrow
            </p>

            {/* Main heading */}
            <h1
              className="mt-5 text-[48px] font-medium leading-[1.08] tracking-[-0.025em] text-[#f5f2e9] xl:text-[64px]"
              style={{
                fontFamily: "var(--font-source-serif), serif",
              }}
            >
              Real Change
              <br />
              Lasts <span className="text-[#d2b166]">Longer.</span>
            </h1>

            {/* Description */}
            <p
              className="ml-auto mt-6 max-w-[440px] text-right text-[15px] leading-7 text-[#e5e0d4] xl:text-base"
              style={{
                fontFamily: "var(--font-libre-franklin), sans-serif",
              }}
            >
              Creating sustainable change through education,
              <br /> 
              clean water, housing and community development.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-end gap-3">

              <Link
                href="/#donate"
                className="group inline-flex items-center gap-2 rounded-full bg-[#d2b166] px-6 py-3.5 text-xs font-semibold text-[#073d29] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e0c27a]"
                style={{
                  fontFamily: "var(--font-libre-franklin), sans-serif",
                }}
              >
                <HandHeart
                  size={17}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                Donate Now
              </Link>

              <Link
                href="/our-work"
                className="group inline-flex items-center gap-2 rounded-full border border-[#e5e0d4]/70 px-6 py-3.5 text-xs font-semibold text-[#f5f2e9] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f5f2e9] hover:text-[#073d29]"
                style={{
                  fontFamily: "var(--font-libre-franklin), sans-serif",
                }}
              >
                Explore Our Work
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </div>
          </div>
        </div>
      </div>

      {/* MOBILE HERO */}
      <div className="lg:hidden">

        {/* Project photograph */}
        <div className="relative h-[360px] overflow-hidden sm:h-[440px]">
          <Image
            src="/images/water-hand-pump.jpg"
            alt="Community members using a water hand pump"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_40%]"
          />
        </div>

        {/* Mobile content */}
        <div className="relative -mt-8 rounded-t-[28px] bg-[#073d29] px-6 pb-12 pt-10 sm:px-10">

          <p
            className="text-[10px] font-medium uppercase leading-5 tracking-[0.2em] text-[#d8b85c]"
            style={{
              fontFamily: "var(--font-libre-franklin), sans-serif",
            }}
          >
            People | Communities | A Brighter Tomorrow
          </p>

          <h1
            className="mt-5 text-4xl font-medium leading-[1.1] tracking-tight text-[#f5f2e9] sm:text-5xl"
            style={{
              fontFamily: "var(--font-source-serif), serif",
            }}
          >
            Real Change
            <br />
            Lasts <span className="text-[#d2b166]">Longer.</span>
          </h1>

          <p
            className="mt-5 max-w-md text-sm leading-6 text-[#e5e0d4]"
            style={{
              fontFamily: "var(--font-libre-franklin), sans-serif",
            }}
          >
            Creating sustainable change through education, 
            clean water, housing and community development.
          </p>

          {/* Mobile buttons */}
          <div className="mt-7 flex flex-wrap gap-3">

            <Link
              href="/#donate"
              className="group inline-flex items-center gap-2 rounded-full bg-[#d2b166] px-5 py-3 text-xs font-semibold text-[#073d29] transition-all duration-300 hover:bg-[#e0c27a]"
            >
              <HandHeart
                size={17}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              Donate Now
            </Link>

            <Link
              href="/our-work"
              className="group inline-flex items-center gap-2 rounded-full border border-[#e5e0d4]/70 px-5 py-3 text-xs font-semibold text-[#f5f2e9] transition-all duration-300 hover:bg-[#f5f2e9] hover:text-[#073d29]"
            >
              Explore Our Work
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>
        </div>
      </div>

    </section>
  );
}
