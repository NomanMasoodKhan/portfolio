import React from 'react';
import { Calendar, Clock, Eye, ArrowRight, Tag, Skull, Zap, Lock, Terminal, Shield, Code } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: '[EXPLOIT] Advanced SQLi Bypass Techniques for WAF Evasion',
      excerpt: 'Weaponizing SQL injection against modern security measures. Includes custom payloads, blind injection automation, and WAF fingerprinting techniques.',
      date: '2024-01-15',
      readTime: '8 min read',
      views: '2.5k',
      category: 'Web Exploitation',
      tags: ['SQLi', 'WAF Bypass', 'Exploitation'],
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800',
      threat: 'CRITICAL',
      icon: Skull
    },
    {
      id: 2,
      title: '[MALWARE] Dissecting APT29 Banking Trojan Infrastructure',
      excerpt: 'Complete teardown of state-sponsored banking malware. Reverse engineering C2 protocols, analyzing evasion techniques, and IOC extraction.',
      date: '2024-01-10',
      readTime: '12 min read',
      views: '3.1k',
      category: 'Malware Research',
      tags: ['APT', 'Reverse Engineering', 'C2 Analysis'],
      image: 'https://images.pexels.com/photos/2471234/pexels-photo-2471234.jpeg?auto=compress&cs=tinysrgb&w=800',
      threat: 'HIGH',
      icon: Code
    },
    {
      id: 3,
      title: '[0-DAY] Buffer Overflow to RCE in VLC Media Player',
      excerpt: 'Zero-day discovery walkthrough: from fuzzing to full RCE exploit. Includes shellcode development, ASLR bypass, and responsible disclosure timeline.',
      date: '2024-01-05',
      readTime: '15 min read',
      views: '4.2k',
      category: '0-Day Research',
      tags: ['Zero-Day', 'RCE', 'Exploit Dev'],
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      threat: 'CRITICAL',
      icon: Zap
    },
    {
      id: 4,
      title: '[RED TEAM] AD Compromise: Recon to Domain Admin',
      excerpt: 'Complete Active Directory takeover methodology. Kerberoasting, Golden Tickets, DCSync attacks, and persistence techniques for enterprise networks.',
      date: '2023-12-28',
      readTime: '10 min read',
      views: '1.8k',
      category: 'Red Teaming',
      tags: ['AD', 'Kerberos', 'Persistence'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      threat: 'HIGH',
      icon: Shield
    },
    {
      id: 5,
      title: '[CLOUD] AWS Infrastructure Exploitation Techniques',
      excerpt: 'Advanced cloud penetration testing methodologies. S3 bucket enumeration, IAM privilege escalation, Lambda backdoors, and persistence mechanisms.',
      date: '2023-12-20',
      readTime: '7 min read',
      views: '2.9k',
      category: 'Cloud Hacking',
      tags: ['AWS', 'IAM', 'Lambda'],
      image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=800',
      threat: 'MEDIUM',
      icon: Lock
    },
    {
      id: 6,
      title: '[MOBILE] Android Malware Development & Evasion',
      excerpt: 'Creating undetectable Android malware. APK manipulation, runtime hooking with Frida, anti-analysis techniques, and C2 communication over Tor.',
      date: '2023-12-15',
      readTime: '11 min read',
      views: '2.1k',
      category: 'Mobile Hacking',
      tags: ['Android', 'Frida', 'Evasion'],
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      threat: 'HIGH',
      icon: Terminal
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Web Exploitation': 'bg-red-500/20 text-red-400 border-red-500/30',
      'Malware Research': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      '0-Day Research': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      'Red Teaming': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
      'Cloud Hacking': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Mobile Hacking': 'bg-green-500/20 text-green-400 border-green-500/30'
    };
    return colors[category] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  const getThreatColor = (threat: string) => {
    const colors: { [key: string]: string } = {
      'CRITICAL': 'bg-red-500/20 text-red-400 border-red-500/50 animate-pulse',
      'HIGH': 'bg-orange-500/20 text-orange-400 border-orange-500/50',
      'MEDIUM': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50'
    };
    return colors[threat] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  return (
    <section id="blog" className="py-20 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/5 to-green-900/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
            <Skull className="h-4 w-4 text-red-400 mr-2 animate-pulse" />
            <span className="text-sm text-red-300 font-mono">EXPLOIT_DATABASE.EXE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent font-mono">
              [EXPLOIT_ARCHIVE]
            </span>
          </h2>
          <p className="text-xl text-green-300 max-w-3xl mx-auto font-mono">
            <span className="text-red-400">[CLASSIFIED]</span> Advanced exploitation techniques, zero-day research, 
            and <span className="text-cyan-400">weaponized payloads</span> for educational purposes only.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.id} 
              className="bg-black rounded-lg overflow-hidden border border-green-500/30 hover:border-red-500/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-red-500/20 group relative"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  <span className={`px-2 py-1 text-xs font-mono rounded border ${getThreatColor(post.threat)}`}>
                    {post.threat}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <post.icon className="h-6 w-6 text-red-400 animate-pulse" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-red-400 transition-colors font-mono">
                  {post.title}
                </h3>
                
                <p className="text-green-400 mb-4 text-sm line-clamp-3 font-mono">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="flex items-center text-xs text-cyan-400 bg-green-500/10 border border-green-500/30 px-2 py-1 rounded font-mono">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-green-500 mb-4 font-mono">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {post.views}
                  </span>
                </div>
                
                <button className="flex items-center text-red-400 hover:text-red-300 font-medium transition-colors group font-mono">
                  EXECUTE_EXPLOIT
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-3 rounded-lg font-semibold font-mono transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 border border-red-400">
            ACCESS_ALL_EXPLOITS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;