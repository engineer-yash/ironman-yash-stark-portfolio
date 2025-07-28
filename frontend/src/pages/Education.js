import React, { useEffect } from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, Lightbulb } from 'lucide-react';
import { education } from '../mockData';
import { useJarvis } from '../context/JarvisContext';

const Education = () => {
  const { speak, isActive } = useJarvis();

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        speak("Welcome to Mr. Stark's educational foundation. Here you'll discover the academic excellence that shaped his engineering genius.");
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
            Academic <span className="text-brand-primary">Foundation</span>
          </h1>
          <p className="body-large text-text-secondary max-w-3xl mx-auto">
            Like Tony Stark's MIT education that shaped his genius, my academic journey 
            provided the theoretical foundation for practical innovation in software engineering.
          </p>
        </div>

        {/* Main Education Card */}
        <div className="mb-16">
          <div className="hud-element p-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Institution Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="arc-reactor">
                    <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  <div>
                    <h2 className="heading-1 text-brand-primary">{education.degree}</h2>
                    <p className="body-medium text-text-secondary">Computer Engineering</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="heading-2 text-white">{education.institution}</h3>
                  
                  <div className="flex flex-col sm:flex-row gap-4 text-text-muted">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-brand-primary" />
                      <span className="body-small">{education.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-brand-primary" />
                      <span className="body-small">Graduated {education.year}</span>
                    </div>
                  </div>

                  <p className="body-medium text-text-secondary leading-relaxed">
                    Completed Bachelor of Engineering with distinction, focusing on cutting-edge 
                    technologies that would later become the foundation for innovative software solutions. 
                    The curriculum emphasized both theoretical understanding and practical application.
                  </p>
                </div>
              </div>

              {/* CGPA Display */}
              <div className="text-center">
                <div className="jarvis-interface p-8 rounded">
                  <div className="space-y-4">
                    <div className="text-6xl font-bold text-brand-primary">
                      {education.cgpa}
                    </div>
                    <div className="text-sm text-text-muted">CGPA</div>
                    <div className="text-lg text-white">Out of 10</div>
                    
                    <div className="mt-6 pt-6 border-t border-jarvis-green">
                      <div className="jarvis-text text-sm">
                        "Academic excellence that rivals my processing capabilities, Mr. Stark."
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coursework */}
        <div className="mb-16">
          <h2 className="heading-2 text-center text-brand-primary mb-12">
            Core <span className="text-white">Curriculum</span>
          </h2>
          
          <div className="dark-grid">
            {education.coursework.map((course, index) => (
              <div key={index} className="hud-element p-6 dark-hover">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="heading-3 text-white mb-2">{course}</h3>
                    <p className="body-small text-text-muted">
                      {course.includes('AI') || course.includes('Machine Learning') 
                        ? 'Advanced cognitive systems and learning algorithms'
                        : course.includes('Data Structures')
                        ? 'Efficient data organization and algorithmic thinking'
                        : course.includes('Software Engineering')
                        ? 'Systematic approach to software development'
                        : course.includes('DBMS')
                        ? 'Database design and management systems'
                        : course.includes('Communication')
                        ? 'Professional technical communication skills'
                        : course.includes('Networks')
                        ? 'Distributed systems and network protocols'
                        : 'Fundamental engineering concepts and applications'
                      }
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Achievements */}
        <div className="mb-16">
          <h2 className="heading-2 text-center text-brand-primary mb-12">
            Academic <span className="text-white">Achievements</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center hud-element p-8">
              <div className="arc-reactor mb-4">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-black" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="heading-3 text-brand-primary">Top 10%</h3>
                <p className="body-small text-text-muted">Class Ranking</p>
                <p className="text-xs text-text-secondary">
                  Consistently performed among the top students in the program
                </p>
              </div>
            </div>

            <div className="text-center hud-element p-8">
              <div className="arc-reactor mb-4">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto">
                  <Lightbulb className="w-8 h-8 text-black" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="heading-3 text-brand-primary">AI/ML Specialization</h3>
                <p className="body-small text-text-muted">Advanced Track</p>
                <p className="text-xs text-text-secondary">
                  Specialized focus on artificial intelligence and machine learning
                </p>
              </div>
            </div>

            <div className="text-center hud-element p-8">
              <div className="arc-reactor mb-4">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto">
                  <GraduationCap className="w-8 h-8 text-black" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="heading-3 text-brand-primary">Distinction</h3>
                <p className="body-small text-text-muted">Honor Graduate</p>
                <p className="text-xs text-text-secondary">
                  Graduated with distinction for academic excellence
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* JARVIS Educational Analysis */}
        <div className="mb-16">
          <div className="jarvis-interface p-8 rounded max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-6">
              <GraduationCap className="w-6 h-6 text-jarvis-green" />
              <span className="jarvis-text text-lg font-semibold">
                JARVIS EDUCATIONAL ANALYSIS
              </span>
            </div>
            
            <div className="space-y-6 text-white">
              <p className="leading-relaxed">
                "Mr. Stark's academic performance demonstrates the same systematic excellence 
                I observe in his professional work. The 8.96 CGPA represents not just high grades, 
                but a deep understanding of engineering principles that translates directly 
                into innovative problem-solving capabilities."
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-brand-primary">Key Strengths Developed:</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Systematic problem-solving methodology</li>
                    <li>• Strong foundation in computer science theory</li>
                    <li>• Advanced understanding of AI/ML concepts</li>
                    <li>• Effective technical communication skills</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-brand-primary">Applied in Practice:</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Clean, maintainable code architecture</li>
                    <li>• Efficient algorithm implementation</li>
                    <li>• Database design and optimization</li>
                    <li>• Cross-functional team collaboration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connection to Current Work */}
        <div className="text-center">
          <h2 className="heading-2 text-brand-primary mb-8">
            From <span className="text-white">Theory to Innovation</span>
          </h2>
          <p className="body-large text-text-secondary max-w-3xl mx-auto mb-8">
            Like Tony Stark applying his MIT engineering knowledge to build the arc reactor, 
            I've translated my academic foundation into practical innovations that solve real-world problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/projects" className="btn-primary dark-button-animate">
              <span>See Theory in Action</span>
              <Lightbulb className="w-5 h-5" />
            </a>
            <a href="/skills" className="btn-secondary dark-button-animate">
              <span>Explore Technical Skills</span>
              <BookOpen className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;