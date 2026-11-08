import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import Footer from "@/components/layout/Footer";
import FeaturedCampaignsSection from "@/components/sections/FeaturedCampaignsSection";
import OurWorkSection from "@/components/sections/OurWorkSection";
import TrustSection from "@/components/sections/TrustSection";
import StoriesSection from "@/components/sections/StoriesSection";
export default function Home() {
  return (
    <main>
      <Navbar />

      <HeroSection />

      <StatsSection />
      <FeaturedCampaignsSection  />

      <OurWorkSection />
      <TrustSection />
      
      <StoriesSection />

      <Footer />
    </main>
  );
}