import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Code2, Coins, Users } from "lucide-react";

const Hero = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev + 1) % 1000);
    }, 100);
    return () => clearInterval(interval);
  }, []);

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

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 rounded-lg bg-dark/50 backdrop-blur border border-metal/20">
            <Coins className="w-8 h-8 mb-2 mx-auto text-accent-gold" />
            <div className="text-2xl font-bold text-accent-gold animate-glow">
              ${(0.0042 + count * 0.0001).toFixed(4)}
            </div>
            <div className="text-metal">Token Price</div>
          </div>
          <div className="p-6 rounded-lg bg-dark/50 backdrop-blur border border-metal/20">
            <Users className="w-8 h-8 mb-2 mx-auto text-neon-purple" />
            <div className="text-2xl font-bold text-neon-purple animate-glow">
              {1337 + count}
            </div>
            <div className="text-metal">Holders</div>
          </div>
          <div className="p-6 rounded-lg bg-dark/50 backdrop-blur border border-metal/20">
            <Code2 className="w-8 h-8 mb-2 mx-auto text-neon-green" />
            <div className="text-2xl font-bold text-neon-green animate-glow">
              {42 + count}k
            </div>
            <div className="text-metal">Bugs Caught</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;