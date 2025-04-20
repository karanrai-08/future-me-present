
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Award } from "lucide-react";

export const Certificates = () => {
  const certificates = [
    {
      title: "Web Development Certification",
      issuer: "Example Academy",
      date: "2024",
    },
    {
      title: "React Development",
      issuer: "Example Institute",
      date: "2023",
    },
    {
      title: "TypeScript Mastery",
      issuer: "Example School",
      date: "2023",
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-[#FFDEE2] to-[#F2FCE2]">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F4F] mb-4">
            Certifications
          </h2>
          <p className="text-[#2C5F4F]/70 max-w-2xl mx-auto">
            Professional certifications and achievements in technology
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 animate-fade-in hover:scale-105 bg-gradient-to-br from-[#D3E4FD] to-[#FDE1D3] border-none"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <Award className="w-8 h-8 text-[#46A094]" />
                <div>
                  <CardTitle className="text-xl text-[#2C5F4F]">{cert.title}</CardTitle>
                  <p className="text-sm text-[#2C5F4F]/70">{cert.issuer}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#2C5F4F]/80">Issued: {cert.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
