
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
    <section id="certificates" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <Award className="w-8 h-8 text-[#1a365d]" />
                <div>
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Issued: {cert.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
