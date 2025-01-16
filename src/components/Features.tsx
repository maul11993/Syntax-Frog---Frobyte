import { Bug, Coins, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: <Bug className="w-12 h-12 text-neon-green" />,
      title: "Bug Bounty Game",
      description: "Hunt bugs, earn rewards! Play our addictive mini-game.",
    },
    {
      icon: <Coins className="w-12 h-12 text-accent-gold" />,
      title: "Staking Rewards",
      description: "Stake your Frobyte tokens and earn passive income.",
    },
    {
      icon: <Trophy className="w-12 h-12 text-neon-purple" />,
      title: "Community Rewards",
      description: "Participate in events and win exclusive prizes.",
    },
  ];

  return (
    <div className="bg-dark/95 text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-neon-green to-neon-purple bg-clip-text text-transparent">
          Leap into Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-dark/50 border-metal/20 backdrop-blur hover:border-neon-green/50 transition-colors group"
            >
              <CardHeader>
                <div className="mb-4 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <CardTitle className="text-2xl text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-metal">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;