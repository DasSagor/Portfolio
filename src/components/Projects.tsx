
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, ArrowUp } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'web' | 'data';
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  // Web Development Projects
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    category: 'web',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Socket.io', 'MongoDB'],
    category: 'web',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Interactive weather application with location-based forecasts, historical data visualization, and responsive design.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
    technologies: ['React', 'Chart.js', 'Weather API', 'Tailwind'],
    category: 'web',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  
  // Data Analysis Projects
  {
    id: 4,
    title: 'Customer Behavior Analysis',
    description: 'Comprehensive analysis of customer purchase patterns using machine learning to predict future buying behavior and optimize marketing strategies.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    category: 'data',
    githubUrl: 'https://github.com'
  },
  {
    id: 5,
    title: 'Sales Performance Dashboard',
    description: 'Interactive Tableau dashboard analyzing sales performance across multiple regions with KPI tracking and predictive analytics.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
    technologies: ['Tableau', 'SQL', 'Python', 'AWS'],
    category: 'data',
    liveUrl: 'https://public.tableau.com'
  },
  {
    id: 6,
    title: 'Financial Risk Assessment',
    description: 'Machine learning model for credit risk assessment using ensemble methods and feature engineering on financial datasets.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=300&fit=crop',
    technologies: ['Python', 'XGBoost', 'Feature Engineering', 'ROC Analysis'],
    category: 'data',
    githubUrl: 'https://github.com'
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="glass-card overflow-hidden transition-all duration-300 hover:scale-105 hover:glow group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Project Links Overlay */}
        <div className={`absolute bottom-4 right-4 flex space-x-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {project.liveUrl && (
            <Button 
              size="sm" 
              className="glass hover:glow"
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              <ArrowUp className="w-4 h-4 mr-1" />
              Live
            </Button>
          )}
          {project.githubUrl && (
            <Button 
              size="sm" 
              variant="outline" 
              className="glass border-white/20"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              <Github className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gradient transition-all duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs bg-white/10 rounded-full text-gray-300 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'data'>('all');
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            Featured Projects
          </h2>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-12">
            <div className="glass-card p-2 inline-flex rounded-full">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFilter === 'all'
                    ? 'bg-cyan-500/30 text-white glow'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setActiveFilter('web')}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFilter === 'web'
                    ? 'bg-blue-500/30 text-white glow'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Web Development
              </button>
              <button
                onClick={() => setActiveFilter('data')}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFilter === 'data'
                    ? 'bg-purple-500/30 text-white glow'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Data Analysis
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
