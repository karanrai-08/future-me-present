
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Download } from "lucide-react";

export const Hero = () => {
  const handleDownloadResume = () => {
    // Replace this URL with the actual URL of your resume
    const resumeUrl = "/Karan_Rai_Resume.pdf";
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = "Karan_Rai_Resume.pdf";
    link.click();
  };

  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 py-16 mx-auto text-center">
        <div className="flex flex-col items-center gap-6 mb-8">
          <Avatar className="w-32 h-32 border-4 border-[#1a365d]">
            <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" alt="Karan Rai" />
            <AvatarFallback>KR</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 animate-fade-in">
            Hi, I'm <span className="text-[#1a365d]">Karan Rai</span>
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A passionate developer crafting beautiful and functional web experiences
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
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
          <Button
            variant="outline"
            className="border-[#1a365d] text-[#1a365d] hover:bg-[#1a365d] hover:text-white px-8"
            onClick={handleDownloadResume}
          >
            <Download className="mr-2" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};
