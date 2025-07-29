import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Zap } from 'lucide-react';
import { personalInfo, achievements, socialLinks } from '../mockData';
import { useJarvis } from '../context/JarvisContext';
import JarvisAssistant from '../components/JarvisAssistant';

const Home = () => {
  const [currentAchievement, setCurrentAchievement] = useState(0);
  const { speak, isActive } = useJarvis();

  // Rotate through achievements
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAchievement((prev) => (prev + 1) % achievements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Welcome message when JARVIS is activated
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        speak("Welcome to the digital workshop of Tony Stark. All systems are online and ready for exploration.");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [speak, isActive]);

  return (
    <div className="dark-container min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="dark-full-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Intro */}
              <div className="space-y-4">
                <div className="iron-text text-sm font-semibold tracking-wider animate-pulse">
                  {'> STARK INDUSTRIES PROTOCOL INITIATED...'}
                </div>
                <h1 className="display-huge">
                  <span className="hologram" data-text="YASH">YASH</span>{' '}
                  <span className="hologram" data-text="GOHEL">GOHEL</span>
                </h1>
                <div className="display-medium iron-text">
                  Also Known As{' '}
                  <span className="text-iron-gold animate-pulse">Tony Stark</span>
                </div>
                <p className="heading-2 text-text-secondary">
                  {personalInfo.title}
                </p>
              </div>

              {/* Bio */}
              <div className="hud-element">
                <p className="body-large text-text-primary leading-relaxed">
                  {personalInfo.starkBio}
                </p>
              </div>

              {/* Dynamic Achievement */}
              <div className="space-y-4">
                <div className="iron-interface p-6 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-iron-gold animate-pulse" />
                    <span className="iron-text text-sm font-semibold">
                      CURRENT SYSTEM STATUS:
                    </span>
                  </div>
                  <p className="text-white mt-3 text-lg font-medium">
                    {achievements[currentAchievement]}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects" className="btn-primary iron-button-animate">
                  <span>Explore Projects</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href={socialLinks.resume}
                  download="Yash_Gohel_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary iron-button-animate"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </a>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center space-y-2 p-4 bg-brand-hover rounded-lg border border-iron-red">
                  <div className="display-medium iron-text">5+</div>
                  <div className="body-small text-text-muted">Projects Built</div>
                </div>
                <div className="text-center space-y-2 p-4 bg-brand-hover rounded-lg border border-iron-red">
                  <div className="display-medium iron-text">95%</div>
                  <div className="body-small text-text-muted">Bug Resolution</div>
                </div>
                <div className="text-center space-y-2 p-4 bg-brand-hover rounded-lg border border-iron-red">
                  <div className="display-medium iron-text">40%</div>
                  <div className="body-small text-text-muted">Performance Gain</div>
                </div>
              </div>
            </div>

            {/* Right - Iron Man Suit Images */}
            <div className="relative">
              <div 
                className="w-full h-96 lg:h-[600px] relative overflow-hidden rounded-lg"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(220, 20, 60, 0.1) 0%, rgba(255, 215, 0, 0.05) 100%)',
                  borderRadius: '12px'
                }}
              >
                {/* Iron Man Suit Image Display */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                    <img
                      src="https://customer-assets.emergentagent.com/job_dd71168c-a0c9-4d0c-9ff0-288fcc6c3b45/artifacts/7t42ou3s_ai-generated-8229398_1280.png"
                      alt="Iron Man Suit Technology"
                      className="w-full h-full object-cover rounded-lg filter brightness-110 contrast-105 hover:scale-105 transition-transform duration-500"
                      style={{
                        filter: 'sepia(20%) saturate(120%) hue-rotate(340deg) brightness(1.1)',
                        boxShadow: '0 0 50px rgba(220, 20, 60, 0.3), inset 0 0 30px rgba(255, 215, 0, 0.1)'
                      }}
                    />
                    
                    {/* Arc Reactor Glow Effect */}
                    <div className="absolute inset-0 rounded-lg pointer-events-none">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-400 rounded-full opacity-30 animate-pulse" 
                           style={{
                             background: 'radial-gradient(circle, rgba(0, 212, 255, 0.6) 0%, transparent 70%)',
                             filter: 'blur(10px)'
                           }}>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Overlay UI Elements */}
              <div className="absolute top-4 right-4 iron-interface p-3 rounded">
                <div className="iron-text text-xs">
                  ARC REACTOR STATUS: ONLINE
                </div>
                <div className="text-iron-gold text-sm font-semibold">
                  100% POWER
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 iron-interface p-3 rounded">
                <div className="iron-text text-xs">
                  WORKSHOP MODE: ACTIVE
                </div>
                <div className="text-iron-gold text-sm font-semibold">
                  ALL SYSTEMS OPERATIONAL
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-20 bg-bg-secondary mt-16">
        <div className="dark-content-container">
          <div className="text-center mb-12">
            <h2 className="display-large mb-6">
              The <span className="iron-text">Stark</span> Workshop
            </h2>
            <p className="body-large text-text-secondary max-w-3xl mx-auto">
              Like Tony Stark's workshop, this digital space houses cutting-edge innovations, 
              from advanced web applications to AI-powered solutions.
            </p>
          </div>

          <div className="dark-grid">
            <Link to="/experience" className="hud-element iron-hover group">
              <h3 className="heading-2 iron-text mb-4">Experience Lab</h3>
              <p className="body-medium text-text-secondary">
                Battle-tested through real-world software engineering challenges, 
                much like Stark's field experience with the Iron Man suits.
              </p>
              <div className="mt-6 flex items-center iron-text iron-transition">
                <span className="mr-2">Explore Experience</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link to="/skills" className="hud-element iron-hover group">
              <h3 className="heading-2 iron-text mb-4">Tech Arsenal</h3>
              <p className="body-medium text-text-secondary">
                A comprehensive collection of technologies and frameworks, 
                constantly upgraded like Stark's ever-evolving suit designs.
              </p>
              <div className="mt-6 flex items-center iron-text iron-transition">
                <span className="mr-2">View Arsenal</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link to="/projects" className="hud-element iron-hover group">
              <h3 className="heading-2 iron-text mb-4">Innovation Vault</h3>
              <p className="body-medium text-text-secondary">
                A showcase of breakthrough projects that demonstrate the fusion 
                of creativity and technical excellence.
              </p>
              <div className="mt-6 flex items-center iron-text iron-transition">
                <span className="mr-2">Enter Vault</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* JARVIS Assistant */}
      <JarvisAssistant />
    </div>
  );
};

export default Home;