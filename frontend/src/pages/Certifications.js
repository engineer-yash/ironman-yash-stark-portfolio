import React, { useEffect } from 'react';
import { Award, Calendar, ExternalLink, Trophy, Star, CheckCircle } from 'lucide-react';
import { certifications, socialLinks } from '../mockData';
import { useJarvis } from '../context/JarvisContext';

const Certifications = () => {
  const { speak, isActive } = useJarvis();

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        speak("Welcome to Mr. Stark's certification vault. Here you'll find his continuous learning achievements and professional recognitions.");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [speak, isActive]);

  const getCertificationIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'certificate':
        return Award;
      case 'internship certificate':
        return Trophy;
      case 'specialization certificate':
        return Star;
      default:
        return Award;
    }
  };

  return (
    <div className="dark-container min-h-screen py-20 relative">
      {/* Marvel-themed background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Arc Reactor inspired glow effects */}
        <div className="absolute top-36 right-20 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-pulse filter blur-3xl"></div>
        <div className="absolute top-96 left-16 w-24 h-24 bg-red-500 rounded-full opacity-15 animate-pulse filter blur-2xl" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-80 right-1/4 w-20 h-20 bg-yellow-400 rounded-full opacity-12 animate-pulse filter blur-2xl" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-52 left-1/3 w-28 h-28 bg-purple-500 rounded-full opacity-8 animate-pulse filter blur-3xl" style={{animationDelay: '3s'}}></div>
        
        {/* Comic book style effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-brand-primary rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-iron-gold rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
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
            Certification <span className="text-brand-primary">Vault</span>
          </h1>
          <p className="body-large text-text-secondary max-w-3xl mx-auto">
            Like Tony Stark's continuous innovation and learning, these certifications represent 
            my commitment to staying at the forefront of technology and expanding my expertise.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert, index) => {
            const IconComponent = getCertificationIcon(cert.type);
            
            return (
              <div key={cert.id} className="hud-element p-8 dark-hover">
                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="arc-reactor">
                      <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <span className="px-3 py-1 bg-brand-hover text-brand-primary text-xs rounded-full">
                          {cert.type}
                        </span>
                        <div className="flex items-center space-x-2 text-text-muted">
                          <Calendar className="w-4 h-4" />
                          <span className="body-small">{cert.date}</span>
                        </div>
                      </div>
                      
                      <h3 className="heading-2 text-white leading-tight">
                        {cert.title}
                      </h3>
                      
                      <p className="body-medium text-brand-primary font-semibold">
                        {cert.issuer}
                      </p>
                    </div>

                    <p className="body-medium text-text-secondary leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Links if available */}
                    {cert.links && cert.links.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-brand-primary">Related Resources:</h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.links.map((link, linkIndex) => {
                            let linkUrl = '#';
                            if (link === 'Blog1') linkUrl = socialLinks.blog1;
                            else if (link === 'Blog2') linkUrl = socialLinks.blog2;
                            else if (link === 'Blog3') linkUrl = socialLinks.blog3;
                            
                            return (
                              <a
                                key={linkIndex}
                                href={linkUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1 bg-bg-secondary border border-brand-primary rounded text-sm text-white hover:bg-brand-hover transition-colors"
                              >
                                {link}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center cursor-pointer hover:text-brand-active transition-colors">
                      <a
                        href={cert.certificateLink || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-brand-primary hover:text-brand-active transition-colors"
                      >
                        <span className="text-sm">View Certificate</span>
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certification Timeline */}
        <div className="mb-16">
          <h2 className="heading-2 text-center text-brand-primary mb-12">
            Learning <span className="text-white">Timeline</span>
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-brand-primary opacity-30 hidden lg:block" />
            
            <div className="space-y-12">
              {certifications.map((cert, index) => (
                <div key={cert.id} className="relative flex items-center">
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-8 w-4 h-4 bg-brand-primary rounded-full transform -translate-x-2" />
                  
                  <div className="w-full lg:ml-16">
                    <div className="jarvis-interface p-6 rounded">
                      <div className="flex flex-col lg:flex-row justify-between items-start mb-4">
                        <div>
                          <h3 className="heading-3 text-brand-primary">{cert.title}</h3>
                          <p className="body-medium text-white">{cert.issuer}</p>
                        </div>
                        <div className="mt-2 lg:mt-0">
                          <span className="jarvis-text text-sm">{cert.date}</span>
                        </div>
                      </div>
                      <p className="text-white text-sm leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Gained */}
        <div className="mb-16">
          <h2 className="heading-2 text-center text-brand-primary mb-12">
            Skills <span className="text-white">Acquired</span>
          </h2>
          
          <div className="dark-grid">
            <div className="hud-element p-6 text-center">
              <CheckCircle className="w-12 h-12 text-brand-primary mx-auto mb-4" />
              <h3 className="heading-3 text-white mb-2">React JS Mastery</h3>
              <p className="body-small text-text-secondary">
                Advanced component architecture, state management, and modern React patterns
              </p>
            </div>

            <div className="hud-element p-6 text-center">
              <CheckCircle className="w-12 h-12 text-brand-primary mx-auto mb-4" />
              <h3 className="heading-3 text-white mb-2">AI/ML Expertise</h3>
              <p className="body-small text-text-secondary">
                Machine learning algorithms, neural networks, and artificial intelligence concepts
              </p>
            </div>

            <div className="hud-element p-6 text-center">
              <CheckCircle className="w-12 h-12 text-brand-primary mx-auto mb-4" />
              <h3 className="heading-3 text-white mb-2">Technical Writing</h3>
              <p className="body-small text-text-secondary">
                Professional blog creation, documentation, and technical communication
              </p>
            </div>
          </div>
        </div>

        {/* JARVIS Learning Analysis */}
        <div className="mb-16">
          <div className="jarvis-interface p-8 rounded max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-6">
              <Trophy className="w-6 h-6 text-jarvis-green" />
              <span className="jarvis-text text-lg font-semibold">
                JARVIS CONTINUOUS LEARNING ANALYSIS
              </span>
            </div>
            
            <div className="space-y-6 text-white">
              <p className="leading-relaxed">
                "Mr. Stark's certification portfolio demonstrates the same commitment to continuous 
                improvement that I observe in your Iron Man suit iterations. Each certification 
                represents not just knowledge acquisition, but practical skill enhancement that 
                directly contributes to his engineering capabilities."
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-jarvis-green">
                <div className="text-center">
                  <div className="text-3xl font-bold text-jarvis-green mb-2">
                    {certifications.length}
                  </div>
                  <div className="text-sm text-text-muted">Certifications Earned</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-jarvis-green mb-2">3</div>
                  <div className="text-sm text-text-muted">Skill Domains</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-jarvis-green mb-2">100%</div>
                  <div className="text-sm text-text-muted">Learning Commitment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;