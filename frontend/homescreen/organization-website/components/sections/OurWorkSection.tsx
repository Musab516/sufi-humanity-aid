
"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const initiatives = [
  {
    id: 1,
    title: "Water Hand Pump",
    description: "Bringing reliable water access closer to rural communities.",
    image: "/images/water-hand-pump.jpg",
  },
  {
    id: 2,
    title: "Solar Water Well — Thar",
    description: "Supporting access to water through solar-powered wells.",
    image: "/images/solar-water-well-thar.jpg",
  },
  {
    id: 3,
    title: "Sujawal Ration Distribution",
    description: "Providing essential food supplies to families in need.",
    image: "/images/sujawal-ration-distribution.jpg",
  },
  {
    id: 4,
    title: "Ration Distribution — Hindu Community",
    description: "Extending food assistance to families in the community.",
    image: "/images/hindu-community-ration-distribution.jpg",
  },
  {
    id: 5,
    title: "Korangi Distribution",
    description: "Delivering essential supplies to local families.",
    image: "/images/korangi-distribution.jpg",
  },
  {
    id: 6,
    title: "Jahez Distribution — Digri",
    description: "Supporting families through community-led assistance.",
    image: "/images/jahez-distribution-digri.jpg",
  },
];

export default function OurWorkSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const distance = carouselRef.current.clientWidth * 0.75;

    carouselRef.current.scrollBy({
      left: direction === "right" ? distance : -distance,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-[#f5f2e9] px-8 py-14 sm:px-12 md:px-16 md:py-16 lg:px-20 xl:px-24">
      <div className="mx-auto max-w-7xl">

        {/* Section heading and arrows */}
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <h2
              className="text-2xl font-semibold tracking-tight text-[#073d29] sm:text-3xl"
              style={{
                fontFamily: "var(--font-libre-franklin), sans-serif",
              }}
            >
              Our Initiatives
            </h2>
          </div>

          {/* Carousel controls */}
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => scrollCarousel("left")}
              aria-label="Previous initiatives"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#073d29]/25 text-[#073d29] transition hover:bg-[#073d29] hover:text-white"
            >
              <ArrowLeft size={16} />
            </button>

            <button
              type="button"
              onClick={() => scrollCarousel("right")}
              aria-label="Next initiatives"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#073d29] text-white transition hover:bg-[#b89a55]"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Initiatives carousel */}
        <div
          ref={carouselRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {initiatives.map((initiative) => (
            <article
              key={initiative.id}
              className="w-[82%] shrink-0 snap-start sm:w-[47%] lg:w-[calc((100%-60px)/4)]"
            >
              {/* Image */}
              <div className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-[#e5e1d7]">
                <Image
                  src={initiative.image}
                  alt={initiative.title}
                  fill
                  sizes="(max-width: 640px) 82vw, (max-width: 1024px) 47vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>

              {/* Initiative information */}
              <div className="pt-4">
                <h3
                  className="text-base font-semibold leading-snug text-[#073d29] sm:text-lg"
                  style={{
                    fontFamily: "var(--font-libre-franklin), sans-serif",
                  }}
                >
                  {initiative.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#69716c]">
                  {initiative.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
