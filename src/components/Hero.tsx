
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 py-16 mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
          Hi, I'm <span className="text-[#1a365d]">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A passionate developer crafting beautiful and functional web experiences
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            className="bg-[#1a365d] hover:bg-[#2a466d] text-white px-8"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Work
          </Button>
          <Button
            variant="outline"
            className="border-[#1a365d] text-[#1a365d] hover:bg-[#1a365d] hover:text-white px-8"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};
