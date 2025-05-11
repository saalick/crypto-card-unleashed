
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import WhitelistSection from "@/components/WhitelistSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    document.title = "DegenPay - Spend Crypto Like Fiat";
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Offset for fixed header
              behavior: 'smooth'
            });
          }
        }
      });
    });

    // Scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    const animateElements = document.querySelectorAll(
      '.animate-fade-up, .animate-fade-in, .animate-scale'
    );
    
    animateElements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    // Create floating particles
    createParticles();

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          e.preventDefault();
        });
      });
      
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const createParticles = () => {
    const container = document.createElement('div');
    container.className = 'particles-container';
    document.body.appendChild(container);
    
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random properties
      const size = Math.random() * 8 + 2;
      const colors = ['rgba(139, 92, 246, 0.3)', 'rgba(59, 130, 246, 0.3)', 'rgba(16, 185, 129, 0.3)'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Position
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.setProperty('--particle-color', color);
      
      // Animation
      particle.style.animation = `float ${Math.random() * 10 + 5}s ease-in-out infinite`;
      particle.style.opacity = '0';
      
      // Add to container
      container.appendChild(particle);
      
      // Start animation after a delay
      setTimeout(() => {
        particle.style.opacity = '1';
        particle.style.transform = `translate(${(Math.random() - 0.5) * 20}px, ${(Math.random() - 0.5) * 20}px)`;
      }, Math.random() * 1500);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <WhitelistSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
