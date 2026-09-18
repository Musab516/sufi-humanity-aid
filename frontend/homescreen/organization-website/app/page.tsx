import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import CampaignsSection from "@/components/sections/CampaignsSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <HeroSection />

      <StatsSection />

      <CampaignsSection />

      <Footer />
    </main>
  );
}