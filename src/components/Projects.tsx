import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const categories = ["All", "Webflow", "Wordpress", "Wix", "Frontend"];

const projects = [
  {
    title: "QS-Labs",
    description: "Quantum Source is on a clear path to the most powerful, cost-effective, practical photonic quantum computer.",
    
    category: "Webflow",
    color: "from-pink-500/20 to-purple-500/20",
    link: "https://www.qs-labs.com/"
  },
  {
    title: "Values Network - Collaborative social network",
    description: "A social feed built for opportunity and inspiration — not ads or negativity. Join Missions, earn rewards, and reclaim your digital freedom.",
   
    category: "Webflow",
    color: "from-blue-500/20 to-cyan-500/20",
    link: "https://www.values.network/"
  },
  {
    title: "We Achieve ABA",
    description: "We Achieve ABA is a dedicated therapy center committed to delivering specialized ABA therapy for children on the autism spectrum.",
    
    category: "Webflow",
    color: "from-green-500/20 to-emerald-500/20",
    link: "https://www.weachieveaba.com/"
  },
  {
    title: "Dental Wellness",
    description: "At Dental & Wellness London, we offer advanced dental, aesthetic, and holistic care to support your health and confidence.",
    
    category: "Webflow",
    color: "from-orange-500/20 to-red-500/20",
    link: "https://dentalwellnesslondon.co.uk"
  },
  {
    title: "Femselect",
    description: " Femselect EnPlace, a minimally invasive approach to Pelvic Organ Prolapse.",
    
    category: "Wordpress",
    color: "from-orange-500/20 to-red-500/20",
    link: "https://www.femselect.com/"
  },
  {
    title: "Lightico",
    description: "Lightico streamlines processes with swipes and selfies, helping businesses and customers move forward faster.",
    
    category: "Wordpress",
    color: "from-orange-500/20 to-red-500/20",
    link: "https://www.lightico.com/"
  },
  {
    title: "JK Strategy",
    description: "JK Strategy delivers integrated legal and investigative services, blending fact-finding with strategic expertise to drive real business results.",
    
    category: "Wordpress",
    color: "from-orange-500/20 to-red-500/20",
    link: "https://jkstrategy.eu/nemokama-konsultacija/"
  },
  {
    title: "Yeshezra",
    description: "Yesh Ezra is a non-profit aiding Israel’s most vulnerable families with compassion, dignity, and lasting support.",
    
    category: "Wix",
    color: "from-orange-500/20 to-red-500/20",
    link: "https://www.yeshezra.org/"
  },
  {
    title: "Blinkz",
    description: "A powerful platform designed to help growing Indian businesses streamline orders, cut costs, and process secure payments at scale.",
    
    category: "Frontend",
    color: "from-orange-500/20 to-red-500/20",
    link: "https://ecom-pricing.vercel.app/"
  },
  {
    title: "BitPulse",
    description: "BitPulse is your all-in-one crypto platform for trading, portfolio management, and blockchain development—empowering secure, scalable, and future-ready digital experiences.",
    
    category: "Frontend",
    color: "from-orange-500/20 to-red-500/20",
    link: "https://bitpulse-silk.vercel.app/"
  },
  {
    title: "Chatty",
    description: "Chatty is a fast, secure messaging app that lets you connect instantly with friends using real-time chat and easy username search.",
    
    category: "Frontend",
    color: "from-orange-500/20 to-red-500/20",
    link: "https://chatty-rho-five.vercel.app/"
  },
  {
    title: "SmartSell",
    description: "SmartSell is an all-in-one dashboard to track sales, users, product performance, and channel analytics—designed to help businesses grow with data-driven insights",
    
    category: "Frontend",
    color: "from-orange-500/20 to-red-500/20",
    link: "https://dashboard-xi-flame.vercel.app/"
  },
  {
    title: "NexPage",
    description: " NexPage create stunning, responsive web experiences with ease—our platform offers beautifully crafted templates, powerful features, and flexible pricing to help you launch and grow effortlessly.",
    
    category: "Frontend",
    color: "from-orange-500/20 to-red-500/20",
    link: "https://nex-page.vercel.app/"
  },
  
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