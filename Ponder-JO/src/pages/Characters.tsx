import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Heart, Shield, Zap, Brain, Eye } from "lucide-react";

const characters = [
  {
    id: "rin",
    name: "Cires (Rin)",
    age: 15,
    role: "The Narrator / The In-Between",
    status: "Active",
    aegisAffinity: 0, // unknown, no direct contact yet
    description: "Restless, curious, and haunted by a feeling that the world is never quite solid. The son of a scientist and an artist, caught between logic and wonder.",
    backstory: "Born in Korea, raised between cultures when his father left for Britain. Rin grew up with an Appa who could fix broken toys and a mother who painted worlds out of thin air. He craves excitement, and finds it in his friends—the only people who feel as misplaced as he does.",
    abilities: ["Noticing what others ignore", "Resistant to memory fractures"],
    personality: ["Introspective", "Playful", "Restless", "Empathetic"],
    relationships: {
      Joan: "Closest friend, bonded through music and rebellion",
      Michael: "Debating partner, challenges his worldview",
      Ezra: "The stylish protector, admires but also worries about him",
    },
    gradient: "bg-gradient-to-br from-primary/30 to-primary/10",
    icon: Brain
  },
  {
    id: "joan",
    name: "Joan (Daja)",
    age: 15,
    role: "The Dreamer / The Believer",
    status: "Active",
    aegisAffinity: 0,
    description: "French-born, adopted into a scientist’s family, Joan believes in making the impossible possible. Her art and music keep the group tethered when reality frays.",
    backstory: "Raised by her adoptive parent Ronnie, Joan grew up torn between discipline and rebellion. Her love for music and rap became both shield and sword, a way to push back against a world that never felt like hers.",
    abilities: ["Turning fear into fuel", "Making the uncanny feel familiar"],
    personality: ["Optimistic", "Bold", "Loyal", "Stubborn"],
    relationships: {
      Rin: "Best friend, protective bond",
      Michael: "Sparring partner in arguments, mutual respect",
      Ezra: "Inspires her, she admires his confidence",
    },
    gradient: "bg-gradient-to-br from-secondary/30 to-secondary/10",
    icon: Heart
  },
  {
    id: "michael",
    name: "Michael",
    age: 15,
    role: "The Skeptic",
    status: "Active",
    aegisAffinity: 0,
    description: "Sharp-tongued and analytical, Michael hides his fear behind sarcasm. He trusts facts, but the Aegium leaves him with nothing to measure.",
    backstory: "The product of a fractured home, Michael learned early not to trust easy answers. While others cling to belief, he clings to logic—even when the rules of reality start bending.",
    abilities: ["Pattern Recognition", "Cutting through denial", "Cold logic"],
    personality: ["Analytical", "Sarcastic", "Cautious", "Loyal"],
    relationships: {
      Rin: "Constantly challenges his ideas, but respects him",
      Joan: "Philosophical opposite, begrudging admiration",
      Ezra: "Sees through his fashion armor, respects his vulnerability",
    },
    gradient: "bg-gradient-to-br from-accent/30 to-accent/10",
    icon: Eye
  },
  {
    id: "ezra",
    name: "Ezra",
    age: 16,
    role: "The Protector / The Vanishing",
    status: "Fading",
    aegisAffinity: 0 , // unknown, implied strong tie
    description: "Flawless on the outside—style, charm, confidence—but hollowing on the inside. The cracks show before anyone admits it.",
    backstory: "The group’s anchor in chaos. Fashion perfectionist, always presenting control. But as the weeks after the Skyfall stretch on, his presence grows thinner, like a photograph fading in sunlight.",
    abilities: ["Keeping up appearances", "Protecting others, not himself"],
    personality: ["Confident", "Charismatic", "Fragile", "Secretive"],
    relationships: {
      Rin: "Protective toward him, but envious of his ease",
      Joan: "Her biggest supporter, admires her fearlessness",
      Michael: "Mutual respect, unspoken understanding",
    },
    gradient: "bg-gradient-to-br from-divide-crack/30 to-divide-crack/10",
    icon: Shield
  },
  {
    id: "theFifth",
    name: "The Erased",
    age: 1,
    role: "The Lost",
    status: "Missing / Forgotten",
    aegisAffinity: "???",
    description: "The absence at the heart of the group. Their name is gone from records, their desk vanished, yet their presence echoes in fractures of memory.",
    backstory: "Once central to the group, the one who tied them together. But the Aegium—or something deeper—has scrubbed them from existence. Only fragments remain in the memories of Rin and the others.",
    abilities: ["Memory Distortion", "Existence Fracture", "Lingering Echoes"],
    personality: ["Unknown", "Warm", "Haunting", "Forgotten"],
    relationships: {
      "All": "The missing bond; without them the group feels incomplete."
    },
    gradient: "bg-gradient-to-br from-energy-pulse/30 to-energy-pulse/10 opacity-70",
    icon: Zap
  }
];


export default function Characters() {
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold glow-text mb-6">
            The Originals
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Five friends became legends. Heroes who never asked to be chosen. 
            Explore their stories, abilities, and the bonds that hold reality together.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Character Selection */}
          <div className="space-y-4">
            {characters.map((character) => {
              const Icon = character.icon;
              return (
                <Card
                  key={character.id}
                  className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                    selectedCharacter.id === character.id 
                      ? "ring-2 ring-primary/50 bg-primary/10" 
                      : "hover:bg-card/50"
                  } ${character.gradient} backdrop-blur-sm`}
                  onClick={() => setSelectedCharacter(character)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${selectedCharacter.id === character.id ? "bg-primary/20" : "bg-card/50"}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{character.name}</h3>
                        <p className="text-sm text-muted-foreground">{character.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Character Details */}
          <div className="lg:col-span-3">
            <Card className={`${selectedCharacter.gradient} backdrop-blur-sm border-border/50`}>
              <CardHeader className="pb-6">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-3xl font-bold mb-2 glow-text">
                      {selectedCharacter.name}
                    </CardTitle>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="outline">Age {selectedCharacter.age}</Badge>
                      <Badge variant="secondary">{selectedCharacter.role}</Badge>
                      <Badge 
                        variant={selectedCharacter.status === "Active" ? "default" : "destructive"}
                        className="animate-pulse"
                      >
                        {selectedCharacter.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground mb-1">Aegis Affinity</p>
                    <div className="w-32">
                      <Progress 
                        value={Number(selectedCharacter.aegisAffinity)}
                        className="h-2"
                      />
                      <p className="text-xs text-center mt-1">{selectedCharacter.aegisAffinity}%</p>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 mb-6">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="backstory">Backstory</TabsTrigger>
                    <TabsTrigger value="abilities">Abilities</TabsTrigger>
                    <TabsTrigger value="relationships">Bonds</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-6">
                    <p className="text-lg leading-relaxed">{selectedCharacter.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Personality Traits</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCharacter.personality.map((trait) => (
                          <Badge key={trait} variant="outline" className="hover:bg-primary/10 transition-colors">
                            {trait}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="backstory" className="space-y-6">
                    <p className="text-lg leading-relaxed">{selectedCharacter.backstory}</p>
                  </TabsContent>

                  <TabsContent value="abilities" className="space-y-4">
                    <h4 className="font-semibold text-primary mb-4">Known Abilities</h4>
                    <div className="space-y-3">
                      {selectedCharacter.abilities.map((ability, index) => (
                        <Card key={ability} className="p-4 bg-card/30 hover:bg-card/50 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            <span className="font-medium">{ability}</span>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="relationships" className="space-y-4">
                    <h4 className="font-semibold text-primary mb-4">Relationships</h4>
                    <div className="space-y-3">
                      {Object.entries(selectedCharacter.relationships).map(([person, relationship]) => (
                        <Card key={person} className="p-4 bg-card/30">
                          <div className="flex justify-between items-start">
                            <span className="font-medium text-accent">{person}</span>
                            <span className="text-sm text-muted-foreground text-right">{relationship}</span>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}