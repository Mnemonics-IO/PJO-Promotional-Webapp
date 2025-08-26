import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Users, Eye, Lock, Play } from "lucide-react";

const chapters = [
  {
    id: 1,
    title: "The Day The Sky Fell", 
    status: "published",
    wordCount: 1700,
    readTime: 14,
    perspective: "Rin",
    summary: "Five friends witness the impossible as reality itself splits open above their quiet suburb. The Aegis falls, and nothing will ever be the same.",
    themes: ["Friendship", "Wonder", "Change"],
    publishDate: "2024-01-15",
    excerpt: "The sky cracked like glass on July 15th, 2030. I remember because it was my birthday..."
  },
  {
    id: 2, 
    title: "Ponder Why ?",
    status: "published",
    wordCount: 4200,
    readTime: 17,
    perspective: "Joan", 
    summary: "The friends discover that the fallen Aegis fragments respond to their touch, granting impossible abilities while the world struggles to understand what happened.",
    themes: ["Discovery", "Power", "Responsibility"], 
    publishDate: "2024-01-22",
    excerpt: "The shard pulsed with warmth in my palm, and suddenly I could feel everyone's hopes..."
  },
  {
    id: 3,
    title: "The Divide Spreads",
    status: "published", 
    wordCount: 3800,
    readTime: 15,
    perspective: "Michael",
    summary: "Reality tears begin appearing across New Haven. Michael's analytical mind races to understand the pattern while the government moves to contain the situation.",
    themes: ["Logic vs Mystery", "Fear", "Containment"],
    publishDate: "2024-01-29", 
    excerpt: "The equations didn't make sense. Nothing about this made sense, and that terrified me more than the cracks themselves..."
  },
  {
    id: 4,
    title: "The Midoki's Offer",
    status: "published",
    wordCount: 4500,
    readTime: 18,
    perspective: "Ezra",
    summary: "Mysterious figures calling themselves Midoki approach The Five with an offer that could save their memories—but at what cost?",
    themes: ["Choice", "Trust", "Memory"],
    publishDate: "2024-02-05",
    excerpt: "They moved like shadows given form, and when they spoke, I felt the weight of eons in their voices..."
  },
  {
    id: 5,
    title: "The Fifth Friend",
    status: "published",
    wordCount: 5200, 
    readTime: 21,
    perspective: "???",
    summary: "The truth about the fifth member of their group begins to surface, but some memories fight back against being remembered.",
    themes: ["Loss", "Sacrifice", "Identity"],
    publishDate: "2024-02-12",
    excerpt: "[MEMORY FRAGMENTED] - I can almost see their face, almost remember their laugh..."
  },
  {
    id: 6,
    title: "Reality's Edge", 
    status: "in-progress",
    wordCount: 2100,
    readTime: 8,
    perspective: "Rin",
    summary: "The Five venture to the edge of a Forgotten Zone, where reality itself has been erased. What they find there challenges everything they thought they knew.",
    themes: ["Exploration", "Truth", "Erasure"],
    publishDate: "2024-02-19",
    excerpt: "Standing at the boundary between existence and void, I realized we were about to step into nothing..."
  },
  {
    id: 7,
    title: "The Memory War",
    status: "upcoming",
    wordCount: 0,
    readTime: 0, 
    perspective: "All",
    summary: "The final confrontation approaches as The Divide threatens to consume all of reality. The Five must choose between saving their world or preserving their memories.",
    themes: ["War", "Sacrifice", "Unity"],
    publishDate: "2024-02-26", 
    excerpt: "[CHAPTER NOT YET WRITTEN]"
  }
];

export default function Chapters() {
  const [selectedChapter, setSelectedChapter] = useState(chapters[0]);
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "published": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "in-progress": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "upcoming": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default: return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "published": return BookOpen;
      case "in-progress": return Play;
      case "upcoming": return Lock;
      default: return Eye;
    }
  };

  const totalPublished = chapters.filter(c => c.status === "published").length;
  const totalWords = chapters.reduce((sum, c) => sum + c.wordCount, 0);
  const totalReadTime = chapters.reduce((sum, c) => sum + c.readTime, 0);

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold glow-text mb-6">
            The Tether
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Follow the complete story of The Five as they navigate a world where reality itself has been shattered. 
            Each chapter reveals new truths about the Aegis, The Divide, and the price of memory.
          </p>
          
          {/* Story Stats */}
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <Card className="bg-card/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">{totalPublished}</div>
                <p className="text-sm text-muted-foreground">Chapters Published</p>
              </CardContent>
            </Card>
            <Card className="bg-card/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-secondary mb-2">{totalWords.toLocaleString()}</div>
                <p className="text-sm text-muted-foreground">Total Words</p>
              </CardContent>
            </Card>
            <Card className="bg-card/30 backdrop-blur-sm"> 
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-accent mb-2">{totalReadTime}</div>
                <p className="text-sm text-muted-foreground">Minutes Reading</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Chapter List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold glow-text mb-6">Chapters</h2>
            {chapters.map((chapter) => {
              const StatusIcon = getStatusIcon(chapter.status);
              return (
                <Card
                  key={chapter.id}
                  className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                    selectedChapter.id === chapter.id 
                      ? "ring-2 ring-primary/50 bg-primary/10" 
                      : "hover:bg-card/50"
                  } backdrop-blur-sm group`}
                  onClick={() => setSelectedChapter(chapter)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg flex-shrink-0 ${
                        selectedChapter.id === chapter.id ? "bg-primary/20" : "bg-card/50"
                      } group-hover:scale-110 transition-transform`}>
                        <StatusIcon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono text-muted-foreground">Ch. {chapter.id}</span>
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${getStatusColor(chapter.status)}`}
                          >
                            {chapter.status}
                          </Badge>
                        </div>
                        <h3 className="font-semibold text-sm leading-tight">{chapter.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{chapter.readTime} min read</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Chapter Details */}
          <div className="lg:col-span-3">
            <Card className="bg-card/30 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-mono text-muted-foreground">Chapter {selectedChapter.id}</span>
                      <Badge 
                        variant="outline"
                        className={getStatusColor(selectedChapter.status)}
                      >
                        {selectedChapter.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-3xl font-bold glow-text mb-4">
                      {selectedChapter.title}
                    </CardTitle>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>{selectedChapter.readTime} min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-muted-foreground" />
                    <span>{selectedChapter.wordCount.toLocaleString()} words</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span>{selectedChapter.perspective} POV</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-muted-foreground" />
                    <span>{selectedChapter.publishDate}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Summary</h4>
                  <p className="leading-relaxed">{selectedChapter.summary}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Themes</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedChapter.themes.map((theme) => (
                      <Badge key={theme} variant="secondary" className="hover:bg-secondary/20">
                        {theme}
                      </Badge>
                    ))}
                  </div>
                </div>

                {selectedChapter.status === "published" && (
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">Excerpt</h4>
                    <Card className="p-6 bg-starfield/50 bg-gray-200 border-border/30">
                      <p className="font-mono leading-relaxed text-muted-foreground italic">
                        "{selectedChapter.excerpt}"
                      </p>
                    </Card>
                  </div>
                )}

                {selectedChapter.status === "in-progress" && (
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">Progress</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Writing Progress</span>
                        <span>{Math.round((selectedChapter.wordCount / 4000) * 100)}%</span>
                      </div>
                      <Progress value={(selectedChapter.wordCount / 4000) * 100} className="h-2" />
                    </div>
                  </div>
                )}

                <div className="flex gap-4 pt-4">
                  {selectedChapter.status === "published" && (
                    <Button className="pulse-glow">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Read Chapter
                    </Button>
                  )}
                  {selectedChapter.status === "in-progress" && (
                    <Button variant="outline" className="border-primary/30">
                      <Play className="w-4 h-4 mr-2" />
                      Preview Available
                    </Button>
                  )}
                  {selectedChapter.status === "upcoming" && (
                    <Button variant="ghost" disabled>
                      <Lock className="w-4 h-4 mr-2" />
                      Coming Soon
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}