
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Certificates } from "@/components/Certificates";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
