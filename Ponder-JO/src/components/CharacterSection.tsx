import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const characters = [
  {
    name: "Cires (Rin)",
    age: 16,
    role: "The Narrator",
    description: "The one who remembers. Rin carries the weight of memories that others have forgotten, trying to piece together the truth of what really happened that day.",
    dream: "To understand why they were chosen",
    gradient: "bg-gradient-to-br from-primary/20 to-primary/5"
  },
  {
    name: "Joan",
    age: 15,
    role: "The Believer", 
    description: "Optimistic and determined, Joan refuses to give up hope even as the world crumbles. Their unwavering faith becomes a beacon for the others.",
    dream: "To save everyone she cares about",
    gradient: "bg-gradient-to-br from-secondary/20 to-secondary/5"
  },
  {
    name: "Michael",
    age: 16,
    role: "The Skeptic",
    description: "Questioning everything, Michael struggles to accept the impossible reality around them. Their analytical mind may be key to understanding The Aegis.",
    dream: "To find logical explanations for the chaos",
    gradient: "bg-gradient-to-br from-accent/20 to-accent/5"
  },
  {
    name: "Ezra",
    age: 17,
    role: "The Protector",
    description: "The oldest of the group, Ezra feels responsible for keeping everyone safe. But some threats can't be fought with courage alone.",
    dream: "To shield the others from the truth",
    gradient: "bg-gradient-to-br from-divide-crack/20 to-divide-crack/5"
  }
];

export const CharacterSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold glow-text mb-6">
            The Five
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Friends who became legends. Heroes who never asked to be chosen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {characters.map((character, index) => (
            <Card 
              key={character.name}
              className={`group hover:scale-105 transition-all duration-500 ${character.gradient} border-border/50 backdrop-blur-sm overflow-hidden relative`}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              
              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl font-bold mb-2">
                      {character.name}
                    </CardTitle>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="outline" className="text-xs">
                        Age {character.age}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {character.role}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-foreground/80 leading-relaxed mb-4">
                  {character.description}
                </p>
                
                <div className="pt-4 border-t border-border/30">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-accent">Dream:</span> {character.dream}
                  </p>
                </div>
              </CardContent>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                   style={{background: 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), transparent)', animation: 'pulse 2s infinite'}} />
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/50">
            <p className="text-lg font-script text-muted-foreground">
              "There was a fifth friend that day. Their name has been erased from memory, 
              but their sacrifice echoes through the cracks in reality..."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};