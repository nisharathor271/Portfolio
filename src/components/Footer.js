import React from 'react';


const Footer = () => {

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container-max section-padding relative z-10">
        <div className="border-t border-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
              All rights reserved. This portfolio showcases academic achievements, research contributions, and educational excellence in computer science and engineering.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;