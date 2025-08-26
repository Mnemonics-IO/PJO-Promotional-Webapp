import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-genesis.jpg";

export const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("story-section");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Overlay for subtle effect, if needed */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-7xl md:text-9xl font-black mb-6 text-foreground tracking-tight leading-none">
          REQUIEM
        </h1>
        
        <p className="text-2xl md:text-3xl text-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          "The world was ending, and nobody realized it..."
        </p>
        
        <Button 
          size="lg"
          variant="outline"
          className="border-foreground text-foreground hover:bg-foreground hover:text-background font-semibold px-8 py-4 text-lg rounded-xl"
          onClick={scrollToNext}
        >
          Begin Reading
        </Button>
      </div>


    </section>
  );
};