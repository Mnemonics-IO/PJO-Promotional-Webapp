import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Zap, Users, Shield, Split, Eye, Clock, Map, Book, AlertTriangle } from "lucide-react";

const terminology = [
  // --- ORIGINAL ENTRIES ---
  {
    id: "aegis",
    term: "The Aegis",
    category: "Phenomenon",
    definition: "Mysterious energy fragments that fell from the cracked sky, defying all known physics and granting impossible abilities to those who bond with them.",
    details: "First appeared on July 15th, 2030. Each fragment contains immense power but comes with unknown side effects. The larger the fragment, the more dangerous it becomes. Some fragments exhibit sentience.",
    relatedTerms: ["The Divide", "Fragment Bonding", "Energy Resonance"],
    icon: Zap,
    color: "text-primary"
  },
  {
    id: "divide",
    term: "The Divide",
    category: "Anomaly", 
    definition: "The massive reality breach above New Haven that grows larger each day. Source of all Aegis fragments and center of reality distortions.",
    details: "Appears as a crack in the sky stretching 15 kilometers. Exhibits temporal anomalies, memory fluctuations, and spontaneous matter creation. Scientists believe it's a doorway to another dimension.",
    relatedTerms: ["Reality Tears", "Temporal Echoes", "The Aegis"],
    icon: Split,
    color: "text-divide-crack"
  },
  {
    id: "midoki", 
    term: "Midoki",
    category: "Organization",
    definition: "Mysterious keepers of memory who appear when reality begins to fracture. Their true origins and purpose remain hidden.",
    details: "Ancient organization dedicated to preserving memory across dimensional barriers. Recruit individuals with strong memory retention abilities. Possess technology that defies current understanding.",
    relatedTerms: ["Memory Preservation", "Reality Anchors", "The Five"],
    icon: Shield,
    color: "text-secondary"
  },
  {
    id: "memory-preservation",
    term: "Memory Preservation", 
    category: "Ability",
    definition: "The power to retain memories even when reality itself is rewritten. A rare ability possessed by few individuals.",
    details: "Allows the holder to remember things that have been erased from existence. Can be enhanced through Midoki training. Essential for maintaining identity during reality fluctuations.",
    relatedTerms: ["Midoki", "Reality Anchors", "The Five"],
    icon: Eye,
    color: "text-accent"
  },
  {
    id: "forgotten-zones",
    term: "Forgotten Zones",
    category: "Location",
    definition: "Areas where The Divide has completely consumed reality. Even approaching these zones causes memory loss and existential erasure.",
    details: "Locations that once existed but have been removed from reality. Only those with Memory Preservation abilities retain any knowledge of what was lost. Extremely dangerous to enter.",
    relatedTerms: ["The Divide", "Memory Loss", "Existential Erasure"],
    icon: Map,
    color: "text-energy-pulse"
  },
  {
    id: "reality-tears",
    term: "Reality Tears",
    category: "Anomaly",
    definition: "Smaller cracks in reality that appear throughout New Haven. Allow glimpses into other dimensions but are highly unstable.",
    details: "Range from hairline fractures to gaping wounds in space-time. Often accompanied by temporal distortions and memory fluctuations. Can be temporarily sealed using Aegis energy.",
    relatedTerms: ["The Divide", "Temporal Echoes", "Dimensional Bleeding"],
    icon: AlertTriangle,
    color: "text-destructive"
  },
  {
    id: "fragment-bonding",
    term: "Fragment Bonding",
    category: "Process", 
    definition: "The process by which an individual forms a connection with an Aegis fragment, gaining abilities but also accepting unknown risks.",
    details: "Occurs through physical contact with compatible fragments. Creates permanent neural pathways that allow manipulation of Aegis energy. Bonding strength determines available abilities.",
    relatedTerms: ["The Aegis", "Energy Resonance", "Ability Manifestation"],
    icon: Zap,
    color: "text-primary"
  },
  {
    id: "temporal-echoes", 
    term: "Temporal Echoes",
    category: "Phenomenon",
    definition: "Time distortions caused by reality tears. Allow glimpses of past and potential future events, though interpretation is difficult.",
    details: "Manifest as brief visions or auditory phenomena. Often triggered by proximity to Aegis fragments or reality tears. Can provide valuable intel but may also be misleading.",
    relatedTerms: ["Reality Tears", "The Divide", "Precognitive Flashes"],
    icon: Clock,
    color: "text-muted-foreground"
  },
  {
    id: "the-five",
    term: "The Five",
    category: "Group",
    definition: "Rin, Joan, Michael, Ezra, and one other—the friends who witnessed the original sky crack and became humanity's last hope.",
    details: "Chosen by circumstance and bonded by friendship. Each possesses unique abilities granted by Aegis fragments. The identity of the fifth member has been partially erased from reality.",
    relatedTerms: ["Memory Preservation", "Fragment Bonding", "The Lost Friend"],
    icon: Users,
    color: "text-foreground"
  },
  {
    id: "dimensional-bleeding",
    term: "Dimensional Bleeding",
    category: "Phenomenon", 
    definition: "The intrusion of elements from other realities into our dimension through tears in space-time.",
    details: "Results in impossible physics, contradictory memories, and the appearance of objects or people that shouldn't exist. Increases in frequency near larger reality tears.",
    relatedTerms: ["Reality Tears", "The Divide", "Paradox Events"],
    icon: Eye,
    color: "text-violet-400"
  },
  {
    id: "existential-erasure",
    term: "Existential Erasure",
    category: "Threat",
    definition: "Complete removal from reality—not just death, but the deletion of all evidence that something ever existed.",
    details: "The ultimate threat posed by The Divide. Victims are not just killed but retroactively removed from history. Only those with Memory Preservation abilities remember them.",
    relatedTerms: ["The Divide", "Forgotten Zones", "The Lost Friend"],
    icon: AlertTriangle,
    color: "text-red-400"
  },
  {
    id: "reality-anchors",
    term: "Reality Anchors", 
    category: "Technology",
    definition: "Midoki devices that stabilize local reality and prevent dimensional bleeding or memory loss in designated areas.",
    details: "Appear as crystalline structures that hum with Aegis energy. Create safe zones where normal physics apply and memories remain intact. Technology beyond current human understanding.",
    relatedTerms: ["Midoki", "Dimensional Bleeding", "Memory Preservation"],
    icon: Shield,
    color: "text-cyan-400"
  },

  // --- NEW POWER SYSTEM ENTRIES ---
  {
    id: "lokk",
    term: "Lokk",
    category: "Core System",
    definition: "The fundamental energy force shaped by emotion, memory, and identity, granting individuals supernatural abilities.",
    details: "Lokk manifests differently depending on the wielder’s emotional state and chosen Path. It is not uniform—every user resonates uniquely with it.",
    relatedTerms: ["Paths", "Sigils", "Mundanes", "Daemons"],
    icon: Zap,
    color: "text-primary"
  },
  {
    id: "paths",
    term: "Paths",
    category: "Classification",
    definition: "The routes through which Lokk manifests, determined by personality, memory, and emotional resonance.",
    details: "Each user aligns with a Path—such as Wrath, Serenity, Vanity, or Resolve—that shapes their combat style, abilities, and limitations.",
    relatedTerms: ["Lokk", "Sigils", "Midoki"],
    icon: Split,
    color: "text-divide-crack"
  },
  {
    id: "sigils",
    term: "Sigils",
    category: "Markings",
    definition: "Physical or ethereal marks that appear when Lokk manifests, symbolizing the user’s Path and abilities.",
    details: "Sigils often glow or burn when abilities are activated. They can mutate with growth or trauma, reflecting the user’s evolving self.",
    relatedTerms: ["Lokk", "Paths", "Daemons"],
    icon: Eye,
    color: "text-accent"
  },
  {
    id: "mundanes",
    term: "Mundanes",
    category: "Classification",
    definition: "Baseline humans of Terra II, who—after the Divide—still possess enhanced traits equivalent to twenty trained soldiers.",
    details: "Though called ‘Mundane,’ they are far from ordinary. They can unlock Lokk under the right triggers, often through trauma, memory, or resonance.",
    relatedTerms: ["Lokk", "Midoki", "Daemons"],
    icon: Users,
    color: "text-foreground"
  },
  {
    id: "daemons",
    term: "Daemons",
    category: "Entity",
    definition: "Twisted manifestations of Lokk born from corrupted memories, emotions, or fractured identities.",
    details: "They embody instability, feeding on distorted emotions. Some are remnants of forgotten people, erased from memory but left behind as echoes.",
    relatedTerms: ["Forgotten", "Sigils", "Lokk"],
    icon: AlertTriangle,
    color: "text-red-400"
  },
  {
    id: "midoki",
    term: "Midoki",
    category: "Organization",
    definition: "Keepers of memory who maintain stability across fractured realities and train wielders of Lokk.",
    details: "They preserve identities against erasure and ensure memory anchors survive. Known for techniques that allow stronger control of Paths.",
    relatedTerms: ["Reality Anchors", "Memory Preservation", "Lokk"],
    icon: Shield,
    color: "text-secondary"
  },
  {
    id: "composite",
    term: "The Composite",
    category: "Celestial Entity",
    definition: "A recurring being of pure hope, remembered into existence within the Mindscape and reborn through different hosts each era.",
    details: "Its power reshapes reality to eliminate threats to Terra II. Though born of hope, its interpretation of protection can become oppressive.",
    relatedTerms: ["Mindscape", "Mnemos", "Lokk"],
    icon: Book,
    color: "text-violet-400"
  },
  {
    id: "mindscape",
    term: "Mindscape",
    category: "Plane",
    definition: "A vast conceptual realm shaped by memory and thought, where constructs like Mnemos and the Composite exist.",
    details: "Entities here are remembered into being. Power in the Mindscape depends on how strongly someone is remembered in reality.",
    relatedTerms: ["Mnemos", "Memory Preservation", "Composite"],
    icon: Book,
    color: "text-muted-foreground"
  },
  {
    id: "divide",
    term: "The Divide",
    category: "Event",
    definition: "The cataclysm that fractured Terra, reshaping continents and merging histories into distorted realities.",
    details: "Triggered by the descent of strange matter, the Divide altered physics and memory. It is the root of all Lokk manifestations.",
    relatedTerms: ["Lokk", "Paths", "Mundanes"],
    icon: Split,
    color: "text-divide-crack"
  }
];

const categories = ["All", ...Array.from(new Set(terminology.map(t => t.category)))];

export default function Terminology() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTerm, setSelectedTerm] = useState(terminology[0]);

  const filteredTerms = useMemo(() => {
    return terminology.filter(term => {
      const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          term.definition.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || term.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold glow-text mb-6">
            Codex
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive guide to the terminology, concepts, and phenomena 
            of a world where reality itself has been fractured.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search terminology..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card/30 backdrop-blur-sm border-border/50"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 ${
                  selectedCategory === category 
                    ? "pulse-glow" 
                    : "hover:bg-primary/10 hover:border-primary/30"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Terms List */}
          <div className="space-y-3 max-h-[70vh] overflow-y-auto">
            {filteredTerms.map((term) => {
              const Icon = term.icon;
              return (
                <Card
                  key={term.id}
                  className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                    selectedTerm.id === term.id 
                      ? "ring-2 ring-primary/50 bg-primary/10" 
                      : "hover:bg-card/50"
                  } backdrop-blur-sm group`}
                  onClick={() => setSelectedTerm(term)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        selectedTerm.id === term.id ? "bg-primary/20" : "bg-card/50"
                      } group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-4 h-4 ${term.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold">{term.term}</h3>
                        <Badge variant="outline" className="text-xs mt-1">
                          {term.category}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {filteredTerms.length === 0 && (
              <Card className="p-8 text-center bg-card/30 backdrop-blur-sm">
                <p className="text-muted-foreground">
                  No terms found matching your search criteria.
                </p>
              </Card>
            )}
          </div>

          {/* Term Details */}
          <div className="lg:col-span-2">
            <Card className="bg-card/30 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-3xl font-bold glow-text mb-4">
                      {selectedTerm.term}
                    </CardTitle>
                    <Badge variant="secondary" className="mb-4">
                      {selectedTerm.category}
                    </Badge>
                  </div>
                  <div className={`p-3 rounded-xl bg-card/50 ${selectedTerm.color}`}>
                    <selectedTerm.icon className="w-8 h-8" />
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Definition</h4>
                  <p className="text-lg leading-relaxed">{selectedTerm.definition}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Details</h4>
                  <p className="leading-relaxed text-muted-foreground">{selectedTerm.details}</p>
                </div>

                {selectedTerm.relatedTerms.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">Related Terms</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTerm.relatedTerms.map((relatedTerm) => {
                        const related = terminology.find(t => t.term === relatedTerm);
                        return (
                          <Button
                            key={relatedTerm}
                            variant="outline"
                            size="sm"
                            onClick={() => related && setSelectedTerm(related)}
                            className="hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                          >
                            {relatedTerm}
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Classification Footer */}
                <div className="pt-6 border-t border-border/30">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Classification: {selectedTerm.category}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      [MIDOKI_ARCHIVE_VERIFIED]
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}