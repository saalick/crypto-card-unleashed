import { useState, useEffect, useRef } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const HeroSection = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
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

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };
  
  const handleWhitelistClick = () => {
    console.log("Whitelist button clicked");
    const whitelistSection = document.getElementById('whitelist');
    if (whitelistSection) {
      whitelistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleFeaturesClick = () => {
    console.log("Features button clicked");
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
              Add DGNPay to your Apple Wallet and spend your cryptocurrency anywhere, anytime - just like traditional money, but better.
            </p>
            
            {/* Apple Wallet Integration section */}
            <div className="mb-8 flex items-center">
              <div className="bg-black/40 p-4 rounded-xl border border-gray-800 flex items-center">
                <span className="text-gray-300 mr-2">Compatible with</span>
                <svg className="h-6 w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40">
                  <path fill="white" d="M30.6,19.4c0-3.3,2.7-4.9,2.8-4.9c-1.5-2.2-3.9-2.5-4.7-2.5c-2-0.2-3.9,1.2-4.9,1.2c-1,0-2.6-1.2-4.2-1.1
                    c-2.2,0-4.2,1.3-5.3,3.2c-2.3,3.9-0.6,9.7,1.6,12.9c1.1,1.6,2.3,3.3,4,3.2c1.6-0.1,2.2-1,4.2-1c1.9,0,2.5,1,4.2,1
                    c1.7,0,2.8-1.6,3.9-3.1c1.2-1.8,1.7-3.5,1.7-3.6C33.9,24.7,30.7,23.4,30.6,19.4z"/>
                  <path fill="white" d="M27.3,10.2c0.9-1.1,1.5-2.6,1.3-4.1c-1.3,0.1-2.8,0.9-3.8,1.9c-0.8,0.9-1.5,2.5-1.3,3.9C25,12.1,26.4,11.3,27.3,10.2z"/>
                </svg>
                <span className="text-white font-bold ml-1">Wallet</span>
              </div>
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
                className={`credit-card w-80 h-48 md:w-[28rem] md:h-64 mx-auto rounded-2xl perspective-1000 cursor-pointer ${isFlipped ? 'flipped' : ''}`}
                style={{
                  transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
                }}
                onClick={handleCardClick}
              >
                <div className="credit-card-inner w-full h-full transition-transform duration-700" style={{ transformStyle: "preserve-3d", transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)' }}>
                  {/* Front of card - Apple Pay Style */}
                  <div className="credit-card-front absolute w-full h-full backface-hidden" style={{ backfaceVisibility: "hidden" }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-2xl opacity-90"></div>
                    <div className="absolute inset-0 p-[2px] rounded-2xl bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 overflow-hidden">
                      <div className="h-full w-full rounded-2xl bg-gradient-to-b from-gray-900 to-black flex flex-col justify-between p-6 relative z-10">
                        <div className="flex justify-between">
                          <div className="flex items-center">
                            <img 
                              src="https://i.ibb.co/ksthtgYs/Screenshot-2025-05-12-at-11-45-08-PM.png" 
                              alt="DGNPay Logo" 
                              className="h-8 w-auto object-contain"
                            />
                          </div>
                          <div className="flex items-center">
                            <svg className="h-6 w-auto" viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill="white" d="M365.3,115.8h-0.7c-2.5,5.9-7.2,10.7-13.5,13.8v0.1c-6.4,3.2-13.5,3.8-20.3,1.7
                                c-6.8-2-12.2-6.4-15.4-12.3c-3.2-5.9-3.8-12.6-1.8-19.1c2-6.5,6.4-11.7,12.3-14.9c5.9-3.2,12.9-3.8,19.4-1.7
                                c6.5,2.1,11.7,6.5,14.9,12.4h31c-4.9-19.4-16.7-35.6-33-45.5c-16.3-9.9-35.9-12.3-54.3-6.7c-18.4,5.6-33.6,18-42.8,34.7
                                c-9.2,16.7-11.3,36.1-5.7,54.4c5.6,18.3,18,33.3,34.7,42.3c16.7,9,36.1,11,54.4,5.4c18.3-5.6,33.3-18,42.3-34.7
                                c6-11.3,8.6-23.8,8.1-36.2h-30.6V115.8z"/>
                            </svg>
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Back of card - Apple Pay Style */}
                  <div className="credit-card-back absolute w-full h-full backface-hidden" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-2xl opacity-90"></div>
                    <div className="absolute inset-0 p-[2px] rounded-2xl bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 overflow-hidden">
                      <div className="h-full w-full rounded-2xl bg-gradient-to-b from-gray-900 to-black flex flex-col justify-between p-6 relative z-10">
                        <div className="w-full h-12 bg-gray-800 mt-4 rounded"></div>
                        <div className="flex flex-col space-y-4 mt-4">
                          <div className="flex justify-end">
                            <div className="bg-gray-800 w-16 h-8 rounded flex items-center justify-center text-xs font-mono">CVV</div>
                          </div>
                          <div className="flex items-center justify-center mt-4">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gray-700 to-gray-500 p-1">
                              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                                <img 
                                  src="https://i.ibb.co/ksthtgYs/Screenshot-2025-05-12-at-11-45-08-PM.png" 
                                  alt="DGNPay Logo" 
                                  className="w-10 h-10 object-contain"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="text-center text-xs text-gray-400 mt-2">Tap card to flip</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 right-8 w-20 h-20 md:w-32 md:h-32 rounded-lg bg-gradient-to-r from-gray-700 to-gray-500 p-[2px] animate-float rotate-12 shadow-lg">
                <div className="w-full h-full rounded-lg bg-black flex items-center justify-center p-2">
                  <svg className="h-12 w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40">
                    <path fill="white" d="M30.6,19.4c0-3.3,2.7-4.9,2.8-4.9c-1.5-2.2-3.9-2.5-4.7-2.5c-2-0.2-3.9,1.2-4.9,1.2c-1,0-2.6-1.2-4.2-1.1
                      c-2.2,0-4.2,1.3-5.3,3.2c-2.3,3.9-0.6,9.7,1.6,12.9c1.1,1.6,2.3,3.3,4,3.2c1.6-0.1,2.2-1,4.2-1c1.9,0,2.5,1,4.2,1
                      c1.7,0,2.8-1.6,3.9-3.1c1.2-1.8,1.7-3.5,1.7-3.6C33.9,24.7,30.7,23.4,30.6,19.4z"/>
                    <path fill="white" d="M27.3,10.2c0.9-1.1,1.5-2.6,1.3-4.1c-1.3,0.1-2.8,0.9-3.8,1.9c-0.8,0.9-1.5,2.5-1.3,3.9C25,12.1,26.4,11.3,27.3,10.2z"/>
                  </svg>
                </div>
              </div>
              
              <div className="absolute -top-8 -left-4 w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-r from-gray-700 to-gray-500 p-[2px] animate-float opacity-80 shadow-lg">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <svg className="w-10 h-10 md:w-14 md:h-14 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
