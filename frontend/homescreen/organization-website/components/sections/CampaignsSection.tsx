"use client";

import { useState } from "react";
import { campaigns } from "@/data/mockData";

export default function CampaignsSection() {
  const [currentCampaign, setCurrentCampaign] = useState(0);

  const campaign = campaigns[currentCampaign];

  const previousCampaign = () => {
    setCurrentCampaign((current) =>
      current === 0 ? campaigns.length - 1 : current - 1
    );
  };

  const nextCampaign = () => {
    setCurrentCampaign((current) =>
      current === campaigns.length - 1 ? 0 : current + 1
    );
  };

  const progress = Math.round(
    (campaign.raised / campaign.target) * 100
  );

  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6">
      <div className="relative mx-auto max-w-6xl">

        {/* Campaign card */}
        <div className="overflow-hidden rounded-xl border border-[#b89a55]">

          <div className="grid min-h-[280px] grid-cols-1 md:grid-cols-2">

            {/* Image */}
            <div
              className="min-h-[250px] bg-cover bg-center md:min-h-[320px]"
              style={{
                backgroundImage: `url(${campaign.image})`,
              }}
            />

            {/* Content */}
            <div className="flex flex-col justify-center bg-[#073d29] p-6 text-white sm:p-8">

              <p className="text-sm font-semibold uppercase tracking-wider text-[#d8c27a]">
                Recent Campaign
              </p>

              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                {campaign.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/90 sm:text-base">
                {campaign.description}
              </p>

              {/* Amounts */}
              <div className="mt-5 flex justify-between text-sm">
                <span>
                  Target: ${campaign.target.toLocaleString()}
                </span>

                <span>
                  Raised: ${campaign.raised.toLocaleString()}
                </span>

                <span>{progress}%</span>
              </div>

              {/* Progress bar */}
              <div className="mt-2 h-3 overflow-hidden rounded-full bg-white/30">
                <div
                  className="h-full rounded-full bg-[#d8c27a] transition-all duration-500"
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>

              {/* Donate button */}
              <button
                type="button"
                className="mt-6 w-full rounded-md border-2 border-[#d8c27a] px-5 py-3 font-semibold text-white transition hover:bg-[#d8c27a] hover:text-[#073d29] sm:w-auto"
              >
                DONATE TO CAMPAIGN
              </button>
            </div>
          </div>
        </div>

        {/* Previous */}
        <button
          type="button"
          onClick={previousCampaign}
          aria-label="Previous campaign"
          className="absolute left-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white px-3 py-2 text-3xl text-[#073d29] shadow-md transition hover:bg-[#d8c27a]"
        >
          ‹
        </button>

        {/* Next */}
        <button
          type="button"
          onClick={nextCampaign}
          aria-label="Next campaign"
          className="absolute right-0 top-1/2 z-10 translate-x-1/2 -translate-y-1/2 rounded-md bg-white px-3 py-2 text-3xl text-[#073d29] shadow-md transition hover:bg-[#d8c27a]"
        >
          ›
        </button>

        {/* Dots */}
        <div className="mt-4 flex justify-center gap-2">
          {campaigns.map((campaignItem, index) => (
            <button
              key={campaignItem.id}
              type="button"
              onClick={() => setCurrentCampaign(index)}
              aria-label={`Go to campaign ${index + 1}`}
              className={`h-3 w-3 rounded-full transition-all ${
                index === currentCampaign
                  ? "scale-125 bg-[#b89a55]"
                  : "bg-[#073d29]/40 hover:bg-[#073d29]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}