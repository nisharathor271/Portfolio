import React, { useState } from 'react';
import { FileText, Award, BookOpen, Users, ExternalLink, Calendar, Tag } from 'lucide-react';

const Publications = () => {
  const [activeTab, setActiveTab] = useState('conferences');
  const [showAllJournals, setShowAllJournals] = useState(false);

  const conferences = [
    {
      title: "Leveraging AI and Blockchain for Scalable and Secure Data Exchange in IoMT Healthcare Ecosystems",
      venue: "2025 4th OPJU International Technology Conference (OTCON) on Smart Computing for Innovation and Advancement in Industry 5.0",
      publisher: "IEEE",
      year: "2025",
      month: "July",
      doi: "10.1109/OTCON65728.2025.110708222",
      type: "IEEE Conference"
    },
    {
      title: "Selection of Optimal Renewable Energy Resources in Uncertain Environment using ARAS-Z Methodology",
      venue: "Scopus-Indexed IEEE ICCES",
      publisher: "IEEE",
      year: "2019",
      doi: "10.1109/ICCES45898.2019.90023213",
      type: "Scopus Indexed"
    },
    {
      title: "Selection of Optimal Renewable Energy Resources using TOPSIS-Z Methodology",
      venue: "ICACCT",
      year: "2019",
      doi: "10.1007/978-981-15-5341-7_73",
      type: "Conference"
    }
  ];

  const journals = [
    {
      title: "ENHANCING ENERGY EFFICIENCY IN SENSOR/AD-HOC NETWORKS THROUGH DYNAMIC SLEEP SCHEDULING",
      journal: "ICTACT Journal on Communication Technology",
      volume: "14",
      issue: "3",
      pages: "2974-2981",
      year: "2023",
      month: "September",
      doi: "10.21917/ijct.2023.0442"
    },
    {
      title: "Integrating Machine Learning and Mathematical Programming for Efficient Optimization of Electric Discharge Machining Technique",
      journal: "The Scientific Temper",
      volume: "14",
      issue: "3",
      pages: "859-863",
      year: "2023",
      month: "September",
      doi: "10.58414/SCIENTIFICTEMPER.2023.14.3.46"
    },
    {
      title: "Researching brain-computer interfaces for enhancing communication and control in neurological disorders",
      journal: "The Scientific Temper (Web of Science Journal)",
      volume: "14",
      issue: "4",
      year: "2023",
      month: "December",
      doi: "10.58414/SCIENTIFICTEMPER.2023.14.4.07"
    },
    {
      title: "A Hybrid Approach to Heart Attack Risk Prediction Using Ensemble and Traditional ML Models",
      journal: "TSUNEKIBACHI",
      volume: "20",
      issue: "2",
      year: "2025",
      issn: "1880-5205",
      doi: "10.5281/zenodo.15702521"
    },
    {
      title: "Medlink: Revolutionizing Healthcare Access through AI",
      journal: "TSUNEKIBACHI",
      volume: "20",
      issue: "3",
      year: "2025",
      issn: "1880-5205",
      doi: "10.5281/zenodo.15812330"
    },
    {
      title: "Crowdsourced Disaster Response Coordination System",
      journal: "STRAD",
      volume: "12",
      issue: "6",
      year: "2025",
      issn: "0039-2049",
      doi: "10.5281/Zenodo.15680416"
    },
    {
      title: "Energy Track: A Data-Driven Approach to Monitor and Optimize Household Energy Usage",
      journal: "STRAD",
      volume: "12",
      issue: "6",
      year: "2025",
      issn: "0039-2049",
      doi: "10.5281/Zenodo.15680428"
    },
    {
      title: "Optimizing Financial Knowledge through Finovest: A Web-Based Finance Management System with AI-Powered Multilingual Support",
      journal: "TSUNEKIBACHI",
      volume: "20",
      issue: "3",
      year: "2025",
      issn: "1880-5205",
      doi: "10.5281/zenodo.15709204"
    },
    {
      title: "Remote-Controlled Military UGV for Surveillance & Tactical Operations",
      journal: "Journal of Sensor and Cloud Computing",
      volume: "2",
      issue: "1",
      year: "2025",
      issn: "3048-9199",
      doi: "10.46610/JOSCC.2025.v02i01.005"
    },
    {
      title: "An Intelligent Career Counselling Platform for School Students Leveraging Conversational AI and Interest-Based Recommendation",
      journal: "Innovation and Integrative Research Center Journal",
      volume: "3",
      issue: "5",
      year: "2025",
      issn: "2584-1491",
      doi: "10.5281/zenodo.15550075"
    },
    {
      title: "Federated Learning in Healthcare: Enhancing AI Models with Cloud Collaboration for Patient-Centric Advancements",
      journal: "International Journal of Engineering Research & Technology (IJERT)",
      volume: "13",
      issue: "5",
      year: "2024",
      issn: "2278-0181",
      doi: "10.17577/IJERTV13IS050050"
    },
    {
      title: "Beyond Code Generation: Unveiling Chatgpt's Potential for The Software Development Workflow",
      journal: "International Journal of Creative Research Thoughts (IJCRT)",
      volume: "12",
      issue: "5",
      year: "2024",
      issn: "2320-2882"
    }
  ];

  const patents = [
    {
      title: "Internet of Things (IoT) System and Method for Smart Hotel Location and Internet Status Update",
      status: "Granted",
      authority: "IP Australia",
      number: "2021101733",
      year: "2021",
      month: "April",
      type: "granted"
    },
    {
      title: "THE STUDY TO ANALYSE THE ROLE OF FUZZY LOGIC IN HYBRID ENERGY SYSTEM AS A NOVEL APPROACH TO DEMAND SIDE ENERGY MANAGEMENT",
      status: "Published",
      authority: "IP India",
      number: "202441011508 A",
      year: "2024",
      month: "March",
      type: "published"
    },
    {
      title: "Ultra-Wideband Photovoltaic-Based Snake Repellent System",
      status: "Published",
      authority: "IP India",
      number: "202321038638",
      year: "2023",
      month: "December",
      type: "published"
    },
    {
      title: "AI-Driven Dynamic Bandwidth Aggregation System and Method thereof",
      status: "Filed",
      authority: "IP India",
      number: "202521044056",
      year: "2025",
      type: "filed"
    },
    {
      title: "AI-BASED SMART FERTILIZER SYSTEM FOR PLANT HEALTH DIAGNOSTICS AND OPTIMIZED FERTILIZER RECOMMENDATIONS",
      status: "Filed",
      authority: "IP India",
      number: "202521064654",
      year: "2025",
      type: "filed"
    },
    {
      title: "IoT-ENABLED TACTICAL UGV SYSTEM AND WORKING METHOD THEREOF",
      status: "Filed",
      authority: "IP India",
      number: "202521067499",
      year: "2025",
      type: "filed"
    },
    {
      title: "Hybrid Machine Learning System For Real-Time Heart Attack Risk Prediction and Diagnosis and Method Thereof",
      status: "Filed",
      authority: "IP India",
      number: "202521072815",
      year: "2025",
      type: "filed"
    }
  ];

  const books = [
    {
      title: "Frontiers in Object Detection, Edge Intelligence Multimodel Learning and Emerging Applications",
      type: "Authored",
      publisher: "Samagra CS Publication House",
      year: "2025",
      month: "September",
      isbn: "978-81-986847-1-4"
    },
    {
      title: "Clicked. Hacked. Exposed: The Shocking World of Cybercrime",
      type: "Authored",
      publisher: "A and V Publication",
      year: "2024",
      month: "March",
      isbn: "978-81-947143-7-8"
    },
    {
      title: "Integration of Machine Learning Models for Real-Time Detection of Advanced Persistent Threats and Network Intrusion",
      type: "Edited",
      publisher: "Rademics Publication",
      year: "2025",
      isbn: "9789349552388",
      doi: "10.71443/9789349552388"
    },
    {
      title: "Communication Protocols and AI Integration for Real-Time Monitoring and Predictive Healthcare Systems in Smart Cities",
      type: "Edited",
      publisher: "Rademics Publication",
      year: "2025",
      isbn: "9789349552487",
      doi: "10.71443/9789349552487"
    }
  ];

  const chapters = [
    {
      title: "Neuroscience-Inspired AI Models for Understanding Student Learning Behavior and Adaptive Teaching Methods",
      publisher: "Rademics Publication",
      year: "2025",
      isbn: "9789349552531",
      doi: "10.71443/9789349552531",
      indexing: "Google Scholar"
    },
    {
      title: "Real-Time Network Packet Inspection Using Deep Learning Models for Persistent Threat Identification",
      publisher: "Rademics Publication",
      year: "2025",
      isbn: "9789349552388",
      doi: "10.71443/9789349552388",
      indexing: "Google Scholar"
    },
    {
      title: "Convolutional Neural Networks for Brain-Computer Interfaces",
      publisher: "IGI Global",
      year: "2025",
      doi: "10.4018/979-8-3693-9445-8.ch004",
      indexing: "Scopus"
    }
  ];

  const tabs = [
    { id: 'conferences', label: 'Conferences', count: conferences.length, icon: <Users className="w-4 h-4" /> },
    { id: 'journals', label: 'Journal Papers', count: journals.length, icon: <FileText className="w-4 h-4" /> },
    { id: 'patents', label: 'Patents', count: patents.length, icon: <Award className="w-4 h-4" /> },
    { id: 'books', label: 'Books', count: books.length, icon: <BookOpen className="w-4 h-4" /> },
    { id: 'chapters', label: 'Book Chapters', count: chapters.length, icon: <BookOpen className="w-4 h-4" /> }
  ];

  const renderPublicationCard = (item, type) => {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-primary-500">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
              {item.title}
            </h3>
            
            {type === 'conferences' && (
              <div className="space-y-1 text-sm text-gray-600">
                <p className="font-medium text-primary-600">{item.venue}</p>
                <p>{item.publisher} • {item.year}</p>
              </div>
            )}
            
            {type === 'journals' && (
              <div className="space-y-1 text-sm text-gray-600">
                <p className="font-medium text-primary-600">{item.journal}</p>
                <p>Vol. {item.volume}, Issue {item.issue} • {item.year}</p>
                {item.pages && <p>Pages: {item.pages}</p>}
              </div>
            )}
            
            {type === 'patents' && (
              <div className="space-y-1 text-sm text-gray-600">
                <p className="font-medium text-primary-600">{item.authority}</p>
                <p>Patent No: {item.number}</p>
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                  item.type === 'granted' ? 'bg-green-100 text-green-800' :
                  item.type === 'published' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {item.status}
                </span>
              </div>
            )}
            
            {type === 'books' && (
              <div className="space-y-1 text-sm text-gray-600">
                <p className="font-medium text-primary-600">{item.publisher}</p>
                <p>ISBN: {item.isbn} • {item.year}</p>
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                  item.type === 'Authored' ? 'bg-purple-100 text-purple-800' : 'bg-indigo-100 text-indigo-800'
                }`}>
                  {item.type}
                </span>
              </div>
            )}
            
            {type === 'chapters' && (
              <div className="space-y-1 text-sm text-gray-600">
                <p className="font-medium text-primary-600">{item.publisher}</p>
                <p>ISBN: {item.isbn} • {item.year}</p>
                <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {item.indexing}
                </span>
              </div>
            )}
          </div>
          
          <div className="flex flex-col items-end gap-2 ml-4">
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Calendar className="w-3 h-3" />
              <span>{item.year}</span>
            </div>
            {item.doi && (
              <a 
                href={`https://doi.org/${item.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-primary-600 hover:text-primary-800 transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                DOI
              </a>
            )}
          </div>
        </div>
        
        {item.doi && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-500 font-mono break-all">
              DOI: {item.doi}
            </p>
          </div>
        )}
      </div>
    );
  };

  const getCurrentData = () => {
    switch (activeTab) {
      case 'conferences': return conferences;
      case 'journals': return showAllJournals ? journals : journals.slice(0, 6);
      case 'patents': return patents;
      case 'books': return books;
      case 'chapters': return chapters;
      default: return [];
    }
  };

  return (
    <section id="publications" className="py-12 bg-gray-50">
      <div className="container-max px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Research Publications & Contributions
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive collection of research papers, patents, books, and academic contributions spanning multiple domains in computer science and engineering.
            </p>
          </div>

          {/* Publication Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {tabs.map((tab) => (
              <div key={tab.id} className="bg-white rounded-lg p-4 text-center shadow-md">
                <div className="flex items-center justify-center gap-2 text-primary-600 mb-2">
                  {tab.icon}
                  <span className="text-2xl font-bold">{tab.count}</span>
                </div>
                <p className="text-sm text-gray-600 font-medium">{tab.label}</p>
              </div>
            ))}
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Publications Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {getCurrentData().map((item, index) => (
              <div key={index}>
                {renderPublicationCard(item, activeTab)}
              </div>
            ))}
          </div>

          {/* Show More Button for Journals */}
          {activeTab === 'journals' && journals.length > 6 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllJournals(!showAllJournals)}
                className="btn-primary"
              >
                {showAllJournals ? 'Show Less' : `Show All ${journals.length} Papers`}
              </button>
            </div>
          )}

          {/* Professional Memberships */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Professional Memberships</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Institutional Innovation Council (IIC)",
                "International Association of Engineers (IAENG)",
                "Computer Science Teachers Association (CSTA)",
                "Institute for Educational Research and Publication (IFERP)"
              ].map((membership, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-primary-50 rounded-lg">
                  <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">{membership}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Proposal */}
          <div className="mt-8 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-4">Recent Project Proposal</h3>
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="font-semibold mb-2">CarbonWise – AI-Based Carbon Management Toolkit for MSMEs</h4>
              <p className="text-primary-100 text-sm mb-2">Submitted to MSME Hackathon 5.0 under Amity University Raipur</p>
              <p className="text-primary-100 text-xs">Reference Number: INC25ECG084380</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;