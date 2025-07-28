import React, { useEffect } from 'react';
import { User, MapPin, Mail, Zap, Target, Heart } from 'lucide-react';
import { personalInfo } from '../mockData';
import { useJarvis } from '../context/JarvisContext';

const About = () => {
  const { speak, isActive } = useJarvis();

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        speak("Welcome to Mr. Stark's personal profile. Here you'll learn about the man behind the genius engineer.");
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
            About <span className="text-brand-primary">Tony Stark</span>
          </h1>
          <p className="body-large text-text-secondary max-w-3xl mx-auto">
            The man behind the genius. A software engineer who thinks like Tony Stark, 
            building the future one innovation at a time.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Profile Image & Basic Info */}
          <div className="space-y-8">
            <div className="hud-element p-8 text-center">
              <div className="arc-reactor mb-6 inline-block">
                <img
                  src={personalInfo.profileImage}
                  alt="Yash Gohel"
                  className="w-48 h-48 rounded-full object-cover mx-auto border-4 border-brand-primary"
                />
              </div>
              
              <h2 className="heading-1 mb-2">{personalInfo.name}</h2>
              <p className="body-large text-brand-primary mb-4">{personalInfo.alias}</p>
              <p className="heading-3 text-text-secondary mb-6">{personalInfo.title}</p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3 text-text-secondary">
                  <MapPin className="w-5 h-5 text-brand-primary" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-text-secondary">
                  <Mail className="w-5 h-5 text-brand-primary" />
                  <span>{personalInfo.email}</span>
                </div>
              </div>
            </div>

            {/* JARVIS Analysis */}
            <div className="jarvis-interface p-6 rounded">
              <div className="flex items-center space-x-3 mb-4">
                <User className="w-5 h-5 text-jarvis-green" />
                <span className="jarvis-text text-sm font-semibold">
                  JARVIS PERSONALITY ANALYSIS:
                </span>
              </div>
              <p className="text-white leading-relaxed">
                "Mr. Stark exhibits the same innovative drive and problem-solving acuity 
                as his namesake. His approach to software engineering mirrors Tony Stark's 
                methodology: identify the problem, engineer an elegant solution, and optimize 
                for maximum impact."
              </p>
            </div>
          </div>

          {/* Right - Detailed Bio & Philosophy */}
          <div className="space-y-8">
            <div className="hud-element">
              <h3 className="heading-2 text-brand-primary mb-6">The Engineer's Mind</h3>
              <div className="space-y-4 text-text-secondary body-medium">
                <p>
                  Like Tony Stark, I believe that technology should serve humanity. 
                  My journey in software engineering began with a simple principle: 
                  every line of code should contribute to making the world more efficient, 
                  more connected, and more innovative.
                </p>
                <p>
                  With a Bachelor's degree in Computer Engineering from Gujarat Technological University 
                  and hands-on experience in full-stack development, I've built applications that 
                  handle real-world challenges—from event management platforms to AI-powered systems.
                </p>
                <p>
                  {personalInfo.bio}
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="space-y-6">
              <h3 className="heading-2 text-brand-primary">Core Values</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-bg-secondary rounded border border-border-subtle">
                  <Target className="w-6 h-6 text-brand-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="heading-3 text-white mb-2">Innovation First</h4>
                    <p className="body-small text-text-secondary">
                      Always seeking new technologies and methodologies to solve complex problems 
                      with elegant, efficient solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-bg-secondary rounded border border-border-subtle">
                  <Zap className="w-6 h-6 text-brand-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="heading-3 text-white mb-2">Performance Excellence</h4>
                    <p className="body-small text-text-secondary">
                      Committed to delivering high-performance applications with 95%+ bug resolution 
                      rates and continuous optimization.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-bg-secondary rounded border border-border-subtle">
                  <Heart className="w-6 h-6 text-brand-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="heading-3 text-white mb-2">Team Collaboration</h4>
                    <p className="body-small text-text-secondary">
                      Leading teams with 100% collaboration success, believing that the best 
                      innovations come from collective genius.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fun Facts */}
            <div className="hud-element">
              <h3 className="heading-2 text-brand-primary mb-6">Stark-Level Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-bg-secondary rounded">
                  <div className="display-medium text-brand-primary">8.96</div>
                  <div className="body-small text-text-muted">College CGPA</div>
                  <div className="text-xs text-jarvis-green mt-1">Out of 10</div>
                </div>
                <div className="text-center p-4 bg-bg-secondary rounded">
                  <div className="display-medium text-brand-primary">20+</div>
                  <div className="body-small text-text-muted">Sprint Tasks</div>
                  <div className="text-xs text-jarvis-green mt-1">Per Week</div>
                </div>
                <div className="text-center p-4 bg-bg-secondary rounded">
                  <div className="display-medium text-brand-primary">6</div>
                  <div className="body-small text-text-muted">Team Members</div>
                  <div className="text-xs text-jarvis-green mt-1">Led Successfully</div>
                </div>
                <div className="text-center p-4 bg-bg-secondary rounded">
                  <div className="display-medium text-brand-primary">2x</div>
                  <div className="body-small text-text-muted">Registration Boost</div>
                  <div className="text-xs text-jarvis-green mt-1">SpectrOm'23</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="jarvis-interface p-8 rounded max-w-4xl mx-auto">
            <h3 className="heading-2 text-brand-primary mb-6">Mission Statement</h3>
            <p className="body-large text-white leading-relaxed">
              "To build technology that doesn't just work, but inspires. To create digital solutions 
              that push boundaries, solve real problems, and make the impossible possible. 
              Like Tony Stark's arc reactor powers the Iron Man suit, 
              my passion for innovation powers every project I touch."
            </p>
            <div className="mt-6">
              <span className="jarvis-text">- Yash Gohel (Tony Stark)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;