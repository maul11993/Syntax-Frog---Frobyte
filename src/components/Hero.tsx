import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark text-white px-4">
      {/* Matrix-like background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-neon-green animate-matrix whitespace-nowrap"
            style={{ left: `${i * 10}%`, animationDelay: `${i * 0.2}s` }}
          >
            {Array.from({ length: 20 }).map(() => "01").join(" ")}
          </div>
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center">
        <div className="w-48 h-48 mx-auto mb-8 animate-float">
          <img
            src="/placeholder.svg"
            alt="Frobyte"
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-green to-neon-purple bg-clip-text text-transparent animate-glow">
          Syntax Frog
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-metal">
          Jump into the Future of Crypto!
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="bg-neon-green hover:bg-neon-green/80 text-dark font-bold"
          >
            Buy Frobyte Token
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-neon-purple text-neon-purple hover:bg-neon-purple/20"
          >
            Join Community
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;