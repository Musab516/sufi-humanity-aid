import { stats } from "@/data/mockData";

export default function StatsSection() {
  return (
    <section className="w-full bg-white px-4 py-5 sm:px-6 md:py-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center rounded-xl border-2 border-[#b89a55] bg-white px-5 py-4"
          >
            {/* Icon */}
            <div className="mr-4 flex h-14 w-14 shrink-0 items-center justify-center text-4xl text-[#073d29]">
              {stat.icon}
            </div>

            {/* Text */}
            <div>
              <p className="text-3xl font-bold leading-none text-[#073d29] md:text-4xl">
                {stat.value}
              </p>

              <p className="mt-1 text-sm font-semibold text-[#073d29]">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}