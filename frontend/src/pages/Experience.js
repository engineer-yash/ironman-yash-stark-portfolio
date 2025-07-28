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
    <div className="dark-container min-h-screen py-20">
      <div className="dark-content-container">
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
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-brand-primary opacity-30" />
              )}
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Timeline Marker */}
                <div className="lg:col-span-2 flex items-center space-x-4">
                  <div className="arc-reactor">
                    <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Experience Card */}
                <div className="lg:col-span-10">
                  <div className="hud-element p-8">
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
                    <div className="space-y-6 mb-8">
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
                <span className="text-black text-xl font-bold">20+</span>
              </div>
              <h3 className="heading-3 text-brand-primary mb-2">Sprint Tasks Weekly</h3>
              <p className="body-small text-text-secondary">
                Consistently delivered within deadlines while maintaining code quality
              </p>
            </div>

            <div className="hud-element p-6 text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black text-xl font-bold">10%</span>
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