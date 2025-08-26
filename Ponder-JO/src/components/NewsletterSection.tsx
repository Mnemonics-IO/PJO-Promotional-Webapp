import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Shield, Users, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast({
      title: "Welcome to the Midoki",
      description: "Your memory will be preserved. Updates incoming...",
    });
    
    setEmail("");
  };

  return (
    <section className="py-20 px-6 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-starfield to-background" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <Card className="bg-card/40 backdrop-blur-sm border-primary/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow opacity-10" />
          
          <CardHeader className="text-center relative z-10">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/20 rounded-full border border-primary/30">
                <Shield className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <CardTitle className="text-3xl md:text-4xl font-bold glow-text mb-4">
              Become Midoki
            </CardTitle>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Keep your memory intact while reality fragments around you. 
              Join the community and get updates on new chapters, lore drops, and the expanding Aegis universe.
            </p>
          </CardHeader>
          
          <CardContent className="relative z-10 px-8 pb-8">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
              <Input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                required
              />
              <Button 
                type="submit"
                className="pulse-glow bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6"
              >
                <Mail className="w-4 h-4 mr-2" />
                Join
              </Button>
            </form>
            
            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="flex justify-center">
                  <Zap className="w-6 h-6 text-aegis-glow" />
                </div>
                <h4 className="font-semibold">Chapter Updates</h4>
                <p className="text-sm text-muted-foreground">
                  Be first to read new releases
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-center">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-semibold">Exclusive Lore</h4>
                <p className="text-sm text-muted-foreground">
                  Discover hidden world details
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-center">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-semibold">Community Access</h4>
                <p className="text-sm text-muted-foreground">
                  Connect with other Midoki
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};