import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/sections/AboutHero";
import MissionVisionSection from "@/components/sections/MissionVisionSection";
import FounderStorySection from "@/components/sections/FounderStorySection";
import CoreValuesSection from "@/components/sections/CoreValuesSection";
import JourneyTimelineSection from "@/components/sections/JourneyTimelineSection";

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <AboutHero />

      <MissionVisionSection />

      <FounderStorySection />

      <CoreValuesSection />

      <JourneyTimelineSection />

      <Footer />
    </main>
  );
}