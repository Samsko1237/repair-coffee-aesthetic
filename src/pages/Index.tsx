import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuoteWizard from "@/components/QuoteWizard";
import ReviewsSection from "@/components/ReviewsSection";
import RepairsSection from "@/components/RepairsSection";
import TarifsSection from "@/components/TarifsSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import AtelierButton from "@/components/AtelierButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <HeroSection />
      <QuoteWizard />
      <ReviewsSection />
      <RepairsSection />
      <TarifsSection />
      <FAQSection />
      <FooterSection />
      <AtelierButton />
    </div>
  );
};

export default Index;
