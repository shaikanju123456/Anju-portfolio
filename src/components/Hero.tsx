import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile.jpg";
const Hero = () => {
  const socialLinks = [{
    icon: Mail,
    href: "mailto:shaikanjufarhana@gmail.com",
    label: "Email"
  }, {
    icon: Linkedin,
    href: "https://linkedin.com/in/shaik-anju-farhana-9b923b2b1",
    label: "LinkedIn"
  }, {
    icon: Github,
    href: "https://github.com/shaikanju123456",
    label: "GitHub"
  }];
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16" style={{
    background: `linear-gradient(to bottom, rgba(10, 25, 47, 0.95), rgba(17, 34, 64, 0.95)), url(${heroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed"
  }}>
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-2">
              <p className="text-primary text-lg font-medium">Hi, I'm</p>
              <h1 className="text-5xl text-foreground font-bold md:text-4xl">Shaik Anju Farhana</h1>
              <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Java Full Stack Developer
              </h2>
              <p className="text-xl text-muted-foreground">
                AI & ML
              </p>
            </div>

            <p className="text-foreground/80 text-lg max-w-xl leading-relaxed">
              Highly motivated Engineering graduate skilled in JavaScript, TypeScript, React, and Express.js. 
              Passionate about developing scalable web applications and impactful digital products, 
              especially in the healthcare domain.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300" onClick={() => document.querySelector("#contact")?.scrollIntoView({
              behavior: "smooth"
            })}>
                Get In Touch
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300" onClick={() => {
              const link = document.createElement('a');
              link.href = '/shaik_anju_farhana_cv.pdf';
              link.download = 'Shaik_Anju_Farhana_CV.pdf';
              link.click();
            }}>
                <FileDown className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              {socialLinks.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group" aria-label={social.label}>
                  <social.icon className="h-5 w-5 text-foreground/60 group-hover:text-primary transition-colors" />
                </a>)}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="hidden md:flex justify-center items-center animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl absolute -z-10 animate-glow" />
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
                <img src={profileImg} alt="Shaik Mohammad Anju Farhana" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>;
};
export default Hero;