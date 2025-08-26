import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Zap, Users, AlertTriangle, Eye, Split } from "lucide-react";

const timelineEvents = [
  {
    id: "pre-crack",
    date: "Before July 15, 2030",
    title: "The World Before",
    type: "historical",
    importance: "context",
    description: "Normal reality. Five friends living ordinary suburban lives in New Haven, unaware that their world is about to change forever.",
    details: "Rin celebrates their 16th birthday. Joan excels in science class. Michael questions everything. Ezra protects the group. The Fifth Friend... [MEMORY FRAGMENTED].",
    participants: ["The Five", "New Haven Residents"],
    consequences: ["Established friendships", "Normal reality baseline"],
    icon: Users,
    gradient: "bg-gradient-to-r from-muted/20 to-muted/10"
  },
  {
    id: "the-crack", 
    date: "July 15, 2030 - 3:42 PM",
    title: "The Sky Cracks",
    type: "cataclysmic",
    importance: "critical",
    description: "Reality splits open above New Haven. The Divide appears as a massive crack in the sky, and the first Aegis fragments fall to Earth.",
    details: "Witnessed by The Five during a bike ride. The crack appears as a thin silver line that rapidly expands. Fragments rain down like burning stars, each one humming with impossible energy.",
    participants: ["The Five", "All of New Haven"],
    consequences: ["Reality becomes unstable", "Aegis fragments discovered", "Physics laws broken"],
    icon: Split,
    gradient: "bg-gradient-to-r from-divide-crack/30 to-divide-crack/10"
  },
  {
    id: "first-contact",
    date: "July 16, 2030",
    title: "First Contact with Aegis",
    type: "discovery",
    importance: "major",
    description: "The Five discover that Aegis fragments respond to their touch, granting each of them unique abilities while others cannot even lift the shards.",
    details: "Joan's fragment glows with warm light when touched. Ezra's shard crackles with energy. Michael's piece seems to analyze him back. Rin's fragment whispers memories. The Fifth's... [DATA CORRUPTED].",
    participants: ["The Five"],
    consequences: ["Fragment bonding initiated", "Abilities manifested", "Marked as special"],
    icon: Zap,
    gradient: "bg-gradient-to-r from-primary/30 to-primary/10"
  },
  {
    id: "government-response",
    date: "July 20, 2030",
    title: "Government Containment",
    type: "political",
    importance: "major", 
    description: "Military cordons off New Haven. Scientists arrive to study the phenomenon. The Aegis Research Complex is established in secret.",
    details: "Martial law declared in New Haven. Residents relocated to temporary shelters. The Five manage to hide their fragments and abilities from the authorities.",
    participants: ["Government Forces", "Research Teams", "New Haven Residents"],
    consequences: ["Area contained", "Research initiated", "The Five in hiding"],
    icon: AlertTriangle,
    gradient: "bg-gradient-to-r from-destructive/30 to-destructive/10"
  },
  {
    id: "reality-tears",
    date: "August 3, 2030", 
    title: "Reality Tears Appear",
    type: "expansion",
    importance: "major",
    description: "Smaller cracks begin appearing throughout New Haven. Reality becomes increasingly unstable as the tears spread beyond the original breach.",
    details: "First reported in Memorial Park, then spreading to residential areas. Each tear brings temporal echoes and dimensional bleeding. The Five realize the situation is accelerating.",
    participants: ["New Haven Residents", "Research Teams"],
    consequences: ["Instability spreads", "Evacuations increase", "Temporal anomalies begin"],
    icon: Split,
    gradient: "bg-gradient-to-r from-secondary/30 to-secondary/10"
  },
  {
    id: "midoki-contact",
    date: "August 15, 2030",
    title: "The Midoki Arrive", 
    type: "encounter",
    importance: "critical",
    description: "Mysterious figures calling themselves Midoki approach The Five with an offer to preserve their memories against the coming erasure.",
    details: "Appear simultaneously to each member of The Five in different locations. Speak of ancient duties and the importance of memory. Offer training and protection in exchange for service.",
    participants: ["The Five", "Midoki Agents"],
    consequences: ["Choice presented", "Greater truth revealed", "Training offered"],
    icon: Eye,
    gradient: "bg-gradient-to-r from-accent/30 to-accent/10"
  },
  {
    id: "first-erasure",
    date: "September 2, 2030",
    title: "The First Erasure",
    type: "tragedy",
    importance: "critical",
    description: "The Old Mall district is consumed by The Divide. Not destroyed—completely erased from reality. Only The Five remember it existed.",
    details: "Happens without warning during the night. By morning, there's just empty space where buildings used to be. No one remembers the mall except The Five, confirming their unique nature.",
    participants: ["Former Mall District Residents", "The Five"],
    consequences: ["First major erasure", "Proof of memory preservation abilities", "Urgency increases"],
    icon: AlertTriangle,
    gradient: "bg-gradient-to-r from-energy-pulse/30 to-energy-pulse/10"
  },
  {
    id: "the-sacrifice",
    date: "September 10, 2030",
    title: "The Fifth Friend's Sacrifice",
    type: "tragedy", 
    importance: "critical",
    description: "[MEMORY HEAVILY CORRUPTED] - Something happened to the fifth member of the group. Their sacrifice created a temporary stabilization but at tremendous cost.",
    details: "[DATA FRAGMENTED] - Fragments suggest they chose erasure to save the others. Their absence created The Divide's current form. Only emotional echoes remain.",
    participants: ["The Fifth Friend", "The Remaining Four"],
    consequences: ["Group reduced to four", "Major reality stabilization", "Enormous guilt and loss"],
    icon: Users,
    gradient: "bg-gradient-to-r from-energy-pulse/20 to-energy-pulse/5 opacity-70"
  },
  {
    id: "present-day",
    date: "October 2030 - Present", 
    title: "The Current Crisis",
    type: "ongoing",
    importance: "critical",
    description: "The Divide continues to grow. More areas face erasure. The Four must decide between saving their world or preserving their memories of what was lost.",
    details: "Reality tears appear daily. The Forgotten Zones expand. The Midoki pressure for a decision. The Four struggle with the truth about their lost friend and the choice ahead.",
    participants: ["The Four", "Midoki", "Remaining Survivors"],
    consequences: ["Ongoing instability", "Difficult choices ahead", "Time running out"],
    icon: Clock,
    gradient: "bg-gradient-to-r from-primary/20 to-secondary/20"
  }
];

const eventTypes = [
  { type: "all", label: "All Events", color: "bg-muted text-muted-foreground" },
  { type: "cataclysmic", label: "Cataclysmic", color: "bg-red-500/20 text-red-400" },
  { type: "discovery", label: "Discovery", color: "bg-blue-500/20 text-blue-400" },
  { type: "encounter", label: "Encounter", color: "bg-purple-500/20 text-purple-400" },
  { type: "tragedy", label: "Tragedy", color: "bg-orange-500/20 text-orange-400" },
  { type: "ongoing", label: "Ongoing", color: "bg-green-500/20 text-green-400" }
];

export default function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState(timelineEvents[2]); // Start with first contact
  const [filterType, setFilterType] = useState("all");

  const filteredEvents = filterType === "all" 
    ? timelineEvents 
    : timelineEvents.filter(event => event.type === filterType);

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case "critical": return "bg-red-500/20 text-red-400 border-red-500/30";
      case "major": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "context": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default: return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      {/* Floating timeline particles */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold glow-text mb-6">
            Chronicle of Events
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track the sequence of events that shattered reality and changed five friends forever. 
            Some memories are clearer than others...
          </p>
        </div>

        {/* Event Type Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {eventTypes.map((type) => (
            <Button
              key={type.type}
              variant={filterType === type.type ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterType(type.type)}
              className={`transition-all duration-300 ${
                filterType === type.type 
                  ? "pulse-glow" 
                  : "hover:bg-primary/10"
              }`}
            >
              {type.label}
            </Button>
          ))}
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-2xl font-bold glow-text mb-6">Timeline</h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-50" />
              
              {filteredEvents.map((event, index) => {
                const Icon = event.icon;
                return (
                  <div key={event.id} className="relative mb-6">
                    {/* Timeline dot */}
                    <div className={`absolute left-6 w-4 h-4 rounded-full border-2 ${
                      selectedEvent.id === event.id 
                        ? "bg-primary border-primary shadow-lg shadow-primary/50 animate-pulse-glow" 
                        : "bg-background border-muted-foreground/50"
                    } z-10`} />
                    
                    <Card
                      className={`ml-16 cursor-pointer transition-all duration-300 hover:scale-105 ${
                        selectedEvent.id === event.id 
                          ? "ring-2 ring-primary/50 bg-primary/10" 
                          : "hover:bg-card/50"
                      } ${event.gradient} backdrop-blur-sm`}
                      onClick={() => setSelectedEvent(event)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-lg flex-shrink-0 ${
                            selectedEvent.id === event.id ? "bg-primary/20" : "bg-card/50"
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs font-mono text-muted-foreground mb-1">
                              {event.date}
                            </p>
                            <h3 className="font-semibold text-sm leading-tight">
                              {event.title}
                            </h3>
                            <Badge 
                              variant="outline"
                              className={`text-xs mt-2 ${getImportanceColor(event.importance)}`}
                            >
                              {event.importance}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Event Details */}
          <div className="lg:col-span-3">
            <Card className={`${selectedEvent.gradient} backdrop-blur-sm border-border/50`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="w-5 h-5 text-muted-foreground" />
                      <span className="font-mono text-muted-foreground">{selectedEvent.date}</span>
                      <Badge 
                        variant="outline"
                        className={getImportanceColor(selectedEvent.importance)}
                      >
                        {selectedEvent.importance}
                      </Badge>
                    </div>
                    <CardTitle className="text-3xl font-bold glow-text">
                      {selectedEvent.title}
                    </CardTitle>
                  </div>
                  <div className="p-3 bg-card/50 rounded-xl">
                    <selectedEvent.icon className="w-8 h-8" />
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-primary">Overview</h4>
                  <p className="text-lg leading-relaxed">{selectedEvent.description}</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3 text-primary">Details</h4>
                  <p className="leading-relaxed text-muted-foreground">{selectedEvent.details}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-secondary">Participants</h4>
                    <div className="space-y-2">
                      {selectedEvent.participants.map((participant, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full" />
                          <span className="text-sm">{participant}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-accent">Consequences</h4>
                    <div className="space-y-2">
                      {selectedEvent.consequences.map((consequence, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full" />
                          <span className="text-sm">{consequence}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Memory Status */}
                <div className="pt-6 border-t border-border/30">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Memory Status: {selectedEvent.id === "the-sacrifice" ? "FRAGMENTED" : "PRESERVED"}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      [MIDOKI_VERIFICATION: {selectedEvent.importance.toUpperCase()}]
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