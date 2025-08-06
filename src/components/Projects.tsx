import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const categories = ["All", "Webflow", "Wordpress", "Wix", "Frontend"];

const projects = [
  {
    title: "QS-Labs",
    description: "Complete redesign of a shopping app focusing on user experience and conversion optimization.",
    tools: ["Figma", "Principle", "User Research"],
    category: "Webflow",
    color: "from-pink-500/20 to-purple-500/20",
    link: "https://www.qs-labs.com/"
  },
  {
    title: "SaaS Dashboard Interface",
    description: "Clean and intuitive dashboard design for a project management platform with complex data visualization.",
    tools: ["Figma", "Webflow", "Prototyping"],
    category: "Webflow",
    color: "from-blue-500/20 to-cyan-500/20",
    link: "https://www.values.network/"
  },
  {
    title: "Banking App Redesign",
    description: "Modernizing legacy banking interface with focus on accessibility and user trust.",
    tools: ["Figma", "Adobe XD", "User Testing"],
    category: "Webflow",
    color: "from-green-500/20 to-emerald-500/20",
    link: "https://www.weachieveaba.com/"
  },
  {
    title: "Design System Creation",
    description: "Comprehensive design system for a fintech startup including components library and guidelines.",
    tools: ["Figma", "Storybook", "Documentation"],
    category: "Webflow",
    color: "from-orange-500/20 to-red-500/20",
    link: "https://dentalwellnesslondon.co.uk"
  },
  {
    title: "Femselect",
    description: "Comprehensive design system for a fintech startup including components library and guidelines.",
    tools: ["Figma", "Storybook", "Documentation"],
    category: "Wordpress",
    color: "from-orange-500/20 to-red-500/20",
    link: "https://www.femselect.com/"
  },
  {
    title: "Lightico",
    description: "Comprehensive design system for a fintech startup including components library and guidelines.",
    tools: ["Figma", "Storybook", "Documentation"],
    category: "Wordpress",
    color: "from-orange-500/20 to-red-500/20",
    link: "https://www.lightico.com/"
  },
  {
    title: "JK Strategy",
    description: "Comprehensive design system for a fintech startup including components library and guidelines.",
    tools: ["Figma", "Storybook", "Documentation"],
    category: "Wordpress",
    color: "from-orange-500/20 to-red-500/20",
    link: "https://jkstrategy.eu/nemokama-konsultacija/"
  },
  {
    title: "Yeshezra",
    description: "Comprehensive design system for a fintech startup including components library and guidelines.",
    tools: ["Figma", "Storybook", "Documentation"],
    category: "Wix",
    color: "from-orange-500/20 to-red-500/20",
    link: "https://www.yeshezra.org/"
  },
  {
    title: "Blinkz",
    description: "Comprehensive design system for a fintech startup including components library and guidelines.",
    tools: ["Figma", "Storybook", "Documentation"],
    category: "Frontend",
    color: "from-orange-500/20 to-red-500/20",
    link: "https://ecom-pricing.vercel.app/"
  },
  {
    title: "Blinkz",
    description: "Comprehensive design system for a fintech startup including components library and guidelines.",
    tools: ["Figma", "Storybook", "Documentation"],
    category: "Frontend",
    color: "from-orange-500/20 to-red-500/20",
    link: "chatty-rho-five.vercel.app"
  },
  {
    title: "Blinkz",
    description: "Comprehensive design system for a fintech startup including components library and guidelines.",
    tools: ["Figma", "Storybook", "Documentation"],
    category: "Frontend",
    color: "from-orange-500/20 to-red-500/20",
    link: "dashboard-xi-flame.vercel.app"
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of recent work showcasing my approach to solving complex design challenges
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300
                ${activeCategory === category
                  ? "bg-primary text-white border-primary"
                  : "bg-muted text-muted-foreground border-border hover:bg-primary/10 hover:text-primary"}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-0 bg-gradient-card backdrop-blur-xl hover:shadow-premium transition-all duration-500 hover:-translate-y-2 cursor-pointer`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

              <CardHeader className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
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
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="glass"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </a>
              </CardContent>

              <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;