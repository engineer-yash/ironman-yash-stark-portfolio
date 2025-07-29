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
    <div className="dark-container min-h-screen relative">
      {/* Marvel-themed background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Arc Reactor inspired glow effects */}
        <div className="absolute top-32 right-20 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-pulse filter blur-3xl"></div>
        <div className="absolute top-96 left-10 w-24 h-24 bg-red-500 rounded-full opacity-15 animate-pulse filter blur-2xl" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-80 right-1/3 w-20 h-20 bg-yellow-400 rounded-full opacity-12 animate-pulse filter blur-2xl" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-28 h-28 bg-purple-500 rounded-full opacity-8 animate-pulse filter blur-3xl" style={{animationDelay: '3s'}}></div>
        
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
      
      <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 sm:pt-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8">
              {/* Intro */}
              <div className="space-y-4">
                <div className="iron-text text-xs sm:text-sm font-semibold tracking-wider animate-pulse">
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
                <div className="iron-interface p-4 lg:p-6 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-4 h-4 lg:w-5 lg:h-5 text-iron-gold animate-pulse" />
                    <span className="iron-text text-xs sm:text-sm font-semibold">
                      CURRENT SYSTEM STATUS:
                    </span>
                  </div>
                  <p className="text-white mt-3 text-base lg:text-lg font-medium">
                    {achievements[currentAchievement]}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects" className="btn-primary iron-button-animate">
                  <span>Explore Projects</span>
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                </Link>
                <a
                  href={socialLinks.resume}
                  download="Yash_Gohel_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary iron-button-animate"
                >
                  <Download className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span>Download Resume</span>
                </a>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 lg:gap-6 pt-6 lg:pt-8">
                <div className="text-center space-y-2 p-3 lg:p-4 bg-brand-hover rounded-lg border border-iron-red">
                  <div className="display-medium iron-text">5+</div>
                  <div className="body-small text-text-muted">Projects Built</div>
                </div>
                <div className="text-center space-y-2 p-3 lg:p-4 bg-brand-hover rounded-lg border border-iron-red">
                  <div className="display-medium iron-text">95%</div>
                  <div className="body-small text-text-muted">Bug Resolution</div>
                </div>
                <div className="text-center space-y-2 p-3 lg:p-4 bg-brand-hover rounded-lg border border-iron-red">
                  <div className="display-medium iron-text">40%</div>
                  <div className="body-small text-text-muted">Performance Gain</div>
                </div>
              </div>
            </div>

            {/* Right - Iron Man Suit Images */}
            <div className="relative mt-8 lg:mt-0">
              <div 
                className="w-full h-80 sm:h-96 lg:h-[600px] relative overflow-hidden rounded-lg"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(220, 20, 60, 0.1) 0%, rgba(255, 215, 0, 0.05) 100%)',
                  borderRadius: '12px'
                }}
              >
                {/* Iron Man Suit Image Display */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
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
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 lg:w-20 lg:h-20 bg-blue-400 rounded-full opacity-30 animate-pulse" 
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
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 iron-interface p-2 sm:p-3 rounded">
                <div className="iron-text text-xs">
                  ARC REACTOR STATUS: ONLINE
                </div>
                <div className="text-iron-gold text-xs sm:text-sm font-semibold">
                  100% POWER
                </div>
              </div>
              
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 iron-interface p-2 sm:p-3 rounded">
                <div className="iron-text text-xs">
                  WORKSHOP MODE: ACTIVE
                </div>
                <div className="text-iron-gold text-xs sm:text-sm font-semibold">
                  ALL SYSTEMS OPERATIONAL
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-12 lg:py-16 bg-bg-secondary mt-8 lg:mt-12">
        <div className="dark-content-container">
          <div className="text-center mb-8 lg:mb-10">
            <h2 className="display-large mb-4 lg:mb-5">
              The <span className="iron-text">Stark</span> Workshop
            </h2>
            <p className="body-large text-text-secondary max-w-3xl mx-auto">
              Like Tony Stark's workshop, this digital space houses cutting-edge innovations, 
              from advanced web applications to AI-powered solutions.
            </p>
          </div>

          <div className="dark-grid pb-8 lg:pb-12">
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
    </div>
  );
};

export default Home;