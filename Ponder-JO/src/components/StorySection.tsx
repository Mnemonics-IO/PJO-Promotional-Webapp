export const StorySection = () => {
  return (
    <section id="story-section" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Story Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold glow-text">
              The Beginning
            </h2>
            
            <div className="prose prose-lg text-foreground space-y-4">
              <p className="text-lg leading-relaxed">
                In 2030, a mysterious element fell from the heavens, splitting the sky like fractured glass. 
                The world called it <span className="text-primary font-semibold">The Aegis</span> — fragments of pure energy that defied every law of physics.
              </p>
              
              <p className="text-lg leading-relaxed">
                Five friends on bikes witnessed the crack that changed everything. 
                They didn't know they were about to become the last hope against 
                <span className="text-divide-crack font-semibold"> The Divide</span>, 
                a force that would tear reality itself apart.
              </p>
              
              <p className="text-lg leading-relaxed font-script text-muted-foreground">
                "Some say the <span className="text-accent">Midoki</span> can preserve memory when everything else fails. 
                But memory of what? And at what cost?"
              </p>
            </div>
          </div>

          {/* Animated Aegis Shard */}
          <div className="relative flex justify-center">
            <div className="relative w-64 h-64">
              {/* Floating Shard */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-32 bg-gradient-violet rounded-lg rotate-45 pulse-glow transform hover:scale-110 transition-transform duration-500" />
              </div>
              
              {/* Orbital Rings */}
              <div className="absolute inset-0 border border-primary/30 rounded-full animate-spin" style={{animationDuration: '20s'}} />
              <div className="absolute inset-4 border border-secondary/20 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}} />
              
              {/* Energy Pulses */}
              <div className="absolute inset-0 bg-gradient-glow opacity-50 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};