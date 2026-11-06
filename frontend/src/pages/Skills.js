import React, { useState, useEffect } from 'react';
import { Code, Layers, Globe, Database, Cloud, Target, Bot, Zap } from 'lucide-react';
import { skillCategories } from '../mockData';
import Reveal from '../components/Reveal';
import AmbientFX from '../components/AmbientFX';
import { useJarvis } from '../context/JarvisContext';

const categoryIcons = { Code, Layers, Globe, Database, Cloud, Target, Bot };

const Skills = () => {
  const [activeId, setActiveId] = useState('dotnet');
  const { speak, isActive } = useJarvis();

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        speak('Welcome to the technology arsenal. Seven categories covering the full capability matrix, from the .NET ecosystem to AI-assisted development.');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [speak, isActive]);

  const category = skillCategories.find((c) => c.id === activeId) || skillCategories[0];
  const ActiveIcon = categoryIcons[category.icon] || Code;
  const totalSkills = skillCategories.reduce((sum, c) => sum + c.skills.length, 0);

  const handleCategoryChange = (id) => {
    setActiveId(id);
    if (isActive) {
      const next = skillCategories.find((c) => c.id === id);
      if (next) speak(`Displaying ${next.name} from the arsenal.`);
    }
  };

  return (
    <div className="dark-container min-h-screen py-20 relative">
      <AmbientFX />

      <div className="dark-content-container relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="hud-label mb-3">CAPABILITY MATRIX // FULL SPECTRUM</div>
          <h1 className="display-large mb-5">
            Tech <span className="text-brand-primary">Arsenal</span>
          </h1>
          <p className="body-large text-text-secondary max-w-3xl mx-auto">
            A categorized view of the technologies and practices behind my work —
            from the Microsoft .NET ecosystem to AI-assisted development. No
            inflated percentages; just verified capability.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((c) => {
            const TabIcon = categoryIcons[c.icon] || Code;
            const active = c.id === activeId;
            return (
              <button
                key={c.id}
                onClick={() => handleCategoryChange(c.id)}
                data-testid={`skill-tab-${c.id}`}
                className={`px-4 sm:px-5 py-2.5 rounded-lg border flex items-center gap-2.5 transition-all duration-300 ${
                  active
                    ? 'bg-[rgba(220,20,60,0.9)] text-white border-[#ffd700] shadow-lg shadow-[rgba(220,20,60,0.35)]'
                    : 'bg-[rgba(18,18,23,0.8)] text-text-secondary border-[rgba(220,20,60,0.3)] hover:border-[#ffd700] hover:text-white'
                }`}
              >
                <TabIcon className="w-4 h-4" />
                <span className="text-sm font-medium">{c.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active category panel */}
        <Reveal key={category.id}>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-16">
            <div className="xl:col-span-2 hud-element">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-lg bg-[rgba(220,20,60,0.15)] border border-[rgba(220,20,60,0.5)] flex items-center justify-center flex-shrink-0">
                  <ActiveIcon className="w-6 h-6 text-[#ffd700]" />
                </div>
                <div>
                  <h2 className="heading-1 text-white">{category.name}</h2>
                  <p className="body-small text-text-muted">{category.blurb}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-6" data-testid="skill-chips">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="jarvis-interface p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-5 h-5 text-jarvis-green" />
                  <span className="jarvis-text text-sm font-semibold">JARVIS ARSENAL ANALYSIS</span>
                </div>
                <p className="text-white text-sm leading-relaxed">
                  "{category.name} — {category.blurb} Every entry cross-checked
                  against real project work, sir. Capability without exaggeration."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="hud-element text-center">
                  <div className="display-medium text-brand-primary">{category.skills.length}</div>
                  <div className="text-xs text-text-muted mt-1">In This Category</div>
                </div>
                <div className="hud-element text-center">
                  <div className="display-medium text-brand-primary">{totalSkills}</div>
                  <div className="text-xs text-text-muted mt-1">Total Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Full capability matrix */}
        <h2 className="heading-1 text-center text-brand-primary mb-10">
          Full <span className="text-white">Capability Matrix</span>
        </h2>

        <div className="dark-grid !py-0 max-w-6xl mb-16">
          {skillCategories.map((c, index) => {
            const CardIcon = categoryIcons[c.icon] || Code;
            return (
              <Reveal key={c.id} delay={index * 0.05}>
                <button
                  onClick={() => handleCategoryChange(c.id)}
                  className="hud-element dark-hover w-full text-left h-full"
                  data-testid={`skill-card-${c.id}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <CardIcon className="w-5 h-5 text-[#ffd700] flex-shrink-0" />
                    <h3 className="heading-3 text-white">{c.name}</h3>
                  </div>
                  <p className="text-xs text-text-muted mb-4 leading-relaxed">
                    {c.skills.slice(0, 6).join(' · ')}
                    {c.skills.length > 6 ? ` · +${c.skills.length - 6} more` : ''}
                  </p>
                  <span className="hud-label">{c.skills.length} Technologies</span>
                </button>
              </Reveal>
            );
          })}
        </div>

        {/* Call to Action */}
        <Reveal>
          <div className="jarvis-interface p-8 rounded max-w-4xl mx-auto text-center">
            <h3 className="heading-2 text-brand-primary mb-5">Ready to Build Something Amazing?</h3>
            <p className="body-large text-white mb-8">
              The right stack, engineered the right way. Let's put this arsenal to
              work on your next challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/projects" className="btn-primary dark-button-animate">
                <span>See Skills in Action</span>
                <Code className="w-5 h-5" />
              </a>
              <a href="/contact" className="btn-secondary dark-button-animate">
                <span>Start a Project</span>
                <Zap className="w-5 h-5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Skills;
