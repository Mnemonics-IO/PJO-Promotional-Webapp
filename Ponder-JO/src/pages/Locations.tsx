import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Zap, AlertTriangle, Shield, Eye } from "lucide-react";

const locations = [
  {
    id: "new-haven",
    name: "New Haven",
    type: "City",
    status: "Partially Stable",
    threat: "Medium",
    description: "The suburban city where it all began. Once a peaceful community, now fractured by reality tears and Aegis manifestations.",
    details: "Home to approximately 50,000 residents before The Divide. Now serves as the primary settlement for survivors. The crack in the sky above New Haven remains the largest known reality breach.",
    keyLocations: [
      "Central High School - Where The Five first met",
      "Aegis Research Facility - Government installation", 
      "Memorial Park - Site of first Aegis impact",
      "The Safe Zone - Protected district for civilians"
    ],
    coordinates: "41.3°N, 72.9°W",
    gradient: "bg-gradient-to-br from-primary/20 to-primary/5",
    icon: MapPin
  },
  {
    id: "the-divide",
    name: "The Divide",
    type: "Reality Breach", 
    status: "Expanding",
    threat: "Critical",
    description: "The massive crack in reality above New Haven. Source of all Aegis fragments and the epicenter of reality distortions.",
    details: "Stretches approximately 15 kilometers across the sky. Exhibits temporal anomalies, memory fluctuations, and spontaneous matter creation. The Midoki believe it's a window to another dimension.",
    keyLocations: [
      "Breach Core - The central fracture point",
      "Fragment Fields - Areas of concentrated Aegis energy",
      "Memory Voids - Zones where memories are erased", 
      "Temporal Echoes - Time distortion pockets"
    ],
    coordinates: "Above New Haven",
    gradient: "bg-gradient-to-br from-divide-crack/20 to-divide-crack/5", 
    icon: Zap
  },
  {
    id: "aegis-labs",
    name: "Aegis Research Complex",
    type: "Facility",
    status: "Abandoned",
    threat: "High", 
    description: "Former government research facility studying Aegis fragments. Now overrun with unstable experiments and reality anomalies.",
    details: "Built in secret after the first Aegis fall. Contains advanced containment systems, though most have failed. Rumored to house the most powerful Aegis fragment ever recovered.",
    keyLocations: [
      "Containment Vault Alpha - Maximum security storage",
      "Observation Decks - Monitoring stations",
      "Testing Chambers - Experimental areas",
      "Emergency Bunkers - Survival shelters"
    ],
    coordinates: "5 km North of New Haven",
    gradient: "bg-gradient-to-br from-secondary/20 to-secondary/5",
    icon: AlertTriangle
  },
  {
    id: "midoki-sanctuary",
    name: "Midoki Sanctuary",
    type: "Hidden Refuge",
    status: "Unknown",
    threat: "Unknown",
    description: "The secretive headquarters of the Midoki. Location shifts between dimensions, making it nearly impossible to find without invitation.",
    details: "Exists partially outside normal reality. Serves as a repository for preserved memories and a training ground for those chosen by the Midoki. Architecture defies physics.",
    keyLocations: [
      "Memory Archives - Repository of preserved experiences",
      "Training Grounds - Ability development areas", 
      "The Council Chamber - Midoki leadership center",
      "Reality Anchors - Dimensional stabilizers"
    ],
    coordinates: "Dimensional Flux",
    gradient: "bg-gradient-to-br from-accent/20 to-accent/5",
    icon: Shield
  },
  {
    id: "forgotten-zones",
    name: "The Forgotten Zones",
    type: "Memory Voids", 
    status: "Erased",
    threat: "Extreme",
    description: "Areas where The Divide has completely consumed reality. Even approaching these zones causes memory loss and existential erasure.",
    details: "Locations that once existed but have been removed from reality. Only The Five retain any memory of what was lost. Entering these zones risks complete erasure from existence.",
    keyLocations: [
      "The Old Mall - Consumer heart of New Haven",
      "Riverside Elementary - Where Joan first went to school",
      "The Boardwalk - Popular summer destination", 
      "Sunset Heights - Residential neighborhood"
    ],
    coordinates: "[LOCATION DATA CORRUPTED]",
    gradient: "bg-gradient-to-br from-energy-pulse/20 to-energy-pulse/5 opacity-60",
    icon: Eye
  }
];

export default function Locations() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  
  const getThreatColor = (threat: string) => {
    switch (threat) {
      case "Low": return "bg-green-500/20 text-green-400";
      case "Medium": return "bg-yellow-500/20 text-yellow-400"; 
      case "High": return "bg-orange-500/20 text-orange-400";
      case "Critical": return "bg-red-500/20 text-red-400";
      case "Extreme": return "bg-purple-500/20 text-purple-400";
      default: return "bg-muted/20 text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      {/* Starfield Background */}
      <div className="fixed inset-0 bg-starfield">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-aegis-glow rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold glow-text mb-6">
            Fractured World
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the locations where reality bends, breaks, and sometimes disappears entirely. 
            Each place tells a story of a world transformed by impossible forces.
          </p>
        </div>

        {/* Interactive Map Grid */}
        <div className="grid lg:grid-cols-5 gap-6 mb-8">
          {locations.map((location) => {
            const Icon = location.icon;
            return (
              <Card
                key={location.id}
                className={`cursor-pointer transition-all duration-500 hover:scale-105 ${
                  selectedLocation.id === location.id 
                    ? "ring-2 ring-primary/50 shadow-2xl shadow-primary/20" 
                    : "hover:shadow-xl"
                } ${location.gradient} backdrop-blur-sm group`}
                onClick={() => setSelectedLocation(location)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-3 rounded-full mb-4 ${
                    selectedLocation.id === location.id ? "bg-primary/20 animate-pulse-glow" : "bg-card/50"
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-sm mb-2">{location.name}</h3>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${getThreatColor(location.threat)} border-current`}
                  >
                    {location.threat} Risk
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Location Details */}
        <Card className={`${selectedLocation.gradient} backdrop-blur-sm border-border/50 overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-glow opacity-5" />
          
          <CardHeader className="relative z-10">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-4xl font-bold mb-4 glow-text">
                  {selectedLocation.name}
                </CardTitle>
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline">{selectedLocation.type}</Badge>
                  <Badge variant="secondary">{selectedLocation.status}</Badge>
                  <Badge 
                    className={`${getThreatColor(selectedLocation.threat)} border-current animate-pulse`}
                  >
                    Threat: {selectedLocation.threat}
                  </Badge>
                </div>
              </div>
              <div className="text-right text-sm text-muted-foreground">
                <p className="font-mono">{selectedLocation.coordinates}</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="relative z-10 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-primary">Overview</h4>
                  <p className="text-lg leading-relaxed">{selectedLocation.description}</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-primary">Details</h4>
                  <p className="leading-relaxed text-muted-foreground">{selectedLocation.details}</p>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 text-primary">Key Locations</h4>
                <div className="space-y-3">
                  {selectedLocation.keyLocations.map((keyLocation, index) => {
                    const [name, desc] = keyLocation.split(" - ");
                    return (
                      <Card 
                        key={index} 
                        className="p-4 bg-card/30 hover:bg-card/50 transition-all duration-300 group cursor-pointer"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse mt-2" />
                          <div>
                            <p className="font-medium group-hover:text-primary transition-colors">
                              {name}
                            </p>
                            {desc && (
                              <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                            )}
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Threat Assessment */}
            {selectedLocation.threat !== "Unknown" && (
              <div className="pt-6 border-t border-border/30">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-primary">Threat Assessment</h4>
                  <div className={`px-3 py-1 rounded-full ${getThreatColor(selectedLocation.threat)} font-mono text-sm`}>
                    LEVEL: {selectedLocation.threat.toUpperCase()}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}