import React, { useEffect } from 'react';
import { Award, Calendar, ExternalLink, Link2, Trophy, CheckCircle } from 'lucide-react';
import { certifications } from '../mockData';
import Reveal from '../components/Reveal';
import AmbientFX from '../components/AmbientFX';
import { useJarvis } from '../context/JarvisContext';

const Certifications = () => {
  const { speak, isActive } = useJarvis();

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        speak('Certification vault unlocked. Four records on file, covering Web APIs, containers, Azure DevOps, and generative AI.');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [speak, isActive]);

  const domains = [
    { title: '.NET & Web APIs', text: 'Building Web APIs with ASP.NET Core 8.' },
    { title: 'Containers & DevOps', text: 'Docker with .NET, plus the Azure DevOps foundation.' },
    { title: 'Generative AI', text: 'Generative AI Mastermind by OutSkill.' },
  ];

  return (
    <div className="dark-container min-h-screen py-20 relative">
      <AmbientFX />

      <div className="dark-content-container relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="hud-label mb-3">CERTIFICATION VAULT // LEARNING RECORDS</div>
          <h1 className="display-large mb-5">
            Certification <span className="text-brand-primary">Vault</span>
          </h1>
          <p className="body-large text-text-secondary max-w-3xl mx-auto">
            Continuous learning across the .NET ecosystem, cloud tooling, and
            generative AI — verified, no fabricated credentials.
          </p>
        </div>

        {/* Certifications grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mb-16 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Reveal key={cert.id} delay={index * 0.06} className="h-full">
              <div className="hud-element dark-hover h-full" data-testid={`certification-card-${cert.id}`}>
                <div className="flex items-start gap-5 h-full">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-[rgba(220,20,60,0.9)] border-2 border-[#ffd700] flex items-center justify-center">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="flex items-center gap-2 body-small text-text-muted">
                        <Calendar className="w-4 h-4 text-brand-primary" />
                        {cert.date}
                      </span>
                    </div>

                    <h3 className="heading-3 text-white leading-snug mb-1">{cert.title}</h3>
                    {cert.issuer && (
                      <p className="body-small text-brand-primary font-semibold mb-1">{cert.issuer}</p>
                    )}

                    <div className="mt-auto pt-4">
                      {cert.certificateLink ? (
                        <a
                          href={cert.certificateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-brand-primary hover:text-[#ffd700] transition-colors"
                          data-testid={`cert-link-${cert.id}`}
                        >
                          <span className="text-sm">View Certificate</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        <span
                          className="inline-flex items-center gap-2 text-text-muted text-sm"
                          data-testid={`cert-pending-${cert.id}`}
                        >
                          <Link2 className="w-4 h-4" />
                          Certificate link coming soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Learning timeline */}
        <div className="mb-16 max-w-4xl mx-auto">
          <h2 className="heading-1 text-center text-brand-primary mb-10">
            Learning <span className="text-white">Timeline</span>
          </h2>

          <div className="relative">
            <div className="timeline-rail hidden lg:block" />
            <div className="space-y-8">
              {certifications.map((cert, index) => (
                <Reveal key={cert.id} delay={index * 0.05}>
                  <div className="relative lg:pl-20">
                    <div className="hidden lg:block absolute left-0 top-5 w-4 h-4 rounded-full bg-[#ffd700] shadow-[0_0_10px_rgba(255,215,0,0.6)]" />
                    <div className="jarvis-interface p-5 rounded">
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-2">
                        <h3 className="heading-3 text-brand-primary">{cert.title}</h3>
                        <span className="jarvis-text text-sm">{cert.date}</span>
                      </div>
                      {cert.issuer && <p className="text-white text-sm">{cert.issuer}</p>}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Domains */}
        <div className="mb-16 max-w-5xl mx-auto">
          <h2 className="heading-1 text-center text-brand-primary mb-10">
            Skills <span className="text-white">Acquired</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {domains.map((domain, index) => (
              <Reveal key={domain.title} delay={index * 0.07} className="h-full">
                <div className="hud-element p-6 text-center h-full">
                  <CheckCircle className="w-10 h-10 text-brand-primary mx-auto mb-4" />
                  <h3 className="heading-3 text-white mb-2">{domain.title}</h3>
                  <p className="body-small text-text-secondary">{domain.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* JARVIS analysis */}
        <Reveal>
          <div className="jarvis-interface p-8 rounded max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <Trophy className="w-6 h-6 text-jarvis-green" />
              <span className="jarvis-text text-lg font-semibold">JARVIS CONTINUOUS LEARNING ANALYSIS</span>
            </div>
            <div className="space-y-6 text-white">
              <p className="leading-relaxed">
                "Each certification maps directly to systems in production — Web
                APIs powering NutriScan AI, containers and Azure DevOps in the
                CI/CD pipeline, and generative AI in daily development. Knowledge
                with immediate field application, sir."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[rgba(255,215,0,0.4)]">
                <div className="text-center">
                  <div className="text-3xl font-bold text-jarvis-green mb-2">{certifications.length}</div>
                  <div className="text-sm text-text-muted">Certifications Earned</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-jarvis-green mb-2">3</div>
                  <div className="text-sm text-text-muted">Skill Domains</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-jarvis-green mb-2">2025–26</div>
                  <div className="text-sm text-text-muted">Active Learning Window</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Certifications;
