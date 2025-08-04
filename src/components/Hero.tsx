"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 blur-sm scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-background/70 to-background/95 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto animate-fade-in  mt-24 md:mt-10 ">
        {/* Badge */}
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm tracking-wide shadow-sm animate-pulse-glow backdrop-blur-sm">
            Available for freelance projects
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[1.75rem] sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6 text-white drop-shadow-xl">
          Frontend & Webflow Developer
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
          I craft clean, functional interfaces with thoughtful UX, blending
          strategy and design to build products people love to use.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#projects">
            <Button variant="hero" size="xl" className="group">
              <span>View My Work</span>
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </a>
          <a href="#contact">
            <Button variant="glass" size="xl" className="group">
              <Mail className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
              <span>Let’s Connect</span>
            </Button>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mb-12">
          {[
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/atul-kumar-62a743184", // replace with your LinkedIn URL
              label: "LinkedIn",
            },
            {
              icon: Mail,
              href: "mailto:atul.striveup@gmail.com", // replace with your email
              label: "Email",
            },
          ].map(({ icon: Icon, href, label }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300 backdrop-blur"
              >
                <Icon className="h-5 w-5" />
              </Button>
            </a>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto text-white">
          {[
            { label: "Projects", value: "50+" },
            { label: "Years", value: "4+" },
            { label: "Satisfaction", value: "100%" },
          ].map(({ label, value }) => (
            <div className="text-center" key={label}>
              <div className="text-3xl font-bold text-primary">{value}</div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center gap-1 text-muted-foreground">
            <span className="text-xs font-medium">Scroll to explore</span>
            <ArrowDown className="h-5 w-5" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
