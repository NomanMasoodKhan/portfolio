import React from 'react';
import { Shield, Target, Code, Award, Book, Users, Skull, Zap, Lock, Eye, Terminal, Wifi } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Exploit Development', level: 95, color: 'bg-red-500', icon: Skull },
    { name: 'Network Infiltration', level: 92, color: 'bg-green-500', icon: Wifi },
    { name: 'Reverse Engineering', level: 88, color: 'bg-purple-500', icon: Code },
    { name: 'Social Engineering', level: 85, color: 'bg-orange-500', icon: Eye },
    { name: 'Cryptography Breaking', level: 90, color: 'bg-blue-500', icon: Lock },
    { name: 'System Compromise', level: 93, color: 'bg-yellow-500', icon: Zap },
  ];

  const achievements = [
    { icon: Skull, title: 'Elite H4cker', desc: 'Certified in advanced penetration techniques', color: 'text-red-400' },
    { icon: Target, title: 'Zero-Day Hunter', desc: 'Discovered 50+ critical vulnerabilities', color: 'text-orange-400' },
    { icon: Code, title: 'Exploit Author', desc: 'Published exploits for major CVEs', color: 'text-green-400' },
    { icon: Award, title: 'Bug Bounty Legend', desc: 'Hall of Fame in 20+ programs', color: 'text-yellow-400' },
    { icon: Book, title: 'Research Papers', desc: '100+ technical writeups published', color: 'text-cyan-400' },
    { icon: Users, title: 'Underground Mentor', desc: 'Training elite security researchers', color: 'text-purple-400' },
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/5 to-red-900/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
            <Terminal className="h-4 w-4 text-green-400 mr-2" />
            <span className="text-sm text-green-300 font-mono">PROFILE_ANALYSIS.EXE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent font-mono">
              [CLASSIFIED_PROFILE]
            </span>
          </h2>
          <p className="text-xl text-green-300 max-w-3xl mx-auto font-mono">
            <span className="text-red-400">[ACCESS_GRANTED]</span> Elite cybersecurity operative with 7+ years in the digital underground. 
            Specializing in <span className="text-cyan-400">advanced persistent threats</span> and <span className="text-yellow-400">zero-day exploitation</span>.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-green-400 font-mono flex items-center">
              <Zap className="h-6 w-6 mr-2 animate-pulse" />
              SKILL_MATRIX.DAT
            </h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <skill.icon className="h-4 w-4 text-green-400 mr-2" />
                      <span className="text-green-300 font-medium font-mono">{skill.name}</span>
                    </div>
                    <span className="text-cyan-400 text-sm font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 border border-green-500/30">
                    <div 
                      className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Story */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-red-400 font-mono flex items-center">
              <Eye className="h-6 w-6 mr-2 animate-pulse" />
              ORIGIN_STORY.LOG
            </h3>
            <div className="space-y-4 text-green-300 font-mono text-sm leading-relaxed">
              <p>
                <span className="text-cyan-400">[INIT]</span> Journey began in the digital underground at age 16. 
                Started with simple <span className="text-red-400">buffer overflows</span> and evolved into 
                sophisticated <span className="text-yellow-400">APT simulations</span>.
              </p>
              <p>
                <span className="text-cyan-400">[EVOLUTION]</span> Infiltrated Fortune 500 networks, 
                discovered <span className="text-red-400">zero-days</span> in critical infrastructure. 
                Transitioned to <span className="text-green-400">ethical hacking</span> to protect rather than exploit.
              </p>
              <p>
                <span className="text-cyan-400">[CURRENT]</span> Now operating as a <span className="text-purple-400">white-hat</span> 
                researcher, sharing knowledge through <span className="text-orange-400">detailed exploits</span> and 
                training the next generation of <span className="text-green-400">cyber warriors</span>.
              </p>
            </div>
            
            {/* Terminal window */}
            <div className="mt-6 bg-black border border-green-500/30 rounded-lg overflow-hidden">
              <div className="bg-green-900/20 px-4 py-2 border-b border-green-500/30 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="ml-4 text-green-400 font-mono text-sm">root@cyberh4ck3r:~$</span>
              </div>
              <div className="p-4 font-mono text-sm">
                <div className="text-green-400">$ whoami</div>
                <div className="text-cyan-400">elite_hacker</div>
                <div className="text-green-400">$ cat /etc/motd</div>
                <div className="text-yellow-400">"In the world of zeros and ones, I am the exception."</div>
                <div className="text-green-400 animate-pulse">$ _</div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-red-400 font-mono flex items-center justify-center">
            <Award className="h-6 w-6 mr-2 animate-pulse" />
            ACHIEVEMENT_UNLOCKED.DAT
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <div key={achievement.title} className="bg-black border border-green-500/30 rounded-lg p-6 hover:border-green-400/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-green-500/20 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <achievement.icon className={`h-10 w-10 ${achievement.color} mb-4 relative z-10 group-hover:animate-pulse`} />
                <h4 className="text-lg font-semibold text-white mb-2 font-mono relative z-10">{achievement.title}</h4>
                <p className="text-green-400 text-sm font-mono relative z-10">{achievement.desc}</p>
                <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;