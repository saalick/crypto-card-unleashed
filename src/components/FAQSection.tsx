
import { useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const accordionRef = useRef<HTMLDivElement>(null);

  const faqs = [
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
      question: "Are there any fees involved?",
      answer: "CryptoCard has a transparent fee structure with no hidden charges. There's a small conversion fee when your crypto is exchanged for fiat currency. Premium tiers offer reduced fees and additional benefits."
    },
    {
      id: "faq-4",
      question: "Is CryptoCard available worldwide?",
      answer: "We're launching CryptoCard in phases. Initially, we'll be available in select countries in North America and Europe, with plans to expand globally as regulatory frameworks permit."
    },
    {
      id: "faq-5",
      question: "How secure is CryptoCard?",
      answer: "Security is our top priority. We use industry-standard encryption, multi-factor authentication, and cold storage solutions to protect your assets. Additionally, our cards include standard fraud protection features."
    },
  ];

  const handleAccordionValueChange = (value: string) => {
    if (!accordionRef.current) return;
    
    const items = accordionRef.current.querySelectorAll('[data-state]');
    items.forEach(item => {
      const state = item.getAttribute('data-state');
      const itemValue = item.getAttribute('data-value');
      
      if (state === 'open' && itemValue !== value) {
        // Add special animation class to closing items
        item.classList.add('closing');
        setTimeout(() => item.classList.remove('closing'), 300);
      }
      
      if (itemValue === value) {
        // Add special animation class to opening item
        item.classList.add('opening');
        setTimeout(() => item.classList.remove('opening'), 300);
      }
    });
  };

  return (
    <section id="faq" className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-crypto-purple/10 rounded-full filter blur-[80px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-crypto-blue/10 rounded-full filter blur-[80px]"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions about CryptoCard? We've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-fade-up">
          <div ref={accordionRef}>
            <Accordion 
              type="single" 
              collapsible 
              className="space-y-6"
              onValueChange={handleAccordionValueChange}
            >
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={faq.id} 
                  value={faq.id}
                  className={`border border-gray-800 rounded-lg bg-secondary px-6 overflow-hidden animate-fade-up animate-stagger-${(index % 3) + 1} card-3d-effect`}
                  data-value={faq.id}
                >
                  <AccordionTrigger className="text-left text-lg font-medium py-5 group">
                    <span className="group-hover:text-gradient transition-all duration-300">{faq.question}</span>
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-data-[state=open]:bg-gradient-to-r from-crypto-purple to-crypto-blue transition-all duration-300">
                      <svg 
                        className="w-4 h-4 text-white transition-transform duration-300 group-data-[state=open]:rotate-180" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-5 card-3d-content">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-16 text-center">
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
