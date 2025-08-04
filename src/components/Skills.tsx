import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    category: "Design Tools",
    items: ["Figma",  "Photoshop", "Illustrator", "Framer",]
  },
  {
    category: "Development",
    items: ["Webflow", "HTML/CSS","JavaScript", "React", "Tailwind CSS","Wordpress", "Wix"]
  },
  {
    category: "UX Methods",
    items: ["User Research", "Wireframing", "Prototyping", "User Testing", "Information Architecture", "Design Thinking"]
  },
  {
    category: "Soft Skills",
    items: ["Problem Solving", "Collaboration", "Communication", "Critical Thinking", "Project Management", "Mentoring"]
  }
];

const Skills = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit for creating exceptional digital experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillCategory, index) => (
            <Card key={index} className="group border-0 bg-gradient-card backdrop-blur-xl hover:shadow-elegant hover:scale-105 transition-all duration-500 cursor-pointer">
              <CardContent className="p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-4 bg-gradient-primary bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">{skillCategory.category}</h3>
                  <ul className="space-y-3">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;