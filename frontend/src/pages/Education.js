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
    <div className="dark-container min-h-screen py-20 relative">
      {/* Marvel-themed background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Arc Reactor inspired glow effects */}
        <div className="absolute top-28 left-20 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-pulse filter blur-3xl"></div>
        <div className="absolute top-72 right-16 w-24 h-24 bg-red-500 rounded-full opacity-15 animate-pulse filter blur-2xl" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-56 left-1/4 w-20 h-20 bg-yellow-400 rounded-full opacity-12 animate-pulse filter blur-2xl" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-36 right-1/3 w-28 h-28 bg-purple-500 rounded-full opacity-8 animate-pulse filter blur-3xl" style={{animationDelay: '3s'}}></div>
        
        {/* Comic book style effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-brand-primary rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-iron-gold rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
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
                    <BookOpen className="w-6 h-6 text-white" />
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
                  <Award className="w-8 h-8 text-white" />
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
                  <Lightbulb className="w-8 h-8 text-white" />
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
                  <GraduationCap className="w-8 h-8 text-white" />
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