
import {
  HeartHandshake,
  Landmark,
  Sprout,
  Users,
} from "lucide-react";

const values = [
  {
    number: "01",
    title: "People First",
    description:
      "We listen to communities, understand their needs and put people at the heart of everything we do.",
    color: "#073d29",
    Icon: HeartHandshake,
  },
  {
    number: "02",
    title: "Integrity",
    description:
      "We believe in honest relationships, responsible decisions and transparency in the way we work.",
    color: "#a58a4a",
    Icon: Landmark,
  },
  {
    number: "03",
    title: "Sustainability",
    description:
      "We focus on practical solutions that create lasting opportunities and meaningful change.",
    color: "#315c50",
    Icon: Sprout,
  },
  {
    number: "04",
    title: "Collaboration",
    description:
      "We work alongside communities, partners and supporters because meaningful change is built together.",
    color: "#8b7650",
    Icon: Users,
  },
];

export default function CoreValuesSection() {
  return (
    <section className="w-full bg-[#f8f7f2] px-8 py-16 sm:px-12 md:px-16 md:py-20 lg:px-20 xl:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          
          <h2
            className="mt-3 text-3xl font-medium leading-tight text-[#073d29] sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The values behind our work.
          </h2>
        </div>

        {/* Value Capsules */}
        <div className="mt-7 grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {values.map((value) => {
            const Icon = value.Icon;

            return (
              <div
                key={value.number}
                className="relative flex flex-col items-center pt-12"
              >
                {/* Circular Icon Badge */}
                <div
                  className="absolute top-0 z-10 flex h-24 w-24 items-center justify-center rounded-full bg-white"
                  style={{ border: `1px dashed ${value.color}` }}
                >
                  <div
                    className="flex h-[68px] w-[68px] items-center justify-center rounded-full border border-dashed"
                    style={{ borderColor: `${value.color}70` }}
                  >
                    <Icon
                      size={30}
                      strokeWidth={1.6}
                      style={{ color: value.color }}
                    />
                  </div>
                </div>

                {/* Colored Pill Body */}
                <div
                  className="flex min-h-[290px] w-full flex-1 flex-col items-center rounded-b-[100px] rounded-t-[48px] px-6 pb-10 pt-20 text-center"
                  style={{ backgroundColor: value.color }}
                >
                  <p className="text-xs font-semibold tracking-[0.2em] text-white/55">
                    {value.number}
                  </p>

                  <h3
                    className="mt-4 text-2xl font-semibold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {value.title}
                  </h3>

                  <p className="mt-4 max-w-[230px] text-sm leading-6 text-white/80">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
