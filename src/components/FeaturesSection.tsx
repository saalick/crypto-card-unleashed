
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, ArrowRight, Bitcoin, Shield, Globe, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "Spend Crypto Anywhere",
      description: "Use your cryptocurrency at any location that accepts traditional payment cards worldwide.",
      icon: <CreditCard className="h-10 w-10 text-crypto-purple" />,
      color: "from-crypto-purple to-crypto-blue"
    },
    {
      id: 2,
      title: "Instant Conversion",
      description: "Your crypto converts to fiat currency in real-time at the best possible rates without delays.",
      icon: <ArrowRight className="h-10 w-10 text-crypto-blue" />,
      color: "from-crypto-blue to-crypto-green"
    },
    {
      id: 3,
      title: "Multi-Currency Support",
      description: "Support for Bitcoin, Ethereum, and over 20 major cryptocurrencies all in one card.",
      icon: <Bitcoin className="h-10 w-10 text-crypto-orange" />,
      color: "from-crypto-orange to-crypto-purple"
    },
    {
      id: 4,
      title: "Bank-Grade Security",
      description: "Advanced encryption and multi-signature protection keep your assets secure at all times.",
      icon: <Shield className="h-10 w-10 text-crypto-green" />,
      color: "from-crypto-green to-crypto-blue"
    },
    {
      id: 5,
      title: "Global Acceptance",
      description: "Use your CryptoCard at millions of merchant locations and ATMs around the world.",
      icon: <Globe className="h-10 w-10 text-crypto-blue" />,
      color: "from-crypto-purple to-crypto-orange"
    },
    {
      id: 6,
      title: "24/7 Transactions",
      description: "No banking hours to worry about. Send, receive and spend your funds any time, any day.",
      icon: <Clock className="h-10 w-10 text-crypto-purple" />,
      color: "from-crypto-green to-crypto-purple"
    },
  ];

  // Updated payment networks that accept DGNPay with more reliable logo sources
  const paymentNetworks = [
    { 
      name: "Apple", 
      logo: "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png", 
      class: "h-10 w-auto" 
    },
    { 
      name: "Amazon", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png", 
      class: "h-8 w-auto" 
    },
    { 
      name: "Visa", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png", 
      class: "h-8 w-auto" 
    },
    { 
      name: "Mastercard", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png", 
      class: "h-10 w-auto" 
    },
    { 
      name: "Walmart", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/1280px-Walmart_logo.svg.png", 
      class: "h-8 w-auto" 
    }
  ];
  
  const handleFeatureClick = (featureId: number) => {
    document.getElementById('whitelist')?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-crypto-purple/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-crypto-blue/10 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">Revolutionary Features</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            DGNPay bridges the gap between digital assets and everyday spending with cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.id} 
              className={`feature-card bg-secondary border-gray-800 hover:border-crypto-purple transition-all duration-500 overflow-hidden group animate-fade-up animate-stagger-${(index % 4) + 1} cursor-pointer`}
              onClick={() => handleFeatureClick(feature.id)}
            >
              <CardContent className="p-8 relative">
                <div className={`feature-icon-container mb-6 p-3 rounded-full bg-gray-800/50 inline-block from-${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gradient transition-all duration-300">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
                <Button 
                  variant="ghost" 
                  className="mt-4 p-0 h-auto text-crypto-purple hover:text-crypto-light-purple hover:bg-transparent"
                >
                  <span className="mr-2">Learn more</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
                
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-crypto-purple/5 rounded-full group-hover:bg-crypto-purple/10 transition-all duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-24 animate-fade-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gradient-2">Accepted Everywhere</h3>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {paymentNetworks.map((network, index) => (
              <div 
                key={network.name} 
                className="p-4 md:p-6 bg-white rounded-lg flex items-center justify-center border border-white/20 hover:border-white/30 transition-all duration-300 animate-pulse-soft shadow-lg"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <img 
                  src={network.logo} 
                  alt={`${network.name} logo`} 
                  className={`${network.class} object-contain`} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
