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
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17-18 11.6 2.2.1 4.4-.6 6-2 1.1 0 2.1-.2 2.9-.8 1.8-1.1 2.8-3.2 2.8-5.7V9c.4-.3.7-.7 1-1.1z"/></svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
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