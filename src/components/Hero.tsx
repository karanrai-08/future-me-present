
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Download } from "lucide-react";

export const Hero = () => {
  const handleDownloadResume = () => {
    const resumeUrl = "/Karan_Rai_Resume.pdf";
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = "Karan_Rai_Resume.pdf";
    link.click();
  };

  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-[#F2FCE2] to-[#D3E4FD] relative overflow-hidden">
      <div className="container px-4 py-16 mx-auto text-center relative z-10">
        <div className="flex flex-col items-center gap-6 mb-8 animate-fade-in">
          <Avatar className="w-36 h-36 border-4 border-[#46A094] shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl">
            <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" alt="Karan Rai" />
            <AvatarFallback className="bg-[#FEC6A1] text-[#2C5F4F]">KR</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-6xl font-bold text-[#2C5F4F] animate-fade-in">
            Hi, I'm <span className="text-[#46A094] hover:text-[#6BC4B3] transition-colors">Karan Rai</span>
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-[#2C5F4F]/80 mb-8 max-w-2xl mx-auto animate-fade-in delay-200">
          A passionate developer crafting beautiful and functional web experiences
        </p>
        <div className="flex gap-4 justify-center flex-wrap animate-fade-in delay-300">
          <Button
            className="bg-[#46A094] hover:bg-[#6BC4B3] text-white px-8 transition-all duration-300 hover:shadow-lg"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Work
          </Button>
          <Button
            variant="outline"
            className="border-[#46A094] text-[#46A094] hover:bg-[#46A094] hover:text-white px-8 transition-all duration-300 hover:shadow-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </Button>
          <Button
            variant="outline"
            className="border-[#46A094] text-[#46A094] hover:bg-[#46A094] hover:text-white px-8 transition-all duration-300 hover:shadow-lg"
            onClick={handleDownloadResume}
          >
            <Download className="mr-2" />
            Download Resume
          </Button>
        </div>
      </div>
      {/* Subtle background effect */}
      <div className="absolute inset-0 bg-[#46A094] opacity-5 -z-10 animate-pulse"></div>
    </section>
  );
};
