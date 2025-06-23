
import React from 'react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="glass-card p-8">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=500&fit=crop" 
                  alt="Working on projects"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                
                <div className="text-center">
                  <Button 
                    className="glass hover:glow transition-all duration-300 text-slate-700 border-white/20 hover:border-white/40"
                    onClick={() => {
                      // In a real app, this would download the actual resume
                      console.log('Downloading resume...');
                    }}
                  >
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gradient">
                  Dual Expertise, Infinite Possibilities
                </h3>
                
                <div className="space-y-4 text-gray-300">
                  <p>
                    With over 3 years of experience in both web development and data analysis, 
                    I bridge the gap between technical implementation and data-driven insights. 
                    My unique perspective allows me to build applications that not only function 
                    beautifully but also leverage data to drive business decisions.
                  </p>
                  
                  <p>
                    As a <span className="text-blue-400 font-semibold">Web Developer</span>, 
                    I specialize in creating responsive, user-friendly applications using modern 
                    technologies like React, Node.js, and cloud platforms. I'm passionate about 
                    clean code, performance optimization, and creating seamless user experiences.
                  </p>
                  
                  <p>
                    As a <span className="text-purple-400 font-semibold">Data Analyst</span>, 
                    I transform raw data into actionable insights using Python, SQL, and 
                    visualization tools. I excel at statistical analysis, machine learning, 
                    and presenting complex findings in understandable formats.
                  </p>
                  
                  <p>
                    When I'm not coding or analyzing data, you'll find me exploring new 
                    technologies, contributing to open-source projects, or mentoring 
                    aspiring developers and analysts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
