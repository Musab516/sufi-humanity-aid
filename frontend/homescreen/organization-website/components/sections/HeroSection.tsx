
import Image from "next/image";
import Link from "next/link";
import { HandHeart, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f5f2e9]">

      {/* DESKTOP HERO */}
      <div className="relative hidden min-h-[540px] lg:block">

        {/* Sharp photograph — LEFT */}
        <div
          className="absolute inset-y-0 left-0 z-[1] w-[66%]"
          style={{
            maskImage:
              "linear-gradient(to right, black 0%, black 76%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, black 0%, black 76%, transparent 100%)",
          }}
        >
          <Image
            src="/images/water-hand-pump.jpg"
            alt="Children and community members using a newly installed water hand pump"
            fill
            priority
            sizes="66vw"
            className="object-cover object-[center_45%]"
          />
        </div>

        {/* Subtle blur around the image edge */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-[66%]"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 70%, black 88%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 70%, black 88%, transparent 100%)",
          }}
        >
          <Image
            src="/images/water-hand-pump.jpg"
            alt=""
            fill
            sizes="66vw"
            className="scale-105 object-cover object-[center_45%] blur-[7px] opacity-40"
          />
        </div>

        {/* Smooth fade into cream background */}
        <div
          className="pointer-events-none absolute inset-0 z-[3]"
          style={{
            background:
              "linear-gradient(to right, transparent 43%, rgba(245,242,233,0.08) 53%, rgba(245,242,233,0.45) 64%, rgba(245,242,233,0.85) 74%, #f5f2e9 83%)",
          }}
        />

        {/* TEXT — RIGHT */}
        <div className="relative z-10 ml-auto flex min-h-[540px] w-[47%] items-center justify-end pr-12 pl-6 xl:pr-16">
          <div className="ml-auto w-full max-w-xl text-right">

            {/* Eyebrow */}
            <p
              className="text-xs font-medium uppercase tracking-[0.22em] text-[#69716c]"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
              }}
            >
              People | Communities |
              <br />
              A Brighter Tomorrow
            </p>

            {/* Main heading */}
            <h1
              className="mt-6 text-5xl font-semibold leading-[1.08] tracking-tight text-[#073d29] xl:text-[62px]"
              style={{
                fontFamily: "var(--font-libre-franklin), sans-serif",
              }}
            >
              Real Change
              <br />
              Lasts <span className="text-[#d2b166]">Longer.</span>
            </h1>

            {/* Description */}
            <p className="ml-auto mt-6 max-w-md text-right text-base leading-7 text-[#515d56]">
              Creating sustainable change through education, clean water,
              housing and community development.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-end gap-3">

              <Link
                href="/#donate"
                className="inline-flex items-center gap-2 rounded-full bg-[#d2b166] px-6 py-3.5 text-xs font-semibold text-[#073d29] transition hover:bg-[#c4a052]"
              >
                <HandHeart size={17} strokeWidth={2} />
                Donate Now
              </Link>

              <Link
                href="/our-work"
                className="inline-flex items-center gap-2 rounded-full border border-[#073d29] px-6 py-3.5 text-xs font-semibold text-[#073d29] transition hover:bg-[#073d29] hover:text-white"
              >
                Explore Our Work
                <ArrowRight size={15} />
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
        <div className="relative -mt-8 rounded-t-[28px] bg-[#f5f2e9] px-6 pb-12 pt-10 sm:px-10">

          <p
            className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#69716c]"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
            }}
          >
            People | Communities | A Brighter Tomorrow
          </p>

          <h1
            className="mt-5 text-4xl font-semibold leading-tight text-[#073d29] sm:text-5xl"
            style={{
              fontFamily: "var(--font-libre-franklin), sans-serif",
            }}
          >
            Real Change
            <br />
            Lasts <span className="text-[#d2b166]">Longer.</span>
          </h1>

          <p className="mt-5 max-w-md text-sm leading-6 text-[#515d56]">
            Creating sustainable change through education, clean water,
            housing and community development.
          </p>

          {/* Mobile buttons */}
          <div className="mt-7 flex flex-wrap gap-3">

            <Link
              href="/#donate"
              className="inline-flex items-center gap-2 rounded-full bg-[#d2b166] px-5 py-3 text-xs font-semibold text-[#073d29] transition hover:bg-[#c4a052]"
            >
              <HandHeart size={17} />
              Donate Now
            </Link>

            <Link
              href="/our-work"
              className="inline-flex items-center gap-2 rounded-full border border-[#073d29] px-5 py-3 text-xs font-semibold text-[#073d29] transition hover:bg-[#073d29] hover:text-white"
            >
              Explore Our Work
              <ArrowRight size={15} />
            </Link>

          </div>
        </div>
      </div>

    </section>
  );
}
