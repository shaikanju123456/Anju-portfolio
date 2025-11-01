import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Machine Learning Internship",
      issuer: "Skill Dzire",
      year: "2024",
      description: "Completed comprehensive ML internship covering supervised and unsupervised learning, model deployment, and real-world applications.",
    },
    {
      title: "Java Programming",
      issuer: "Tap Academy",
      year: "2025",
      description: "Advanced Java programming certification covering OOP, Spring Boot, Hibernate, and enterprise application development.",
    },
    {
      title: "Developer & Technology Job Simulation",
      issuer: "Accenture Forage",
      year: "2025",
      description: "Practical job simulation program focusing on real-world development scenarios and technology consulting.",
    },
    {
      title: "TCS iON Career Edge - Young Professional",
      issuer: "TCS",
      year: "2025",
      description: "Professional development program covering industry best practices, soft skills, and career readiness.",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium">{cert.issuer}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{cert.year}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    Completed
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
