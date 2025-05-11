
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Card } from "@/components/ui/card";
import { Mail, ArrowRight } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type FormValues = z.infer<typeof formSchema>;

const WhitelistSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Submitted email:", data.email);
      
      toast({
        title: "Success!",
        description: "You've been added to our whitelist. We'll notify you soon!",
      });
      
      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong.",
        description: "There was an error adding you to the whitelist. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="whitelist" className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-crypto-purple/15 rounded-full filter blur-[80px]"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-crypto-blue/15 rounded-full filter blur-[80px]"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-gray-900 to-black border border-gray-800 relative overflow-hidden card-3d-effect">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-crypto-purple/20 rounded-full filter blur-[80px]"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-crypto-blue/20 rounded-full filter blur-[80px]"></div>
            
            <div className="relative z-10 text-center mb-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-crypto-purple to-crypto-blue p-0.5 mb-6">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <Mail className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">Join Our Whitelist</h2>
              <p className="text-lg text-gray-300 max-w-xl mx-auto">
                Be among the first to experience the future of crypto payments. Sign up for early access and updates.
              </p>
            </div>
            
            <div className="card-3d-content">
              {!isSuccess ? (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-lg mx-auto">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="flex items-center">
                              <div className="relative flex-1">
                                <Input 
                                  placeholder="Enter your email" 
                                  className="bg-gray-800 border-gray-700 h-14 pr-12 focus:border-crypto-purple text-white text-lg" 
                                  {...field} 
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                  <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                              </div>
                              <Button 
                                type="submit" 
                                className="ml-4 bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-all h-14 px-8 shadow-lg shadow-crypto-purple/20" 
                                disabled={isSubmitting}
                              >
                                {isSubmitting ? (
                                  <div className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing
                                  </div>
                                ) : (
                                  <div className="flex items-center">
                                    Join Now
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                  </div>
                                )}
                              </Button>
                            </div>
                          </FormControl>
                          <FormMessage className="mt-2 text-sm" />
                        </FormItem>
                      )}
                    />
                  </form>
                </Form>
              ) : (
                <div className="bg-gray-800/50 rounded-xl p-6 max-w-lg mx-auto border border-gray-700 animate-fade-in animate-visible">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-crypto-green/20 text-crypto-green">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">You're on the list!</h3>
                  <p className="text-gray-300">Thank you for joining our whitelist. We'll keep you updated with the latest news and launch information.</p>
                </div>
              )}
            </div>
            
            <div className="mt-10 text-center text-sm text-gray-400 animate-fade-up">
              By signing up, you agree to our Terms of Service and Privacy Policy.
              <div className="mt-4 flex justify-center space-x-4">
                <span className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-crypto-green mr-2"></div>
                  <span>Bank-Grade Security</span>
                </span>
                <span className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-crypto-blue mr-2"></div>
                  <span>No Spam</span>
                </span>
                <span className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-crypto-purple mr-2"></div>
                  <span>Early Access</span>
                </span>
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4 opacity-50">
              <div className="flex items-center space-x-1 text-xs">
                <span className="w-2 h-2 rounded-full bg-crypto-green"></span>
                <span className="animate-pulse">2,541 users joined</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhitelistSection;
