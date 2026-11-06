import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight, Download, Mail, Github, Linkedin, MapPin, Zap,
  Trophy, Users, Gauge, Rocket, Bot,
} from 'lucide-react';
import { personalInfo, skillCategories, achievements, socialLinks } from '../mockData';
import Reveal from '../components/Reveal';
import { useJarvis } from '../context/JarvisContext';
import JarvisAssistant from '../components/JarvisAssistant';


const achievementIcons = { Trophy, Users, Gauge, Rocket, Bot };
const heroEase = [0.22, 1, 0.36, 1];

const HeroLine = ({ text, delay }) => (
  <span className="mask-line">
    <motion.span
      initial={{ y: '110%' }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, delay, ease: heroEase }}
    >
      {text}
    </motion.span>
  </span>
);

const HeroFade = ({ children, delay, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay, ease: heroEase }}
  >
    {children}
  </motion.div>
);

const heroStats = [
  ['3+', 'Years Experience'],
  ['5+', 'Projects Delivered'],
  ['40%', 'Query Optimization'],
];

const Home = () => {
  const [currentAchievement, setCurrentAchievement] = useState(0);
  const { speak, isActive } = useJarvis();
  const { scrollY } = useScroll();
  const reactorY = useTransform(scrollY, [0, 600], [0, 70]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAchievement((prev) => (prev + 1) % achievements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        speak('Welcome to the digital workshop of Yash Gohel. All systems are online and ready for exploration.');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [speak, isActive]);

  const dotnet = skillCategories.find((c) => c.id === 'dotnet');
  const frontend = skillCategories.find((c) => c.id === 'frontend');
  const database = skillCategories.find((c) => c.id === 'database');
  const marqueeSkills = [
    ...dotnet.skills.slice(0, 10),
    ...frontend.skills,
    ...database.skills.slice(0, 6),
  ];

  return (
    <div className="dark-container min-h-screen relative">
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

      <div className="relative z-10">
        {/* ============ HERO ============ */}
        <section className="relative min-h-screen flex items-center pt-4 sm:pt-8">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
              {/* Left — identity */}
              <div className="space-y-5 lg:space-y-6">
                <HeroFade delay={0.05}>
                  <div className="hud-label">{'> STARK INDUSTRIES // ENGINEER DOSSIER'}</div>
                </HeroFade>

                {personalInfo.availability && (
                  <HeroFade delay={0.12}>
                    <span className="availability-badge">{personalInfo.availability}</span>
                  </HeroFade>
                )}

                <h1 className="display-huge" data-testid="hero-name">
                  <HeroLine text="YASH" delay={0.15} />
                  <HeroLine text="GOHEL" delay={0.3} />
                </h1>

                <HeroFade delay={0.5}>
                  <p className="text-lg sm:text-xl font-semibold text-white">
                    {personalInfo.heroTitle}
                  </p>
                  <p className="iron-text text-xs sm:text-sm mt-2 tracking-wide">
                    {personalInfo.title}
                  </p>
                </HeroFade>

                <HeroFade delay={0.62}>
                  <p className="body-large text-text-secondary max-w-xl">
                    {personalInfo.tagline}
                  </p>
                </HeroFade>

                <HeroFade delay={0.74}>
                  <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                    <Link
                      to="/projects"
                      className="btn-primary iron-button-animate"
                      data-testid="explore-projects-btn"
                    >
                      <span>Explore My Projects</span>
                      <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                    </Link>
                    <a
                      href={socialLinks.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary iron-button-animate"
                      data-testid="download-resume-btn"
                    >
                      <Download className="w-4 h-4 lg:w-5 lg:h-5" />
                      <span>Download Resume</span>
                    </a>
                    <Link
                      to="/contact"
                      className="btn-secondary iron-button-animate"
                      data-testid="contact-me-btn"
                    >
                      <span>Contact Me</span>
                    </Link>
                  </div>
                </HeroFade>

                <HeroFade delay={0.85}>
                  <div className="flex flex-wrap items-center gap-4 text-text-secondary">
                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub"
                      data-testid="hero-github-link"
                      className="p-2.5 border border-[rgba(220,20,60,0.5)] rounded-full hover:border-[#ffd700] hover:text-[#ffd700] hover:shadow-[0_0_14px_rgba(255,215,0,0.25)] transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="LinkedIn"
                      data-testid="hero-linkedin-link"
                      className="p-2.5 border border-[rgba(220,20,60,0.5)] rounded-full hover:border-[#ffd700] hover:text-[#ffd700] hover:shadow-[0_0_14px_rgba(255,215,0,0.25)] transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${socialLinks.email}`}
                      title="Email"
                      data-testid="hero-email-link"
                      className="p-2.5 border border-[rgba(220,20,60,0.5)] rounded-full hover:border-[#ffd700] hover:text-[#ffd700] hover:shadow-[0_0_14px_rgba(255,215,0,0.25)] transition-all duration-300"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <span className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-brand-primary" />
                      {personalInfo.shortLocation}
                    </span>
                  </div>
                </HeroFade>

                <HeroFade delay={0.95}>
                  <div className="grid grid-cols-3 gap-3 lg:gap-5 pt-4">
                    {heroStats.map(([value, label]) => (
                      <div
                        key={label}
                        className="text-center space-y-1 p-3 lg:p-4 rounded-lg border border-[rgba(220,20,60,0.4)] bg-brand-hover"
                      >
                        <div className="display-medium iron-text">{value}</div>
                        <div className="text-xs sm:text-sm text-text-muted">{label}</div>
                      </div>
                    ))}
                  </div>
                </HeroFade>
              </div>

              {/* Right — arc reactor visual with subtle parallax */}
              <motion.div style={{ y: reactorY }} className="relative mt-10 lg:mt-0">
                <div
                  className="w-full h-80 sm:h-96 lg:h-[580px] relative overflow-hidden rounded-xl border border-[rgba(220,20,60,0.35)]"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(220, 20, 60, 0.1) 0%, rgba(255, 215, 0, 0.05) 100%)',
                  }}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
                      <img
                        src={personalInfo.heroImage}
                        alt="Iron Man suit technology — arc reactor core"
                        className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                        style={{
                          filter: 'sepia(20%) saturate(120%) hue-rotate(340deg) brightness(1.1)',
                          boxShadow:
                            '0 0 50px rgba(220, 20, 60, 0.3), inset 0 0 30px rgba(255, 215, 0, 0.1)',
                        }}
                      />
                      <div className="absolute inset-0 rounded-xl pointer-events-none">
                        <div
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 lg:w-20 lg:h-20 rounded-full opacity-30 animate-pulse"
                          style={{
                            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.6) 0%, transparent 70%)',
                            filter: 'blur(10px)',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 iron-interface p-2 sm:p-3 rounded">
                  <div className="iron-text text-[10px] sm:text-xs">ARC REACTOR STATUS: ONLINE</div>
                  <div className="text-[#ffd700] text-xs sm:text-sm font-semibold">100% POWER</div>
                </div>

                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 iron-interface p-2 sm:p-3 rounded">
                  <div className="iron-text text-[10px] sm:text-xs">WORKSHOP MODE: ACTIVE</div>
                  <div className="text-[#ffd700] text-xs sm:text-sm font-semibold">ALL SYSTEMS OPERATIONAL</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============ TECH MARQUEE ============ */}
        <section
          className="marquee border-y border-[rgba(220,20,60,0.3)] bg-[rgba(18,18,23,0.7)] py-4"
          aria-label="Core technology stack"
        >
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex"
                {...(copy === 1 ? { 'aria-hidden': true } : {})}
              >
                {marqueeSkills.map((skill, i) => (
                  <span key={`${copy}-${i}`} className="marquee-item">
                    {skill}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ============ QUICK OVERVIEW ============ */}
        <section className="py-14 lg:py-20 bg-[rgba(18,18,23,0.55)] mt-10">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-10">
              <div className="hud-label mb-3">WORKSHOP INDEX // QUICK ACCESS</div>
              <h2 className="display-large mb-4">
                The <span className="text-brand-primary">Stark</span> Workshop
              </h2>
              <p className="body-large text-text-secondary max-w-3xl mx-auto">
                Cutting-edge engineering, from .NET business systems to AI-powered
                applications — every section of the lab is open for exploration.
              </p>
            </Reveal>

            <div className="dark-grid !py-0">
              <Reveal>
                <Link to="/experience" className="hud-element iron-hover group block h-full" data-testid="quick-experience-card">
                  <div className="hud-label mb-3">01 // MISSION LOG</div>
                  <h3 className="heading-2 iron-text mb-3">Experience Lab</h3>
                  <p className="body-medium text-text-secondary">
                    Battle-tested across a FinTech product team, a year on the .NET
                    stack, and end-to-end freelance delivery through YG Web Studio.
                  </p>
                  <div className="mt-6 flex items-center iron-text iron-transition">
                    <span className="mr-2">Explore Experience</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </Reveal>

              <Reveal delay={0.08}>
                <Link to="/skills" className="hud-element iron-hover group block h-full" data-testid="quick-skills-card">
                  <div className="hud-label mb-3">02 // CAPABILITY MATRIX</div>
                  <h3 className="heading-2 iron-text mb-3">Tech Arsenal</h3>
                  <p className="body-medium text-text-secondary">
                    C# and the Microsoft .NET ecosystem at the core — with React,
                    Azure, SQL Server, and AI-assisted tooling in support.
                  </p>
                  <div className="mt-6 flex items-center iron-text iron-transition">
                    <span className="mr-2">View Arsenal</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </Reveal>

              <Reveal delay={0.16}>
                <Link to="/projects" className="hud-element iron-hover group block h-full" data-testid="quick-projects-card">
                  <div className="hud-label mb-3">03 // INNORATION VAULT</div>
                  <h3 className="heading-2 iron-text mb-3">Innovation Vault</h3>
                  <p className="body-medium text-text-secondary">
                    Live AI applications, production e-commerce builds, and a
                    national hackathon winner — all fully documented.
                  </p>
                  <div className="mt-6 flex items-center iron-text iron-transition">
                    <span className="mr-2">Enter Vault</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ ACHIEVEMENTS ============ */}
        <section className="py-14 lg:py-20">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-10">
              <div className="hud-label mb-3">MEDALS // MISSION RECORDS</div>
              <h2 className="display-large mb-4">
                Achievements <span className="text-brand-primary">Unlocked</span>
              </h2>
            </Reveal>

            <div className="dark-grid !py-0 max-w-6xl">
              {achievements.map((item, index) => {
                const ItemIcon = achievementIcons[item.icon] || Trophy;
                return (
                  <Reveal key={item.id} delay={index * 0.06}>
                    <div className="hud-element dark-hover h-full" data-testid={`achievement-card-${item.id}`}>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-[rgba(220,20,60,0.9)] border-2 border-[#ffd700] flex items-center justify-center flex-shrink-0">
                          <ItemIcon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="heading-3 text-white mb-2">{item.title}</h3>
                          <p className="body-small text-text-secondary">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ CURRENT SYSTEM STATUS ============ */}
        <section className="pb-20">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="iron-interface p-5 lg:p-6 rounded-lg max-w-3xl mx-auto" data-testid="achievement-ticker">
                <div className="flex items-center space-x-3">
                  <Zap className="w-4 h-4 lg:w-5 lg:h-5 text-[#ffd700] animate-pulse" />
                  <span className="iron-text text-xs sm:text-sm font-semibold">
                    CURRENT SYSTEM STATUS:
                  </span>
                </div>
                <p className="text-white mt-3 text-base lg:text-lg font-medium">
                  {achievements[currentAchievement].title}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <JarvisAssistant />
      </div>
    </div>
  );
};

export default Home;
