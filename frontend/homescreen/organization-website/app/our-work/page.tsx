import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OurWorkHero from "@/components/sections/OurWorkHero";
import CurrentProjectsSection from "@/components/sections/CurrentProjectsSection";
import HowWeWorkSection from "@/components/sections/HowWeWorkSection";
export default function OurWorkPage() {
  return (
    <main>
      <Navbar />

      <OurWorkHero />

      <CurrentProjectsSection />

      <HowWeWorkSection />

      <Footer />
    </main>
  );
}