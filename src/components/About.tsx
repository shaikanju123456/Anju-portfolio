import { GraduationCap, Award, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.Tech in CSE (AIML) with 7.4 CGPA",
    },
    {
      icon: Target,
      title: "Focus",
      description: "Full Stack Development & AI/ML",
    },
    {
      icon: Award,
      title: "Experience",
      description: "Multiple internships & certifications",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate developer focused on creating innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-to-br from-card via-card to-primary/5 border-border">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-foreground/80 leading-relaxed">
              I'm Shaik Mohammad Anju Farhana, a Computer Science and Engineering graduate 
              specializing in Artificial Intelligence and Machine Learning from Malineni Perumallu 
              Educational Society's Group of Institution (2021-2025, CGPA: 7.4/10).
            </p>
            <p className="text-foreground/80 leading-relaxed">
              My passion lies in developing scalable web applications and impactful digital products, 
              particularly in the healthcare domain. With strong foundations in Java, JavaScript, 
              TypeScript, React, and Spring Boot, I combine technical expertise with creative 
              problem-solving to build innovative solutions.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              I've worked on exciting projects ranging from ML-based ransomware detection systems 
              to surveillance robots with night vision capabilities. Through internships and 
              certifications from Skill Dzire, Tap Academy, and Accenture, I've continuously 
              expanded my skill set in both development and emerging technologies.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
