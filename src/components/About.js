import React, { useState, useEffect, useRef } from 'react';
import { User, Award, Target, Heart, BookOpen, Users, Trophy, GraduationCap } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const highlights = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Academic Excellence",
      description: "22 International Journal Papers, 5 Scopus Publications, 3 Patents",
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Research Focus",
      description: "Soft Computing, AI/ML, Fuzzy Logic, Wireless Sensor Networks",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Educational Impact",
      description: "17 UG Thesis Supervised, Multiple Books & Chapters Authored",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50"
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
    <section id="about" className="py-12 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      
      <div className="container-max px-4 py-8 relative z-10" ref={sectionRef}>
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-12">
            <div className={`inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-200 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <User className="w-5 h-5 text-primary-600" />
              <span className="text-sm font-medium text-primary-700">Professional Profile</span>
            </div>
            <h2 className={`text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              About Me
            </h2>
            <div className={`w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
            <p className={`text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Learn more about my academic background, research expertise, and passion for advancing computer science education.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Professional Background */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                      Academic & Research Excellence
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 font-medium mb-4">Er. Nisha Rathore (Nishaa Pravesh Rathore)</p>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  I am an Assistant Professor at <span className="font-semibold text-primary-700">Amity University Chhattisgarh</span> with a strong academic foundation 
                  including M.Tech in Computer Science & Engineering from <span className="font-semibold text-primary-700">NIT Patna (CGPA: 9.10)</span> and B.Tech from 
                  PSIT Kanpur (84.44%). My objective is to leverage teaching, research, and administrative skills 
                  to foster creativity, critical thinking, and knowledge expansion among students.
                </p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  With expertise in <span className="font-semibold text-primary-700">Soft Computing, Fuzzy Logic, Z-Number, Wireless Sensor Networks, and AI/ML</span>, 
                  I have published 22 international journal papers, 5 Scopus papers, and contributed to multiple 
                  books and patents. I believe in advancing academic excellence through innovative research and 
                  quality education.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-emerald-50 rounded-xl p-4 text-center border border-emerald-100">
                    <div className="text-2xl font-bold text-emerald-600">M.Tech</div>
                    <div className="text-sm text-gray-600">NIT Patna</div>
                    <div className="text-xs text-emerald-700 font-semibold">CGPA: 9.10</div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-100">
                    <div className="text-2xl font-bold text-blue-600">B.Tech</div>
                    <div className="text-sm text-gray-600">PSIT Kanpur</div>
                    <div className="text-xs text-blue-700 font-semibold">84.44%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Research Focus & Achievements */}
            <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-800 to-pink-800 bg-clip-text text-transparent">
                      Research Focus & Impact
                    </h3>
                  </div>
                </div>

                {/* Enhanced Highlights */}
                <div className="space-y-4 mb-6">
                  {highlights.map((item, index) => (
                    <div 
                      key={index} 
                      className={`flex items-start gap-4 p-4 ${item.bgColor} rounded-2xl border border-white/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                      style={{ transitionDelay: `${(index + 7) * 100}ms` }}
                    >
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Research Areas */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-purple-600" />
                    Core Research Areas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Soft Computing", "Fuzzy Logic", "Z-Number Theory", "AI & ML", "Wireless Sensor Networks", "Computer Networks"].map((area, index) => (
                      <span key={index} className="px-3 py-1 bg-white/80 text-purple-700 text-xs font-medium rounded-full border border-purple-200">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Stats Section */}
          <div className={`mt-20 grid md:grid-cols-4 gap-6 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              { icon: <BookOpen className="w-6 h-6" />, number: "M.Tech", label: "NIT Patna", sublabel: "CGPA 9.10" },
              { icon: <Trophy className="w-6 h-6" />, number: "B.Tech", label: "PSIT Kanpur", sublabel: "84.44%" },
              { icon: <Users className="w-6 h-6" />, number: "6+", label: "Years Teaching", sublabel: "Experience" },
              { icon: <Award className="w-6 h-6" />, number: "22+", label: "Research Papers", sublabel: "Published" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm font-semibold text-primary-700 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;