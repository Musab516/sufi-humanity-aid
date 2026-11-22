
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const campaigns = [
  {
    title: "Water Hand Pump",
    description:
      "Helping communities gain access to safe and reliable drinking water through the installation of hand pumps.",
    image: "/images/water-hand-pump.jpg",
    raised: 6500,
    goal: 10000,
  },
  {
    title: "Solar Water Well — Thar",
    description:
      "Supporting communities in Thar with solar-powered water solutions designed to improve access to essential water supplies.",
    image: "/images/solar-water-well-thar.jpg",
    raised: 8200,
    goal: 12000,
  },
  {
    title: "Sujawal Ration Bag Distribution",
    description:
      "Providing essential food supplies to families in Sujawal to help meet their everyday needs.",
    image: "/images/sujawal-ration-distribution.jpg",
    raised: 4200,
    goal: 7500,
  },
  {
    title: "Ration Distribution — Hindu Community",
    description:
      "Extending food assistance to families in the Hindu community through essential food provisions.",
    image: "/images/hindu-community-ration-distribution.jpg",
    raised: 5600,
    goal: 8000,
  },
  {
    title: "Korangi Distribution",
    description:
      "Reaching families in Korangi with essential supplies and practical community assistance.",
    image: "/images/korangi-distribution.jfif",
    raised: 3100,
    goal: 6000,
  },
  {
    title: "Jahez Distribution — Digri",
    description:
      "Supporting families in Digri through a community distribution initiative.",
    image: "/images/jahez-distribution-digri.jpg",
    raised: 7200,
    goal: 10000,
  },
];

export default function FeaturedCampaignsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedProgress, setAnimatedProgress] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);

  const campaign = campaigns[currentIndex];

  const progress = Math.min(
    (campaign.raised / campaign.goal) * 100,
    100
  );

  // Detect when the campaign section enters the viewport
  useEffect(() => {
    const section = sectionRef.current;

    if (!section || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [isVisible]);

  // Animate progress when section appears or campaign changes
  useEffect(() => {
    setAnimatedProgress(0);

    if (!isVisible) return;

    const frame = requestAnimationFrame(() => {
      setAnimatedProgress(progress);
    });

    return () => cancelAnimationFrame(frame);
  }, [currentIndex, isVisible, progress]);

  const previousCampaign = () => {
    setCurrentIndex((current) =>
      current === 0 ? campaigns.length - 1 : current - 1
    );
  };

  const nextCampaign = () => {
    setCurrentIndex((current) =>
      current === campaigns.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section
      ref={sectionRef}
      id="featured-campaigns"
      className="w-full bg-[#f5f2e9] px-8 py-12 sm:px-12 md:px-16 md:py-16 lg:px-20 xl:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-14">

          {/* Campaign image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e5e1d7] sm:aspect-[16/10]">
            <Image
              key={campaign.image}
              src={campaign.image}
              alt={campaign.title}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>

          {/* Campaign information */}
          <div className="flex min-w-0 flex-col justify-center">

            {/* Same heading for every campaign */}
            <p
              className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b89a55]"
              style={{
                fontFamily: "var(--font-libre-franklin), sans-serif",
              }}
            >
              Featured Campaign
            </p>

            {/* Campaign title */}
            <h2
              className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-[#073d29] sm:text-3xl lg:text-4xl"
              style={{
                fontFamily: "var(--font-libre-franklin), sans-serif",
              }}
            >
              {campaign.title}
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#69716c]">
              {campaign.description}
            </p>

            {/* Fundraising progress */}
            <div className="mt-7">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-[#073d29]">
                  PKR {campaign.raised.toLocaleString("en-US")} raised
                </p>

                <p className="text-xs text-[#69716c]">
                  PKR {campaign.goal.toLocaleString("en-US")} goal
                </p>
              </div>

              {/* Animated progress bar */}
              <div
                className="mt-3 h-[5px] w-full overflow-hidden rounded-full bg-[#d9dbd1]"
                role="progressbar"
                aria-valuenow={Math.round(progress)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Campaign fundraising progress"
              >
                <div
                  className="h-full rounded-full bg-[#083b32] transition-[width] duration-[1200ms] ease-out"
                  style={{
                    width: `PKR {animatedProgress}%`,
                  }}
                />
              </div>

              <p className="mt-2 text-[10px] text-[#858b83]">
                PKR {(campaign.goal - campaign.raised).toLocaleString("en-US")}{" "}
                remaining
              </p>
            </div>

            {/* Campaign buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="#donate"
                className="inline-flex items-center justify-center rounded-full bg-[#d2b166] px-5 py-3 text-xs font-semibold text-[#073d29] transition hover:bg-[#c4a052]"
              >
                Donate to This Campaign
              </a>

              <a
                href="/our-work"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#073d29] transition hover:text-[#9b7c3e]"
              >
                View All Campaigns
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Carousel navigation */}
            <div className="mt-8 flex justify-end gap-2">
              <button
                type="button"
                onClick={previousCampaign}
                aria-label="Previous campaign"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#073d29]/25 text-[#073d29] transition hover:bg-[#073d29] hover:text-white"
              >
                <ArrowLeft size={17} />
              </button>

              <button
                type="button"
                onClick={nextCampaign}
                aria-label="Next campaign"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#073d29] text-white transition hover:bg-[#b89a55]"
              >
                <ArrowRight size={17} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
