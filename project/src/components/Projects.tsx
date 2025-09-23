import React from 'react';
import { Github, ExternalLink, Star, GitFork, Code, Shield, Zap, Database, Skull, Terminal, Lock, Eye, Wifi, Crosshair } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'H4CK3R_SC4NN3R',
      description: 'Military-grade vulnerability scanner with AI-powered exploit generation. Features automated payload crafting, stealth scanning modes, and real-time C2 integration.',
      longDescription: 'Advanced penetration testing framework combining machine learning with traditional exploitation techniques for maximum impact.',
      tags: ['Python', 'AI/ML', 'Exploitation', 'C2'],
      github: 'https://github.com',
      demo: 'https://demo.vulnscanner.com',
      stars: 1337,
      forks: 666,
      language: 'Python',
      status: 'CLASSIFIED',
      category: 'Exploit Framework',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Skull,
      threat: 'CRITICAL'
    },
    {
      id: 2,
      title: 'BL0CKC4H1N_TR4C3R',
      description: 'Underground cryptocurrency forensics suite. Advanced blockchain analysis, wallet de-anonymization, mixing service detection, and dark web transaction mapping.',
      longDescription: 'Elite-level blockchain investigation toolkit used by government agencies and private investigators worldwide.',
      tags: ['Go', 'Blockchain', 'OSINT', 'Forensics'],
      github: 'https://github.com',
      demo: 'https://crypto-forensics.com',
      stars: 892,
      forks: 234,
      language: 'Go',
      status: 'OPERATIONAL',
      category: 'Digital Forensics',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Eye,
      threat: 'HIGH'
    },
    {
      id: 3,
      title: 'AP1_1NT3RC3PT0R',
      description: 'Weaponized API gateway for red team operations. Real-time traffic interception, payload injection, session hijacking, and automated privilege escalation.',
      longDescription: 'Advanced API manipulation framework designed for sophisticated penetration testing and red team engagements.',
      tags: ['Node.js', 'Redis', 'Docker', 'Red Team'],
      github: 'https://github.com',
      demo: 'https://secure-api.demo.com',
      stars: 2048,
      forks: 512,
      language: 'JavaScript',
      status: 'WEAPONIZED',
      category: 'Red Team Tool',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Zap,
      threat: 'CRITICAL'
    },
    {
      id: 4,
      title: 'M4LW4R3_F4CT0RY',
      description: 'AI-powered malware generation and evasion platform. Creates polymorphic payloads, bypasses EDR solutions, and generates custom C2 protocols.',
      longDescription: 'Next-generation malware development framework utilizing machine learning for advanced evasion techniques.',
      tags: ['Python', 'TensorFlow', 'Evasion', 'C2'],
      github: 'https://github.com',
      stars: 1666,
      forks: 333,
      language: 'Python',
      status: 'UNDERGROUND',
      category: 'Malware Dev',
      image: 'https://images.pexels.com/photos/2182863/pexels-photo-2182863.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Code,
      threat: 'EXTREME'
    },
    {
      id: 5,
      title: 'CL0UD_D0M1N4T0R',
      description: 'Advanced cloud infrastructure exploitation suite. AWS/Azure/GCP privilege escalation, container breakouts, serverless backdoors, and persistence mechanisms.',
      longDescription: 'Elite cloud penetration testing framework for compromising modern cloud infrastructures and maintaining persistent access.',
      tags: ['Python', 'AWS', 'Azure', 'GCP', 'Containers'],
      github: 'https://github.com',
      demo: 'https://cloudsec-auditor.com',
      stars: 777,
      forks: 123,
      language: 'Python',
      status: 'CLASSIFIED',
      category: 'Cloud Exploitation',
      image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Lock,
      threat: 'HIGH'
    },
    {
      id: 6,
      title: 'H4CK3R_0S_X',
      description: 'Underground Linux distribution for elite hackers. Pre-loaded with custom exploits, steganography tools, Tor integration, and anti-forensics capabilities.',
      longDescription: 'Military-grade penetration testing OS with advanced anonymity features and custom-built exploitation frameworks.',
      tags: ['Linux', 'Bash', 'Exploits', 'Anonymity'],
      github: 'https://github.com',
      demo: 'https://pentestos.org',
      stars: 3141,
      forks: 1337,
      language: 'Shell',
      status: 'UNDERGROUND',
      category: 'Hacker OS',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Terminal,
      threat: 'EXTREME'
    }
  ];

  const getStatusColor = (status: string) => {
    const colors: { [key: string]: string } = {
      'OPERATIONAL': 'bg-green-500/20 text-green-400 border-green-500/30',
      'CLASSIFIED': 'bg-red-500/20 text-red-400 border-red-500/30 animate-pulse',
      'WEAPONIZED': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      'UNDERGROUND': 'bg-purple-500/20 text-purple-400 border-purple-500/30'
    };
    return colors[status] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      'Python': 'text-green-400',
      'JavaScript': 'text-cyan-400',
      'Go': 'text-blue-400',
      'Shell': 'text-red-400'
    };
    return colors[language] || 'text-gray-400';
  };

  const getThreatColor = (threat: string) => {
    const colors: { [key: string]: string } = {
      'EXTREME': 'bg-red-500/30 text-red-300 border-red-500/50 animate-pulse',
      'CRITICAL': 'bg-orange-500/30 text-orange-300 border-orange-500/50',
      'HIGH': 'bg-yellow-500/30 text-yellow-300 border-yellow-500/50'
    };
    return colors[threat] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-green-900/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
            <Crosshair className="h-4 w-4 text-purple-400 mr-2 animate-pulse" />
            <span className="text-sm text-purple-300 font-mono">WEAPON_ARSENAL.EXE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-mono">
              [WEAPON_CACHE]
            </span>
          </h2>
          <p className="text-xl text-green-300 max-w-3xl mx-auto font-mono">
            <span className="text-red-400">[TOP_SECRET]</span> Advanced exploitation frameworks, custom malware, 
            and <span className="text-cyan-400">weaponized tools</span> for elite penetration testing operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-black rounded-lg border border-green-500/30 hover:border-purple-500/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 group overflow-hidden relative"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <span className={`px-2 py-1 text-xs font-mono rounded border ${getThreatColor(project.threat)}`}>
                    {project.threat}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <project.icon className="h-8 w-8 text-red-400 animate-pulse" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors font-mono">
                    {project.title}
                  </h3>
                  <span className="text-xs text-cyan-400 bg-green-500/10 border border-green-500/30 px-2 py-1 rounded font-mono">
                    {project.category}
                  </span>
                </div>

                <p className="text-green-400 mb-4 text-sm line-clamp-3 font-mono">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs text-cyan-400 bg-purple-500/10 border border-purple-500/30 px-2 py-1 rounded font-mono">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-green-500 mb-4 font-mono">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-400" />
                      {project.stars}
                    </span>
                    <span className="flex items-center">
                      <GitFork className="h-4 w-4 mr-1 text-blue-400" />
                      {project.forks}
                    </span>
                  </div>
                  <span className={`flex items-center ${getLanguageColor(project.language)}`}>
                    <div className="w-2 h-2 rounded-full bg-current mr-1"></div>
                    {project.language}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <a 
                      href={project.github}
                      className="text-green-400 hover:text-cyan-400 transition-colors relative group"
                      title="View on GitHub"
                    >
                      <Github className="h-5 w-5" />
                      <div className="absolute -inset-2 bg-green-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo}
                        className="text-green-400 hover:text-cyan-400 transition-colors relative group"
                        title="Live Demo"
                      >
                        <ExternalLink className="h-5 w-5" />
                        <div className="absolute -inset-2 bg-green-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </a>
                    )}
                  </div>
                  <button className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors font-mono">
                    DEPLOY_WEAPON →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-semibold font-mono transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 border border-purple-400">
            ACCESS_FULL_ARSENAL
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;