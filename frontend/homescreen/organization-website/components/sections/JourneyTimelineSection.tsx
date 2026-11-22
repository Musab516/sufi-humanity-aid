
const milestones = [
  {
    year: "1995",
    title: "The beginning",
    description: "description",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  },
  {
    year: "2000",
    title: "Growing through education",
    description: "description",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d",
  },
  {
    year: "2005",
    title: "Access to clean water",
    description: "description",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d",
  },
  {
    year: "2010",
    title: "Building sustainable communities",
    description: "description",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d",
  },
  {
    year: "2020",
    title: "A wider commitment",
    description: "description",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
  },
  {
    year: "2025",
    title: "Looking ahead",
    description: "description",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d",
  },
];

export default function JourneyTimelineSection() {
  return (
    <section className="w-full bg-[#f8f7f2] px-8 py-16 sm:px-12 md:px-16 md:py-20 lg:px-20 lg:py-24 xl:px-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-2xl">
          <h2
            className="mt-4 max-w-xl text-3xl font-medium leading-tight text-[#073d29] sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
             Our Journey
          </h2>
        </div>

        {/* Desktop Timeline */}
        <div className="relative mt-6 hidden lg:block">
          {/* Timeline line */}
          <div className="absolute left-0 right-0 top-[220px] h-px bg-[#b89a55]/60" />

          <div className="grid grid-cols-6">
            {milestones.map((milestone, index) => {
              const imageAbove = index % 2 === 0;

              return (
                <div
                  key={milestone.year}
                  className="relative px-3 first:pl-0 last:pr-0"
                >
                  {/* Above timeline */}
                  <div className="flex h-[220px] flex-col justify-end pb-8">
                    {imageAbove ? (
                      <div className="h-[130px] w-full overflow-hidden rounded-lg">
                        <img
                          src={milestone.image}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : (
                      <div>
                        <p className="text-3xl font-medium text-[#b89a55]">
                          {milestone.year}
                        </p>

                        <h3
                          className="mt-2 text-lg font-medium leading-snug text-[#073d29] xl:text-xl"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {milestone.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-[#69716c]">
                          {milestone.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Timeline marker */}
                  <div className="absolute left-3 top-[220px] z-10 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#f8f7f2] bg-[#b89a55] shadow-[0_0_0_1px_#b89a55]" />

                  {/* Below timeline */}
                  <div className="pt-8">
                    {imageAbove ? (
                      <div>
                        <p className="text-3xl font-medium text-[#b89a55]">
                          {milestone.year}
                        </p>

                        <h3
                          className="mt-2 text-lg font-medium leading-snug text-[#073d29] xl:text-xl"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {milestone.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-[#69716c]">
                          {milestone.description}
                        </p>
                      </div>
                    ) : (
                      <div className="h-[130px] w-full overflow-hidden rounded-lg">
                        <img
                          src={milestone.image}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile and Tablet Timeline */}
        <div className="relative mt-6 lg:hidden">
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-[#b89a55]/60" />

          <div className="space-y-12">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="relative pl-9">
                {/* Timeline marker */}
                <div className="absolute left-0 top-[7px] z-10 h-4 w-4 rounded-full border-2 border-[#f8f7f2] bg-[#b89a55] shadow-[0_0_0_1px_#b89a55]" />

                <p className="text-3xl font-medium text-[#b89a55]">
                  {milestone.year}
                </p>

                <h3
                  className="mt-2 text-xl font-medium text-[#073d29]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {milestone.title}
                </h3>

                <p className="mt-2 max-w-lg text-sm leading-6 text-[#69716c]">
                  {milestone.description}
                </p>

                {milestone.image && (
                  <div className="mt-5 h-[180px] w-full overflow-hidden rounded-lg sm:h-[220px]">
                    <img
                      src={milestone.image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
