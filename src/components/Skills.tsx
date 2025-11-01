import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "JavaScript", "TypeScript", "Python (Basics)", "C"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "React", "Redux", "Express.js"],
      color: "from-cyan-500 to-teal-500",
    },
    {
      title: "Frameworks & Tools",
      skills: ["Spring Boot", "Hibernate", "Git", "GitHub", "VS Code"],
      color: "from-teal-500 to-green-500",
    },
    {
      title: "Database & Concepts",
      skills: ["MySQL", "SDLC", "REST APIs"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Soft Skills",
      skills: [
        "Team Collaboration",
        "Communication",
        "Leadership",
        "Critical Thinking",
        "Problem Solving",
        "Quick Learning",
      ],
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`h-1 w-12 rounded-full bg-gradient-to-r ${category.color}`}
                  />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="px-3 py-1 text-sm bg-primary/10 text-foreground hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
