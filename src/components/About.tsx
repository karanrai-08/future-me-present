
export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#F2FCE2] to-[#D3E4FD]">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F4F] mb-4">
            About Me
          </h2>
          <div className="bg-gradient-to-br from-[#F2FCE2] to-[#E5DEFF] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <p className="text-lg text-[#2C5F4F]/80 mb-6">
              I'm a passionate web developer with a keen eye for design and a love for creating 
              seamless user experiences. With expertise in modern web technologies, I turn complex 
              problems into elegant solutions.
            </p>
            <p className="text-lg text-[#2C5F4F]/80">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
