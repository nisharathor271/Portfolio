import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Award, Users, FileText, Trophy, Presentation, Sparkles } from 'lucide-react';

const Achievements = () => {
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

  const achievements = [
    {
      icon: <FileText className="w-8 h-8" />,
      number: "22",
      title: "International Journal Papers",
      description: "Published research in prestigious international journals"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "05",
      title: "Scopus Journal Papers",
      description: "High-impact publications indexed in Scopus database"
    },
    {
      icon: <Presentation className="w-8 h-8" />,
      number: "03",
      title: "IEEE Conference Papers",
      description: "Presented research at IEEE international conferences"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      number: "03",
      title: "Book Chapters",
      description: "Authored chapters in academic publications"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      number: "06",
      title: "Books Edited/Authored",
      description: "4 books edited and 2 books authored"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "17",
      title: "UG Thesis Supervised",
      description: "Successfully guided B.Tech/BCA students"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      number: "03",
      title: "Patents Granted",
      description: "Innovative research leading to patent publications"
    },
    {
      icon: <Presentation className="w-8 h-8" />,
      number: "04",
      title: "National Events Coordinated",
      description: "IIC/SIH Bootcamps and Hackathons organized"
    }
  ];

  return (
    <section id="achievements" className="py-12 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="container-max px-4 py-8 relative z-10" ref={sectionRef}>
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-12">
            <div className={`inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-200 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Sparkles className="w-5 h-5 text-primary-600" />
              <span className="text-sm font-medium text-primary-700">Research Excellence</span>
            </div>
            <h2 className={`text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 bg-clip-text text-transparent mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Academic Achievements
            </h2>
            <div className={`w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto mb-8 rounded-full transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              A comprehensive overview of research contributions, publications, and academic milestones that showcase excellence in computer science education and research.
            </p>
          </div>

          {/* Enhanced Achievements Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-500 group border border-white/50 hover:scale-105 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${(index + 5) * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {achievement.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>

          {/* Enhanced Education Section */}
          <div className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent mb-8 text-center">Educational Background</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-blue-50 border-l-4 border-emerald-500 pl-6 py-4 rounded-r-xl hover:shadow-lg transition-all duration-300">
                  <h4 className="text-lg font-bold text-gray-900">M.Tech., Computer Science & Engineering</h4>
                  <p className="text-emerald-600 font-semibold">NIT Patna (2019)</p>
                  <p className="text-gray-600 font-medium">CGPA: 9.10</p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 pl-6 py-4 rounded-r-xl hover:shadow-lg transition-all duration-300">
                  <h4 className="text-lg font-bold text-gray-900">B.Tech., Computer Science & Engineering</h4>
                  <p className="text-blue-600 font-semibold">PSIT Kanpur (2016)</p>
                  <p className="text-gray-600 font-medium">84.44%</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 pl-6 py-4 rounded-r-xl hover:shadow-lg transition-all duration-300">
                  <h4 className="text-lg font-bold text-gray-900">Intermediate, CBSE</h4>
                  <p className="text-purple-600 font-semibold">Kendriya Vidyalaya, IIT Kanpur (2011)</p>
                  <p className="text-gray-600 font-medium">89.60%</p>
                </div>
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-l-4 border-pink-500 pl-6 py-4 rounded-r-xl hover:shadow-lg transition-all duration-300">
                  <h4 className="text-lg font-bold text-gray-900">High School, CBSE</h4>
                  <p className="text-pink-600 font-semibold">Kendriya Vidyalaya, IIT Kanpur (2009)</p>
                  <p className="text-gray-600 font-medium">92.40%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;