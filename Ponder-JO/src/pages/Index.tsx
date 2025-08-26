import { HeroSection } from "@/components/HeroSection";
import { StorySection } from "@/components/StorySection";
import { WorldbuildingSection } from "@/components/WorldbuildingSection";
import { CharacterSection } from "@/components/CharacterSection";
import { ExcerptSection } from "@/components/ExcerptSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <StorySection />
      <WorldbuildingSection />
      <CharacterSection />
      <ExcerptSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;