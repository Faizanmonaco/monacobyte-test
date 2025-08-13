import HeroSection from "@/components/HeroSection";
import AIEmployees from "@/components/AIEmployees";
import MissionSection from "@/components/MissionBand";
import CustomSolutions from "@/components/CustomSolutions";
import OurWorks from "@/components/OurWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AIEmployees />
      <MissionSection />
      <CustomSolutions />
      <OurWorks />
      <Testimonials />
      <FAQ />
      <Footer />
      {/* Next section will follow here */}
    </>
  );
}