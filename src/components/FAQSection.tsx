
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

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

  const handleAccordionChange = (value: string) => {
    setExpandedItems((prev) => 
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions about CryptoCard? We've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="border border-gray-800 rounded-lg bg-secondary px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-lg font-medium py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-4">
              Still have questions?
            </p>
            <a href="#" className="text-crypto-purple hover:text-crypto-light-purple font-medium">
              Contact our support team →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
