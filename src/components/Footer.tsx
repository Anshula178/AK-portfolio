import React from "react";

const Footer = () => {
  return (
    <footer className="w-full  border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Atul Kumar. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#home" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
