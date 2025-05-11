
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type FormValues = z.infer<typeof formSchema>;

const WhitelistSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Submitted email:", data.email);
      
      toast({
        title: "Success!",
        description: "You've been added to our whitelist. We'll notify you soon!",
      });
      
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
    <section id="whitelist" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-gray-900 to-black border-gray-800 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-crypto-purple/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-crypto-blue/20 rounded-full filter blur-3xl"></div>
            
            <div className="relative z-10 text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-crypto-purple/20 mb-6">
                <Mail className="h-8 w-8 text-crypto-purple" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Join Our Whitelist</h2>
              <p className="text-lg text-gray-300 max-w-xl mx-auto">
                Be among the first to experience the future of crypto payments. Sign up for early access and updates.
              </p>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-md mx-auto">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex items-center">
                          <Input 
                            placeholder="Enter your email" 
                            className="bg-gray-800 border-gray-700 h-12 focus:border-crypto-purple text-white" 
                            {...field} 
                          />
                          <Button 
                            type="submit" 
                            className="ml-2 bg-crypto-purple hover:bg-crypto-light-purple transition-colors h-12" 
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Submitting..." : "Join Now"}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
            
            <div className="mt-10 text-center text-sm text-gray-400">
              By signing up, you agree to our Terms of Service and Privacy Policy.
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhitelistSection;
