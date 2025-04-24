
import { Code, Database, Briefcase, Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Code className="w-6 h-6" />,
      items: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
        { name: "Angular.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" }
      ],
      bgColor: "bg-blue-50 hover:bg-blue-100"
    },
    {
      category: "Backend",
      icon: <Database className="w-6 h-6" />,
      items: [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
      ],
      bgColor: "bg-green-50 hover:bg-green-100"
    },
    {
      category: "Tools",
      icon: <Briefcase className="w-6 h-6" />,
      items: [
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "PostMan", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" }
      ],
      bgColor: "bg-purple-50 hover:bg-purple-100"
    },
    {
      category: "Soft Skills",
      icon: <Award className="w-6 h-6" />,
      items: [
        { name: "Problem Solving", logo: "/skill-icons/problem-solving.svg" },
        { name: "Communication", logo: "/skill-icons/communication.svg" },
        { name: "Team Leadership", logo: "/skill-icons/leadership.svg" },
        { name: "Agile", logo: "/skill-icons/agile.svg" }
      ],
      bgColor: "bg-orange-50 hover:bg-orange-100"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A diverse set of skills and technologies I use to bring ideas to life
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden transition-all duration-300 hover:shadow-xl animate-fade-in group ${skill.bgColor}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-gray-700 group-hover:text-blue-600 transition-colors">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {skill.category}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {skill.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="flex flex-col items-center gap-2 p-2 rounded-lg transition-all duration-300 hover:scale-110 group-hover:bg-white/50"
                    >
                      <img 
                        src={item.logo} 
                        alt={item.name}
                        className="w-8 h-8 object-contain"
                      />
                      <span className="text-sm text-gray-600 text-center">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
