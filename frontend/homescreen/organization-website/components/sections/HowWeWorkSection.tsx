
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Understand the Need",
    description:
      "Listen to communities and understand their priorities.",
  },
  {
    number: "02",
    title: "Take Action",
    description:
      "Turn identified needs into practical support and initiatives.",
  },
  {
    number: "03",
    title: "Build for the Long Term",
    description:
      "Support solutions that benefit communities over time.",
  },
];

export default function HowWeWorkSection() {
  return (
    <section className="w-full bg-[#f5f2e9] px-8 py-16 sm:px-12 md:px-16 md:py-20 lg:px-20 xl:px-24">
      <div className="mx-auto max-w-7xl">
        <h2
          className="text-center text-3xl font-medium text-[#073d29] sm:text-4xl md:text-5xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          How We Work
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="min-h-[240px] rounded-2xl bg-white p-7 sm:p-8"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d2b166]/50 text-lg font-semibold text-[#b89a55]">
                {step.number}
              </span>

              <h3
                className="mt-8 text-xl font-medium leading-snug text-[#073d29] sm:text-2xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#52645b] sm:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#073d29] px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#b89a55]"
          >
            Join Now
            <span className="ml-3">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
