import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Camera, ExternalLink } from "lucide-react";
const Projects = () => {
  const projects = [{
    icon: Shield,
    title: "Ransom Wall: ML-Based Ransomware Defense",
    description: "Built ML models for ransomware detection before encryption using Java and Python. Implemented dataset preprocessing, model training, testing, and validation. Created a layered defense system for cryptographic ransomware attacks.",
    technologies: ["Java", "Python", "Machine Learning", "Security"],
    highlights: ["Real-time threat detection", "Pre-encryption prevention", "Comprehensive testing framework"],
    gradient: "from-red-500/10 to-orange-500/10"
  }, {
    icon: Camera,
    title: "War Field Spying Robot with Night Vision",
    description: "Developed a surveillance robot with night vision camera for remote monitoring in challenging environments. Integrated Arduino for real-time control and designed complete system architecture with hardware-software interaction.",
    technologies: ["Python", "SQL", "HTML", "CSS", "JavaScript", "NumPy", "Pandas"],
    highlights: ["Night vision capability", "Remote monitoring system", "Real-time video streaming"],
    gradient: "from-blue-500/10 to-cyan-500/10"
  }];
  return <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative solutions combining software engineering with emerging technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => <Card key={index} className={`p-8 bg-gradient-to-br ${project.gradient} border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 group animate-fade-in`} style={{
          animationDelay: `${index * 0.2}s`
        }}>
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-2 text-muted-foreground uppercase">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => <li key={i} className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                        <span className="text-foreground/70">{highlight}</span>
                      </li>)}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.technologies.map((tech, i) => <Badge key={i} variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 transition-colors">
                      {tech}
                    </Badge>)}
                </div>
              </div>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Projects;