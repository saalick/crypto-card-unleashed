
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0 text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Crypto</span> Spends Like <span className="text-gradient">Cash</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              The next-gen card that lets you spend your cryptocurrency anywhere, anytime. Just like traditional money, but better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-crypto-purple hover:bg-crypto-light-purple text-lg py-6 px-8">
                <a href="#whitelist">Join Whitelist</a>
              </Button>
              <Button variant="outline" className="border-crypto-purple text-white hover:bg-crypto-purple/20 text-lg py-6 px-8">
                Learn More
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-600"></div>
                ))}
              </div>
              <p className="ml-4 text-gray-300">
                <span className="font-semibold text-white">2,500+</span> already on the waitlist
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="relative">
              <div className="w-72 h-44 md:w-96 md:h-56 mx-auto rounded-2xl bg-gradient-to-r from-crypto-purple to-crypto-blue p-[2px] animate-float relative overflow-hidden">
                <div className="absolute inset-0 bg-shimmer animate-shimmer"></div>
                <div className="w-full h-full rounded-2xl bg-black/80 flex flex-col justify-between p-6 relative z-10">
                  <div className="flex justify-between">
                    <div className="text-xs text-gray-400">CryptoCard</div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-crypto-orange to-crypto-purple animate-pulse-soft"></div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="text-lg font-mono tracking-widest">•••• •••• •••• 3456</div>
                    <div className="flex justify-between">
                      <div>
                        <div className="text-xs text-gray-400">VALID THRU</div>
                        <div className="text-sm">09/28</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400">NAME</div>
                        <div className="text-sm">CRYPTO USER</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-crypto-purple/30 rounded-full filter blur-3xl animate-pulse-soft"></div>
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-crypto-blue/30 rounded-full filter blur-3xl animate-pulse-soft"></div>
            </div>
            <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-crypto-green rounded-full blur-xl animate-pulse-soft"></div>
            <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-crypto-orange rounded-full blur-xl animate-pulse-soft"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
