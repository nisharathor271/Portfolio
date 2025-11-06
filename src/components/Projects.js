import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Fuzzy Logic & Z-Number Research",
      description: "Advanced research in fuzzy logic systems and Z-number theory with applications in decision-making under uncertainty. Published in multiple international journals.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop",
      tags: ["Fuzzy Logic", "Z-Number", "Soft Computing", "Research"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2019-2024"
    },
    {
      title: "Wireless Sensor Network Optimization",
      description: "Research on energy-efficient algorithms and protocols for wireless sensor networks with focus on network lifetime optimization and data aggregation.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      tags: ["WSN", "Network Protocols", "Energy Optimization", "IoT"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2018-2023"
    },
    {
      title: "AI/ML Educational Framework",
      description: "Developed comprehensive curriculum and practical frameworks for teaching AI and Machine Learning concepts to undergraduate students with hands-on projects.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      tags: ["AI", "Machine Learning", "Education", "Curriculum"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2020-2024"
    },
    {
      title: "Academic Publications & Books",
      description: "Authored and edited multiple books and book chapters in computer science. Contributed to 22 international journals and 5 Scopus publications.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop",
      tags: ["Publications", "Books", "Research", "Academic Writing"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2019-2024"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Research & Publications
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of my research work, academic contributions, and educational initiatives in computer science and engineering.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar size={14} />
                      <span>{project.date}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                        <Tag size={12} />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a 
                      href={project.liveUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <a href="#" className="btn-secondary">
              View All Publications
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;