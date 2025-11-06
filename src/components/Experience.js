import React, { useState, useEffect, useRef } from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  BookOpen, 
  Users, 
  Trophy, 
  Target,
  ChevronRight,
  Star,
  Zap
} from 'lucide-react';

const Experience = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const experiences = [
    {
      id: 1,
      title: "Assistant Professor",
      company: "Amity University Chhattisgarh",
      location: "Raipur, India",
      period: "2019 - Present",
      duration: "6+ Years",
      status: "Current Position",
      level: "Senior Academic",
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      icon: <GraduationCap className="w-6 h-6" />,
      achievements: [
        { icon: <BookOpen className="w-4 h-4" />, text: "Teaching AI/ML and Soft Computing courses", metric: "Advanced Level" },
        { icon: <Users className="w-4 h-4" />, text: "Supervised 17 UG thesis projects", metric: "100% Success Rate" },
        { icon: <Award className="w-4 h-4" />, text: "Published 22 international journal papers", metric: "High Impact" },
        { icon: <Trophy className="w-4 h-4" />, text: "Coordinated 4 National IIC/SIH events", metric: "Leadership Role" }
      ],
      skills: ["Teaching Excellence", "Research Leadership", "Academic Administration", "Student Mentoring"],
      highlights: ["22 Publications", "17 Thesis Supervised", "4 National Events", "AI/ML Expertise"]
    },
    {
      id: 2,
      title: "Research Scholar & Academic",
      company: "NIT Patna",
      location: "Patna, India",
      period: "2017 - 2019",
      duration: "2 Years",
      status: "M.Tech Completed",
      level: "Advanced Research",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      icon: <Target className="w-6 h-6" />,
      achievements: [
        { icon: <Star className="w-4 h-4" />, text: "M.Tech CSE with CGPA 9.10", metric: "Distinction" },
        { icon: <BookOpen className="w-4 h-4" />, text: "Research in Soft Computing & Fuzzy Logic", metric: "Specialized" },
        { icon: <Award className="w-4 h-4" />, text: "Presented at 3 IEEE conferences", metric: "International" },
        { icon: <Zap className="w-4 h-4" />, text: "Expertise in WSN and AI applications", metric: "Technical Depth" }
      ],
      skills: ["Research Methodology", "Soft Computing", "Fuzzy Logic", "Z-Number Theory"],
      highlights: ["CGPA 9.10", "3 IEEE Papers", "Research Excellence", "Technical Innovation"]
    },
    {
      id: 3,
      title: "Academic Foundation",
      company: "PSIT Kanpur",
      location: "Kanpur, India",
      period: "2012 - 2016",
      duration: "4 Years",
      status: "B.Tech Completed",
      level: "Undergraduate",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      icon: <BookOpen className="w-6 h-6" />,
      achievements: [
        { icon: <Star className="w-4 h-4" />, text: "B.Tech CSE with 84.44%", metric: "First Class" },
        { icon: <Target className="w-4 h-4" />, text: "Strong CS fundamentals", metric: "Core Strength" },
        { icon: <Trophy className="w-4 h-4" />, text: "Technical competitions participant", metric: "Active Engagement" },
        { icon: <Zap className="w-4 h-4" />, text: "Developed research passion", metric: "Future Vision" }
      ],
      skills: ["Programming", "Data Structures", "Algorithms", "Software Engineering"],
      highlights: ["84.44%", "CS Foundation", "Technical Events", "Research Interest"]
    }
  ];

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

  return (
    <section id="experience" className="py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="container-max px-4 py-8 relative z-10" ref={sectionRef}>
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-200 mb-6">
              <GraduationCap className="w-5 h-5 text-primary-600" />
              <span className="text-sm font-medium text-primary-700">Academic Excellence</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
              Academic Journey
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive timeline showcasing educational milestones, research achievements, and academic leadership in computer science and engineering.
            </p>
          </div>

          {/* Interactive Timeline */}
          <div className="relative">
            {/* Enhanced Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-blue-500 to-purple-600 rounded-full shadow-lg z-0"></div>

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className={`relative transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
                    <div className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center text-white shadow-2xl border-4 border-white hover:scale-110 transition-transform duration-300`}>
                      {exp.icon}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`${index % 2 === 0 ? 'pr-1/2 mr-8' : 'pl-1/2 ml-8'} relative z-20`}>
                    <div 
                      className={`${exp.bgColor} ${exp.borderColor} border-2 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 backdrop-blur-sm bg-opacity-80 relative`}
                      onMouseEnter={() => setActiveCard(index)}
                    >
                      {/* Card Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                            <span className={`px-3 py-1 bg-gradient-to-r ${exp.color} text-white text-xs font-semibold rounded-full`}>
                              {exp.status}
                            </span>
                          </div>
                          <p className="text-lg font-semibold text-primary-700 mb-1">{exp.company}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-500 mb-1">Duration</div>
                          <div className="text-lg font-bold text-gray-900">{exp.duration}</div>
                        </div>
                      </div>

                      {/* Achievements Grid */}
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 bg-white/60 rounded-xl border border-white/40">
                            <div className={`w-8 h-8 bg-gradient-to-r ${exp.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                              {achievement.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 leading-tight">{achievement.text}</p>
                              <p className="text-xs text-primary-600 font-semibold mt-1">{achievement.metric}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Skills Tags */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Skills & Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, idx) => (
                            <span key={idx} className="px-3 py-1 bg-white/80 text-gray-700 text-xs font-medium rounded-full border border-gray-200 hover:bg-primary-50 hover:border-primary-200 transition-colors">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Highlights Bar */}
                      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-white/50 to-white/30 rounded-xl border border-white/50">
                        <div className="flex items-center gap-1 text-sm font-medium text-gray-700">
                          <Trophy className="w-4 h-4 text-yellow-500" />
                          <span>Key Highlights</span>
                        </div>
                        <div className="flex items-center gap-4">
                          {exp.highlights.map((highlight, idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-xs font-bold text-primary-700">{highlight}</div>
                            </div>
                          ))}
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="mt-12 grid md:grid-cols-4 gap-4">
            {[
              { label: "Years of Experience", value: "6+", icon: <Calendar className="w-6 h-6" /> },
              { label: "Academic Degrees", value: "2", icon: <GraduationCap className="w-6 h-6" /> },
              { label: "Research Publications", value: "22+", icon: <BookOpen className="w-6 h-6" /> },
              { label: "Students Mentored", value: "17+", icon: <Users className="w-6 h-6" /> }
            ].map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;