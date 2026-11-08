
"use client";

import { useEffect, useRef, useState } from "react";

const impactStats = [
  {
    value: 1500,
    suffix: "+",
    label: "HOMES BUILT",
  },
  {
    value: 10000,
    suffix: "+",
    label: "PEOPLE EMPOWERED",
  },
  {
    value: 75,
    suffix: "+",
    label: "EDUCATION PROGRAMS",
  },
  {
    value: null,
    suffix: "",
    label: "ACROSS PAKISTAN",
    staticText: "COMMUNITIES",
  },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);

  // Start animation when section enters the screen
  useEffect(() => {
    const section = sectionRef.current;

    if (!section || hasStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [hasStarted]);

  // Count-up animation
  useEffect(() => {
    if (!hasStarted) return;

    const duration = 1800;
    const targets = [1500, 10000, 75];
    let animationFrame: number;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out effect
      const easedProgress = 1 - Math.pow(1 - progress, 4);

      setCounts(
        targets.map((target) =>
          Math.floor(target * easedProgress)
        )
      );

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCounts(targets);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#f5f2e9] px-8 py-12 sm:px-12 md:px-16 md:py-14 lg:px-20 xl:px-24"
    >
      <div className="mx-auto max-w-7xl">

        <h2
          className="mb-9 text-2xl font-semibold tracking-tight text-[#073d29] sm:text-3xl"
          style={{
            fontFamily: "var(--font-libre-franklin), sans-serif",
          }}
        >
          Making a Difference That Lasts.
        </h2>

        <div className="grid grid-cols-2 gap-x-6 gap-y-9 lg:grid-cols-4 lg:gap-8">
          {impactStats.map((stat, index) => (
            <div
              key={stat.label}
              className="flex flex-col items-start"
            >
              <p
                className="text-[27px] font-semibold leading-tight tracking-tight text-[#073d29] sm:text-3xl md:text-4xl"
                style={{
                  fontFamily: "var(--font-libre-franklin), sans-serif",
                }}
              >
                {stat.value !== null
                  ? `${counts[index].toLocaleString("en-US")}${stat.suffix}`
                  : stat.staticText}
              </p>

              <div className="mt-3 h-[3px] w-9 bg-[#d2b166]" />

              <p className="mt-3 text-[10px] font-semibold tracking-[0.12em] text-[#53645b] sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
