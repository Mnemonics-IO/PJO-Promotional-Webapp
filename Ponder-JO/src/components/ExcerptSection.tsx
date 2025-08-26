import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const excerpt = `They always told me London was a city that never forgot. Its stones carried the weight of empires, its air thickened with smoke, secrets, and centuries of whispered bargains. But here I was, standing at the edge of Ashwell, at the end of everything I had known, feeling an intimacy with the city that was almost personal—as if its fog-laden alleys leaned closer, its fractured rooftops bent toward me, remembering me before I remembered myself. It wasn’t déjà vu; it was as though I had stepped into a verse already written, a performance rehearsed without my consent. Every cobblestone, every coil of mist, every shadow that flickered too deliberately across my path suggested the city was not merely a backdrop—it was alive, watching, patient, and insistent.

Even as I lingered, the fog curling like fingers along the rooftops, a thought tugged at me: the world I knew—the one my parents and neighbors clung to—was a fragile veneer. Beyond it, beyond Ashwell’s tidy streets, lay sparks of astonishment, tiny explosions of wonder that only a few dared pursue. It was one of our few portals to the extraordinary in this meek neighborhood, and tonight, we would ride straight into it.
`;

export const ExcerptSection = () => {
  const [visibleText, setVisibleText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const startTypewriter = () => {
    if (isTyping) return;
    
    setIsTyping(true);
    setVisibleText("");
    
    let index = 0;
    const timer = setInterval(() => {
      if (index <= excerpt.length) {
        setVisibleText(excerpt.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, 30);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isTyping) {
            startTypewriter();
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("excerpt-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [isTyping]);

  return (
    <section id="excerpt-section" className="py-20 px-6 relative overflow-hidden bg-gray-200">
      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow opacity-20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-violet opacity-15 rounded-full blur-2xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold glow-text mb-6">
            Chapter One
          </h2>
          <p className="text-xl text-muted-foreground">
            The day everything changed
          </p>
        </div>

        <Card className="bg-card/30 backdrop-blur-sm border-border/50 overflow-hidden">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-3 text-2xl">
              <BookOpen className="w-6 h-6 text-primary" />
              Requiem: Opening
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <div 
                className="whitespace-pre-line text-foreground/90 leading-relaxed font-mono text-base"
                style={{ minHeight: '400px' }}
              >
                {visibleText}
                {isTyping && (
                  <span className="inline-block w-0.5 h-5 bg-aegis-glow animate-pulse ml-1" />
                )}
              </div>
            </div>
            
            {!isTyping && visibleText.length > 0 && (
              <div className="mt-8 text-center animate-fade-in">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="pulse-glow border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                >
                  Continue Reading
                </Button>
              </div>
            )}
            
            {!isTyping && visibleText.length === 0 && (
              <div className="text-center">
                <Button 
                  onClick={startTypewriter}
                  variant="ghost"
                  className="text-muted-foreground hover:text-primary"
                >
                  Start Reading
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};