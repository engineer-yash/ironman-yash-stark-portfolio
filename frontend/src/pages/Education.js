import React, { useEffect } from 'react';
import { GraduationCap, Calendar, Award, Lightbulb, Trophy, Lightbulb as Bulb } from 'lucide-react';
import { education } from '../mockData';
import Reveal from '../components/Reveal';
import { useJarvis } from '../context/JarvisContext';
import BackgroundEffects from '../components/BackgroundEffects';

const Education = () => {
  const { speak, isActive } = useJarvis();

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        speak('Academic foundation loaded. Bachelor of Engineering in Computer Engineering with an Artificial Intelligence and Machine Learning specialization.');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [speak, isActive]);

  const highlights = [
    {
      icon: Trophy,
      title: 'National Level Winner',
      text: 'Smart India Hackathon 2022 — Dairy Farm Management System for the Ministry of Fisheries, Animal Husbandry & Dairying.',
    },
    {
      icon: Award,
      title: '8.96 / 10 BE CGPA',
      text: 'Bachelor of Engineering in Computer Engineering, completed 2021 – 2024.',
    },
    {
      icon: Lightbulb,
      title: 'AI & ML Specialization',
      text: 'Dedicated Artificial Intelligence & Machine Learning track during the BE program.',
    },
  ];

  return (
    <div className="dark-container min-h-screen py-20 relative">
      <BackgroundEffects />

      <div className="dark-content-container relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="hud-label mb-3">ACADEMIC RECORDS // FOUNDATION DATA</div>
          <h1 className="display-large mb-5">
            Academic <span className="text-brand-primary">Foundation</span>
          </h1>
          <p className="body-large text-text-secondary max-w-3xl mx-auto">
            The engineering fundamentals behind the practical work — computer
            engineering with an AI/ML specialization.
          </p>
        </div>

        {/* Education records */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <Reveal key={edu.id} delay={index * 0.08} className="h-full">
              <div className="hud-element h-full flex flex-col" data-testid={`education-card-${edu.id}`}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-[rgba(220,20,60,0.9)] border-2 border-[#ffd700] flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="heading-2 text-brand-primary">{edu.degree}</h2>
                    <p className="body-medium text-white">{edu.field}</p>
                    {edu.specialization && (
                      <p className="body-small text-[#ffd700] mt-1">
                        Specialization: {edu.specialization}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {edu.institution && (
                    <p className="body-medium text-text-secondary">{edu.institution}</p>
                  )}
                  <div className="flex items-center gap-2 text-text-muted">
                    <Calendar className="w-4 h-4 text-brand-primary" />
                    <span className="body-small">{edu.duration}</span>
                  </div>
                </div>

                <div className="jarvis-interface p-5 mt-auto text-center">
                  <div className="display-medium iron-text">
                    {edu.cgpa}
                    <span className="text-base text-text-muted"> /{edu.cgpaScale}</span>
                  </div>
                  <div className="hud-label mt-1">CGPA</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Highlights */}
        <h2 className="heading-1 text-center text-brand-primary mb-10">
          Academic <span className="text-white">Highlights</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.07} className="h-full">
              <div className="hud-element p-7 text-center h-full">
                <div className="w-14 h-14 rounded-full bg-[rgba(220,20,60,0.9)] border-2 border-[#ffd700] flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="heading-3 text-brand-primary mb-2">{item.title}</h3>
                <p className="body-small text-text-secondary">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* JARVIS analysis */}
        <Reveal>
          <div className="jarvis-interface p-8 rounded max-w-4xl mx-auto mb-14">
            <div className="flex items-center gap-3 mb-5">
              <GraduationCap className="w-6 h-6 text-jarvis-green" />
              <span className="jarvis-text text-lg font-semibold">JARVIS ACADEMIC ANALYSIS</span>
            </div>
            <p className="text-white leading-relaxed">
              "The 8.96 CGPA in Computer Engineering — with a dedicated AI/ML
              specialization — laid the theoretical groundwork for the practical
              engineering on display in the experience lab, sir. The diploma years
              established the discipline early: 8.00/10 while the fundamentals
              were still forming."
            </p>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal>
          <div className="text-center">
            <h2 className="heading-2 text-brand-primary mb-7">
              From <span className="text-white">Theory to Innovation</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/projects" className="btn-primary dark-button-animate">
                <span>See Theory in Action</span>
                <Bulb className="w-5 h-5" />
              </a>
              <a href="/skills" className="btn-secondary dark-button-animate">
                <span>Explore Technical Skills</span>
                <GraduationCap className="w-5 h-5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Education;
