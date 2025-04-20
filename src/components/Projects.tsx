
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A full-stack web application built with modern technologies",
      tech: "React • TypeScript • Node.js",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      title: "Project Two",
      description: "Mobile-first e-commerce platform with seamless UX",
      tech: "Next.js • Tailwind • PostgreSQL",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Project Three",
      description: "Real-time collaboration tool for remote teams",
      tech: "React • Firebase • Material UI",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#D3E4FD] to-[#FFDEE2]">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F4F] mb-4">
            Featured Projects
          </h2>
          <p className="text-[#2C5F4F]/70 max-w-2xl mx-auto">
            A showcase of my recent work and technical achievements
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in hover:scale-105 bg-gradient-to-br from-[#F2FCE2] to-[#E5DEFF] border-none"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-[#2C5F4F]">{project.title}</CardTitle>
                <CardDescription className="text-[#2C5F4F]/70">{project.tech}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#2C5F4F]/80">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
