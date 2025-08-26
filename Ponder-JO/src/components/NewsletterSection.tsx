import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Shield, Users, Zap, User, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const NewsletterSection = () => {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
  interest: ""
});
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.name) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Thank you for your message",
      description: `I'll get back to you soon, ${formData.name}`,
    });
    
    setFormData({
      name: "",
      email: "",
      message: "",
      interest: ""
    });
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
              Contact Us
            </CardTitle>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have questions or feedback? We'd love to hear from you. 
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </CardHeader>
          
          <CardContent className="relative z-10 px-8 pb-8">
            <form onSubmit={handleSubmit} className="grid gap-4 max-w-md mx-auto mb-8">
  <div className="grid gap-2">
    <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
      Name <span className="text-destructive">*</span>
    </label>
    <div className="relative">
      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        id="name"
        placeholder="Your name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        className="pl-10 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
        required
      />
    </div>
  </div>
  
  <div className="grid gap-2">
    <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
      Email <span className="text-destructive">*</span>
    </label>
    <div className="relative">
      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        id="email"
        type="email"
        placeholder="your.email@example.com"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        className="pl-10 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
        required
      />
    </div>
  </div>
  
  <div className="grid gap-2">
    <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
      Your Message
    </label>
    <div className="relative">
      <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
      <Textarea
        id="message"
        placeholder="What would you like to ask us?"
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
        className="pl-10 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 min-h-[100px]"
      />
    </div>
  </div>
  
  <Button 
    type="submit"
    className="pulse-glow bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 mt-2"
  >
    <Mail className="w-4 h-4 mr-2" />
    Send Message
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