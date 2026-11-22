
"use client";

import { useEffect, useState } from "react";

type Project = {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    category: "Clean Water",
    title: "Water Hand Pump",
    description:
      "Helping communities gain access to safe and reliable drinking water through the installation of hand pumps.",
    image: "/images/water-hand-pump.jpg",
  },
  {
    id: 2,
    category: "Clean Water",
    title: "Solar Water Well — Thar",
    description:
      "Supporting communities in Thar with solar-powered water solutions designed to improve access to essential water supplies.",
    image: "/images/solar-water-well-thar.jpg",
  },
  {
    id: 3,
    category: "Food Assistance",
    title: "Sujawal Ration Distribution",
    description:
      "Providing essential food supplies to families in Sujawal to help meet their everyday needs.",
    image: "/images/sujawal-ration-distribution.jpg",
  },
  {
    id: 4,
    category: "Food Assistance",
    title: "Hindu Community Ration Distribution",
    description:
      "Extending food assistance to families in the Hindu community through essential food provisions.",
    image: "/images/hindu-community-ration-distribution.jpg",
  },
  {
    id: 5,
    category: "Community Support",
    title: "Korangi Distribution",
    description:
      "Reaching families in Korangi with essential supplies and practical community assistance.",
    image: "/images/korangi-distribution.jfif",
  },
  {
    id: 6,
    category: "Community Support",
    title: "Jahez Distribution — Digri",
    description:
      "Supporting families in Digri through a community distribution initiative.",
    image: "/images/jahez-distribution-digri.jpg",
  },
];

export default function CurrentProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    null
  );

  return (
    <>
      <section
        id="projects"
        className="w-full bg-white px-8 pt-5 pb-8 sm:px-12 md:px-16 lg:px-20 xl:px-24"
      >
        <div className="mx-auto max-w-7xl">
          {/* DESKTOP BENTO LAYOUT */}
          <div className="mt-6 hidden lg:grid lg:grid-cols-5 lg:gap-3 xl:gap-4">
            {/* COLUMN 1 */}
            <div className="flex flex-col gap-4">
              <BentoImageCard
                project={projects[0]}
                className="h-[245px]"
                onOpen={() => setSelectedProject(projects[0])}
              />

              <BentoImageCard
                project={projects[1]}
                className="h-[180px]"
                onOpen={() => setSelectedProject(projects[1])}
              />
            </div>

            {/* COLUMN 2 */}
            <div className="pt-12">
              <BentoImageCard
                project={projects[2]}
                className="h-[440px]"
                onOpen={() => setSelectedProject(projects[2])}
              />
            </div>

            {/* COLUMN 3 — HEADING AND APPROACH CARD */}
            <div className="flex flex-col justify-end pb-1">
              <div className="mb-6 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b89a55]">
                  Our Work
                </p>

                <h2
                  className="mt-1 text-3xl font-medium leading-tight text-[#073d29] xl:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Current Projects
                </h2>
              </div>

              <div className="relative flex h-[240px] w-full flex-col justify-between overflow-hidden rounded-3xl bg-[#e9e5d9] p-5">
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-[#073d29]/10" />

                <div className="relative text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b89a55]">
                    Our Approach
                  </p>

                  <h3
                    className="mt-3 text-2xl font-medium leading-tight text-[#073d29] xl:text-3xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Community-led change
                  </h3>

                  <p className="mt-3 text-sm leading-5 text-[#5d665f]">
                    We work alongside communities to provide practical
                    support and lasting solutions.
                  </p>
                </div>

                
              </div>
            </div>

            {/* COLUMN 4 */}
            <div className="pt-12">
              <BentoImageCard
                project={projects[3]}
                className="h-[440px]"
                onOpen={() => setSelectedProject(projects[3])}
              />
            </div>

            {/* COLUMN 5 */}
            <div className="flex flex-col gap-4">
              <BentoImageCard
                project={projects[4]}
                className="h-[180px]"
                onOpen={() => setSelectedProject(projects[4])}
              />

              <BentoImageCard
                project={projects[5]}
                className="h-[245px]"
                onOpen={() => setSelectedProject(projects[5])}
              />
            </div>
          </div>

          {/* TABLET AND MOBILE LAYOUT */}
          <div className="mt-8 text-center lg:hidden">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b89a55]">
              Our Work
            </p>

            <h2
              className="mt-1 text-3xl font-medium text-[#073d29]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Current Projects
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
            {projects.map((project) => (
              <BentoImageCard
                key={project.id}
                project={project}
                className="h-[320px]"
                onOpen={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

/* IMAGE CARD */

function BentoImageCard({
  project,
  className = "",
  onOpen,
}: {
  project: Project;
  className?: string;
  onOpen: () => void;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl bg-[#e5e1d7] ${className}`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/15 transition group-hover:bg-black/30" />

      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
        <div className="rounded-2xl bg-[#073d29]/90 p-3 backdrop-blur-sm">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d8b85c]">
            {project.category}
          </p>

          <h3
            className="mt-1 text-base font-medium leading-tight text-white xl:text-lg"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {project.title}
          </h3>

          <button
            type="button"
            onClick={onOpen}
            className="mt-2 inline-flex items-center text-xs font-semibold text-white transition hover:text-[#d8b85c]"
          >
            See More
            <span className="ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}

/* PROJECT DETAIL MODAL */

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#073d29]/75 px-4 py-5 backdrop-blur-sm sm:px-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative grid max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-[#f8f7f2] shadow-2xl md:grid-cols-2 md:overflow-hidden"
        onClick={(event) => event.stopPropagation()}
      >
        {/* IMAGE */}
        <div className="relative h-[230px] w-full bg-[#e5e1d7] sm:h-[280px] md:h-full md:min-h-[390px]">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* DETAILS */}
        <div className="relative flex flex-col justify-center p-6 sm:p-9 md:p-10">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl text-[#073d29] shadow-sm transition hover:bg-[#e9e5d9]"
          >
            ×
          </button>

          <div className="pr-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b89a55]">
              {project.category}
            </p>

            <h3
              id="project-modal-title"
              className="mt-4 text-3xl font-medium leading-tight text-[#073d29] sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {project.title}
            </h3>

            <div className="mt-5 h-px w-12 bg-[#d2b166]" />

            <p className="mt-5 text-sm leading-7 text-[#4d5752] sm:text-base">
              {project.description}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="mt-8 w-fit rounded-full bg-[#073d29] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b89a55]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
