
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#F2FCE2] to-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F4F] mb-4">
              Get In Touch
            </h2>
            <p className="text-[#2C5F4F]/70 max-w-2xl mx-auto">
              Have a question or want to work together? Drop me a message!
            </p>
          </div>
          <form className="space-y-6 animate-fade-in bg-gradient-to-br from-[#F2FCE2] to-[#E5DEFF] p-8 rounded-lg shadow-lg">
            <div>
              <Input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-white/50 border-[#46A094]/20 focus:border-[#46A094] transition-colors" 
              />
            </div>
            <div>
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-white/50 border-[#46A094]/20 focus:border-[#46A094] transition-colors" 
              />
            </div>
            <div>
              <Textarea 
                placeholder="Your Message" 
                className="w-full min-h-[150px] bg-white/50 border-[#46A094]/20 focus:border-[#46A094] transition-colors" 
              />
            </div>
            <div className="text-center">
              <Button className="bg-[#46A094] hover:bg-[#2C5F4F] text-white px-8 transition-all duration-300 hover:shadow-lg">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
