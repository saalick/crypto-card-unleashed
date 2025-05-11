
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      features: [
        "Virtual Crypto Card",
        "Bitcoin & Ethereum Support",
        "Basic Exchange Rates",
        "$1,000 Monthly Spending Limit",
        "Standard Support",
      ],
      cta: "Get Started",
      isPopular: false,
      color: "from-gray-500 to-gray-700"
    },
    {
      name: "Premium",
      price: "$9.99/mo",
      features: [
        "Physical & Virtual Cards",
        "Support for 20+ Cryptocurrencies",
        "Premium Exchange Rates",
        "$10,000 Monthly Spending Limit",
        "Priority Support",
        "Cashback Rewards",
      ],
      cta: "Join Waitlist",
      isPopular: true,
      color: "from-crypto-purple to-crypto-blue"
    },
    {
      name: "Business",
      price: "$29.99/mo",
      features: [
        "Multiple Cards Management",
        "All Cryptocurrencies Support",
        "Best Exchange Rates",
        "Unlimited Monthly Spending",
        "Dedicated Account Manager",
        "Enhanced Security Features",
        "Expense Management Tools",
      ],
      cta: "Contact Sales",
      isPopular: false,
      color: "from-crypto-blue to-crypto-green"
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose the plan that fits your needs. No hidden fees or long-term commitments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden ${
                plan.isPopular ? 'border-crypto-purple ring-2 ring-crypto-purple ring-opacity-50' : 'border-gray-800'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-crypto-purple text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                </div>
                
                <div className="mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className={`p-0.5 rounded-full bg-gradient-to-r ${plan.color} mr-2 mt-1`}>
                          <div className="bg-secondary rounded-full p-0.5">
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
                      ? 'bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90' 
                      : 'bg-secondary hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            All plans include our core security features and fraud protection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
