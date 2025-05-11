
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gradient">CryptoCard</div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white hover:text-crypto-purple transition-colors">Features</a>
            <a href="#how-it-works" className="text-white hover:text-crypto-purple transition-colors">How It Works</a>
            <a href="#pricing" className="text-white hover:text-crypto-purple transition-colors">Pricing</a>
            <a href="#faq" className="text-white hover:text-crypto-purple transition-colors">FAQ</a>
            <Button className="bg-crypto-purple hover:bg-crypto-light-purple transition-all">
              <a href="#whitelist">Join Whitelist</a>
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-3 bg-secondary rounded-lg">
            <div className="flex flex-col space-y-3 px-4">
              <a href="#features" className="text-white hover:text-crypto-purple transition-colors py-2">Features</a>
              <a href="#how-it-works" className="text-white hover:text-crypto-purple transition-colors py-2">How It Works</a>
              <a href="#pricing" className="text-white hover:text-crypto-purple transition-colors py-2">Pricing</a>
              <a href="#faq" className="text-white hover:text-crypto-purple transition-colors py-2">FAQ</a>
              <Button className="bg-crypto-purple hover:bg-crypto-light-purple transition-all w-full">
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
