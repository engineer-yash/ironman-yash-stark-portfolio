import React, { useEffect } from 'react';
import { Award, Calendar, ExternalLink, Trophy, Star, CheckCircle } from 'lucide-react';
import { certifications } from '../mockData';
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
    <div className="dark-container min-h-screen py-20">
      <div className="dark-content-container">
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
                        <IconComponent className="w-8 h-8 text-black" />
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
                          {cert.links.map((link, linkIndex) => (
                            <button
                              key={linkIndex}
                              className="px-3 py-1 bg-bg-secondary border border-brand-primary rounded text-sm text-white hover:bg-brand-hover transition-colors"
                            >
                              {link}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center text-brand-primary cursor-pointer hover:text-brand-active transition-colors">
                      <span className="text-sm">View Certificate</span>
                      <ExternalLink className="w-4 h-4 ml-2" />
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

        {/* Future Learning Goals */}
        <div className="text-center">
          <h2 className="heading-2 text-brand-primary mb-8">
            Future <span className="text-white">Learning Path</span>
          </h2>
          <p className="body-large text-text-secondary max-w-3xl mx-auto mb-8">
            Like Tony Stark's never-ending quest for technological advancement, 
            I'm constantly exploring new technologies and methodologies to stay ahead of the curve.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['Cloud Architecture', 'DevOps & CI/CD', 'Advanced AI/ML', 'Blockchain', 'IoT Systems'].map((skill, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-bg-secondary border border-brand-primary rounded-lg hover:bg-brand-hover transition-colors"
              >
                <span className="text-white">{skill}</span>
                <span className="text-brand-primary ml-2">→ Learning</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/skills" className="btn-primary dark-button-animate">
              <span>Explore Current Skills</span>
              <Star className="w-5 h-5" />
            </a>
            <a href="/contact" className="btn-secondary dark-button-animate">
              <span>Collaborate & Learn</span>
              <Award className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;