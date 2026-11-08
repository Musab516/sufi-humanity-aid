
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const initiatives = [
  {
    title: "Water Hand Pump",
    description:
      "Bringing reliable access to clean drinking water closer to communities.",
    image: "/images/water-hand-pump.jpg",
  },
  {
    title: "Solar Water Well — Thar",
    description:
      "Supporting communities with sustainable, solar-powered water solutions.",
    image: "/images/solar-water-well-thar.jpg",
  },
  {
    title: "Sujawal Ration Distribution",
    description:
      "Providing essential food supplies to families in Sujawal.",
    image: "/images/sujawal-ration-distribution.jpg",
  },
  {
    title: "Ration Distribution — Hindu Community",
    description:
      "Extending food assistance through essential food provisions.",
    image: "/images/hindu-community-ration-distribution.jpg",
  },
  {
    title: "Korangi Distribution",
    description:
      "Reaching families in Korangi with essential supplies and support.",
    image: "/images/korangi-distribution.jpg",
  },
  {
    title: "Jahez Distribution — Digri",
    description:
      "Supporting families in Digri through a community initiative.",
    image: "/images/jahez-distribution-digri.jpg",
  },
];

export default function OurWorkCardSwapSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((current) => (current + 1) % initiatives.length);
  };

  const previousCard = () => {
    setCurrentIndex(
      (current) => (current - 1 + initiatives.length) % initiatives.length
    );
  };

  useEffect(() => {
    const interval = window.setInterval(nextCard, 4500);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="w-full overflow-hidden bg-[#f5f2e9] px-8 py-12 sm:px-12 md:px-16 md:py-16 lg:px-20 xl:px-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">

        {/* Section introduction */}
        <div className="max-w-md">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#b89a55]"
            style={{ fontFamily: "var(--font-libre-franklin), sans-serif" }}
          >
            What We Do
          </p>

          <h2
            className="text-3xl font-semibold leading-tight tracking-tight text-[#073d29] sm:text-4xl"
            style={{ fontFamily: "var(--font-libre-franklin), sans-serif" }}
          >
            Our Initiatives
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-7 text-[#69716c]">
            From access to clean water to essential community support, our
            initiatives focus on creating meaningful and lasting change.
          </p>

          <div className="mt-7 flex items-center gap-3">
            <button
              type="button"
              onClick={previousCard}
              aria-label="Previous initiative"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#073d29]/25 text-[#073d29] transition hover:bg-[#073d29] hover:text-white"
            >
              <ArrowLeft size={17} />
            </button>

            <button
              type="button"
              onClick={nextCard}
              aria-label="Next initiative"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#073d29] text-white transition hover:bg-[#b89a55]"
            >
              <ArrowRight size={17} />
            </button>

            <span className="ml-2 text-xs tracking-wider text-[#69716c]">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(initiatives.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Card swap display */}
        <div className="relative mx-auto h-[300px] w-full max-w-[490px] sm:h-[340px]">
          {[2, 1, 0].map((depth) => {
            const index = (currentIndex + depth) % initiatives.length;
            const initiative = initiatives[index];
            const isActive = depth === 0;

            return (
              <div
                key={initiative.title}
                className="absolute inset-0 overflow-hidden rounded-xl shadow-[0_14px_35px_rgba(7,61,41,0.12)] transition-all duration-700 ease-in-out"
                style={{
                  zIndex: 3 - depth,
                  transform: `translate(${depth * 15}px, ${depth * 13}px) scale(${1 - depth * 0.055})`,
                  opacity: 1 - depth * 0.16,
                }}
              >
                <Image
                  src={initiative.image}
                  alt={initiative.title}
                  fill
                  sizes="(max-width: 1024px) 90vw, 490px"
                  className="object-cover"
                  priority={isActive}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061f17]/85 via-[#061f17]/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#e0c77f]">
                    Our Initiative
                  </p>

                  <h3
                    className="text-xl font-semibold leading-tight text-white sm:text-2xl"
                    style={{
                      fontFamily: "var(--font-libre-franklin), sans-serif",
                    }}
                  >
                    {initiative.title}
                  </h3>

                  <p className="mt-2 max-w-sm text-xs leading-5 text-white/85 sm:text-sm">
                    {initiative.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slide indicators */}
      <div className="mx-auto mt-8 flex max-w-7xl justify-end gap-2 lg:pr-2">
        {initiatives.map((initiative, index) => (
          <button
            key={initiative.title}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Show ${initiative.title}`}
            aria-current={currentIndex === index ? "true" : undefined}
            className={`h-[3px] rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "w-8 bg-[#073d29]"
                : "w-4 bg-[#c9c7bb] hover:bg-[#b89a55]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
