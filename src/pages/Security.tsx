
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, CircleAlert, FileCheck, Database, ScanFace } from "lucide-react";
import { Button } from "@/components/ui/button";

const Security = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  useEffect(() => {
    document.title = "Security Features | DGNPay";

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

  const [activeTrigger, setActiveTrigger] = useState("encryption");

  const securityFeatures = [
    {
      id: "encryption",
      title: "End-to-End Encryption",
      icon: Shield,
      description: "All transactions are protected with military-grade encryption, ensuring your financial data remains completely secure.",
      color: "from-blue-500 to-teal-400"
    },
    {
      id: "biometric",
      title: "Biometric Authentication",
      icon: ScanFace,
      description: "Access your account through facial recognition, fingerprint scanning, or voice verification for maximum security.",
      color: "from-purple-500 to-blue-400"
    },
    {
      id: "fraud",
      title: "Fraud Detection",
      icon: CircleAlert,
      description: "Our AI-powered system constantly monitors transactions for suspicious activity, blocking potential threats in real-time.",
      color: "from-red-500 to-orange-400"
    },
    {
      id: "cold",
      title: "Cold Storage",
      icon: Database,
      description: "The majority of assets are stored in offline cold wallets, making them impervious to online hacking attempts.",
      color: "from-teal-500 to-green-400"
    },
    {
      id: "compliance",
      title: "Regulatory Compliance",
      icon: FileCheck,
      description: "We maintain strict adherence to international financial regulations while preserving user privacy.",
      color: "from-amber-500 to-yellow-400"
    },
    {
      id: "zero",
      title: "Zero-Knowledge Proofs",
      icon: Lock,
      description: "Conduct transactions without revealing sensitive information, thanks to cryptographic zero-knowledge technology.",
      color: "from-green-500 to-emerald-400"
    }
  ];

  return (
    <div className="min-h-screen" ref={containerRef}>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-crypto-teal via-white to-crypto-gold">
              Bulletproof Security
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your assets deserve nothing less than the industry's most robust security measures
            </p>
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Button 
                  variant="outline" 
                  className="border-crypto-teal/60 hover:border-crypto-teal hover:bg-crypto-teal/10 text-white px-8"
                >
                  <a href="#features">Security Features</a>
                </Button>
                <Button 
                  className="bg-gradient-to-r from-crypto-purple to-crypto-blue text-white hover:shadow-lg hover:shadow-crypto-purple/20 transition-all px-8"
                >
                  <a href="/#whitelist">Join Whitelist</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated Security Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg viewBox="0 0 400 400" className="absolute top-20 left-10 w-full h-full opacity-20">
              <defs>
                <filter id="gooey" height="300%" width="300%" x="-100%" y="-100%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10" result="gooey" />
                </filter>
              </defs>
              <g filter="url(#gooey)">
                {Array(8).fill(0).map((_, i) => (
                  <motion.circle 
                    key={i}
                    cx={200 + Math.random() * 100 - 50}
                    cy={200 + Math.random() * 100 - 50}
                    r={30 + Math.random() * 20}
                    fill={`rgba(${Math.random() * 100}, ${150 + Math.random() * 100}, ${200 + Math.random() * 55}, 0.${3 + Math.floor(Math.random() * 6)})`}
                    animate={{
                      cx: [
                        200 + Math.random() * 100 - 50,
                        200 + Math.random() * 100 - 50,
                        200 + Math.random() * 100 - 50
                      ],
                      cy: [
                        200 + Math.random() * 100 - 50,
                        200 + Math.random() * 100 - 50,
                        200 + Math.random() * 100 - 50
                      ]
                    }}
                    transition={{
                      duration: 20 + Math.random() * 10,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                ))}
              </g>
            </svg>
          </div>
        </div>

        {/* Floating Security Icons */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            className="absolute left-[10%] top-[30%]"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600/30 to-teal-400/30 rounded-full p-4 backdrop-blur-md">
              <Shield className="w-full h-full text-white" />
            </div>
          </motion.div>
          <motion.div 
            className="absolute right-[15%] top-[40%]"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600/30 to-blue-400/30 rounded-full p-3 backdrop-blur-md">
              <Lock className="w-full h-full text-white" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Features Section */}
      <section id="features" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fade-up">
            Multiple Layers of <span className="text-gradient">Protection</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                className="animate-fade-up"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-6 h-full backdrop-blur-sm hover:shadow-xl hover:shadow-crypto-teal/5 transition-all duration-500 relative overflow-hidden group">
                  <div className="absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-30 transition-all duration-700 -z-10"></div>
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg p-2.5 mb-5`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl">
          <div className="absolute top-20 left-10 w-64 h-64 bg-crypto-purple/10 rounded-full filter blur-[80px]"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-crypto-teal/10 rounded-full filter blur-[100px]"></div>
        </div>
      </section>

      {/* Interactive Security Showcase */}
      <section className="py-20 bg-gray-900/50 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fade-up">
            Security in <span className="text-gradient">Action</span>
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-8 gap-6">
              {/* Security Triggers */}
              <div className="md:col-span-3">
                <div className="space-y-3">
                  {securityFeatures.map((feature) => (
                    <div
                      key={feature.id}
                      className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                        activeTrigger === feature.id
                          ? 'bg-gray-800/80 border border-gray-700/50' 
                          : 'hover:bg-gray-800/40'
                      }`}
                      onClick={() => setActiveTrigger(feature.id)}
                    >
                      <div className="flex items-center">
                        <div className={`w-10 h-10 bg-gradient-to-r ${feature.color} rounded-lg p-2.5 mr-3 flex-shrink-0`}>
                          <feature.icon className="w-full h-full text-white" />
                        </div>
                        <h3 className="text-lg font-semibold">{feature.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Visualization */}
              <div className="md:col-span-5 bg-gray-800/40 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm min-h-[400px] flex items-center justify-center">
                <div className="text-center px-4">
                  <div className="mb-6">
                    {securityFeatures.find(f => f.id === activeTrigger)?.icon && (
                      <motion.div
                        key={activeTrigger}
                        className={`w-24 h-24 mx-auto bg-gradient-to-r ${securityFeatures.find(f => f.id === activeTrigger)?.color} rounded-lg p-5`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {React.createElement(securityFeatures.find(f => f.id === activeTrigger)?.icon as any, { className: "w-full h-full text-white" })}
                      </motion.div>
                    )}
                  </div>
                  <motion.div
                    key={activeTrigger + "-text"}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold mb-3">
                      {securityFeatures.find(f => f.id === activeTrigger)?.title}
                    </h3>
                    <p className="text-gray-300 max-w-md mx-auto">
                      {securityFeatures.find(f => f.id === activeTrigger)?.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Unmatched <span className="text-gradient">Security?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join the waitlist today and be among the first to experience our revolutionary secure crypto card
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
    </div>
  );
};

export default Security;
