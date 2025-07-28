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
    <div className="dark-container min-h-screen py-20">
      <div className="dark-content-container">
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
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
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

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary dark-button-animate">
                <ExternalLink className="w-5 h-5" />
                <span>View Live Demo</span>
              </button>
              <button className="btn-secondary dark-button-animate">
                <Github className="w-5 h-5" />
                <span>View Source</span>
              </button>
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
                className={`hud-element p-6 cursor-pointer transition-all duration-300 ${
                  selectedProject === index ? 'ring-2 ring-brand-primary' : ''
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