import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare, User } from 'lucide-react';
import { personalInfo, socialLinks } from '../mockData';
import { useJarvis } from '../context/JarvisContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const { speak, isActive } = useJarvis();

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        speak("Welcome to Mr. Stark's communication hub. JARVIS is ready to facilitate your connection with the workshop.");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [speak, isActive]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using FormSubmit.co service for form submission
      const response = await fetch('https://formsubmit.co/gohelyash11@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `New message from ${formData.name} - ${formData.subject}`,
          _captcha: 'false',
          _template: 'table'
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        if (isActive) {
          speak("Message received and processed. Mr. Stark will review your communication shortly. Thank you for reaching out to the workshop.");
        }
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later or contact directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="dark-container min-h-screen py-20">
        <div className="dark-content-container">
          <div className="text-center">
            <div className="jarvis-interface p-12 rounded max-w-2xl mx-auto">
              <div className="arc-reactor mb-8">
                <div className="w-24 h-24 bg-brand-primary rounded-full flex items-center justify-center mx-auto">
                  <Send className="w-12 h-12 text-black" />
                </div>
              </div>
              <h1 className="display-medium text-brand-primary mb-6">Message Sent Successfully</h1>
              <p className="body-large text-white mb-8 leading-relaxed">
                "Thank you for contacting the Stark Workshop. Your message has been received 
                and processed by JARVIS. Mr. Stark will review your communication and respond shortly."
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="btn-primary dark-button-animate"
              >
                <span>Send Another Message</span>
                <MessageSquare className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dark-container min-h-screen py-20">
      <div className="dark-content-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="display-large mb-6">
            Contact the <span className="text-brand-primary">Workshop</span>
          </h1>
          <p className="body-large text-text-secondary max-w-3xl mx-auto">
            Ready to collaborate on something extraordinary? Like Tony Stark's workshop, 
            this is where great ideas come to life. Let's build the future together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="hud-element p-8">
              <h2 className="heading-2 text-brand-primary mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="body-medium text-white">{personalInfo.email}</p>
                    <p className="body-small text-text-muted">Primary Communication</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="body-medium text-white">{personalInfo.phone}</p>
                    <p className="body-small text-text-muted">Direct Line to Workshop</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="body-medium text-white">{personalInfo.location}</p>
                    <p className="body-small text-text-muted">Workshop Location</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="hud-element p-8">
              <h3 className="heading-3 text-brand-primary mb-6">Connect Online</h3>
              
              <div className="space-y-4">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-bg-secondary rounded hover:bg-brand-hover transition-colors group"
                >
                  <Github className="w-6 h-6 text-brand-primary group-hover:text-white" />
                  <div>
                    <p className="body-medium text-white">GitHub Repository</p>
                    <p className="body-small text-text-muted">Explore the source code</p>
                  </div>
                </a>

                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-bg-secondary rounded hover:bg-brand-hover transition-colors group"
                >
                  <Linkedin className="w-6 h-6 text-brand-primary group-hover:text-white" />
                  <div>
                    <p className="body-medium text-white">LinkedIn Profile</p>
                    <p className="body-small text-text-muted">Professional network</p>
                  </div>
                </a>
              </div>
            </div>

            {/* JARVIS Status */}
            <div className="jarvis-interface p-6 rounded">
              <div className="flex items-center space-x-3 mb-4">
                <User className="w-5 h-5 text-jarvis-green" />
                <span className="jarvis-text text-sm font-semibold">
                  JARVIS COMMUNICATION STATUS:
                </span>
              </div>
              <p className="text-white leading-relaxed text-sm">
                "All communication systems are online and functioning at optimal capacity. 
                I'll ensure Mr. Stark receives your message promptly. Response time typically 
                within 24-48 hours, depending on current workshop activities."
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="hud-element p-8">
            <h2 className="heading-2 text-brand-primary mb-8">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block body-medium text-white mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 bg-bg-secondary border border-border-subtle rounded text-white placeholder-text-muted focus:border-brand-primary focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block body-medium text-white mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 bg-bg-secondary border border-border-subtle rounded text-white placeholder-text-muted focus:border-brand-primary focus:outline-none transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block body-medium text-white mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 bg-bg-secondary border border-border-subtle rounded text-white placeholder-text-muted focus:border-brand-primary focus:outline-none transition-colors"
                  placeholder="Brief subject of your message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block body-medium text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="w-full p-4 bg-bg-secondary border border-border-subtle rounded text-white placeholder-text-muted focus:border-brand-primary focus:outline-none transition-colors resize-vertical"
                  placeholder="Tell me about your project, collaboration idea, or question..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary dark-button-animate ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span>Processing Message...</span>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="jarvis-interface p-8 rounded max-w-4xl mx-auto">
            <h3 className="heading-2 text-brand-primary mb-6">Ready to Build the Future?</h3>
            <p className="body-large text-white mb-8">
              Whether you're looking to collaborate on a groundbreaking project, need technical consultation, 
              or simply want to connect with a fellow innovator, the Stark Workshop is open for business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/projects" className="btn-secondary dark-button-animate">
                <span>View Past Projects</span>
                <MessageSquare className="w-5 h-5" />
              </a>
              <a 
                href={socialLinks.resume}
                target="_blank"
                rel="noopener noreferrer" 
                className="btn-secondary dark-button-animate"
              >
                <span>Download Resume</span>
                <User className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;