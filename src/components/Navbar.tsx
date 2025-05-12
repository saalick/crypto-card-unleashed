import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
      isScrolled 
        ? 'backdrop-blur-xl bg-background/80 border-b border-gray-800/50 shadow-md' 
        : 'glass'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-10 mr-2">
              <img 
                src="https://i.ibb.co/G47x2nDf/Screenshot-2025-05-12-at-11-45-08-PM-removebg-preview.png" 
                alt="DGNPay Logo" 
                className="h-full object-contain"
              />
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white hover:text-gradient transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-crypto-purple after:to-crypto-blue hover:after:w-full after:transition-all after:duration-300">Features</a>
            <a href="#how-it-works" className="text-white hover:text-gradient transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-crypto-purple after:to-crypto-blue hover:after:w-full after:transition-all after:duration-300">How It Works</a>
            <a href="#pricing" className="text-white hover:text-gradient transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-crypto-purple after:to-crypto-blue hover:after:w-full after:transition-all after:duration-300">Pricing</a>
            <a href="#faq" className="text-white hover:text-gradient transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-crypto-purple after:to-crypto-blue hover:after:w-full after:transition-all after:duration-300">FAQ</a>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="https://x.com/dgnpay" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-crypto-purple transition-colors"
                  >
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png" 
                      alt="X Logo" 
                      className="w-5 h-5"
                    />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Follow us on X (Twitter)</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Button className="bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-all shadow-lg shadow-crypto-purple/20">
              <a href="#whitelist">Join Whitelist</a>
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </button>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 backdrop-blur-xl bg-gray-900/90 rounded-lg border border-gray-800 shadow-lg animate-fade-in animate-visible">
            <div className="flex flex-col space-y-4 px-4">
              <a href="#features" className="text-white hover:text-crypto-purple transition-colors py-2 px-3 hover:bg-gray-800 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
              <a href="#how-it-works" className="text-white hover:text-crypto-purple transition-colors py-2 px-3 hover:bg-gray-800 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a>
              <a href="#pricing" className="text-white hover:text-crypto-purple transition-colors py-2 px-3 hover:bg-gray-800 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
              <a href="#faq" className="text-white hover:text-crypto-purple transition-colors py-2 px-3 hover:bg-gray-800 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
              <a 
                href="https://x.com/dgnpay" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-crypto-purple transition-colors py-2 px-3 hover:bg-gray-800 rounded-md flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <img 
                  src="https://loodibee.com/wp-content/uploads/Twitter-X-Logo.png" 
                  alt="X Logo" 
                  className="w-4 h-4 mr-2"
                />
                Follow us on X
              </a>
              <Button className="bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-all w-full mt-2" onClick={() => setIsMobileMenuOpen(false)}>
                <a href="#whitelist">Join Whitelist</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
