
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Get In Touch
          </h2>
          <form className="space-y-6">
            <div>
              <Input type="text" placeholder="Your Name" className="w-full" />
            </div>
            <div>
              <Input type="email" placeholder="Your Email" className="w-full" />
            </div>
            <div>
              <Textarea placeholder="Your Message" className="w-full min-h-[150px]" />
            </div>
            <div className="text-center">
              <Button className="bg-[#1a365d] hover:bg-[#2a466d] text-white px-8">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
