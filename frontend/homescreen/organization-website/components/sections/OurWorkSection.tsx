
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
    image: "/images/korangi-distribution.jfif",
  },
  {
    id: 6,
    title: "Jahez Distribution — Digri",
    description: "Supporting families through community-led assistance.",
    image: "/images/jahez-distribution-digri.jpg",
  },
];

export default function OurWorkSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateMotionPreference = () => {
      setIsReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    const track = trackRef.current;

    if (!track || isPaused || isReducedMotion) return;

    let animationFrame: number;
    let previousTime = 0;
    let position = 0;

    const animate = (timestamp: number) => {
      if (!previousTime) previousTime = timestamp;

      const delta = timestamp - previousTime;
      previousTime = timestamp;

      // Continuous movement speed: 24 pixels per second
      position += (24 * delta) / 1000;

      const loopWidth = track.scrollWidth / 2;

      if (loopWidth > 0 && position >= loopWidth) {
        position -= loopWidth;
      }

      track.style.transform = `translate3d(-${position}px, 0, 0)`;

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused, isReducedMotion]);

  const repeatedInitiatives = [...initiatives, ...initiatives];

  return (
    <section className="w-full overflow-hidden bg-[#f5f2e9] px-8 py-14 sm:px-12 md:px-16 md:py-16 lg:px-20 xl:px-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <h2
            className="text-2xl font-semibold tracking-tight text-[#073d29] sm:text-3xl"
            style={{
              fontFamily: "var(--font-libre-franklin), sans-serif",
            }}
          >
            Our Initiatives
          </h2>
        </div>

        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node)) {
              setIsPaused(false);
            }
          }}
        >
          <div
            ref={trackRef}
            className="flex w-max gap-5 will-change-transform"
          >
            {repeatedInitiatives.map((initiative, index) => (
              <article
                key={`${initiative.id}-${index}`}
                className="w-[280px] shrink-0 sm:w-[320px] lg:w-[calc((min(100vw-10rem,80rem)-60px)/4)]"
              >
                <div className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-[#e5e1d7]">
                  <Image
                    src={initiative.image}
                    alt={initiative.title}
                    fill
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

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

      </div>
    </section>
  );
}
