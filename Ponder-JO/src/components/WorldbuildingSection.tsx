import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Split, Shield, Users } from "lucide-react";

const loreItems = [
  {
    title: "The Aegis",
    description: "Mysterious energy fragments that fell from the cracked sky, defying all known physics and granting impossible abilities.",
    icon: Zap,
    color: "bg-primary/20 text-primary border-primary/30"
  },
  {
    title: "The Divide", 
    description: "A reality-tearing force that threatens to split existence itself, growing stronger with each passing moment.",
    icon: Split,
    color: "bg-divide-crack/20 text-divide-crack border-divide-crack/30"
  },
  {
    title: "Midoki",
    description: "The keepers of memory in a world where reality itself can be rewritten. Their true purpose remains hidden.",
    icon: Shield,
    color: "bg-secondary/20 text-secondary border-secondary/30"
  },
  {
    title: "The Five",
    description: "Rin, Joan, Michael, Ezra, and one other — friends who became humanity's last hope against the unraveling.",
    icon: Users,
    color: "bg-accent/20 text-accent border-accent/30"
  }
];

export const WorldbuildingSection = () => {
  return (
    <section className="py-20 px-6 relative">
      {/* Starfield Background */}
      <div className="absolute inset-0 bg-starfield">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-aegis-glow rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold glow-text mb-6">
            The Lore
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the mysteries of a world where reality itself has been shattered
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {loreItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={item.title}
                className={`group hover:scale-105 transition-all duration-300 glitch-effect bg-card/50 backdrop-blur-sm border ${item.color.split(' ')[2]} hover:shadow-xl cursor-pointer`}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${item.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold">
                        {item.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-foreground/80">
                    {item.description}
                  </CardDescription>
                  <Badge variant="outline" className="mt-4 opacity-60">
                    Classification: Unknown
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};