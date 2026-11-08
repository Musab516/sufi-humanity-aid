
"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const stories = [
  {
    quote:
      "Thanks to SHA, our village now has access to clean water. It has made a huge difference in our daily lives.",
    attribution: "Community Member, Sindh",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=700&auto=format&fit=crop",
    alt: "Children in a community",
  },
  {
    quote:
      "The support we received brought relief to our family when we needed it most. We are truly grateful.",
    attribution: "Community Member, Pakistan",
    image:
      "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=700&auto=format&fit=crop",
    alt: "Community members gathered together",
  },
  {
    quote:
      "Having access to essential support gives our community hope for a better future.",
    attribution: "Community Member, Pakistan",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=700&auto=format&fit=crop",
    alt: "Children in a community setting",
  },
];

export default function StoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const story = stories[currentIndex];

  const previousStory = () => {
    setCurrentIndex((index) =>
      index === 0 ? stories.length - 1 : index - 1
    );
  };

  const nextStory = () => {
    setCurrentIndex((index) =>
      index === stories.length - 1 ? 0 : index + 1
    );
  };

  return (
    <section className="w-full bg-[#f5f2e9] px-8 py-8 sm:px-12 md:px-16 md:py-10 lg:px-20 xl:px-24">
      <div className="mx-auto grid max-w-7xl grid-cols-[112px_1fr] items-center gap-5 sm:grid-cols-[150px_1fr] sm:gap-8 lg:grid-cols-[180px_1fr] lg:gap-10">
        {/* Photograph */}
        <div className="relative h-[112px] w-[112px] overflow-hidden bg-[#e5e1d7] sm:h-[125px] sm:w-[150px] lg:h-[130px] lg:w-[180px]">
          <Image
            key={story.image}
            src={story.image}
            alt={story.alt}
            fill
            sizes="180px"
            className="object-cover"
          />
        </div>

        {/* Testimonial */}
        <div className="min-w-0">
          <blockquote
            className="text-sm leading-6 text-[#46564d] sm:text-base sm:leading-7"
            style={{ fontFamily: "var(--font-libre-franklin), sans-serif" }}
          >
            “{story.quote}”
          </blockquote>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs font-semibold text-[#073d29] sm:text-sm">
              — {story.attribution}
            </p>

            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={previousStory}
                aria-label="Previous story"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#073d29]/25 text-[#073d29] transition hover:bg-[#073d29] hover:text-white"
              >
                <ArrowLeft size={15} />
              </button>

              <button
                type="button"
                onClick={nextStory}
                aria-label="Next story"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#073d29] text-white transition hover:bg-[#b89a55]"
              >
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
