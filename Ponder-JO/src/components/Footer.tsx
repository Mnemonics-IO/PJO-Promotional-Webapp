import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 bg-starfield relative">
      {/* Subtle glow effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div>
          <h3 className="text-2xl font-bold glow-text mb-2">
            The Aegis Chronicles
          </h3>
          <p className="text-muted-foreground">
            A story of friendship, sacrifice, and the price of memory
          </p>
        </div>
        
        <Separator className="bg-border/30" />
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>© {currentYear} Genesis Chronicles</span>
            <Badge variant="outline" className="opacity-60">
              Reality Status: Unstable
            </Badge>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <span className="font-script">
              "In memory we trust, in memory we endure"
            </span>
          </div>
        </div>
        
        {/* Easter egg */}
        <div className="text-xs text-muted-foreground/50 font-mono">
          [MIDOKI_SYSTEM_ACTIVE] - [MEMORY_INTEGRITY: 98.7%] - [DIVIDE_THREAT_LEVEL: CRITICAL]
        </div>
      </div>
    </footer>
  );
};