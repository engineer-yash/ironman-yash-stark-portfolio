import React, { useState, useEffect } from 'react';
import { Code, Database, Globe, Wrench, Zap, ChevronRight } from 'lucide-react';
import { skills } from '../mockData';
import { useJarvis } from '../context/JarvisContext';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');
  const { speak, isActive } = useJarvis();

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        speak("Welcome to Mr. Stark's technology arsenal. Here you'll find his complete technical capabilities and tools of innovation.");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [speak, isActive]);

  const categories = [
    { name: 'Frontend', icon: Globe, color: 'text-brand-primary' },
    { name: 'Backend', icon: Database, color: 'text-blue-400' },
    { name: 'Database', icon: Database, color: 'text-purple-400' },
    { name: 'API', icon: Code, color: 'text-green-400' }
  ];

  const getSkillsByCategory = (category) => {
    return skills.languages_frameworks.filter(skill => skill.category === category);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (isActive) {
      speak(`Now displaying ${category} technologies from Mr. Stark's arsenal.`);
    }
  };

  return (
    <div className="dark-container min-h-screen py-20 relative">
      {/* Marvel-themed background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Arc Reactor inspired glow effects */}
        <div className="absolute top-32 left-16 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-pulse filter blur-3xl"></div>
        <div className="absolute top-64 right-12 w-24 h-24 bg-red-500 rounded-full opacity-15 animate-pulse filter blur-2xl" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-48 left-1/3 w-20 h-20 bg-yellow-400 rounded-full opacity-12 animate-pulse filter blur-2xl" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 right-1/4 w-28 h-28 bg-purple-500 rounded-full opacity-8 animate-pulse filter blur-3xl" style={{animationDelay: '3s'}}></div>
        
        {/* Comic book style effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/5 right-1/3 w-2 h-2 bg-brand-primary rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-4/5 left-1/5 w-1 h-1 bg-iron-gold rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-3/5 right-1/5 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '2.5s'}}></div>
        </div>
        
        {/* Hexagon pattern overlay - subtle */}
        <div className="absolute inset-0 opacity-3" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc143c' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="dark-content-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="display-large mb-6">
            Tech <span className="text-brand-primary">Arsenal</span>
          </h1>
          <p className="body-large text-text-secondary max-w-3xl mx-auto">
            Like Tony Stark's workshop filled with cutting-edge technology, my arsenal contains 
            a comprehensive collection of modern tools and frameworks for building innovative solutions.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => handleCategoryChange(category.name)}
              className={`px-6 py-3 rounded border transition-all duration-300 flex items-center space-x-3 ${
                activeCategory === category.name
                  ? 'bg-brand-primary text-black border-brand-primary'
                  : 'bg-bg-secondary text-white border-border-subtle hover:border-brand-primary hover:bg-brand-hover'
              }`}
            >
              <category.icon className={`w-5 h-5 ${activeCategory === category.name ? 'text-white' : category.color}`} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Skills List */}
          <div className="space-y-6">
            <h2 className="heading-2 text-brand-primary mb-8">
              {activeCategory} Technologies
            </h2>
            
            <div className="space-y-6">
              {getSkillsByCategory(activeCategory).map((skill, index) => (
                <div key={index} className="hud-element p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="heading-3 text-white">{skill.name}</h3>
                    <span className="text-brand-primary font-semibold">{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="relative h-3 bg-bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-primary to-brand-active rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse" />
                  </div>
                  
                  {/* Skill Category Badge */}
                  <div className="mt-4">
                    <span className="px-3 py-1 bg-brand-hover text-brand-primary text-xs rounded-full">
                      {skill.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Details */}
          <div className="space-y-8">
            <div className="jarvis-interface p-8 rounded">
              <div className="flex items-center space-x-3 mb-6">
                <Zap className="w-6 h-6 text-jarvis-green" />
                <span className="jarvis-text text-lg font-semibold">
                  JARVIS SKILL ANALYSIS
                </span>
              </div>
              
              <div className="space-y-4 text-white">
                <p className="leading-relaxed">
                  "Mr. Stark's {activeCategory.toLowerCase()} capabilities demonstrate mastery 
                  comparable to my own systems integration. His proficiency in these technologies 
                  allows for rapid prototyping and scalable solution development."
                </p>
                
                <div className="border-t border-jarvis-green pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-jarvis-green">
                        {getSkillsByCategory(activeCategory).reduce((sum, skill) => sum + skill.level, 0) / getSkillsByCategory(activeCategory).length}%
                      </div>
                      <div className="text-sm text-text-muted">Average Proficiency</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-jarvis-green">
                        {getSkillsByCategory(activeCategory).length}
                      </div>
                      <div className="text-sm text-text-muted">Technologies</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="hud-element p-4 text-center">
                <div className="text-2xl font-bold text-brand-primary mb-2">
                  {skills.languages_frameworks.length}
                </div>
                <div className="text-sm text-text-muted">Total Technologies</div>
              </div>
              <div className="hud-element p-4 text-center">
                <div className="text-2xl font-bold text-brand-primary mb-2">
                  {skills.tools.length}
                </div>
                <div className="text-sm text-text-muted">Development Tools</div>
              </div>
            </div>
          </div>
        </div>

        {/* Concepts & Methodologies */}
        <div className="mb-16">
          <h2 className="heading-2 text-center text-brand-primary mb-12">
            Development Concepts & Methodologies
          </h2>
          
          <div className="dark-grid">
            {skills.concepts.map((concept, index) => (
              <div key={index} className="hud-element p-6 dark-hover">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="heading-3 text-white mb-2">{concept}</h3>
                    <div className="flex items-center text-brand-primary">
                      <span className="text-sm">Core Methodology</span>
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="mb-16">
          <h2 className="heading-2 text-center text-brand-primary mb-12">
            Development Tools & Platforms
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {skills.tools.map((tool, index) => (
              <div
                key={index}
                className="px-6 py-4 bg-bg-secondary border border-brand-primary rounded-lg hover:bg-brand-hover hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <span className="text-white font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="jarvis-interface p-8 rounded max-w-4xl mx-auto">
            <h3 className="heading-2 text-brand-primary mb-6">Ready to Build Something Amazing?</h3>
            <p className="body-large text-white mb-8">
              Like Tony Stark combining his various technologies to create the perfect suit, 
              I leverage these diverse skills to build innovative, scalable solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/projects" className="btn-primary dark-button-animate">
                <span>See Skills in Action</span>
                <Code className="w-5 h-5" />
              </a>
              <a href="/contact" className="btn-secondary dark-button-animate">
                <span>Start a Project</span>
                <Zap className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;