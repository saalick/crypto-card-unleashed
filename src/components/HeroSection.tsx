
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Rocket, ShieldCheck, Globe } from "lucide-react";

const HeroSection = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
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
  
  const flipCard = () => {
    setIsCardFlipped(!isCardFlipped);
  };
  
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
    
    const timer = setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.classList.add('slide-in-bottom');
      }
    }, 300);
    
    // Start a card animation sequence
    const animationTimer = setTimeout(() => {
      setIsCardFlipped(true);
      setTimeout(() => {
        setIsCardFlipped(false);
      }, 1500);
    }, 1500);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(animationTimer);
    };
  }, []);
  
  // Periodic card flip animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsCardFlipped(true);
      setTimeout(() => {
        setIsCardFlipped(false);
      }, 1500);
    }, 10000); // Flip every 10 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero-section" className="relative min-h-screen flex items-center pt-24 pb-16 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-crypto-purple/20 filter blur-[100px] -top-64 -left-32"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-crypto-blue/20 filter blur-[100px] -bottom-20 right-0"></div>
        <div className="absolute w-full h-full opacity-20">
          <div className="absolute w-1 h-1 bg-white rounded-full top-1/4 left-1/4 animate-pulse-soft"></div>
          <div className="absolute w-2 h-2 bg-crypto-green rounded-full top-1/3 left-1/2 animate-pulse-soft"></div>
          <div className="absolute w-1 h-1 bg-crypto-purple rounded-full top-2/3 left-1/3 animate-pulse-soft"></div>
          <div className="absolute w-2 h-2 bg-crypto-blue rounded-full top-1/2 right-1/4 animate-pulse-soft"></div>
          <div className="absolute w-1 h-1 bg-white rounded-full bottom-1/4 right-1/3 animate-pulse-soft"></div>
        </div>
      </div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left space-y-8 animate-fade-up animate-stagger-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-crypto-purple/30 bg-crypto-purple/10 backdrop-blur-sm">
              <p className="text-sm flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crypto-purple opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-crypto-purple"></span>
                </span>
                Now available in beta
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gradient">Crypto</span> That Spends Like <span className="text-gradient">Cash</span>
            </h1>
            
            <p className="text-lg text-gray-300 max-w-xl">
              Experience the future of payments with our next-gen card that seamlessly bridges the gap between cryptocurrency and everyday spending. Your digital assets, available anywhere.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button 
                onClick={handleWhitelistClick} 
                variant="gradient" 
                size="xl"
                className="group relative overflow-hidden cursor-pointer"
              >
                Join Whitelist
                <div className="absolute right-4 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </Button>
              
              <Button 
                onClick={handleFeaturesClick} 
                variant="outline" 
                size="xl"
                className="text-white border-crypto-purple/50 hover:bg-crypto-purple/10 group cursor-pointer"
              >
                Explore Features
                <div className="ml-1 group-hover:translate-y-[-2px] transition-transform">
                  <Rocket className="h-5 w-5" />
                </div>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-r from-crypto-purple/80 to-crypto-blue/80 flex items-center justify-center text-xs font-bold shadow-lg">{i}</div>
                ))}
              </div>
              <div>
                <p className="font-semibold text-xl">2,500+</p>
                <p className="text-sm text-gray-400">People on waitlist</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-crypto-green h-5 w-5" />
                <span className="text-sm">Bank-grade security</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="text-crypto-blue h-5 w-5" />
                <span className="text-sm">Global acceptance</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Card Visualization */}
          <div 
            ref={containerRef}
            className="relative z-10 flex justify-center py-10 animate-fade-up animate-stagger-2" 
            onMouseMove={handleMouseMove} 
            onMouseLeave={resetRotation}
          >
            <div className="relative">
              {/* Main Card with Flip Animation */}
              <div 
                ref={cardRef}
                style={{
                  transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${isCardFlipped ? '180deg' : `${rotateY}deg`})`,
                  transition: isCardFlipped ? 'transform 0.8s ease-in-out' : 'transform 0.3s ease'
                }}
                className="w-80 h-48 md:w-96 md:h-56 rounded-2xl overflow-hidden shadow-2xl card-3d-effect cursor-pointer"
                onClick={flipCard}
              >
                {/* Front Side of Card */}
                <div className={`absolute inset-0 backface-hidden ${isCardFlipped ? 'opacity-0' : 'opacity-100'}`} style={{ 
                  backfaceVisibility: 'hidden',
                  transition: 'opacity 0.3s ease'
                }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-crypto-purple to-crypto-blue opacity-70 blur-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-crypto-purple via-crypto-blue to-crypto-green opacity-50"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-sm p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-lg text-white/90">DGNPay</h3>
                      <div className="h-8 w-8 rounded-full bg-white/10 p-1.5">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                          <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>
                    
                    <div>
                      <div className="mb-4">
                        <div className="h-6 w-12 rounded bg-white/20 mb-1"></div>
                        <div className="font-mono tracking-widest text-xl md:text-2xl text-white/90">•••• •••• •••• 3456</div>
                      </div>
                      
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-xs text-white/60">VALID THRU</p>
                          <p className="font-mono">09/28</p>
                        </div>
                        <div>
                          <p className="text-xs text-white/60">NAME</p>
                          <p className="font-mono">SATOSHI NAKAMOTO</p>
                        </div>
                        <div className="flex h-8 w-8">
                          <svg viewBox="0 0 36 24" className="w-full h-full">
                            <circle cx="12" cy="12" r="10" fill="none" stroke="white" strokeOpacity="0.8" strokeWidth="2" />
                            <circle cx="24" cy="12" r="10" fill="none" stroke="white" strokeOpacity="0.8" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-shimmer"></div>
                </div>
                
                {/* Back Side of Card */}
                <div className={`absolute inset-0 backface-hidden ${isCardFlipped ? 'opacity-100' : 'opacity-0'}`} style={{ 
                  transform: 'rotateY(180deg)',
                  backfaceVisibility: 'hidden',
                  transition: 'opacity 0.3s ease'
                }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-crypto-blue to-crypto-purple opacity-70 blur-sm"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-sm p-6 flex flex-col justify-between">
                    <div className="w-full h-12 bg-black/50 mt-6"></div>
                    
                    <div className="flex flex-col items-center justify-center gap-4">
                      <div className="h-8 w-full max-w-[80%] bg-white/10 flex items-center px-4 backdrop-blur-sm">
                        <p className="font-mono text-xs tracking-widest ml-auto">***</p>
                      </div>
                      <p className="text-xs text-center text-white/60">This card is powered by blockchain technology</p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-crypto-green to-crypto-blue flex items-center justify-center p-1">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white/90">
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" />
                          <path d="M7.5 12.5l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <p className="font-mono text-sm">blockchain secured</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-10 -left-6 w-24 h-24 rounded-full bg-gradient-to-r from-crypto-purple to-crypto-blue p-px animate-float opacity-90 shadow-xl shadow-crypto-purple/20">
                <div className="w-full h-full rounded-full bg-black/80 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-crypto-purple">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 8h-6a2 2 0 100 4h4a2 2 0 110 4H8" />
                    <path d="M12 6v2m0 8v2" />
                  </svg>
                </div>
              </div>
              
              <div className="absolute -bottom-6 right-10 w-32 h-32 rounded-xl bg-gradient-to-r from-crypto-blue to-crypto-green p-px animate-float rotate-12 shadow-xl shadow-crypto-blue/20 delay-150">
                <div className="w-full h-full rounded-xl bg-black/80 flex items-center justify-center p-3">
                  <img 
                    src="https://i.ibb.co/hngbjQS/2025-05-11-12-04-55.png" 
                    alt="DGNPay Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              <div className="absolute top-1/3 -right-10 w-16 h-16 rounded-lg bg-gradient-to-r from-crypto-green to-crypto-blue p-px animate-float rotate-45 shadow-lg shadow-crypto-green/20 delay-300">
                <div className="w-full h-full rounded-lg bg-black/80 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-crypto-green">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>
              </div>
              
              {/* Decorative particles with animation */}
              <div className="absolute top-1/4 left-1/2 w-1 h-1 rounded-full bg-crypto-purple animate-pulse-soft"></div>
              <div className="absolute top-3/4 left-1/4 w-2 h-2 rounded-full bg-crypto-blue animate-pulse-soft"></div>
              <div className="absolute top-2/3 right-1/3 w-1 h-1 rounded-full bg-crypto-green animate-pulse-soft"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
