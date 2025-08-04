import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Figma } from "lucide-react";

const projects = [
  {
    title: "E-commerce Mobile App",
    description: "Complete redesign of a shopping app focusing on user experience and conversion optimization.",
    tools: ["Figma", "Principle", "User Research"],
    category: "Mobile Design",
    color: "from-pink-500/20 to-purple-500/20"
  },
  {
    title: "SaaS Dashboard Interface",
    description: "Clean and intuitive dashboard design for a project management platform with complex data visualization.",
    tools: ["Figma", "Webflow", "Prototyping"],
    category: "Web Design",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Banking App Redesign",
    description: "Modernizing legacy banking interface with focus on accessibility and user trust.",
    tools: ["Figma", "Adobe XD", "User Testing"],
    category: "UX Research",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Design System Creation",
    description: "Comprehensive design system for a fintech startup including components library and guidelines.",
    tools: ["Figma", "Storybook", "Documentation"],
    category: "Design Systems",
    color: "from-orange-500/20 to-red-500/20"
  }
];

const Projects = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of recent work showcasing my approach to solving complex design challenges
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden border-0 bg-gradient-card backdrop-blur-xl hover:shadow-premium transition-all duration-500 hover:-translate-y-2 cursor-pointer`}
            >
              {/* Animated gradient border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              
              <CardHeader className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{project.category}</span>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-primary/10">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, toolIndex) => (
                    <span 
                      key={toolIndex}
                      className="px-3 py-1.5 text-xs font-medium bg-muted/50 text-muted-foreground rounded-full border border-border/30 backdrop-blur-sm group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-all duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <a href="#contact">
                <Button variant="glass" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                  <Figma className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  Contact Me
                </Button>
                </a>
              </CardContent>
              
              {/* Floating decoration */}
              <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;