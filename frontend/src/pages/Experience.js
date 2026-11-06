import React, { useEffect } from 'react';
import { Calendar, MapPin, ExternalLink, Trophy, Briefcase, Users, Gauge } from 'lucide-react';
import { experience, achievements } from '../mockData';
import Reveal from '../components/Reveal';
import { useJarvis } from '../context/JarvisContext';
import BackgroundEffects from '../components/BackgroundEffects';


const highlightIcons = { Trophy, Users, Gauge };

const Experience = () => {
  const { speak, isActive } = useJarvis();

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        speak('Welcome to the experience laboratory. Three missions logged: a FinTech product team, freelance delivery through YG Web Studio, and a year on the .NET stack.');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [speak, isActive]);

  return (
    <div className="dark-container min-h-screen py-20 relative">
      <BackgroundEffects />

      <div className="dark-content-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="hud-label mb-3">MISSION LOG // CAREER TIMELINE</div>
          <h1 className="display-large mb-5">
            Professional <span className="text-brand-primary">Experience</span>
          </h1>
          <p className="body-large text-text-secondary max-w-3xl mx-auto">
            3+ years of hands-on engineering — product teams, client-facing
            freelance delivery, and a national hackathon win. Every mission logged.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          <div className="timeline-rail hidden lg:block" />
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <Reveal key={exp.id} delay={index * 0.05}>
                <div className="relative lg:pl-20">
                  <div className="hidden lg:flex absolute left-0 top-6 w-12 h-12 rounded-full bg-[rgba(220,20,60,0.9)] border-2 border-[#ffd700] items-center justify-center shadow-[0_0_18px_rgba(220,20,60,0.5)]">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>

                  <div className="hud-element" data-testid={`experience-card-${exp.id}`}>
                    {/* Card header */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="status-badge status-neutral">{exp.type}</span>
                      {exp.industry && (
                        <span className="hud-label">{exp.industry}</span>
                      )}
                    </div>

                    <h2 className="display-medium text-brand-primary mb-1">{exp.title}</h2>
                    <h3 className="heading-3 text-white mb-3">{exp.company}</h3>

                    <div className="flex flex-wrap gap-x-5 gap-y-2 text-text-muted mb-5">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-brand-primary" />
                        <span className="body-small">{exp.duration}</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-brand-primary" />
                        <span className="body-small">{exp.location}</span>
                      </span>
                    </div>

                    <p className="body-medium text-text-secondary mb-7">{exp.description}</p>

                    {/* Freelance sub-projects OR responsibilities */}
                    {exp.projects ? (
                      <div className="space-y-4 mb-7">
                        <h4 className="heading-3 text-brand-primary">Projects Delivered</h4>
                        {exp.projects.map((project) => (
                          <div
                            key={project.name}
                            className="p-4 bg-[rgba(18,18,23,0.85)] rounded border border-[rgba(220,20,60,0.25)]"
                          >
                            <h5 className="text-white font-semibold mb-2">{project.name}</h5>
                            <ul className="space-y-1.5">
                              {project.bullets.map((bullet) => (
                                <li key={bullet} className="flex items-start gap-2.5">
                                  <span className="w-1.5 h-1.5 bg-[#ffd700] rounded-full mt-2 flex-shrink-0" />
                                  <span className="body-small text-text-secondary">{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-4 mb-7">
                        <h4 className="heading-3 text-brand-primary">Key Responsibilities</h4>
                        <div className="space-y-3">
                          {exp.responsibilities.map((item) => (
                            <div key={item} className="flex items-start gap-3 p-3 bg-[rgba(18,18,23,0.85)] rounded border border-[rgba(220,20,60,0.25)]">
                              <span className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0" />
                              <p className="body-small text-text-secondary leading-relaxed">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Stark equivalent */}
                    {exp.starkEquivalent && (
                      <div className="jarvis-interface p-5 rounded mb-7">
                        <div className="flex items-center gap-3 mb-3">
                          <Trophy className="w-4 h-4 text-jarvis-green" />
                          <span className="jarvis-text text-xs font-semibold">STARK TECHNOLOGY EQUIVALENT:</span>
                        </div>
                        <p className="text-white text-sm leading-relaxed">{exp.starkEquivalent}</p>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="heading-3 text-brand-primary">Technologies &amp; Tools</h4>
                      <div className="flex flex-wrap gap-2.5">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="skill-chip">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Career highlights (data-driven) */}
        <div className="mt-20">
          <Reveal className="text-center mb-10">
            <h2 className="display-medium mb-4">
              Skills <span className="text-brand-primary">Forged in Battle</span>
            </h2>
            <p className="body-large text-text-secondary max-w-3xl mx-auto">
              Every mission contributed to the engineering toolkit — the full
              medal record lives in the Achievements section.
            </p>
          </Reveal>

          <div className="dark-grid !py-0 max-w-5xl">
            {achievements.slice(0, 3).map((item, index) => {
              const ItemIcon = highlightIcons[item.icon] || Trophy;
              return (
                <Reveal key={item.id} delay={index * 0.07}>
                  <div className="hud-element p-6 text-center h-full">
                    <div className="w-14 h-14 bg-[rgba(220,20,60,0.9)] rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[#ffd700]">
                      <ItemIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="heading-3 text-brand-primary mb-2">{item.title}</h3>
                    <p className="body-small text-text-secondary">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <Reveal>
          <div className="mt-16 jarvis-interface p-8 rounded max-w-4xl mx-auto text-center">
            <h3 className="heading-2 text-brand-primary mb-5">Ready for the Next Mission?</h3>
            <p className="body-large text-white mb-8">
              New challenges are always welcome in the workshop. Let's build
              something extraordinary together.
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
        </Reveal>
      </div>
    </div>
  );
};

export default Experience;
