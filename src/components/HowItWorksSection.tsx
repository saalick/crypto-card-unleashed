
const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      title: "Sign Up",
      description: "Create your account and complete the verification process.",
      icon: "01",
    },
    {
      id: 2,
      title: "Fund Your Account",
      description: "Deposit cryptocurrency of your choice to your secure wallet.",
      icon: "02",
    },
    {
      id: 3,
      title: "Receive Your Card",
      description: "Get your physical card delivered or instantly use the virtual card.",
      icon: "03",
    },
    {
      id: 4,
      title: "Spend Anywhere",
      description: "Use your card for in-store purchases or online shopping globally.",
      icon: "04",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-background to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">How It Works</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get started with CryptoCard in just a few simple steps and begin spending your crypto anywhere.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-crypto-purple via-crypto-blue to-crypto-green transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-crypto-purple to-crypto-blue flex items-center justify-center text-white text-xl font-bold mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
