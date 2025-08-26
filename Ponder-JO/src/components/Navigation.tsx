import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Zap, Users, MapPin, BookOpen, FileText, Clock, Image } from "lucide-react";

const navItems = [
  { name: "Requiem", path: "/", icon: Zap },
  { name: "Characters", path: "/characters", icon: Users },
  { name: "Locations", path: "/locations", icon: MapPin },
  { name: "Chapters", path: "/chapters", icon: BookOpen },
  { name: "Terminology", path: "/terminology", icon: FileText },
  { name: "Timeline", path: "/timeline", icon: Clock },
  { name: "Gallery", path: "/gallery", icon: Image },
  { name: "Blog", path: "/blog", icon: BookOpen },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    return path !== "/" && location.pathname.startsWith(path);
  };

  const NavLink = ({ item, onClick }: { item: typeof navItems[0], onClick?: () => void }) => {
    const Icon = item.icon;
    const active = isActive(item.path);
    
    return (
      <Link
        to={item.path}
        onClick={onClick}
        className={`group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105 ${
          active 
            ? "bg-primary/20 text-primary border border-primary/30 glow-text" 
            : "hover:bg-card/50 text-muted-foreground hover:text-foreground"
        }`}
      >
        <Icon className={`w-5 h-5 transition-all duration-300 ${active ? "animate-pulse-glow" : "group-hover:text-primary"}`} />
        <span className="font-medium">{item.name}</span>
        {active && (
          <div className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
        )}
      </Link>
    );
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl px-6 py-3 shadow-2xl">
        <div className="flex items-center gap-2">
          {navItems.map((item) => (
            <NavLink key={item.path} item={item} />
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed top-6 right-6 z-50">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button 
              size="icon" 
              className="pulse-glow bg-card/40 backdrop-blur-md border border-border/50 hover:bg-card/60"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-background/95 backdrop-blur-md border-l border-border/50">
            <div className="space-y-4 mt-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold glow-text mb-2">The Aegis Chronicles</h2>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
              </div>
              
              {navItems.map((item) => (
                <NavLink 
                  key={item.path} 
                  item={item} 
                  onClick={() => setIsOpen(false)}
                />
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};