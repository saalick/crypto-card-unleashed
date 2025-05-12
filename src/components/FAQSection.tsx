
import { useState } from "react";
import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent 
} from "@/components/ui/tabs";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState("general");

  const generalFaqs = [
    {
      id: "faq-1",
      question: "How does CryptoCard work?",
      answer: "CryptoCard allows you to spend your cryptocurrency like traditional money. When you make a purchase, our system converts your crypto to the local currency in real-time at the best available exchange rate, making the transaction seamless for merchants."
    },
    {
      id: "faq-2",
      question: "Which cryptocurrencies are supported?",
      answer: "We currently support Bitcoin (BTC), Ethereum (ETH), Solana (SOL), and several other major cryptocurrencies. We're constantly adding support for additional tokens based on user demand and market conditions."
    },
    {
      id: "faq-3",
      question: "Is CryptoCard available worldwide?",
      answer: "We're launching CryptoCard in phases. Initially, we'll be available in select countries in North America and Europe, with plans to expand globally as regulatory frameworks permit."
    },
  ];

  const securityFaqs = [
    {
      id: "sec-1",
      question: "How secure is CryptoCard?",
      answer: "Security is our top priority. We use industry-standard encryption, multi-factor authentication, and cold storage solutions to protect your assets. Additionally, our cards include standard fraud protection features."
    },
    {
      id: "sec-2",
      question: "What happens if I lose my card?",
      answer: "If your card is lost or stolen, you can instantly freeze it through our mobile app. Our 24/7 support team can help you get a replacement card shipped to you quickly while keeping your funds secure."
    },
  ];

  const pricingFaqs = [
    {
      id: "price-1",
      question: "Are there any fees involved?",
      answer: "CryptoCard has a transparent fee structure with no hidden charges. There's a small conversion fee when your crypto is exchanged for fiat currency. Premium tiers offer reduced fees and additional benefits."
    },
    {
      id: "price-2",
      question: "Do you offer any rewards or cashback?",
      answer: "Yes! Our premium tiers offer up to 5% cashback in cryptocurrency on eligible purchases. These rewards are deposited directly to your crypto wallet and can be spent immediately or held as an investment."
    },
  ];

  const tabVariants = {
    inactive: { opacity: 0.7, y: 0 },
    active: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-crypto-purple/10 rounded-full filter blur-[80px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-crypto-blue/10 rounded-full filter blur-[80px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions about CryptoCard? We've got answers.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-secondary/50 backdrop-blur-lg rounded-xl p-6 md:p-8 border border-white/10 shadow-xl relative z-10">
          <Tabs defaultValue="general" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-background/50 backdrop-blur-sm p-1 rounded-full">
                <TabsTrigger 
                  value="general" 
                  className="rounded-full px-5 py-2 data-[state=active]:bg-crypto-purple data-[state=active]:text-white transition-all duration-300 cursor-pointer"
                >
                  <motion.div
                    variants={tabVariants}
                    animate={activeTab === "general" ? "active" : "inactive"}
                  >
                    General
                  </motion.div>
                </TabsTrigger>
                <TabsTrigger 
                  value="security" 
                  className="rounded-full px-5 py-2 data-[state=active]:bg-crypto-purple data-[state=active]:text-white transition-all duration-300 cursor-pointer"
                >
                  <motion.div
                    variants={tabVariants}
                    animate={activeTab === "security" ? "active" : "inactive"}
                  >
                    Security
                  </motion.div>
                </TabsTrigger>
                <TabsTrigger 
                  value="pricing" 
                  className="rounded-full px-5 py-2 data-[state=active]:bg-crypto-purple data-[state=active]:text-white transition-all duration-300 cursor-pointer"
                >
                  <motion.div
                    variants={tabVariants}
                    animate={activeTab === "pricing" ? "active" : "inactive"}
                  >
                    Pricing
                  </motion.div>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="general" className="mt-0 focus-visible:outline-none">
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                <Accordion type="single" collapsible className="space-y-4">
                  {generalFaqs.map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      variants={itemVariants}
                      custom={index}
                    >
                      <AccordionItem 
                        value={faq.id}
                        className="border border-white/10 bg-background/40 rounded-lg overflow-hidden backdrop-blur-sm"
                      >
                        <AccordionTrigger className="px-6 py-4 hover:no-underline group cursor-pointer">
                          <div className="flex items-center">
                            <span className="text-left font-medium text-lg group-hover:text-crypto-purple transition-colors duration-300">{faq.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-gray-300">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </motion.div>
            </TabsContent>

            <TabsContent value="security" className="mt-0 focus-visible:outline-none">
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                <Accordion type="single" collapsible className="space-y-4">
                  {securityFaqs.map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      variants={itemVariants}
                      custom={index}
                    >
                      <AccordionItem 
                        value={faq.id}
                        className="border border-white/10 bg-background/40 rounded-lg overflow-hidden backdrop-blur-sm"
                      >
                        <AccordionTrigger className="px-6 py-4 hover:no-underline group cursor-pointer">
                          <div className="flex items-center">
                            <span className="text-left font-medium text-lg group-hover:text-crypto-purple transition-colors duration-300">{faq.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-gray-300">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </motion.div>
            </TabsContent>

            <TabsContent value="pricing" className="mt-0 focus-visible:outline-none">
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                <Accordion type="single" collapsible className="space-y-4">
                  {pricingFaqs.map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      variants={itemVariants}
                      custom={index}
                    >
                      <AccordionItem 
                        value={faq.id}
                        className="border border-white/10 bg-background/40 rounded-lg overflow-hidden backdrop-blur-sm"
                      >
                        <AccordionTrigger className="px-6 py-4 hover:no-underline group cursor-pointer">
                          <div className="flex items-center">
                            <span className="text-left font-medium text-lg group-hover:text-crypto-purple transition-colors duration-300">{faq.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-gray-300">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </motion.div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-4">
              Still have questions?
            </p>
            <a href="#" className="inline-flex items-center text-crypto-purple hover:text-crypto-light-purple font-medium group">
              <span>Contact our support team</span>
              <svg 
                className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
