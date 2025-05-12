
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const newRotateY = ((mouseX - centerX) / (rect.width / 2)) * 10;
    const newRotateX = -((mouseY - centerY) / (rect.height / 2)) * 10;
    
    setRotateX(newRotateX);
    setRotateY(newRotateY);
  };
  
  const resetRotation = () => {
    setRotateX(0);
    setRotateY(0);
  };
  
  // Updated button handlers that directly work with the DOM
  const handleWhitelistClick = () => {
    const whitelistSection = document.getElementById('whitelist');
    if (whitelistSection) {
      whitelistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleFeaturesClick = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const createBackgroundEffect = () => {
      const section = document.getElementById('hero-section');
      if (!section) return;
      
      const glow1 = document.createElement('div');
      glow1.className = 'glow-circle';
      glow1.style.width = '600px';
      glow1.style.height = '600px';
      glow1.style.left = '-10%';
      glow1.style.top = '-10%';
      glow1.style.opacity = '0.3';
      section.appendChild(glow1);
      
      const glow2 = document.createElement('div');
      glow2.className = 'glow-circle';
      glow2.style.width = '500px';
      glow2.style.height = '500px';
      glow2.style.right = '-5%';
      glow2.style.bottom = '-10%';
      glow2.style.background = 'radial-gradient(circle at center, rgba(59, 130, 246, 0.6), transparent 70%)';
      glow2.style.opacity = '0.3';
      section.appendChild(glow2);
    };
    
    createBackgroundEffect();
    
    // Trigger initial animations with slight delay
    const timer = setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.classList.add('slide-in-bottom');
      }
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero-section" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0 text-left animate-fade-up animate-stagger-1">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Crypto</span> Spends Like <span className="text-gradient">Cash</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              The next-gen card that lets you spend your cryptocurrency anywhere, anytime. Just like traditional money, but better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-crypto-purple hover:bg-crypto-light-purple text-lg py-6 px-8 shadow-lg shadow-crypto-purple/20 transition-all duration-300 hover:translate-y-[-2px]"
                onClick={handleWhitelistClick}
              >
                Join Whitelist
              </Button>
              <Button 
                variant="outline" 
                className="border-crypto-purple text-white hover:bg-crypto-purple/20 text-lg py-6 px-8 transition-all duration-300 hover:translate-y-[-2px]"
                onClick={handleFeaturesClick}
              >
                Learn More
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-r from-crypto-purple/80 to-crypto-blue/80 flex items-center justify-center text-xs font-bold">{i}</div>
                ))}
              </div>
              <p className="ml-4 text-gray-300">
                <span className="font-semibold text-white">2,500+</span> already on the waitlist
              </p>
            </div>
          </div>
          
          <div 
            ref={containerRef}
            className="w-full md:w-1/2 relative animate-fade-up animate-stagger-2" 
            onMouseMove={handleMouseMove} 
            onMouseLeave={resetRotation}
          >
            <div className="relative">
              <div 
                ref={cardRef}
                className="credit-card w-80 h-48 md:w-[28rem] md:h-64 mx-auto rounded-2xl card-3d-effect"
                style={{
                  transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-crypto-purple to-crypto-blue rounded-2xl opacity-60 blur-lg animate-pulse-soft"></div>
                <div className="absolute inset-0 p-[3px] rounded-2xl bg-gradient-to-r from-crypto-purple via-crypto-blue to-crypto-green overflow-hidden">
                  <div className="absolute inset-0 bg-shimmer animate-shimmer"></div>
                  <div className="h-full w-full rounded-2xl bg-black/90 flex flex-col justify-between p-6 relative z-10">
                    <div className="flex justify-between">
                      <div className="text-sm font-medium text-gray-300">DGNPay</div>
                      <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden p-1">
                        <img 
                          src="https://i.ibb.co/hngbjQS/2025-05-11-12-04-55.png" 
                          alt="DGNPay Logo" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-4">
                      <div className="text-xl md:text-2xl font-mono tracking-widest">•••• •••• •••• 3456</div>
                      <div className="flex justify-between">
                        <div>
                          <div className="text-xs text-gray-400">VALID THRU</div>
                          <div className="text-sm md:text-base">09/28</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-400">NAME</div>
                          <div className="text-sm md:text-base">SATOSHI NAKAMOTO</div>
                        </div>
                        <div className="flex items-end">
                          <div className="w-8 h-8 md:w-10 md:h-10">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                              <circle cx="8" cy="12" r="2" fill="white" />
                              <circle cx="16" cy="12" r="2" fill="white" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-crypto-green rounded-full blur-xl animate-pulse-soft opacity-30"></div>
              <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-crypto-orange rounded-full blur-xl animate-pulse-soft opacity-30"></div>
              
              <div className="absolute -bottom-4 right-8 w-20 h-20 md:w-32 md:h-32 rounded-lg bg-gradient-to-r from-crypto-blue to-crypto-green p-[2px] animate-float rotate-12 shadow-lg shadow-crypto-blue/20">
                <div className="w-full h-full rounded-lg bg-black/90 flex items-center justify-center p-2">
                  <img 
                    src="https://i.ibb.co/hngbjQS/2025-05-11-12-04-55.png" 
                    alt="DGNPay Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              <div className="absolute -top-8 -left-4 w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-r from-crypto-purple to-crypto-blue p-[2px] animate-float animate-spin-slow opacity-80 shadow-lg shadow-crypto-purple/20">
                <div className="w-full h-full rounded-full bg-black/80 flex items-center justify-center">
                  <svg className="w-10 h-10 md:w-14 md:h-14 text-crypto-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 8.8C9 8.51997 9 8.37996 9.0545 8.273C9.10243 8.17892 9.17892 8.10243 9.273 8.0545C9.37996 8 9.51997 8 9.8 8H14.2C14.48 8 14.62 8 14.727 8.0545C14.8211 8.10243 14.8976 8.17892 14.9455 8.273C15 8.37996 15 8.51997 15 8.8V9.2C15 9.48003 15 9.62004 14.9455 9.727C14.8976 9.82108 14.8211 9.89757 14.727 9.9455C14.62 10 14.48 10 14.2 10H9.8C9.51997 10 9.37996 10 9.273 9.9455C9.17892 9.89757 9.10243 9.82108 9.0545 9.727C9 9.62004 9 9.48003 9 9.2V8.8Z" fill="currentColor"/>
                    <path d="M9 14.8C9 14.52 9 14.38 9.0545 14.273C9.10243 14.1789 9.17892 14.1024 9.273 14.0545C9.37996 14 9.51997 14 9.8 14H14.2C14.48 14 14.62 14 14.727 14.0545C14.8211 14.1024 14.8976 14.1789 14.9455 14.273C15 14.38 15 14.52 15 14.8V15.2C15 15.48 15 15.62 14.9455 15.727C14.8976 15.8211 14.8211 15.8976 14.727 15.9455C14.62 16 14.48 16 14.2 16H9.8C9.51997 16 9.37996 16 9.273 15.9455C9.17892 15.8976 9.10243 15.8211 9.0545 15.727C9 15.62 9 15.48 9 15.2V14.8Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-10 left-10 w-60 h-60 bg-crypto-purple/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-crypto-blue/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-crypto-purple/5 rounded-full filter blur-[120px]"></div>
      </div>
    </section>
  );
};

export default HeroSection;
