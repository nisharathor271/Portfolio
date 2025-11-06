import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Linkedin, Github, MessageCircle, X, Zap, Star } from 'lucide-react';

const Contact = () => {
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

  const handleWhatsAppMessage = () => {
    const phoneNumber = "918318062678"; // Indian number with country code
    const message = encodeURIComponent(
      "Hello Dr. Nisha Rathore! 👋\n\n" +
      "I came across your impressive academic portfolio and would love to connect with you. " +
      "Your research in Soft Computing, AI/ML, and Fuzzy Logic is truly inspiring! 🚀\n\n" +
      "I'm interested in discussing potential collaboration opportunities or learning more about your work. " +
      "Looking forward to hearing from you! 😊\n\n" +
      "Best regards!"
    );

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "University Email",
      value: "nrathore@rpr.amity.edu",
      link: "mailto:nrathore@rpr.amity.edu"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Personal Email",
      value: "nisha.rathor271@gmail.com",
      link: "mailto:nisha.rathor271@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Amity University Chhattisgarh, Raipur, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/nisha-rathore"
    },
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      url: "https://github.com/nisha-rathore"
    },
    {
      icon: <X className="w-5 h-5" />,
      name: "X (Twitter)",
      url: "https://twitter.com/nisha_rathore"
    }
  ];

  return (
    <section id="contact" className="py-12 bg-gradient-to-br from-slate-50 via-emerald-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

      <div className="container-max px-4 py-8 relative z-10" ref={sectionRef}>
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-12">
            <div className={`inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-200 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <MessageCircle className="w-5 h-5 text-primary-600" />
              <span className="text-sm font-medium text-primary-700">Let's Connect</span>
            </div>
            <h2 className={`text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-emerald-800 to-blue-800 bg-clip-text text-transparent mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Get In Touch
            </h2>
            <div className={`w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-blue-600 mx-auto mb-8 rounded-full transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              I'm always open to discussing research collaborations, academic opportunities, or educational initiatives in computer science and engineering.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Information */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Profile Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gradient-to-r from-emerald-500 to-blue-600 p-1">
                      <img
                        src="/nishamamimg.jpeg"
                        alt="Er. Nisha Rathore"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <Star className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">Let's Connect</h3>
                    <p className="text-lg font-semibold text-gray-700">Er. Nisha Rathore</p>
                    <p className="text-sm text-gray-500">Nishaa Pravesh Rathore</p>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-600 font-medium">Available for collaboration</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Contact Details */}
                <div className="space-y-4 mb-8">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                    >
                      <div className="w-14 h-14 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-xl flex items-center justify-center text-primary-600 group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-blue-600 group-hover:text-white transition-all duration-300 shadow-md">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">{info.title}</h4>
                        <p className="text-gray-600 text-sm break-all">{info.value}</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Zap className="w-4 h-4 text-primary-600" />
                      </div>
                    </a>
                  ))}
                </div>

                {/* Enhanced Social Links */}
                <div className="border-t border-gray-100 pt-6">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    Follow My Journey
                  </h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-12 h-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:shadow-xl hover:scale-110 transition-all duration-300 overflow-hidden"
                        title={social.name}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10 group-hover:text-white transition-colors duration-300">
                          {social.icon}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced WhatsApp Contact Section */}
            <div className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="text-center mb-8">
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                    <MessageCircle className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant Communication</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Get in touch instantly via WhatsApp And E-Mail
                </p>
              </div>

              {/* Contact Buttons */}
              <div className="space-y-4">
                {/* WhatsApp Button */}
                <button
                  onClick={handleWhatsAppMessage}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg className="w-6 h-6 group-hover:animate-bounce relative z-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516z"/>
                  </svg>
                  <span className="relative z-10">Send WhatsApp Message</span>
                  <div className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity relative z-10"></div>
                </button>

                {/* Enhanced Email Button */}
                <a
                  href="mailto:nisha.rathor271@gmail.com?subject=Quick Contact from Portfolio"
                  className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Mail className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">Send Direct Email</span>
                  <div className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity relative z-10"></div>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;