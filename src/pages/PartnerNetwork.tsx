
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PartnerNetwork = () => {
  useEffect(() => {
    document.title = "Partner Network | DGNPay";

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

  // Partner networks data
  const exchangePartners = [
    {
      name: "CoinBase",
      logo: "https://cryptologos.cc/logos/coinbase-icon.svg",
      description: "Leading cryptocurrency exchange platform",
      featured: true
    },
    {
      name: "Binance",
      logo: "https://cryptologos.cc/logos/binance-coin-bnb-logo.svg",
      description: "Global crypto exchange with the highest trading volume",
      featured: true
    },
    {
      name: "Kraken",
      logo: "https://cryptologos.cc/logos/kraken-krak-logo.svg",
      description: "Secure exchange with advanced features for traders",
      featured: false
    },
    {
      name: "Gemini",
      logo: "https://cryptologos.cc/logos/gemini-dollar-gusd-logo.svg",
      description: "Regulated exchange focused on security",
      featured: false
    },
    {
      name: "FTX",
      logo: "https://cryptologos.cc/logos/ftx-token-ftt-logo.svg",
      description: "Innovative derivatives trading platform",
      featured: false
    },
    {
      name: "KuCoin",
      logo: "https://cryptologos.cc/logos/kucoin-token-kcs-logo.svg",
      description: "Beginner-friendly exchange with wide coin selection",
      featured: false
    }
  ];

  const paymentPartners = [
    {
      name: "Visa",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
      description: "Global payment technology company",
      featured: true
    },
    {
      name: "MasterCard",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
      description: "Worldwide payment processing leader",
      featured: true
    },
    {
      name: "Stripe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
      description: "Online payment processing for internet businesses",
      featured: false
    },
    {
      name: "PayPal",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
      description: "Digital payment platform with global reach",
      featured: false
    },
    {
      name: "Apple Pay",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg",
      description: "Mobile payment service by Apple Inc.",
      featured: false
    },
    {
      name: "Google Pay",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/G_Pay_Logo.svg",
      description: "Digital wallet platform and online payment system",
      featured: false
    }
  ];

  const blockchainPartners = [
    {
      name: "Ethereum",
      logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
      description: "Leading smart contract platform",
      featured: true
    },
    {
      name: "Solana",
      logo: "https://cryptologos.cc/logos/solana-sol-logo.svg",
      description: "High-performance blockchain with fast transactions",
      featured: true
    },
    {
      name: "Polygon",
      logo: "https://cryptologos.cc/logos/polygon-matic-logo.svg",
      description: "Ethereum scaling solution with low fees",
      featured: false
    },
    {
      name: "Avalanche",
      logo: "https://cryptologos.cc/logos/avalanche-avax-logo.svg",
      description: "Platform for launching decentralized applications",
      featured: false
    },
    {
      name: "Cardano",
      logo: "https://cryptologos.cc/logos/cardano-ada-logo.svg",
      description: "Sustainable blockchain with academic research",
      featured: false
    },
    {
      name: "Algorand",
      logo: "https://cryptologos.cc/logos/algorand-algo-logo.svg",
      description: "Carbon-negative blockchain with instant finality",
      featured: false
    }
  ];

  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null);

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
              Global Partner Network
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Explore the ecosystem of exchanges, payment services, and blockchain networks powering DGNPay
            </motion.p>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-crypto-purple/10 rounded-full filter blur-[100px] animate-pulse-soft"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-crypto-teal/10 rounded-full filter blur-[100px] animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        </div>
      </section>

      {/* Network Visualization */}
      <section className="py-12 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative h-[400px] md:h-[500px] bg-gray-900/30 rounded-xl overflow-hidden border border-gray-800/50">
              {/* Central node */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-900 rounded-full p-3 border-4 border-crypto-teal shadow-lg shadow-crypto-teal/20 pulse-animation">
                  <img 
                    src="https://i.ibb.co/G47x2nDf/Screenshot-2025-05-12-at-11-45-08-PM-removebg-preview.png" 
                    alt="DGNPay Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white font-bold">DGNPay</span>
              </div>
              
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }}>
                <defs>
                  <linearGradient id="line-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00F5D4" />
                    <stop offset="100%" stopColor="#9b87f5" />
                  </linearGradient>
                  <linearGradient id="line-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9b87f5" />
                    <stop offset="100%" stopColor="#DAA520" />
                  </linearGradient>
                  <linearGradient id="line-gradient-3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#DAA520" />
                    <stop offset="100%" stopColor="#00F5D4" />
                  </linearGradient>
                </defs>
                
                {/* Lines to Exchange Partners */}
                {[...Array(6)].map((_, i) => {
                  const angle = (i * 60 + 30) * Math.PI / 180;
                  const radius = 150;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <motion.line 
                      key={`exchange-${i}`}
                      x1="50%" 
                      y1="50%" 
                      x2={`calc(50% + ${x}px)`} 
                      y2={`calc(50% + ${y}px)`}
                      stroke="url(#line-gradient-1)"
                      strokeWidth="1.5"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.6 }}
                      transition={{ duration: 1.5, delay: i * 0.1 }}
                    />
                  )
                })}
                
                {/* Lines to Payment Partners */}
                {[...Array(6)].map((_, i) => {
                  const angle = (i * 60 + 150) * Math.PI / 180;
                  const radius = 150;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <motion.line 
                      key={`payment-${i}`}
                      x1="50%" 
                      y1="50%" 
                      x2={`calc(50% + ${x}px)`} 
                      y2={`calc(50% + ${y}px)`}
                      stroke="url(#line-gradient-2)"
                      strokeWidth="1.5"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.6 }}
                      transition={{ duration: 1.5, delay: i * 0.1 + 0.6 }}
                    />
                  )
                })}
                
                {/* Lines to Blockchain Partners */}
                {[...Array(6)].map((_, i) => {
                  const angle = (i * 60 + 270) * Math.PI / 180;
                  const radius = 150;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <motion.line 
                      key={`blockchain-${i}`}
                      x1="50%" 
                      y1="50%" 
                      x2={`calc(50% + ${x}px)`} 
                      y2={`calc(50% + ${y}px)`}
                      stroke="url(#line-gradient-3)"
                      strokeWidth="1.5"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.6 }}
                      transition={{ duration: 1.5, delay: i * 0.1 + 1.2 }}
                    />
                  )
                })}
              </svg>
              
              {/* Outer nodes - Exchange Partners */}
              {[...Array(6)].map((_, i) => {
                const angle = (i * 60 + 30) * Math.PI / 180;
                const radius = 150;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <motion.div 
                    key={`exchange-node-${i}`}
                    className="absolute w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800 border-2 border-crypto-teal flex items-center justify-center"
                    style={{ 
                      top: `calc(50% + ${y}px)`, 
                      left: `calc(50% + ${x}px)`, 
                      transform: 'translate(-50%, -50%)' 
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: i * 0.1 + 0.5 }}
                    whileHover={{ scale: 1.2, boxShadow: '0 0 15px rgba(0, 245, 212, 0.6)' }}
                  >
                    {i < exchangePartners.length && (
                      <img 
                        src={exchangePartners[i].logo} 
                        alt={exchangePartners[i].name}
                        className="w-6 h-6 md:w-8 md:h-8 object-contain"
                      />
                    )}
                  </motion.div>
                )
              })}
              
              {/* Outer nodes - Payment Partners */}
              {[...Array(6)].map((_, i) => {
                const angle = (i * 60 + 150) * Math.PI / 180;
                const radius = 150;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <motion.div 
                    key={`payment-node-${i}`}
                    className="absolute w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800 border-2 border-crypto-purple flex items-center justify-center"
                    style={{ 
                      top: `calc(50% + ${y}px)`, 
                      left: `calc(50% + ${x}px)`, 
                      transform: 'translate(-50%, -50%)' 
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: i * 0.1 + 1 }}
                    whileHover={{ scale: 1.2, boxShadow: '0 0 15px rgba(155, 135, 245, 0.6)' }}
                  >
                    {i < paymentPartners.length && (
                      <img 
                        src={paymentPartners[i].logo} 
                        alt={paymentPartners[i].name}
                        className="w-6 h-6 md:w-8 md:h-8 object-contain"
                      />
                    )}
                  </motion.div>
                )
              })}
              
              {/* Outer nodes - Blockchain Partners */}
              {[...Array(6)].map((_, i) => {
                const angle = (i * 60 + 270) * Math.PI / 180;
                const radius = 150;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <motion.div 
                    key={`blockchain-node-${i}`}
                    className="absolute w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800 border-2 border-crypto-gold flex items-center justify-center"
                    style={{ 
                      top: `calc(50% + ${y}px)`, 
                      left: `calc(50% + ${x}px)`, 
                      transform: 'translate(-50%, -50%)' 
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: i * 0.1 + 1.5 }}
                    whileHover={{ scale: 1.2, boxShadow: '0 0 15px rgba(218, 165, 32, 0.6)' }}
                  >
                    {i < blockchainPartners.length && (
                      <img 
                        src={blockchainPartners[i].logo} 
                        alt={blockchainPartners[i].name}
                        className="w-6 h-6 md:w-8 md:h-8 object-contain"
                      />
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="exchanges" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-gray-800/50 border border-gray-700/50 p-1">
                  <TabsTrigger value="exchanges" className="data-[state=active]:bg-crypto-teal data-[state=active]:text-black px-6">
                    Exchanges
                  </TabsTrigger>
                  <TabsTrigger value="payment" className="data-[state=active]:bg-crypto-purple data-[state=active]:text-white px-6">
                    Payment
                  </TabsTrigger>
                  <TabsTrigger value="blockchain" className="data-[state=active]:bg-crypto-gold data-[state=active]:text-black px-6">
                    Blockchain
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <div className="mt-8">
                {/* Exchanges Tab */}
                <TabsContent value="exchanges">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {exchangePartners.map((partner, index) => (
                      <motion.div 
                        key={partner.name}
                        className={`bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-crypto-teal/50 transition-all duration-300 transform hover:-translate-y-1 ${
                          partner.featured ? 'lg:col-span-3 md:col-span-2' : ''
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        onMouseEnter={() => setHoveredPartner(partner.name)}
                        onMouseLeave={() => setHoveredPartner(null)}
                      >
                        <div className={`flex ${partner.featured ? 'md:flex-row flex-col items-start' : 'flex-col'} h-full`}>
                          <div className={`bg-gray-900 rounded-lg p-4 mb-4 ${partner.featured ? 'md:mr-6 md:mb-0' : ''}`}>
                            <img 
                              src={partner.logo} 
                              alt={partner.name}
                              className={`${partner.featured ? 'w-24 h-24' : 'w-16 h-16'} object-contain mx-auto`}
                            />
                          </div>
                          <div className={partner.featured ? 'md:flex-1' : ''}>
                            <div className="flex items-center mb-2">
                              <h3 className="text-xl font-semibold">{partner.name}</h3>
                              {partner.featured && (
                                <span className="ml-2 bg-crypto-teal/20 text-crypto-teal text-xs px-2 py-1 rounded-full">
                                  Featured
                                </span>
                              )}
                            </div>
                            <p className="text-gray-300 mb-4">{partner.description}</p>
                            {partner.featured && (
                              <div className="mt-auto">
                                <Button variant="outline" size="sm" className="border-crypto-teal/30 hover:bg-crypto-teal/10 hover:border-crypto-teal text-white">
                                  Learn More
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
                
                {/* Payment Tab */}
                <TabsContent value="payment">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {paymentPartners.map((partner, index) => (
                      <motion.div 
                        key={partner.name}
                        className={`bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-crypto-purple/50 transition-all duration-300 transform hover:-translate-y-1 ${
                          partner.featured ? 'lg:col-span-3 md:col-span-2' : ''
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        onMouseEnter={() => setHoveredPartner(partner.name)}
                        onMouseLeave={() => setHoveredPartner(null)}
                      >
                        <div className={`flex ${partner.featured ? 'md:flex-row flex-col items-start' : 'flex-col'} h-full`}>
                          <div className={`bg-gray-900 rounded-lg p-4 mb-4 ${partner.featured ? 'md:mr-6 md:mb-0' : ''}`}>
                            <img 
                              src={partner.logo} 
                              alt={partner.name}
                              className={`${partner.featured ? 'w-24 h-24' : 'w-16 h-16'} object-contain mx-auto`}
                            />
                          </div>
                          <div className={partner.featured ? 'md:flex-1' : ''}>
                            <div className="flex items-center mb-2">
                              <h3 className="text-xl font-semibold">{partner.name}</h3>
                              {partner.featured && (
                                <span className="ml-2 bg-crypto-purple/20 text-crypto-purple text-xs px-2 py-1 rounded-full">
                                  Featured
                                </span>
                              )}
                            </div>
                            <p className="text-gray-300 mb-4">{partner.description}</p>
                            {partner.featured && (
                              <div className="mt-auto">
                                <Button variant="outline" size="sm" className="border-crypto-purple/30 hover:bg-crypto-purple/10 hover:border-crypto-purple text-white">
                                  Learn More
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
                
                {/* Blockchain Tab */}
                <TabsContent value="blockchain">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blockchainPartners.map((partner, index) => (
                      <motion.div 
                        key={partner.name}
                        className={`bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-crypto-gold/50 transition-all duration-300 transform hover:-translate-y-1 ${
                          partner.featured ? 'lg:col-span-3 md:col-span-2' : ''
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        onMouseEnter={() => setHoveredPartner(partner.name)}
                        onMouseLeave={() => setHoveredPartner(null)}
                      >
                        <div className={`flex ${partner.featured ? 'md:flex-row flex-col items-start' : 'flex-col'} h-full`}>
                          <div className={`bg-gray-900 rounded-lg p-4 mb-4 ${partner.featured ? 'md:mr-6 md:mb-0' : ''}`}>
                            <img 
                              src={partner.logo} 
                              alt={partner.name}
                              className={`${partner.featured ? 'w-24 h-24' : 'w-16 h-16'} object-contain mx-auto`}
                            />
                          </div>
                          <div className={partner.featured ? 'md:flex-1' : ''}>
                            <div className="flex items-center mb-2">
                              <h3 className="text-xl font-semibold">{partner.name}</h3>
                              {partner.featured && (
                                <span className="ml-2 bg-crypto-gold/20 text-crypto-gold text-xs px-2 py-1 rounded-full">
                                  Featured
                                </span>
                              )}
                            </div>
                            <p className="text-gray-300 mb-4">{partner.description}</p>
                            {partner.featured && (
                              <div className="mt-auto">
                                <Button variant="outline" size="sm" className="border-crypto-gold/30 hover:bg-crypto-gold/10 hover:border-crypto-gold text-white">
                                  Learn More
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Become a Partner Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-2xl bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 p-8 md:p-12 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-crypto-purple/10 rounded-full filter blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-crypto-teal/10 rounded-full filter blur-[80px]"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Become a <span className="text-gradient">Partner</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our growing network of exchanges, payment providers, and blockchain platforms to expand your reach and offer more value to your customers
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
                <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-crypto-teal/50 transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-2">For Exchanges</h3>
                  <p className="text-gray-400 text-sm">Integrate with our platform to offer seamless crypto-to-fiat conversion for your users</p>
                </div>
                <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-crypto-purple/50 transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-2">For Payment Providers</h3>
                  <p className="text-gray-400 text-sm">Expand your payment options with cryptocurrency support, backed by our secure infrastructure</p>
                </div>
                <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-crypto-gold/50 transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-2">For Blockchains</h3>
                  <p className="text-gray-400 text-sm">Bring real-world utility to your blockchain through our crypto payment card solutions</p>
                </div>
              </div>
              
              <Button size="lg" className="bg-gradient-to-r from-crypto-purple to-crypto-blue hover:shadow-lg hover:shadow-crypto-purple/20 transition-all px-10 py-6">
                Contact Partnership Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Our <span className="text-gradient">Partner Network?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join our waitlist today to be among the first to access our global partner ecosystem
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

      {/* CSS for pulse animation */}
      <style>
        {`
        .pulse-animation {
          position: relative;
        }
        
        .pulse-animation::before {
          content: '';
          position: absolute;
          border: 4px solid rgba(0, 245, 212, 0.4);
          border-radius: 50%;
          top: -8px;
          left: -8px;
          right: -8px;
          bottom: -8px;
          animation: pulse 2s linear infinite;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(0.95);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.3;
          }
          100% {
            transform: scale(0.95);
            opacity: 0.7;
          }
        }
      `}
      </style>
    </div>
  );
};

export default PartnerNetwork;
