import { useState, useEffect } from 'react';
import { ArrowDown, Download, Sparkles, GraduationCap, Linkedin } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import useMobileAnimations from '../hooks/useMobileAnimations';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [sectionRef, isIntersecting, hasIntersected] = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '20px'
  });
  const { isMobile, getAnimationClass, getTransitionDuration, getHoverEffect } = useMobileAnimations();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, isMobile ? 50 : 100);
    return () => clearTimeout(timer);
  }, [isMobile]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden pt-16"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

      <div className="container-max px-4 py-8 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Profile Image */}
          <div className={`mb-6 transition-all ${getTransitionDuration('duration-1000', 'duration-700')} ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
          }`}>
            <div className="relative inline-block group">
              <div className={`w-32 h-32 md:w-36 md:h-36 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm transition-all ${getTransitionDuration('duration-700', 'duration-500')} ease-out bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 p-1 ${
                imageLoaded ? `${getHoverEffect('hover:scale-105 hover:shadow-3xl')} group-hover:border-white/70` : ''
              }`}>
                <OptimizedImage
                  src="/nishamamimg.jpeg"
                  alt="Er. Nisha Rathore"
                  className="rounded-full"
                  priority={true}
                  onLoad={handleImageLoad}
                  sizes="(max-width: 768px) 128px, 144px"
                />
              </div>
              <div className={`absolute -top-1 -right-1 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center transition-all duration-500 ${
                imageLoaded ? `${getAnimationClass('animate-bounce')} ${getHoverEffect('hover:animate-pulse')}` : 'opacity-0'
              }`}>
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              {/* Loading indicator for image */}
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-8 h-8 border-3 border-blue-200 border-t-blue-500 rounded-full ${getAnimationClass('animate-spin')}`}></div>
                </div>
              )}
            </div>
          </div>

          {/* Badge */}
          <div className={`inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary-200 mb-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <GraduationCap className="w-4 h-4 text-primary-600" />
            <span className="text-xs font-medium text-primary-700">Assistant Professor & Researcher</span>
          </div>

          {/* Main Content */}
          <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold mb-2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Hi, I'm <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Er. Nisha Rathore</span>
          </h1>

          {/* Full Professional Name */}
          <div className={`mb-4 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg md:text-xl text-gray-500 font-medium">
              Nisha Pravesh Rathore
            </p>
          </div>

          <p className={`text-lg md:text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Assistant Professor at <span className="font-semibold text-primary-700">Amity University Chhattisgarh</span>. Passionate about Soft Computing, AI, Machine Learning, and fostering creativity & critical thinking among students.
          </p>

          {/* Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 max-w-xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              { number: "22+", label: "Publications" },
              { number: "17+", label: "Thesis Supervised" },
              { number: "3", label: "Patents" },
              { number: "6+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-lg p-2 border border-white/40 hover:bg-white/80 transition-all duration-300">
                <div className="text-base md:text-lg font-bold text-primary-700">{stat.number}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-3 justify-center items-center mb-8 transition-all ${getTransitionDuration('duration-1000', 'duration-700')} delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a
              href="https://www.linkedin.com/in/nishaa-pravesh-rathore?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 border border-white/20 transition-all ${getTransitionDuration('duration-300', 'duration-200')} ${getHoverEffect('hover:shadow-xl hover:scale-105')} active:scale-95 touch-manipulation`}
            >
              <Linkedin size={18} />
              LinkedIn Profile
            </a>
            
            <a 
              href="/Nisha Rathore Resume_30 Sep 2025.docx" 
              className={`group bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 border border-white/20 transition-all ${getTransitionDuration('duration-300', 'duration-200')} ${getHoverEffect('hover:shadow-xl hover:scale-105')} active:scale-95 touch-manipulation`}
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className={`transition-all ${getTransitionDuration('duration-1000', 'duration-700')} delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className={getAnimationClass('animate-bounce')}>
              <a 
                href="#about" 
                className={`inline-flex items-center justify-center w-12 h-12 bg-white/60 backdrop-blur-sm rounded-full text-gray-500 border border-white/40 transition-all ${getTransitionDuration('duration-300', 'duration-200')} ${getHoverEffect('hover:text-primary-600 hover:bg-white/80')} active:scale-95 touch-manipulation`}
              >
                <ArrowDown size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;