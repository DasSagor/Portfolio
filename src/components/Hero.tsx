
import React from 'react';
import { Button } from '@/components/ui/button';
import profileImage from "@/assets/Profile-Picture.jpg";
import { ArrowDown, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 pt-14 sm:pt-6">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="w-32 h-32 sm:w-48 sm:h-48 mx-auto mb-8 relative">
            <div className="w-full h-full rounded-full glass glow overflow-hidden">
              <img
                src={profileImage}
                alt="Sagor Das"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 pb-3 text-gradient">
            Sagor Das
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            Web Developer & Data Analyst
          </p>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Crafting digital experiences through code and uncovering insights
            through data. Bridging the gap between technology and analytics to
            build meaningful solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="glass hover:glow transition-all duration-300 text-slate-700 border-white/20 hover:border-white/40"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="glass border-white/20 hover:border-white/40 text-white hover:text-white transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center pl-5 items-center space-x-10">
            <a
              href="https://github.com/DasSagor"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:glow transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/dassagor/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:glow transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-7 h-7 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
