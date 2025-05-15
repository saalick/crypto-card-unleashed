
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, CreditCard } from "lucide-react";

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
      accent: "border-gray-700"
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
      accent: "border-crypto-teal"
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
      accent: "border-gray-700"
    }
  ];

  return (
    <section id="pricing" className="py-24 relative">
      {/* Subtle background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-crypto-blue/10 rounded-full filter blur-[100px] transform -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-crypto-purple/10 rounded-full filter blur-[100px] transform -translate-x-1/2"></div>
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
              className={`pricing-card relative overflow-hidden animate-fade-up animate-stagger-${index + 1} 
                ${plan.isPopular ? 'border-crypto-teal shadow-lg shadow-crypto-teal/10 z-10 lg:scale-105' : 'border-gray-800'}
                bg-gradient-to-b from-gray-900 to-black`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-crypto-teal text-black text-xs font-semibold px-4 py-2 rounded-bl-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <div className="mb-8">
                  <div className={`mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full ${plan.isPopular ? 'bg-crypto-teal/20' : 'bg-gray-800'}`}>
                    <CreditCard className={`h-6 w-6 ${plan.isPopular ? 'text-crypto-teal' : 'text-gray-400'}`} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-white">{plan.name}</h3>
                  <div className="mb-4">
                    <span className={`text-4xl font-bold ${plan.isPopular ? 'text-crypto-teal' : 'text-white'}`}>{plan.price}</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className={`rounded-full p-1 mr-3 mt-0.5 ${plan.isPopular ? 'bg-crypto-teal/20 text-crypto-teal' : 'bg-gray-800/50 text-gray-400'}`}>
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className={`w-full ${
                    plan.isPopular 
                      ? 'bg-crypto-teal hover:bg-crypto-teal/90 text-black' 
                      : 'bg-gray-800 hover:bg-gray-700 text-white'
                  } font-medium`}
                >
                  {plan.cta}
                </Button>
              </div>
              
              {/* Subtle accent at the bottom */}
              <div className={`h-1 w-full ${plan.isPopular ? 'bg-crypto-teal/30' : 'bg-gray-800'}`}></div>
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
