import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Terminal, Skull, Zap, Shield, Code, Eye, Wifi } from 'lucide-react';

const Hero = () => {
  const matrixChars = ['0', '1', 'ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ'];
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-green-900/10 to-red-900/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent"></div>
      
      {/* Matrix rain effect */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400/30 font-mono text-xs animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              transform: `translateY(${Math.random() * 100}px)`
            }}
          >
            {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
          </div>
        ))}
      </div>

      {/* Scanning lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6 backdrop-blur-sm">
            <Skull className="h-4 w-4 text-red-400 mr-2 animate-pulse" />
            <span className="text-sm text-green-300 font-mono font-medium tracking-wider">ETHICAL_HACKER.EXE</span>
            <Zap className="h-4 w-4 text-yellow-400 ml-2 animate-bounce" />
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-pulse">
              H4CK1NG
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              TH3_M4TR1X
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-green-300 mb-8 max-w-2xl mx-auto leading-relaxed font-mono">
            <span className="text-red-400">[CLASSIFIED]</span> Elite penetration tester & exploit developer. 
            <span className="text-cyan-400">Breaking systems</span> to <span className="text-green-400">build better defenses</span>.
          </p>
          
          {/* Status indicators */}
          <div className="flex justify-center space-x-6 mb-8 font-mono text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400">ONLINE</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-blue-400" />
              <span className="text-blue-400">SECURED</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="h-4 w-4 text-yellow-400 animate-pulse" />
              <span className="text-yellow-400">WATCHING</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-black px-8 py-4 rounded-lg font-semibold font-mono transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 border border-green-400">
              <Code className="inline h-5 w-5 mr-2" />
              INIT_EXPLOITS
            </button>
            <button className="border-2 border-red-500 hover:border-red-400 text-red-400 hover:text-red-300 px-8 py-4 rounded-lg font-semibold font-mono transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
              <Terminal className="inline h-5 w-5 mr-2" />
              ACCESS_LOGS
            </button>
          </div>
          
          <div className="flex items-center justify-center space-x-6">
            <a href="#" className="text-green-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110 relative group">
              <Github className="h-6 w-6" />
              <div className="absolute -inset-2 bg-green-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
            </a>
            <a href="#" className="text-green-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110 relative group">
              <Linkedin className="h-6 w-6" />
              <div className="absolute -inset-2 bg-green-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
            </a>
            <a href="#" className="text-green-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110 relative group">
              <Mail className="h-6 w-6" />
              <div className="absolute -inset-2 bg-green-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
            </a>
            <a href="#" className="text-red-400 hover:text-orange-400 transition-colors duration-300 transform hover:scale-110 relative group">
              <Wifi className="h-6 w-6" />
              <div className="absolute -inset-2 bg-red-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-green-400" />
        <div className="absolute -inset-2 bg-green-400/20 rounded-full animate-ping"></div>
      </div>
    </section>
  );
};

export default Hero;