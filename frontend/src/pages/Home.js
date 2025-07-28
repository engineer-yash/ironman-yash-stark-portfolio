import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Play, Zap } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { personalInfo, achievements } from '../mockData';
import { useJarvis } from '../context/JarvisContext';
import JarvisAssistant from '../components/JarvisAssistant';

const Home = () => {
  const [currentAchievement, setCurrentAchievement] = useState(0);
  const { speak, isActive } = useJarvis();

  // Rotate through achievements
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAchievement((prev) => (prev + 1) % achievements.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Welcome message when component mounts
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        speak("Welcome to the digital workshop of Yash Gohel, also known as Tony Stark. All systems are online and ready for exploration.");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [speak, isActive]);

  const handleWatchDemo = () => {
    speak("Initiating project demonstration sequence. Please stand by while I showcase Mr. Stark's technological achievements.");
  };

  return (
    <div className="dark-container min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="dark-full-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Intro */}
              <div className="space-y-4">
                <div className="jarvis-text text-sm font-semibold tracking-wider">
                  {'> INITIALIZING STARK INDUSTRIES PROTOCOL...'}
                </div>
                <h1 className="display-huge">
                  <span className="hologram" data-text="YASH">YASH</span>{' '}
                  <span className="hologram" data-text="GOHEL">GOHEL</span>
                </h1>
                <div className="display-medium text-brand-primary">
                  Also Known As{' '}
                  <span className="text-iron-gold">Tony Stark</span>
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
                <div className="jarvis-interface p-4 rounded">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-jarvis-green" />
                    <span className="jarvis-text text-sm font-semibold">
                      CURRENT SYSTEM STATUS:
                    </span>
                  </div>
                  <p className="text-white mt-2 text-lg">
                    {achievements[currentAchievement]}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects" className="btn-primary dark-button-animate">
                  <span>Explore Projects</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button onClick={handleWatchDemo} className="btn-secondary dark-button-animate">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
                <a
                  href={personalInfo.profileImage}
                  download
                  className="btn-secondary dark-button-animate"
                >
                  <Download className="w-5 h-5" />
                  <span>Resume</span>
                </a>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center space-y-2">
                  <div className="display-medium text-brand-primary">5+</div>
                  <div className="body-small text-text-muted">Projects Built</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="display-medium text-brand-primary">95%</div>
                  <div className="body-small text-text-muted">Bug Resolution</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="display-medium text-brand-primary">40%</div>
                  <div className="body-small text-text-muted">Performance Gain</div>
                </div>
              </div>
            </div>

            {/* Right - 3D Spline Animation */}
            <div className="relative">
              <div 
                className="w-full h-96 lg:h-[600px] relative overflow-visible"
                style={{ 
                  width: "100%", 
                  height: "600px", 
                  overflow: "visible", 
                  position: "relative" 
                }}
              >
                <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
              </div>
              
              {/* Overlay UI Elements */}
              <div className="absolute top-4 right-4 jarvis-interface p-3 rounded">
                <div className="jarvis-text text-xs">
                  ARC REACTOR STATUS: ONLINE
                </div>
                <div className="text-brand-primary text-sm font-semibold">
                  100% POWER
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 jarvis-interface p-3 rounded">
                <div className="jarvis-text text-xs">
                  WORKSHOP MODE: ACTIVE
                </div>
                <div className="text-brand-primary text-sm font-semibold">
                  ALL SYSTEMS OPERATIONAL
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-brand-primary rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-20 bg-bg-secondary">
        <div className="dark-content-container">
          <div className="text-center mb-16">
            <h2 className="display-large mb-6">
              The <span className="text-brand-primary">Stark</span> Workshop
            </h2>
            <p className="body-large text-text-secondary max-w-3xl mx-auto">
              Like Tony Stark's workshop, this digital space houses cutting-edge innovations, 
              from advanced web applications to AI-powered solutions.
            </p>
          </div>

          <div className="dark-grid">
            <Link to="/experience" className="hud-element dark-hover group">
              <h3 className="heading-2 text-brand-primary mb-4">Experience Lab</h3>
              <p className="body-medium text-text-secondary">
                Battle-tested through real-world software engineering challenges, 
                much like Stark's field experience with the Iron Man suits.
              </p>
              <div className="mt-6 flex items-center text-brand-primary group-hover:translate-x-2 transition-transform">
                <span className="mr-2">Explore Experience</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link to="/skills" className="hud-element dark-hover group">
              <h3 className="heading-2 text-brand-primary mb-4">Tech Arsenal</h3>
              <p className="body-medium text-text-secondary">
                A comprehensive collection of technologies and frameworks, 
                constantly upgraded like Stark's ever-evolving suit designs.
              </p>
              <div className="mt-6 flex items-center text-brand-primary group-hover:translate-x-2 transition-transform">
                <span className="mr-2">View Arsenal</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link to="/projects" className="hud-element dark-hover group">
              <h3 className="heading-2 text-brand-primary mb-4">Innovation Vault</h3>
              <p className="body-medium text-text-secondary">
                A showcase of breakthrough projects that demonstrate the fusion 
                of creativity and technical excellence.
              </p>
              <div className="mt-6 flex items-center text-brand-primary group-hover:translate-x-2 transition-transform">
                <span className="mr-2">Enter Vault</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* JARVIS Assistant */}
      <JarvisAssistant />

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(90deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
          75% { transform: translateY(-10px) rotate(270deg); }
        }
      `}</style>
    </div>
  );
};

export default Home;