import React, { useEffect } from 'react';
import { Calendar, MapPin, ExternalLink, Trophy, Briefcase } from 'lucide-react';
import { experience } from '../mockData';
import { useJarvis } from '../context/JarvisContext';

const Experience = () => {
  const { speak, isActive } = useJarvis();

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        speak("Welcome to Mr. Stark's experience laboratory. Here you'll find his battle-tested professional achievements.");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [speak, isActive]);

  return (
    <div className="dark-container min-h-screen py-20 relative">
      {/* Marvel-themed background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Arc Reactor inspired glow effects */}
        <div className="absolute top-24 right-16 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-pulse filter blur-3xl"></div>
        <div className="absolute top-80 left-12 w-24 h-24 bg-red-500 rounded-full opacity-15 animate-pulse filter blur-2xl" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-64 right-1/3 w-20 h-20 bg-yellow-400 rounded-full opacity-12 animate-pulse filter blur-2xl" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-28 h-28 bg-purple-500 rounded-full opacity-8 animate-pulse filter blur-3xl" style={{animationDelay: '3s'}}></div>
        
        {/* Comic book style effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-2/5 left-1/3 w-2 h-2 bg-brand-primary rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-3/5 right-1/5 w-1 h-1 bg-iron-gold rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-4/5 left-1/5 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '2.5s'}}></div>
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
            Battle <span className="text-brand-primary">Experience</span>
          </h1>
          <p className="body-large text-text-secondary max-w-3xl mx-auto">
            Like Tony Stark's evolution from weapons manufacturer to superhero, 
            my journey in software engineering has been marked by continuous innovation and growth.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experience.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline Line */}
              {index < experience.length - 1 && (
                <div className="absolute left-6 sm:left-8 top-20 w-0.5 h-24 sm:h-32 bg-brand-primary opacity-30" />
              )}
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Timeline Marker */}
                <div className="lg:col-span-2 flex items-center space-x-3 sm:space-x-4">
                  <div className="arc-reactor">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-primary rounded-full flex items-center justify-center">
                      <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Experience Card */}
                <div className="lg:col-span-10">
                  <div className="hud-element p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row justify-between items-start mb-6">
                      <div className="space-y-2">
                        <h2 className="display-medium text-brand-primary">{exp.title}</h2>
                        <div className="flex items-center space-x-2">
                          <h3 className="heading-2 text-white">{exp.company}</h3>
                          <span className="text-text-muted">•</span>
                          <span className="body-medium text-text-secondary">{exp.type}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-text-muted">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span className="body-small">{exp.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span className="body-small">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="body-large text-text-secondary mb-8 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Stark Tech Equivalent */}
                    <div className="jarvis-interface p-6 rounded mb-8">
                      <div className="flex items-center space-x-3 mb-4">
                        <Trophy className="w-5 h-5 text-jarvis-green" />
                        <span className="jarvis-text text-sm font-semibold">
                          STARK TECHNOLOGY EQUIVALENT:
                        </span>
                      </div>
                      <p className="text-white leading-relaxed">
                        {exp.starkEquivalent}
                      </p>
                    </div>

                    {/* Key Achievements */}
                    <div className="space-y-6 mt-3 mb-8">
                      <h4 className="heading-3 text-brand-primary">Key Achievements</h4>
                      <div className="space-y-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start space-x-4 p-4 bg-bg-secondary rounded border border-border-subtle">
                            <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0" />
                            <p className="body-medium text-text-secondary leading-relaxed">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Used */}
                    <div className="space-y-4">
                      <h4 className="heading-3 text-brand-primary">Technologies & Tools</h4>
                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-4 py-2 bg-bg-secondary border border-brand-primary rounded text-white text-sm hover:bg-brand-hover transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Gained */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="display-medium mb-6">
              Skills <span className="text-brand-primary">Forged in Battle</span>
            </h2>
            <p className="body-large text-text-secondary max-w-3xl mx-auto">
              Every challenge faced has contributed to my evolution as a software engineer, 
              much like each Iron Man suit represents Tony Stark's accumulated knowledge.
            </p>
          </div>

          <div className="dark-grid">
            <div className="hud-element p-6 text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">95%</span>
              </div>
              <h3 className="heading-3 text-brand-primary mb-2">Bug Resolution Rate</h3>
              <p className="body-small text-text-secondary">
                Achieved through systematic debugging and collaboration with senior developers
              </p>
            </div>

            <div className="hud-element p-6 text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">20+</span>
              </div>
              <h3 className="heading-3 text-brand-primary mb-2">Sprint Tasks Weekly</h3>
              <p className="body-small text-text-secondary">
                Consistently delivered within deadlines while maintaining code quality
              </p>
            </div>

            <div className="hud-element p-6 text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">10%</span>
              </div>
              <h3 className="heading-3 text-brand-primary mb-2">Performance Improvement</h3>
              <p className="body-small text-text-secondary">
                Enhanced backend response times through optimized API development
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="jarvis-interface p-8 rounded max-w-4xl mx-auto">
            <h3 className="heading-2 text-brand-primary mb-6">Ready for the Next Mission?</h3>
            <p className="body-large text-white mb-8">
              Like Tony Stark preparing for the next threat, I'm always ready to tackle new challenges 
              and build innovative solutions. Let's create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/projects" className="btn-primary dark-button-animate">
                <span>View Projects</span>
                <ExternalLink className="w-5 h-5" />
              </a>
              <a href="/contact" className="btn-secondary dark-button-animate">
                <span>Start Collaboration</span>
                <Briefcase className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;