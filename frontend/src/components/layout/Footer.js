import React from 'react';
import { Github, Linkedin, Mail, FileText, Instagram } from 'lucide-react';
import { socialLinks } from '../../mockData';

const Footer = () => {
  return (
    <footer className="bg-bg-secondary border-t border-border-subtle py-12">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="arc-reactor">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">YG</span>
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold text-white">Yash Gohel</div>
                <div className="text-sm text-brand-primary">Tony Stark</div>
              </div>
            </div>
            <p className="body-small text-text-secondary max-w-md">
              Building the future, one line of code at a time. Like Tony Stark, I create innovative solutions that push the boundaries of technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="heading-3 text-brand-primary">Workshop Sections</h3>
            <nav className="flex flex-col space-y-2">
              <a href="/about" className="body-small text-text-muted hover:text-brand-primary transition-colors">
                About the Engineer
              </a>
              <a href="/projects" className="body-small text-text-muted hover:text-brand-primary transition-colors">
                Project Arsenal
              </a>
              <a href="/skills" className="body-small text-text-muted hover:text-brand-primary transition-colors">
                Technical Abilities
              </a>
              <a href="/experience" className="body-small text-text-muted hover:text-brand-primary transition-colors">
                Battle Experience
              </a>
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h3 className="heading-3 text-brand-primary">Connect</h3>
            <div className="flex space-x-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-brand-hover hover:bg-brand-primary hover:text-white rounded-full transition-all duration-300 dark-hover"
                title="GitHub Repository"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-brand-hover hover:bg-brand-primary hover:text-white rounded-full transition-all duration-300 dark-hover"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-brand-hover hover:bg-brand-primary hover:text-white rounded-full transition-all duration-300 dark-hover"
                title="Instagram Profile"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="p-3 bg-brand-hover hover:bg-brand-primary hover:text-white rounded-full transition-all duration-300 dark-hover"
                title="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-brand-hover hover:bg-brand-primary hover:text-white rounded-full transition-all duration-300 dark-hover"
                title="Download Resume"
              >
                <FileText className="w-5 h-5" />
              </a>
            </div>
            <div className="jarvis-interface p-4 rounded">
              <p className="jarvis-text text-sm">
                "All systems online, Mr. Stark. Workshop ready for collaboration."
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border-subtle">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="body-small text-text-muted">
              © 2025 Yash Gohel. Inspired by the genius of Tony Stark.
            </p>
            <p className="body-small text-text-muted mt-2 md:mt-0">
              JARVIS-powered portfolio • Built with React & Innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;