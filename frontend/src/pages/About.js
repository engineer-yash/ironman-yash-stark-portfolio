import React, { useEffect } from 'react';
import { User, MapPin, Mail, Zap, Target, Heart } from 'lucide-react';
import { personalInfo } from '../mockData';
import Reveal from '../components/Reveal';
import { useJarvis } from '../context/JarvisContext';

const About = () => {
  const { speak, isActive } = useJarvis();

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        speak("Welcome to the engineer's profile. Yash Gohel — .NET specialist, full-stack developer, and AI application builder.");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [speak, isActive]);

  const coreValues = [
    {
      icon: Target,
      title: 'Innovation First',
      text: 'Always exploring new technologies and methodologies to solve complex problems with elegant, efficient solutions.',
    },
    {
      icon: Zap,
      title: 'Performance Excellence',
      text: 'Committed to optimization — from 40% SQL query performance gains to caching-driven application responsiveness.',
    },
    {
      icon: Heart,
      title: 'Team Collaboration',
      text: 'Led a six-member development team to a national win. The best innovations come from collective genius.',
    },
  ];

  const starkStats = [
    ['3+', 'Years Experience'],
    ['8.96', 'BE CGPA / 10'],
    ['6', 'Team Members Led'],
    ['40%', 'Query Optimization'],
  ];

  return (
    <div className="dark-container min-h-screen py-20 relative">
      <div className="absolute inset-0 pointer-events-none">
        {/* Arc Reactor inspired glow effects */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-pulse filter blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-red-500 rounded-full opacity-15 animate-pulse filter blur-2xl" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-yellow-400 rounded-full opacity-12 animate-pulse filter blur-2xl" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-500 rounded-full opacity-8 animate-pulse filter blur-3xl" style={{animationDelay: '3s'}}></div>
        
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

      <div className="dark-content-container relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="hud-label mb-3">ENGINEER DOSSIER // PERSONNEL FILE</div>
          <h1 className="display-large mb-5">
            About <span className="text-brand-primary">Yash Gohel</span>
          </h1>
          <p className="body-large text-text-secondary max-w-3xl mx-auto">
            Alias: Yash Stark. A software engineer who builds like Tony Stark
            works — ambitious systems, clean execution, zero shortcuts.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left — profile card */}
          <div className="space-y-8">
            <Reveal>
              <div className="hud-element p-8 text-center">
                <div className="arc-reactor mb-6 inline-block">
                  <img
                    src={personalInfo.profileImage}
                    alt="Yash Gohel"
                    className="w-44 h-44 rounded-full object-cover mx-auto border-4 border-brand-primary"
                  />
                </div>

                <h2 className="heading-1 mb-1">{personalInfo.name}</h2>
                <p className="body-large text-brand-primary mb-3">"{personalInfo.alias}"</p>
                <p className="heading-3 text-text-secondary mb-6">{personalInfo.title}</p>

                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-3 text-text-secondary">
                    <MapPin className="w-5 h-5 text-brand-primary" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-text-secondary">
                    <Mail className="w-5 h-5 text-brand-primary" />
                    <a href={`mailto:${personalInfo.email}`} className="hover:text-[#ffd700] transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="jarvis-interface p-6 rounded">
                <div className="flex items-center gap-3 mb-4">
                  <User className="w-5 h-5 text-jarvis-green" />
                  <span className="jarvis-text text-sm font-semibold">JARVIS PERSONALITY ANALYSIS:</span>
                </div>
                <p className="text-white leading-relaxed">
                  "Mr. Gohel exhibits the same innovative drive as his namesake:
                  identify the problem, engineer an elegant solution, optimize for
                  maximum impact. Specialization confirmed — the Microsoft .NET
                  ecosystem, with AI-powered applications as the current frontier."
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right — bio & values */}
          <div className="space-y-8">
            <Reveal>
              <div className="hud-element">
                <h3 className="heading-2 text-brand-primary mb-6">The Engineer's Mind</h3>
                <div className="space-y-4 body-medium text-text-secondary">
                  <p>
                    I believe technology should serve people first. Every line of
                    code should make a system faster, a workflow simpler, or a
                    product better — that principle has carried me from a national
                    hackathon win to production FinTech and AI-powered
                    applications.
                  </p>
                  <p>
                    With a Bachelor of Engineering in Computer Engineering
                    (Artificial Intelligence &amp; Machine Learning specialization)
                    from Om Engineering College, and 3+ years of hands-on
                    experience across professional roles, internships, and
                    client-facing freelance projects — I build business
                    applications that handle real-world challenges.
                  </p>
                  <p>{personalInfo.summary}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h3 className="heading-2 text-brand-primary mb-5">Core Values</h3>
              <div className="space-y-4">
                {coreValues.map((value) => (
                  <div
                    key={value.title}
                    className="flex items-start gap-4 p-4 bg-[rgba(18,18,23,0.85)] rounded-lg border border-[rgba(220,20,60,0.25)]"
                  >
                    <value.icon className="w-6 h-6 text-brand-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="heading-3 text-white mb-2">{value.title}</h4>
                      <p className="body-small text-text-secondary">{value.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="hud-element">
                <h3 className="heading-2 text-brand-primary mb-6">Stark-Level Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  {starkStats.map(([value, label]) => (
                    <div key={label} className="text-center p-4 bg-[rgba(18,18,23,0.85)] rounded-lg border border-[rgba(220,20,60,0.25)]">
                      <div className="display-medium text-brand-primary">{value}</div>
                      <div className="body-small text-text-muted mt-1">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Mission statement */}
        <Reveal>
          <div className="mt-16 text-center">
            <div className="jarvis-interface p-8 rounded max-w-4xl mx-auto">
              <h3 className="heading-2 text-brand-primary mb-6">Mission Statement</h3>
              <p className="body-large text-white leading-relaxed">
                "To build technology that doesn't just work, but inspires. To
                create digital solutions that push boundaries, solve real
                problems, and make the impossible possible. Like the arc reactor
                powers the suit, engineering discipline powers every project I
                touch."
              </p>
              <div className="mt-6">
                <span className="jarvis-text">— Yash Gohel (Yash Stark)</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default About;
