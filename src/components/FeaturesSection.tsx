
import { Card, CardContent } from "@/components/ui/card";
import { Bitcoin, CreditCard, ArrowRight } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "Spend Crypto Anywhere",
      description: "Use your cryptocurrency at any location that accepts traditional payment cards.",
      icon: <CreditCard className="h-10 w-10 text-crypto-purple" />,
    },
    {
      id: 2,
      title: "Instant Conversion",
      description: "Your crypto converts to fiat currency in real-time at the best possible rates.",
      icon: <ArrowRight className="h-10 w-10 text-crypto-blue" />,
    },
    {
      id: 3,
      title: "Multi-Currency Support",
      description: "Support for Bitcoin, Ethereum, and other major cryptocurrencies.",
      icon: <Bitcoin className="h-10 w-10 text-crypto-orange" />,
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Revolutionary Features</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            CryptoCard bridges the gap between digital assets and everyday spending with cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.id} className="bg-secondary border-gray-800 hover:border-crypto-purple transition-all duration-300 overflow-hidden group">
              <CardContent className="p-8 relative">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-crypto-purple/5 rounded-full group-hover:bg-crypto-purple/10 transition-all duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Accepted Everywhere</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-10 w-32 bg-gray-800 rounded-md opacity-50"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
