import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const CardCustomization = () => {
  useEffect(() => {
    document.title = "Card Customization | DGNPay";

    // Initialize scroll animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-fade-up, .animate-fade-in, .animate-scale').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Card color options
  const cardColors = [
    {
      id: 'obsidian',
      name: 'Obsidian',
      bgClass: 'bg-gradient-to-r from-gray-900 to-black',
      accentColor: '#00F5D4'
    },
    {
      id: 'sapphire',
      name: 'Sapphire',
      bgClass: 'bg-gradient-to-r from-blue-900 to-blue-700',
      accentColor: '#60A5FA'
    },
    {
      id: 'amethyst',
      name: 'Amethyst',
      bgClass: 'bg-gradient-to-r from-purple-900 to-purple-600',
      accentColor: '#C084FC'
    },
    {
      id: 'emerald',
      name: 'Emerald',
      bgClass: 'bg-gradient-to-r from-green-900 to-green-600',
      accentColor: '#34D399'
    },
    {
      id: 'ruby',
      name: 'Ruby',
      bgClass: 'bg-gradient-to-r from-red-900 to-red-600',
      accentColor: '#F87171'
    },
    {
      id: 'gold',
      name: 'Gold',
      bgClass: 'bg-gradient-to-r from-yellow-700 to-yellow-500',
      accentColor: '#FBBF24'
    }
  ];

  // Card material options
  const cardMaterials = [
    { id: 'metal', name: 'Metal', class: 'bg-gradient-to-br from-gray-300 via-gray-100 to-gray-200 opacity-70' },
    { id: 'glass', name: 'Glass', class: 'backdrop-blur-md bg-white/10 border border-white/20' },
    { id: 'matte', name: 'Matte', class: 'bg-opacity-80' }
  ];

  // Card design options
  const cardDesigns = [
    { id: 'minimalist', name: 'Minimalist', class: '' },
    { id: 'circuit', name: 'Circuit', class: 'pattern-circuit' },
    { id: 'wave', name: 'Wave', class: 'pattern-wave' },
  ];

  const [selectedColor, setSelectedColor] = useState(cardColors[0]);
  const [selectedMaterial, setSelectedMaterial] = useState(cardMaterials[0]);
  const [selectedDesign, setSelectedDesign] = useState(cardDesigns[0]);
  const [cardName, setCardName] = useState('JAMES WILSON');
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMetallic, setIsMetallic] = useState(true);

  // Handle card design selection
  const handleSaveDesign = () => {
    toast({
      title: "Design saved!",
      description: "Your custom card design has been saved to your profile.",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-crypto-teal via-white to-crypto-gold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Design Your Card
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Create a card as unique as you are with our customization studio
            </motion.p>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-crypto-purple/10 rounded-full filter blur-[100px] animate-pulse-soft"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-crypto-teal/10 rounded-full filter blur-[100px] animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        </div>
      </section>

      {/* Card Customization Studio */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Card Preview */}
            <div className="md:col-span-6 xl:col-span-5 flex justify-center">
              <div className="perspective-1000 w-full max-w-md">
                <motion.div 
                  className={`credit-card w-full aspect-[1.586/1] rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 relative ${selectedColor.bgClass} ${selectedMaterial.class} ${selectedDesign.class} ${isMetallic ? 'metallic-effect' : ''}`}
                  style={{ 
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
                  }}
                  whileHover={{ scale: 1.02 }}
                  animate={{
                    rotateY: isFlipped ? 180 : 0
                  }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Front of Card */}
                  <div 
                    className="absolute inset-0 backface-hidden p-6 flex flex-col justify-between"
                    style={{ 
                      backfaceVisibility: "hidden"
                    }}
                  >
                    <div className="flex justify-between items-start">
                      <img 
                        src="https://i.ibb.co/G47x2nDf/Screenshot-2025-05-12-at-11-45-08-PM-removebg-preview.png" 
                        alt="DGNPay Logo" 
                        className="h-10 object-contain"
                      />
                      
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-white/20 to-white/5 flex items-center justify-center">
                        <span className="text-sm font-bold text-white/80">VISA</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="mb-4">
                        <div className="h-8 bg-gradient-to-r from-white/20 to-white/10 rounded w-full"></div>
                      </div>
                      
                      <div className="text-white">
                        <p className="text-xs mb-1 opacity-70">CARD HOLDER</p>
                        <p className="font-bold tracking-wider">{cardName}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Back of Card */}
                  <div 
                    className="absolute inset-0 backface-hidden p-6 flex flex-col justify-between"
                    style={{ 
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)"
                    }}
                  >
                    <div className="w-full h-12 bg-black/60 mt-6"></div>
                    
                    <div className="flex flex-col space-y-4">
                      <div className="flex justify-end">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-white/20 to-white/5 flex items-center justify-center">
                          <span className="text-sm font-bold text-white/80">VISA</span>
                        </div>
                      </div>
                      
                      <div className="text-white text-right">
                        <p className="text-xs mb-1 opacity-70">POWERED BY</p>
                        <p className="font-bold tracking-wider">DGNPAY</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Metallic effect overlay */}
                  {isMetallic && (
                    <div 
                      className="absolute inset-0 opacity-30 z-10 pointer-events-none"
                      style={{ 
                        backgroundImage: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                        backgroundSize: '200% 200%',
                        animation: 'shimmer 3s infinite linear'
                      }}
                    ></div>
                  )}
                </motion.div>
                
                <div className="mt-6 text-center">
                  <Button 
                    variant="outline" 
                    className="border-crypto-teal/30 hover:border-crypto-teal hover:bg-crypto-teal/10"
                    onClick={() => setIsFlipped(!isFlipped)}
                  >
                    {isFlipped ? 'View Front' : 'View Back'}
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Customization Options */}
            <div className="md:col-span-6 xl:col-span-7">
              <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">Customize Your Card</h2>
                
                {/* Card Color Selection */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-3 text-gray-200">Color Scheme</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                    {cardColors.map((color) => (
                      <div
                        key={color.id}
                        className={`h-14 rounded-lg cursor-pointer transition-all duration-300 ${
                          selectedColor.id === color.id
                            ? 'ring-2 ring-offset-2 ring-offset-gray-900 scale-105'
                            : 'hover:scale-105'
                        } ${color.bgClass}`}
                        onClick={() => setSelectedColor(color)}
                        style={{ 
                          boxShadow: selectedColor.id === color.id 
                            ? `0 0 15px ${color.accentColor}80`
                            : 'none' 
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Card Material Selection */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-3 text-gray-200">Material</h3>
                  <div className="flex flex-wrap gap-3">
                    {cardMaterials.map((material) => (
                      <Button
                        key={material.id}
                        variant={selectedMaterial.id === material.id ? "default" : "outline"}
                        className={
                          selectedMaterial.id === material.id
                            ? "bg-gradient-to-r from-crypto-purple to-crypto-blue"
                            : "border-gray-600"
                        }
                        onClick={() => setSelectedMaterial(material)}
                      >
                        {material.name}
                      </Button>
                    ))}
                  </div>
                </div>
                
                {/* Card Design Selection */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-3 text-gray-200">Design Pattern</h3>
                  <div className="flex flex-wrap gap-3">
                    {cardDesigns.map((design) => (
                      <Button
                        key={design.id}
                        variant={selectedDesign.id === design.id ? "default" : "outline"}
                        className={
                          selectedDesign.id === design.id
                            ? "bg-gradient-to-r from-crypto-purple to-crypto-blue"
                            : "border-gray-600"
                        }
                        onClick={() => setSelectedDesign(design)}
                      >
                        {design.name}
                      </Button>
                    ))}
                  </div>
                </div>
                
                {/* Custom Name */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-3 text-gray-200">Cardholder Name</h3>
                  <input
                    type="text"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value.toUpperCase())}
                    className="w-full bg-gray-900/60 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring focus:ring-crypto-teal/30 focus:border-crypto-teal focus:outline-none"
                    maxLength={26}
                  />
                </div>
                
                {/* Special Effects */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-3 text-gray-200">Special Effects</h3>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isMetallic}
                      onChange={() => setIsMetallic(!isMetallic)}
                      className="w-5 h-5 bg-gray-700 rounded border-gray-600 focus:ring focus:ring-crypto-teal/30"
                    />
                    <span>Metallic Finish</span>
                  </label>
                </div>
                
                {/* Save Button */}
                <Button 
                  className="w-full bg-gradient-to-r from-crypto-purple to-crypto-blue hover:shadow-lg hover:shadow-crypto-purple/20 py-6"
                  onClick={handleSaveDesign}
                >
                  Save Design
                </Button>
                
                <div className="mt-4 text-center text-sm text-gray-400">
                  Your design will be applied to your physical card upon approval
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Inspiration <span className="text-gradient">Gallery</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div 
                key={index}
                className="aspect-[1.586/1] rounded-xl overflow-hidden group"
              >
                <div className={`w-full h-full ${cardColors[index % cardColors.length].bgClass} ${index % 3 === 0 ? 'bg-gradient-to-r from-gray-900 to-black' : index % 3 === 1 ? 'bg-gradient-to-r from-purple-900 to-purple-600' : 'bg-gradient-to-r from-blue-900 to-blue-700'} flex items-center justify-center relative group-hover:scale-105 transition-all duration-300`}>
                  <img 
                    src="https://i.ibb.co/G47x2nDf/Screenshot-2025-05-12-at-11-45-08-PM-removebg-preview.png" 
                    alt="DGNPay Logo" 
                    className="h-8 object-contain absolute top-4 left-4"
                  />
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                      Use This
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              className="border-crypto-teal/40 hover:border-crypto-teal hover:bg-crypto-teal/10"
            >
              View More Designs
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want Your Custom <span className="text-gradient">Card?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join our waitlist today to be among the first to receive your personalized crypto card
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-crypto-purple to-crypto-blue hover:shadow-lg hover:shadow-crypto-purple/20 transition-all px-10 py-6"
            >
              <a href="/#whitelist">Join Whitelist Now</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* CSS Styles for card patterns */}
      <style>
        {`
        .pattern-circuit {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23ffffff' fill-opacity='0.1' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 217.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1a5 5 0 0 1-9.8 0h2.07a3 3 0 1 0 5.66 0h2.07zM7 302.17a3 3 0 0 0-3-3.83V296a5 5 0 0 1 5.9 5.9h-2.07a3 3 0 0 0-0.83-1.73zM7 0v2.07A3 3 0 0 0 7.83 4H7v298h2V4h1.17a3 3 0 0 0 0.83-1.73V0H7zm297 0v2.07a3 3 0 0 0-.83 1.73H304v298h-2V4h-1.17A3 3 0 0 0 300 2.07V0h4z'%3E%3C/path%3E%3C/svg%3E");
        }
        
        .pattern-wave {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
        
        .metallic-effect {
          position: relative;
          overflow: hidden;
        }
        
        .metallic-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.3) 100%
          );
          transform: skewX(-25deg);
          animation: shine 3s infinite;
        }
        
        @keyframes shine {
          0% { left: -100%; }
          20% { left: 100%; }
          100% { left: 100%; }
        }
      `}
      </style>
    </div>
  );
};

export default CardCustomization;
