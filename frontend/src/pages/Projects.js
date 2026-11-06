import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Calendar, Award, Zap, CheckCircle } from 'lucide-react';
import { projects } from '../mockData';
import Reveal from '../components/Reveal';
import { useJarvis } from '../context/JarvisContext';

const statusClass = (status) => {
  if (status === 'Live') return 'status-badge status-live';
  if (status === 'National Winner') return 'status-badge status-winner';
  return 'status-badge status-neutral';
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const { speak, isActive } = useJarvis();

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        speak('Welcome to the innovation vault. Five flagship builds logged, from AI-powered applications to production e-commerce.');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [speak, isActive]);

  const handleProjectSelect = (index) => {
    setSelectedProject(index);
    if (isActive) {
      speak(`Now viewing project: ${projects[index].title}.`);
    }
  };

  const project = projects[selectedProject];

  return (
    <div className="dark-container min-h-screen py-20 relative">
      <div className="absolute inset-0 pointer-events-none">
        {/* Arc Reactor inspired glow effects */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-pulse filter blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-red-500 rounded-full opacity-15 animate-pulse filter blur-2xl" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-yellow-400 rounded-full opacity-12 animate-pulse filter blur-2xl" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-500 rounded-full opacity-8 animate-pulse filter blur-3xl" style={{animationDelay: '3s'}}></div>
        
        {/* Comic book style effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-brand-primary rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-iron-gold rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '2.5s'}}></div>
        </div>
        
        {/* Hexagon pattern overlay - subtle */}
        <div className="absolute inset-0 opacity-3" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc143c' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="dark-content-container relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="hud-label mb-3">INNOVATION VAULT // PROJECT RECORDS</div>
          <h1 className="display-large mb-5">
            Innovation <span className="text-brand-primary">Vault</span>
          </h1>
          <p className="body-large text-text-secondary max-w-3xl mx-auto">
            Breakthrough builds demonstrating the fusion of creativity and
            technical excellence — each one a new iteration in the evolution.
          </p>
        </div>

        {/* Project navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 px-2">
          {projects.map((p, index) => (
            <button
              key={p.id}
              onClick={() => handleProjectSelect(index)}
              data-testid={`project-tab-${p.id}`}
              className={`px-4 sm:px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedProject === index
                  ? 'bg-[rgba(220,20,60,0.9)] text-white border-2 border-[#ffd700] shadow-lg shadow-[rgba(220,20,60,0.35)]'
                  : 'bg-[rgba(18,18,23,0.8)] text-text-secondary border border-[rgba(220,20,60,0.3)] hover:border-[#ffd700] hover:text-white'
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Selected project detail */}
        <Reveal key={project.id}>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Info */}
            <div className="space-y-7">
              <div className="hud-element">
                <div className="flex flex-wrap items-center gap-4 mb-5">
                  {project.status && (
                    <span className={statusClass(project.status)}>{project.status}</span>
                  )}
                  {project.duration && (
                    <span className="flex items-center gap-2 body-small text-text-muted">
                      <Calendar className="w-4 h-4 text-brand-primary" />
                      {project.duration}
                    </span>
                  )}
                </div>

                <h2 className="display-medium mb-2">{project.title}</h2>
                <p className="body-medium text-brand-primary mb-5">{project.type}</p>
                <p className="body-medium text-text-secondary leading-relaxed">
                  {project.description}
                </p>

                {(project.githubUrl || project.liveUrl) && (
                  <div className="flex flex-wrap gap-4 mt-6">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary !min-h-[42px] !py-2.5 text-sm"
                        data-testid="project-live-link"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary !min-h-[42px] !py-2.5 text-sm"
                        data-testid="project-github-link"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                )}
              </div>

              {project.starkTech && (
                <div className="jarvis-interface p-6 rounded">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-5 h-5 text-jarvis-green" />
                    <span className="jarvis-text text-sm font-semibold">STARK TECHNOLOGY EQUIVALENT:</span>
                  </div>
                  <p className="text-white leading-relaxed">{project.starkTech}</p>
                </div>
              )}

              <div className="space-y-4">
                <h3 className="heading-3 text-brand-primary">Technology Stack</h3>
                <div className="flex flex-wrap gap-2.5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-chip">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Features + achievements */}
            <div className="space-y-7">
              <div className="hud-element">
                <h3 className="heading-3 text-brand-primary mb-5">Key Features</h3>
                <div className="space-y-3">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-jarvis-green mt-0.5 flex-shrink-0" />
                      <span className="body-medium text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {project.achievement && (
                <div className="hud-element border-[#ffd700]/60">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[rgba(220,20,60,0.9)] border-2 border-[#ffd700] flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="heading-3 text-[#ffd700] mb-1">Achievement</h3>
                      <p className="body-medium text-text-secondary">{project.achievement}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Reveal>

        {/* All projects grid */}
        <div className="mt-14">
          <Reveal>
            <h2 className="heading-1 text-center mb-10">
              Complete <span className="text-brand-primary">Project Arsenal</span>
            </h2>
          </Reveal>

          <div className="dark-grid !py-0 max-w-6xl">
            {projects.map((p, index) => (
              <Reveal key={p.id} delay={index * 0.05}>
                <button
                  className={`hud-element dark-hover w-full text-left h-full cursor-pointer ${
                    selectedProject === index ? 'ring-2 ring-[#ffd700]' : ''
                  }`}
                  onClick={() => handleProjectSelect(index)}
                  data-testid={`project-card-${p.id}`}
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="body-small text-brand-primary">{p.type}</span>
                    {p.status && <span className={statusClass(p.status)}>{p.status}</span>}
                  </div>

                  <h3 className="heading-3 mb-3">{p.title}</h3>
                  <p className="body-small text-text-secondary mb-5 line-clamp-3">{p.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {p.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2.5 py-1 bg-brand-hover text-text-secondary text-xs rounded">
                        {tech}
                      </span>
                    ))}
                    {p.technologies.length > 3 && (
                      <span className="px-2.5 py-1 bg-brand-hover text-text-secondary text-xs rounded">
                        +{p.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Reveal>
          <div className="mt-16 jarvis-interface p-8 rounded max-w-4xl mx-auto text-center">
            <h3 className="heading-2 text-brand-primary mb-5">Ready to Collaborate?</h3>
            <p className="body-large text-white mb-8">
              The next build always starts with a conversation. Let's create
              something extraordinary together.
            </p>
            <Link to="/contact" className="btn-primary dark-button-animate" data-testid="projects-contact-cta">
              <span>Start a Project</span>
              <Zap className="w-5 h-5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Projects;
