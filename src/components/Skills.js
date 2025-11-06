import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Globe, Users, Lightbulb, Zap, Brain, Target } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Research Areas",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Soft Computing", level: 95 },
        { name: "Fuzzy Logic & Z-Number", level: 90 },
        { name: "Artificial Intelligence", level: 88 },
        { name: "Machine Learning", level: 85 }
      ]
    },
    {
      title: "Technical Expertise",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Wireless Sensor Networks", level: 90 },
        { name: "Computer Networks", level: 85 },
        { name: "Data Analysis", level: 80 },
        { name: "Algorithm Design", level: 88 }
      ]
    },
    {
      title: "Academic Skills",
      icon: <Users className="w-6 h-6" />,
      skills: [
        { name: "Teaching & Mentoring", level: 95 },
        { name: "Research & Publication", level: 92 },
        { name: "Academic Administration", level: 85 },
        { name: "Student Guidance", level: 90 }
      ]
    }
  ];

  const highlights = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "International Recognition",
      description: "22 International Journal Papers and 5 Scopus Publications"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation & Patents",
      description: "3 Patents granted/published with focus on cutting-edge research"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Academic Leadership",
      description: "Coordinated multiple national events and supervised 17 thesis projects"
    }
  ];

  return (
    <section id="research" className="py-12 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="container-max px-4 py-8 relative z-10" ref={sectionRef}>
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-12">
            <div className={`inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-200 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Brain className="w-5 h-5 text-primary-600" />
              <span className="text-sm font-medium text-primary-700">Research Expertise</span>
            </div>
            <h2 className={`text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Research & Expertise
            </h2>
            <div className={`w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8 rounded-full transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              A comprehensive overview of my research areas, technical capabilities, and academic expertise in computer science and engineering.
            </p>
          </div>

          {/* Enhanced Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-white/50 hover:scale-105 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${(index + 5) * 150}ms` }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="group">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-gray-700 font-semibold">{skill.name}</span>
                        <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-1500 ease-out group-hover:shadow-lg"
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(index + idx) * 200}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className={`text-center bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${(index + 8) * 200}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{highlight.title}</h4>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;