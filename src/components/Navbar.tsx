
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

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
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-crypto-purple to-crypto-blue flex items-center justify-center mr-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-gradient">CryptoCard</div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white hover:text-gradient transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-crypto-purple after:to-crypto-blue hover:after:w-full after:transition-all after:duration-300">Features</a>
            <a href="#how-it-works" className="text-white hover:text-gradient transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-crypto-purple after:to-crypto-blue hover:after:w-full after:transition-all after:duration-300">How It Works</a>
            <a href="#pricing" className="text-white hover:text-gradient transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-crypto-purple after:to-crypto-blue hover:after:w-full after:transition-all after:duration-300">Pricing</a>
            <a href="#faq" className="text-white hover:text-gradient transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-crypto-purple after:to-crypto-blue hover:after:w-full after:transition-all after:duration-300">FAQ</a>
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
