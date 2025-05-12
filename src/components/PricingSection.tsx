
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Trencher",
      price: "$15/mo",
      features: [
        "Virtual Card Only",
        "Mastercard Support",
        "$5,000 Monthly Deposit Limit",
        "Basic Exchange Rates",
        "Standard Support",
      ],
      cta: "Get Started",
      isPopular: false,
      color: "from-crypto-green to-crypto-light-purple"
    },
    {
      name: "Quant",
      price: "$25/mo",
      features: [
        "Virtual Card Only",
        "Mastercard Support",
        "$10,000 Monthly Deposit Limit",
        "Premium Exchange Rates",
        "Priority Support",
        "Cashback Rewards",
      ],
      cta: "Join Waitlist",
      isPopular: true,
      color: "from-crypto-green to-crypto-orange"
    },
    {
      name: "Whale",
      price: "$60/mo",
      features: [
        "Physical & Virtual Cards",
        "Visa + Mastercard Support",
        "$20,000 Monthly Deposit Limit",
        "Best Exchange Rates",
        "Dedicated Account Manager",
        "Enhanced Security Features",
        "Expense Management Tools",
      ],
      cta: "Contact Sales",
      isPopular: false,
      color: "from-crypto-orange to-crypto-green"
    }
  ];

  return (
    <section id="pricing" className="py-24 relative wavy-bg">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-crypto-green/10 rounded-full filter blur-[100px] transform -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-crypto-orange/10 rounded-full filter blur-[100px] transform -translate-x-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose the plan that fits your needs. No hidden fees or long-term commitments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`pricing-card wavy-border relative overflow-hidden animate-fade-up animate-stagger-${index + 1} ${
                plan.isPopular ? 'border-crypto-green ring-2 ring-crypto-green ring-opacity-50 z-10 lg:scale-105' : 'border-gray-800'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-crypto-green text-black text-xs font-semibold px-4 py-2 rounded-bl-lg shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-6 md:p-8 relative">
                <div className="mb-8 text-center">
                  <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start animate-wave" style={{animationDelay: `${i * 0.1}s`}}>
                        <div className={`p-0.5 rounded-full bg-gradient-to-r ${plan.color} mr-3 mt-1`}>
                          <div className="bg-black rounded-full p-0.5">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className={`w-full ${
                    plan.isPopular 
                      ? 'bg-gradient-to-r from-crypto-green to-crypto-light-purple hover:opacity-90 shadow-lg shadow-crypto-green/20' 
                      : 'bg-secondary hover:bg-gray-800'
                  } py-6 font-medium`}
                >
                  {plan.cta}
                </Button>
              </div>
              
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-gradient-to-r from-crypto-green/10 to-crypto-orange/10 rounded-full blur-2xl"></div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-up">
          <p className="text-gray-400">
            All plans include our core security features and fraud protection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
