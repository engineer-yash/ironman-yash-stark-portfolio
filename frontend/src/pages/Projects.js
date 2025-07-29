import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Calendar, Award, Zap, CheckCircle } from 'lucide-react';
import { projects } from '../mockData';
import { useJarvis } from '../context/JarvisContext';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const { speak, isActive } = useJarvis();

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        speak("Welcome to the innovation vault. Here you'll find Mr. Stark's most significant technological achievements.");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [speak, isActive]);

  const handleProjectSelect = (index) => {
    setSelectedProject(index);
    if (isActive) {
      speak(`Now viewing project: ${projects[index].title}. ${projects[index].starkTech}`);
    }
  };

  return (
    <div className="dark-container min-h-screen py-20 relative">
      {/* Marvel-themed background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Arc Reactor inspired glow effects */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-pulse filter blur-3xl"></div>
        <div className="absolute top-60 left-20 w-24 h-24 bg-red-500 rounded-full opacity-15 animate-pulse filter blur-2xl" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 right-1/4 w-20 h-20 bg-yellow-400 rounded-full opacity-12 animate-pulse filter blur-2xl" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-60 left-1/3 w-28 h-28 bg-purple-500 rounded-full opacity-8 animate-pulse filter blur-3xl" style={{animationDelay: '3s'}}></div>
        
        {/* Comic book style effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-brand-primary rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-iron-gold rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 right-1/6 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '2.5s'}}></div>
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
            Innovation <span className="text-brand-primary">Vault</span>
          </h1>
          <p className="body-large text-text-secondary max-w-3xl mx-auto">
            A showcase of breakthrough projects that demonstrate the fusion of creativity and technical excellence. 
            Each project represents a new iteration in my technological evolution.
          </p>
        </div>

        {/* Project Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 lg:mb-12 px-4">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => handleProjectSelect(index)}
              className={`px-6 py-3 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                selectedProject === index
                  ? 'bg-brand-primary text-black border-2 border-gold'
                  : 'bg-bg-secondary text-text-secondary hover:bg-brand-hover hover:text-white border border-brand-primary hover:border-gold'
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Selected Project Details */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Project Info */}
          <div className="space-y-8">
            <div className="hud-element">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-brand-primary" />
                  <span className="body-small text-text-muted">{projects[selectedProject].duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-brand-primary" />
                  <span className="body-small text-text-muted">{projects[selectedProject].status}</span>
                </div>
              </div>
              
              <h2 className="display-medium mb-4">{projects[selectedProject].title}</h2>
              <p className="body-large text-brand-primary mb-6">{projects[selectedProject].type}</p>
              <p className="body-medium text-text-secondary leading-relaxed">
                {projects[selectedProject].description}
              </p>
            </div>

            {/* Stark Tech Equivalent */}
            <div className="jarvis-interface p-6 rounded">
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="w-5 h-5 text-jarvis-green" />
                <span className="jarvis-text text-sm font-semibold">
                  STARK TECHNOLOGY EQUIVALENT:
                </span>
              </div>
              <p className="text-white leading-relaxed">
                {projects[selectedProject].starkTech}
              </p>
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <h3 className="heading-3 text-brand-primary">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {projects[selectedProject].technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-bg-secondary border border-brand-primary rounded text-white text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project Features & Achievements */}
          <div className="space-y-8">
            {/* Features */}
            <div className="hud-element">
              <h3 className="heading-3 text-brand-primary mb-6">Key Features</h3>
              <div className="space-y-3">
                {projects[selectedProject].features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-jarvis-green mt-0.5 flex-shrink-0" />
                    <span className="body-medium text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="hud-element">
              <h3 className="heading-3 text-brand-primary mb-6">Achievements</h3>
              <div className="space-y-4">
                {projects[selectedProject].achievements.map((achievement, index) => (
                  <div key={index} className="p-4 bg-bg-secondary rounded border border-border-subtle">
                    <div className="flex items-start space-x-3">
                      <Award className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                      <span className="body-medium text-text-secondary">{achievement}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>

        {/* All Projects Grid */}
        <div className="mt-20">
          <h2 className="heading-1 text-center mb-12">
            Complete <span className="text-brand-primary">Project Arsenal</span>
          </h2>
          
          <div className="dark-grid">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`hud-element p-6 cursor-pointer transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-brand-primary/30 ${
                  selectedProject === index ? 'ring-2 ring-brand-primary shadow-xl shadow-brand-primary/40' : ''
                } dark-hover`}
                onClick={() => handleProjectSelect(index)}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="body-small text-brand-primary">{project.type}</span>
                  <span className="body-small text-text-muted">{project.duration}</span>
                </div>
                
                <h3 className="heading-3 mb-4">{project.title}</h3>
                <p className="body-small text-text-secondary mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-brand-hover text-brand-primary text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-brand-hover text-brand-primary text-xs rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center text-brand-primary text-sm">
                  <span>Explore Project</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="jarvis-interface p-8 rounded max-w-4xl mx-auto">
            <h3 className="heading-2 text-brand-primary mb-6">Ready to Collaborate?</h3>
            <p className="body-large text-white mb-8">
              Like Tony Stark building his next suit, I'm always working on the next innovation. 
              Let's create something extraordinary together.
            </p>
            <Link to="/contact" className="btn-primary dark-button-animate">
              <span>Start a Project</span>
              <Zap className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;