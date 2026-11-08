
import {
  ShieldCheck,
  ClipboardList,
  Users,
  Sprout,
  ArrowRight,
} from "lucide-react";

const trustPoints = [
  {
    title: "Accountable",
    subtitle: "Use of Funds",
    icon: ShieldCheck,
  },
  {
    title: "Regular",
    subtitle: "Updates",
    icon: ClipboardList,
  },
  {
    title: "Community",
    subtitle: "Focused",
    icon: Users,
  },
  {
    title: "Long-Term",
    subtitle: "Sustainability",
    icon: Sprout,
  },
];

export default function TrustSection() {
  return (
    <section className="w-full bg-[#d2b166] px-8 py-10 sm:px-12 md:px-16 md:py-12 lg:px-20 xl:px-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_2.5fr_auto] lg:gap-7">

        {/* Main message */}
        <div>
          <h2
            className="max-w-sm text-2xl font-semibold leading-tight tracking-tight text-[#073d29] sm:text-3xl"
            style={{ fontFamily: "var(--font-libre-franklin), sans-serif" }}
          >
            Your Support Creates Real Change
          </h2>

          <p className="mt-3 max-w-sm text-xs leading-5 text-[#294a3c] sm:text-sm">
            We are committed to transparency, accountability and maximising
            the impact of every donation.
          </p>
        </div>

        {/* Trust points */}
        <div className="grid grid-cols-2 gap-y-7 sm:grid-cols-4 lg:gap-0">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;

            return (
              <div
                key={point.title}
                className={`flex flex-col items-center justify-center px-3 text-center ${
                  index !== 0
                    ? "sm:border-l sm:border-[#073d29]/30"
                    : ""
                }`}
              >
                <Icon
                  size={23}
                  strokeWidth={1.5}
                  className="mb-2 text-[#073d29]"
                  aria-hidden="true"
                />

                <p className="text-[11px] font-semibold leading-4 text-[#073d29] sm:text-xs">
                  {point.title}
                  <br />
                  {point.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* Link */}
        <div className="flex lg:justify-end">
          <a
            href="/impact"
            className="inline-flex items-center gap-2 rounded-full bg-[#073d29] px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#0b5038]"
          >
            Our Impact
            <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
