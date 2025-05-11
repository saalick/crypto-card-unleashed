
import { useRef, useEffect } from "react";

const HowItWorksSection = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  
  const steps = [
    {
      id: 1,
      title: "Sign Up",
      description: "Create your account and complete the streamlined verification process in minutes.",
      icon: "01",
    },
    {
      id: 2,
      title: "Fund Your Account",
      description: "Deposit cryptocurrency of your choice to your secure wallet with zero fees.",
      icon: "02",
    },
    {
      id: 3,
      title: "Receive Your Card",
      description: "Get your physical card delivered or instantly use the virtual card for online purchases.",
      icon: "03",
    },
    {
      id: 4,
      title: "Spend Anywhere",
      description: "Use your card for in-store purchases or online shopping globally with instant conversions.",
      icon: "04",
    },
  ];

  useEffect(() => {
    const animateLine = () => {
      if (!lineRef.current) return;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            lineRef.current?.classList.add('animate-line');
            observer.disconnect();
          }
        },
        {
          threshold: 0.5
        }
      );
      
      observer.observe(lineRef.current);
      
      return () => observer.disconnect();
    };
    
    animateLine();
  }, []);

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background to-transparent -z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">How It Works</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get started with CryptoCard in just a few simple steps and begin spending your crypto anywhere.
          </p>
        </div>

        <div className="relative">
          <div 
            ref={lineRef}
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-crypto-purple via-crypto-blue to-crypto-green transform -translate-y-1/2 z-0 origin-left"
            style={{
              transform: 'translateY(-50%) scaleX(0)',
              transition: 'transform 1.5s ease-in-out'
            }}
          ></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className="flex flex-col items-center text-center animate-fade-up animate-stagger-1"
              >
                <div className="step-circle w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center text-white text-xl font-bold mb-6 relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-crypto-purple to-crypto-blue opacity-30"></div>
                  <div className="relative z-10">{step.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gradient">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
                
                <div className="mt-6 lg:hidden w-px h-12 bg-gradient-to-b from-crypto-purple to-crypto-blue"></div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+4rem)] right-[calc(50%-4rem)] h-px bg-gradient-to-r from-crypto-purple to-crypto-blue"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 flex justify-center animate-fade-up">
          <div className="card-3d-effect w-full max-w-4xl">
            <div className="card-3d-content p-6 md:p-10 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 relative overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-crypto-purple/10 rounded-full filter blur-[80px]"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-crypto-blue/10 rounded-full filter blur-[80px]"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                <div className="w-48 h-48 rounded-full bg-gradient-to-r from-crypto-purple via-crypto-blue to-crypto-green p-1 animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <div className="text-4xl font-bold text-gradient">3%</div>
                  </div>
                </div>
                
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gradient-2">Earn Crypto Rewards</h3>
                  <p className="text-lg text-gray-300 md:max-w-lg">
                    Get up to 3% back in crypto rewards on every purchase. The more you spend, the more crypto you earn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
