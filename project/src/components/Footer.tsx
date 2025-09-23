import React from 'react';
import { Terminal, Skull, Github, Linkedin, Twitter, Mail, ArrowUp, Lock, Eye, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Profile', href: '#about' },
    { name: 'Exploits', href: '#blog' },
    { name: 'Arsenal', href: '#projects' },
    { name: 'Connect', href: '#contact' }
  ];

  const categories = [
    { name: 'Web Exploitation', href: '#' },
    { name: 'Malware Research', href: '#' },
    { name: 'Cloud Hacking', href: '#' },
    { name: 'Mobile Hacking', href: '#' }
  ];

  const resources = [
    { name: 'Exploit Tools', href: '#' },
    { name: '0-Day Archive', href: '#' },
    { name: 'Hacking Techniques', href: '#' },
    { name: 'Underground Resources', href: '#' }
  ];

  const socialLinks = [
    { icon: Github, name: 'GitHub', url: 'https://github.com' },
    { icon: Linkedin, name: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: Twitter, name: 'Twitter', url: 'https://twitter.com' },
    { icon: Mail, name: 'Secure Email', url: 'mailto:h4ck3r@protonmail.com' }
  ];

  return (
    <footer className="bg-black border-t border-green-500/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-900/5 to-transparent"></div>
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Terminal className="h-8 w-8 text-green-400 animate-pulse" />
              <span className="text-xl font-bold font-mono bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                CYBERH4CK3R
              </span>
              <Skull className="h-6 w-6 text-red-400" />
            </div>
            <p className="text-green-400 text-sm mb-6 leading-relaxed font-mono">
              <span className="text-red-400">[CLASSIFIED]</span> Elite hacker operating in the digital underground. 
              Specializing in <span className="text-cyan-400">advanced exploitation</span> and zero-day research 
              for educational purposes only.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-green-400 hover:text-cyan-400 transition-colors transform hover:scale-110 relative group"
                  title={social.name}
                >
                  <social.icon className="h-5 w-5" />
                  <div className="absolute -inset-2 bg-green-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
              ))}
            </div>
            
            {/* Status indicators */}
            <div className="flex items-center space-x-4 mt-4 text-xs font-mono">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400">ONLINE</span>
              </div>
              <div className="flex items-center space-x-1">
                <Lock className="h-3 w-3 text-blue-400" />
                <span className="text-blue-400">SECURED</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="h-3 w-3 text-yellow-400" />
                <span className="text-yellow-400">WATCHING</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-green-400 font-semibold mb-4 font-mono flex items-center">
              <Zap className="h-4 w-4 mr-2" />
              QUICK_ACCESS
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-green-400 hover:text-cyan-400 transition-colors text-sm font-mono">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-red-400 font-semibold mb-4 font-mono flex items-center">
              <Skull className="h-4 w-4 mr-2" />
              EXPLOIT_TYPES
            </h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <a href={category.href} className="text-green-400 hover:text-cyan-400 transition-colors text-sm font-mono">
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-purple-400 font-semibold mb-4 font-mono flex items-center">
              <Terminal className="h-4 w-4 mr-2" />
              RESOURCES
            </h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a href={resource.href} className="text-green-400 hover:text-cyan-400 transition-colors text-sm font-mono">
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-green-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center text-sm text-green-400 font-mono">
              <span>© {currentYear} CYBERH4CK3R. Coded with</span>
              <Skull className="h-4 w-4 text-red-400 mx-1 animate-pulse" />
              <span>for the underground.</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-green-400 hover:text-cyan-400 transition-colors text-sm font-mono">
                [REDACTED]
              </a>
              <a href="#" className="text-green-400 hover:text-cyan-400 transition-colors text-sm font-mono">
                [CLASSIFIED]
              </a>
              <button
                onClick={scrollToTop}
                className="text-green-400 hover:text-cyan-400 transition-colors transform hover:scale-110 relative group"
                title="Back to top"
              >
                <ArrowUp className="h-5 w-5" />
                <div className="absolute -inset-2 bg-green-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;