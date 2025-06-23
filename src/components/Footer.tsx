
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-4">
                Sagor Das
              </h3>
              <p className="text-gray-400 text-sm">
                Web Developer & Data Analyst crafting digital experiences and
                uncovering insights through data.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["About", "Skills", "Projects", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.getElementById(
                        item.toLowerCase()
                      );
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Web Development</p>
                <p>Data Analysis</p>
                <p>Business Intelligence</p>
                <p>Machine Learning</p>
                <p>Consulting</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Sagor Das. All rights reserved.
            </p>

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/DasSagor"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/dassagor/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
