"use client";

import { useState } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
    title: "EMPOWERING COMMUNITIES",
    subtitle: "CREATING IMPACT • BUILDING SUSTAINABLE LIVES",
  },
  {
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b",
    title: "BUILDING STRONGER COMMUNITIES",
    subtitle: "HELPING PEOPLE • CHANGING LIVES",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
    title: "CREATING LASTING IMPACT",
    subtitle: "TOGETHER WE CAN MAKE A DIFFERENCE",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Carousel track */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.title}
            className="relative min-w-full shrink-0"
          >
            {/* Image */}
            <div
              className="relative h-[400px] w-full bg-cover bg-center md:h-[450px]"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Content */}
              <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
                  <div className="max-w-2xl text-white">
                    <h1 className="text-4xl font-bold md:text-6xl">
                      {slide.title}
                    </h1>

                    <p className="mt-4 text-lg font-semibold text-[#d8c27a] md:text-2xl">
                      {slide.subtitle}
                    </p>

                    <button
                      type="button"
                      className="mt-7 rounded-md border-2 border-[#d8c27a] px-6 py-3 font-semibold text-white transition hover:bg-[#d8c27a] hover:text-[#073d29]"
                    >
                      OUR INITIATIVES
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Previous button */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 px-4 py-2 text-4xl text-white transition hover:bg-black/70"
      >
        ‹
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 px-4 py-2 text-4xl text-white transition hover:bg-black/70"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentSlide
                ? "scale-125 bg-[#d8c27a]"
                : "bg-white/70 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}