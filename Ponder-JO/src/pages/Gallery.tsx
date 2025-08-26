import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Image, Eye, Download, Zap, Users, MapPin, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-genesis.jpg";

// Mock gallery items - in a real app these would come from a CMS or API
const galleryItems = [
  {
    id: "hero-crack",
    title: "The Crack in the Sky",
    type: "concept-art",
    category: "Events", 
    description: "The moment reality split open above New Haven, witnessed by five friends on bikes.",
    image: heroImage,
    artist: "Genesis Art Team",
    date: "Original Event Concept",
    tags: ["The Divide", "New Haven", "The Five"],
    icon: Zap
  },
  {
    id: "aegis-fragment",
    title: "Aegis Fragment Study",
    type: "technical",
    category: "Technology",
    description: "Detailed analysis of an Aegis fragment showing its crystalline structure and energy patterns.",
    image: "/placeholder-aegis.jpg",
    artist: "Dr. Sarah Chen",
    date: "Research Documentation",
    tags: ["Aegis", "Science", "Energy"],
    icon: Zap
  },
  {
    id: "character-portraits",
    title: "The Five - Character Studies",
    type: "character-art",
    category: "Characters",
    description: "Individual portraits of Rin, Joan, Michael, and Ezra in their post-Divide forms.",
    image: "/placeholder-characters.jpg", 
    artist: "Genesis Art Team",
    date: "Character Development",
    tags: ["The Five", "Characters", "Portraits"],
    icon: Users
  },
  {
    id: "new-haven-before",
    title: "New Haven - Before",
    type: "environment",
    category: "Locations", 
    description: "The peaceful suburban city as it existed before The Divide changed everything.",
    image: "/placeholder-city.jpg",
    artist: "Environmental Design Team",
    date: "World Building",
    tags: ["New Haven", "Pre-Divide", "City"],
    icon: MapPin
  },
  {
    id: "midoki-sanctuary",
    title: "Midoki Sanctuary", 
    type: "environment",
    category: "Locations",
    description: "The impossible architecture of the Midoki headquarters, existing between dimensions.",
    image: "/placeholder-sanctuary.jpg",
    artist: "Dimensional Architecture Team", 
    date: "Location Design",
    tags: ["Midoki", "Sanctuary", "Architecture"],
    icon: MapPin
  },
  {
    id: "reality-tears",
    title: "Reality Tears Manifestation",
    type: "concept-art",
    category: "Phenomena",
    description: "Visualization of how reality tears appear and spread throughout New Haven.",
    image: "/placeholder-tears.jpg",
    artist: "Effects Design Team",
    date: "Technical Documentation", 
    tags: ["Reality Tears", "Effects", "Phenomena"],
    icon: Zap
  },
  {
    id: "memory-fragments",
    title: "Memory Fragment Visualization",
    type: "abstract",
    category: "Concepts",
    description: "Abstract representation of how memories appear when preserved by Midoki technology.",
    image: "/placeholder-memory.jpg",
    artist: "Concept Art Team",
    date: "Abstract Design",
    tags: ["Memory", "Abstract", "Midoki"],
    icon: Eye
  },
  {
    id: "chapter-illustrations",
    title: "Chapter Opening Illustrations",
    type: "narrative",
    category: "Story",
    description: "Collection of illustrations that open each chapter of the Genesis chronicle.",
    image: "/placeholder-chapters.jpg",
    artist: "Narrative Art Team", 
    date: "Story Illustrations",
    tags: ["Chapters", "Narrative", "Story"],
    icon: BookOpen
  }
];

const categories = ["All", "Characters", "Locations", "Events", "Technology", "Phenomena", "Concepts", "Story"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold glow-text mb-6">
            Visual Archive
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the visual world of The Aegis Chronicles through concept art, 
            character studies, and environmental designs that bring the story to life.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const Icon = item.icon;
            return (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer overflow-hidden hover:scale-105 transition-all duration-300 bg-card/30 backdrop-blur-sm border-border/50 hover:shadow-xl hover:shadow-primary/20">
                    <div className="relative aspect-square overflow-hidden">
                      {/* Image placeholder with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                        <Icon className="w-12 h-12 text-muted-foreground/50" />
                      </div>
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Eye className="w-8 h-8 text-primary" />
                      </div>
                      
                      {/* Category badge */}
                      <Badge 
                        variant="secondary" 
                        className="absolute top-2 left-2 text-xs backdrop-blur-sm"
                      >
                        {item.category}
                      </Badge>
                    </div>
                    
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{item.artist}</span>
                        <Badge variant="outline" className="text-xs">
                          {item.type}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="max-w-4xl w-full bg-background/95 backdrop-blur-md border-border/50">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold glow-text mb-4">
                      {item.title}
                    </DialogTitle>
                  </DialogHeader>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Image */}
                    <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                      <Icon className="w-24 h-24 text-muted-foreground/30" />
                    </div>
                    
                    {/* Details */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Description</h4>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-semibold text-secondary">Artist:</span>
                          <p className="text-muted-foreground">{item.artist}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-secondary">Date:</span>
                          <p className="text-muted-foreground">{item.date}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-secondary">Type:</span>
                          <p className="text-muted-foreground">{item.type}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-secondary">Category:</span>
                          <p className="text-muted-foreground">{item.category}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-3 pt-4">
                        <Button size="sm" className="flex-1">
                          <Eye className="w-4 h-4 mr-2" />
                          View Full Size
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <Card className="p-12 text-center bg-card/30 backdrop-blur-sm">
            <Image className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
            <h3 className="text-xl font-semibold mb-2">No items found</h3>
            <p className="text-muted-foreground">
              No gallery items match the selected category.
            </p>
          </Card>
        )}

        {/* Gallery Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <Card className="bg-card/30 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary mb-2">{galleryItems.length}</div>
              <p className="text-sm text-muted-foreground">Total Artworks</p>
            </CardContent>
          </Card>
          <Card className="bg-card/30 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-secondary mb-2">
                {new Set(galleryItems.map(item => item.artist)).size}
              </div>
              <p className="text-sm text-muted-foreground">Artists</p>
            </CardContent>
          </Card>
          <Card className="bg-card/30 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-accent mb-2">
                {categories.length - 1}
              </div>
              <p className="text-sm text-muted-foreground">Categories</p>
            </CardContent>
          </Card>
          <Card className="bg-card/30 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-divide-crack mb-2">∞</div>
              <p className="text-sm text-muted-foreground">Possibilities</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}