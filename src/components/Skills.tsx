
import React, { useState, useEffect } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'web' | 'data';
}

const skills: Skill[] = [
  // Web Development Skills
  { name: 'React/Next.js', level: 95, category: 'web' },
  { name: 'TypeScript', level: 90, category: 'web' },
  { name: 'Node.js', level: 85, category: 'web' },
  { name: 'Tailwind CSS', level: 92, category: 'web' },
  { name: 'GraphQL', level: 80, category: 'web' },
  { name: 'AWS/Cloud', level: 78, category: 'web' },
  
  // Data Analysis Skills
  { name: 'Python', level: 93, category: 'data' },
  { name: 'SQL', level: 90, category: 'data' },
  { name: 'Pandas/NumPy', level: 88, category: 'data' },
  { name: 'Machine Learning', level: 82, category: 'data' },
  { name: 'Tableau/Power BI', level: 85, category: 'data' },
  { name: 'Statistics', level: 87, category: 'data' },
];

const SkillBar = ({ skill, delay }: { skill: Skill; delay: number }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevel(skill.level);
    }, delay);

    return () => clearTimeout(timer);
  }, [skill.level, delay]);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-sm font-medium text-white">{skill.name}</h4>
        <span className="text-sm text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-2">
        <div
          className={`skill-bar transition-all duration-1000 ease-out`}
          style={{ width: `${animatedLevel}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'data'>('web');
  
  const webSkills = skills.filter(skill => skill.category === 'web');
  const dataSkills = skills.filter(skill => skill.category === 'data');

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            Skills & Expertise
          </h2>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="glass-card p-2 inline-flex rounded-full">
              <button
                onClick={() => setActiveTab('web')}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === 'web'
                    ? 'bg-blue-500/30 text-white glow'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Web Development
              </button>
              <button
                onClick={() => setActiveTab('data')}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === 'data'
                    ? 'bg-purple-500/30 text-white glow'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Data Analysis
              </button>
            </div>
          </div>

          {/* Skills Display */}
          <div className="grid md:grid-cols-2 gap-8">
            {activeTab === 'web' ? (
              <>
                <div className="glass-card p-8 animate-fade-in">
                  <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                    Frontend Development
                  </h3>
                  {webSkills.slice(0, 3).map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} delay={index * 200} />
                  ))}
                </div>
                
                <div className="glass-card p-8 animate-slide-in-right">
                  <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                    Backend & Cloud
                  </h3>
                  {webSkills.slice(3).map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} delay={(index + 3) * 200} />
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="glass-card p-8 animate-fade-in">
                  <h3 className="text-2xl font-semibold mb-6 text-purple-400">
                    Programming & Analysis
                  </h3>
                  {dataSkills.slice(0, 3).map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} delay={index * 200} />
                  ))}
                </div>
                
                <div className="glass-card p-8 animate-slide-in-right">
                  <h3 className="text-2xl font-semibold mb-6 text-purple-400">
                    ML & Visualization
                  </h3>
                  {dataSkills.slice(3).map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} delay={(index + 3) * 200} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
