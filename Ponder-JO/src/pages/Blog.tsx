import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, Search, BookOpen, Zap, Users, Eye } from "lucide-react";

import UserEngagementSection from "@/components/UserEngagementSection";

const blogPosts = [
  {
    id: "aegis-origins",
    title: "The Science Behind the Aegis: Could Reality Actually Crack?",
    excerpt: "Exploring the theoretical physics that make The Aegis Chronicles' central premise feel eerily plausible. From quantum mechanics to multiverse theory...",
    content: "In crafting The Aegis Chronicles, we wanted to ground the impossible in scientific possibility. The concept of reality 'cracking' draws from cutting-edge theories in quantum mechanics, particularly the Many Worlds interpretation and the fragility of spacetime itself...",
    author: "Genesis Research Team",
    date: "2024-02-10",
    readTime: 8,
    category: "Lore",
    tags: ["Science", "Aegis", "Physics", "Theory"],
    featured: true,
    icon: Zap
  },
  {
    id: "character-development",
    title: "Creating The Five: Character Development in a Fractured Reality",
    excerpt: "How do you develop characters when their reality is constantly shifting? We dive deep into the psychology and design choices behind Rin, Joan, Michael, and Ezra.",
    content: "Character development in The Aegis Chronicles presents unique challenges. When reality itself is unreliable, character becomes the only constant. Each of The Five represents a different response to impossible circumstances...",
    author: "Narrative Team",
    date: "2024-02-05", 
    readTime: 12,
    category: "Characters",
    tags: ["Characters", "Development", "Psychology", "The Five"],
    featured: false,
    icon: Users
  },
  {
    id: "memory-themes",
    title: "The Power of Memory: Why Remembering Matters in Genesis",
    excerpt: "Memory isn't just a plot device in our story—it's the central theme that ties together loss, identity, and hope in a world where forgetting might be mercy.",
    content: "The concept of memory preservation in The Aegis Chronicles goes beyond simple plot mechanics. It's a meditation on what makes us human, what we choose to remember, and what we're willing to forget...",
    author: "Story Design Lead",
    date: "2024-01-28",
    readTime: 6,
    category: "Themes", 
    tags: ["Memory", "Identity", "Themes", "Philosophy"],
    featured: true,
    icon: Eye
  },
  {
    id: "world-building",
    title: "Building New Haven: Creating a Believable Suburban Apocalypse",
    excerpt: "From normal suburb to reality-torn wasteland—the design philosophy behind New Haven's transformation and the challenge of making the familiar feel alien.",
    content: "New Haven represents the perfect suburban ideal turned nightmare. We wanted to create a place that felt like home before becoming something alien. The design process involved...",
    author: "World Design Team",
    date: "2024-01-20",
    readTime: 10,
    category: "Worldbuilding",
    tags: ["New Haven", "Environment", "Design", "Apocalypse"],
    featured: false,
    icon: Eye
  },
  {
    id: "upcoming-chapters",
    title: "What's Coming Next: Chapter 6 Preview and Beyond",
    excerpt: "Get a sneak peek at the next chapter of Genesis and learn about our release schedule for the remainder of Season 1.",
    content: "Chapter 6, 'Reality's Edge,' will take The Five to places they've never been before—literally. As they approach the boundary of a Forgotten Zone, they'll discover truths that challenge everything they thought they knew...",
    author: "Editorial Team", 
    date: "2024-02-15",
    readTime: 4,
    category: "Updates",
    tags: ["Chapters", "Preview", "Schedule", "Updates"],
    featured: true,
    icon: BookOpen
  },
  {
    id: "fan-theories",
    title: "Reader Theories: The Identity of the Fifth Friend",
    excerpt: "The community has some incredible theories about the missing member of The Five. We explore the most compelling ideas and hint at what might be true.",
    content: "The mystery of The Fifth Friend has sparked intense discussion in our community. Some theories suggest they never existed at all, others propose they're still alive in another dimension...",
    author: "Community Team",
    date: "2024-02-01",
    readTime: 7,
    category: "Community", 
    tags: ["Theories", "Community", "Fifth Friend", "Mystery"],
    featured: false,
    icon: Users
  }
];

const categories = ["All", "Lore", "Characters", "Themes", "Worldbuilding", "Updates", "Community"];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(blogPosts[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold glow-text mb-6">
            Chronicles Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Behind-the-scenes insights, lore deep-dives, and updates from the world of The Aegis Chronicles. 
            Explore the creative process behind a fractured reality.
          </p>
        </div>

        {/* Featured Posts */}
        {selectedCategory === "All" && searchTerm === "" && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold glow-text mb-6">Featured Posts</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredPosts.map((post) => {
                const Icon = post.icon;
                return (
                  <Card
                    key={post.id}
                    className="cursor-pointer transition-all duration-300 hover:scale-105 bg-card/30 backdrop-blur-sm border-border/50 hover:shadow-xl hover:shadow-primary/20 group"
                    onClick={() => setSelectedPost(post)}
                  >
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <Badge variant="secondary" className="mb-2">Featured</Badge>
                          <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                            {post.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{post.author}</span>
                        <span>{post.readTime} min read</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search posts..."
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
          {/* Posts List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold glow-text">All Posts</h2>
            {filteredPosts.map((post) => {
              const Icon = post.icon;
              return (
                <Card
                  key={post.id}
                  className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                    selectedPost.id === post.id 
                      ? "ring-2 ring-primary/50 bg-primary/10" 
                      : "hover:bg-card/50"
                  } backdrop-blur-sm group`}
                  onClick={() => setSelectedPost(post)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${
                        selectedPost.id === post.id ? "bg-primary/20" : "bg-card/50"
                      } group-hover:scale-110 transition-transform`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {post.category}
                          </Badge>
                          {post.featured && (
                            <Badge variant="secondary" className="text-xs">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <h3 className="font-semibold text-sm leading-tight mb-2">
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime} min
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {filteredPosts.length === 0 && (
              <Card className="p-8 text-center bg-card/30 backdrop-blur-sm">
                <p className="text-muted-foreground">
                  No posts found matching your search criteria.
                </p>
              </Card>
            )}
          </div>

          {/* Post Content */}
          <div className="lg:col-span-2">
            <Card className="bg-card/30 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="outline">{selectedPost.category}</Badge>
                      {selectedPost.featured && (
                        <Badge variant="secondary">Featured</Badge>
                      )}
                    </div>
                    <CardTitle className="text-3xl font-bold glow-text mb-4">
                      {selectedPost.title}
                    </CardTitle>
                  </div>
                  <div className="p-3 bg-card/50 rounded-xl">
                    <selectedPost.icon className="w-8 h-8" />
                  </div>
                </div>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {selectedPost.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {selectedPost.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {selectedPost.readTime} min read
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Excerpt</h4>
                  <p className="text-lg leading-relaxed text-muted-foreground italic">
                    {selectedPost.excerpt}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Article</h4>
                  <div className="prose prose-invert max-w-none">
                    <p className="leading-relaxed">{selectedPost.content}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPost.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="hover:bg-primary/10 transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border/30">
                  <Button className="pulse-glow">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Read Full Article
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <UserEngagementSection />
    </div>
  );
}