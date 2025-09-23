import React, { useState } from 'react';
import { Mail, MessageCircle, Send, MapPin, Phone, Linkedin, Github, Twitter, Terminal, Shield, Lock, Eye } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Terminal,
      title: 'Secure Channel',
      value: 'h4ck3r@protonmail.com',
      link: 'mailto:h4ck3r@protonmail.com'
    },
    {
      icon: Shield,
      title: 'Encrypted Line',
      value: '+1 (555) H4CK-3R5',
      link: 'tel:+15554225375'
    },
    {
      icon: Eye,
      title: 'Location',
      value: '[REDACTED]',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, name: 'GitHub', url: 'https://github.com', color: 'hover:text-green-400' },
    { icon: Linkedin, name: 'LinkedIn', url: 'https://linkedin.com', color: 'hover:text-cyan-400' },
    { icon: Twitter, name: 'Twitter', url: 'https://twitter.com', color: 'hover:text-purple-400' },
    { icon: Mail, name: 'Secure Email', url: 'mailto:h4ck3r@protonmail.com', color: 'hover:text-red-400' }
  ];

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/5 to-purple-900/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
            <Lock className="h-4 w-4 text-cyan-400 mr-2 animate-pulse" />
            <span className="text-sm text-cyan-300 font-mono">SECURE_COMMS.EXE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent font-mono">
              [ESTABLISH_CONNECTION]
            </span>
          </h2>
          <p className="text-xl text-green-300 max-w-3xl mx-auto font-mono">
            <span className="text-red-400">[ENCRYPTED]</span> Need elite hacking services, zero-day research, 
            or <span className="text-cyan-400">advanced penetration testing</span>? Establish secure communication.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-black rounded-lg p-8 border border-green-500/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center font-mono">
                <Terminal className="h-6 w-6 text-green-400 mr-3 animate-pulse" />
                SECURE_CHANNELS
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start space-x-4">
                    <info.icon className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-green-400 font-mono">{info.title}</p>
                      <a href={info.link} className="text-white hover:text-cyan-400 transition-colors font-mono">
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4 font-mono">SOCIAL_NETWORKS</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className={`text-green-400 ${social.color} transition-colors transform hover:scale-110 relative group`}
                      title={social.name}
                    >
                      <social.icon className="h-6 w-6" />
                      <div className="absolute -inset-2 bg-green-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-4 bg-red-500/10 rounded-lg border border-red-500/30">
                <p className="text-sm text-red-300 font-mono">
                  <strong className="text-red-400">[WARNING]:</strong> All communications are monitored and encrypted. 
                  For zero-day disclosures, use PGP encryption with key: <span className="text-cyan-400">0xDEADBEEF</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-black rounded-lg p-8 border border-green-500/30">
              {/* Terminal header */}
              <div className="bg-green-900/20 -mx-8 -mt-8 mb-8 px-8 py-4 border-b border-green-500/30 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="ml-4 text-green-400 font-mono text-sm">root@secure-terminal:~$ ./contact_form.sh</span>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-green-300 mb-2 font-mono">
                      IDENTITY *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-green-500/30 rounded-lg text-green-300 placeholder-green-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors font-mono"
                      placeholder="[CLASSIFIED]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-green-300 mb-2 font-mono">
                      SECURE_EMAIL *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-green-500/30 rounded-lg text-green-300 placeholder-green-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors font-mono"
                      placeholder="h4ck3r@protonmail.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-green-300 mb-2 font-mono">
                    OPERATION_TYPE *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-green-500/30 rounded-lg text-green-300 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors font-mono"
                  >
                    <option value="">Select operation type</option>
                    <option value="redteam">Red Team Engagement</option>
                    <option value="zeroday">Zero-Day Research</option>
                    <option value="exploit">Custom Exploit Development</option>
                    <option value="pentest">Advanced Penetration Testing</option>
                    <option value="training">Elite Hacker Training</option>
                    <option value="classified">Classified Operation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-green-300 mb-2 font-mono">
                    ENCRYPTED_MESSAGE *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-green-500/30 rounded-lg text-green-300 placeholder-green-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none font-mono"
                    placeholder="[ENCRYPTED] Provide operation details, target specifications, and required clearance level..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-black px-6 py-3 rounded-lg font-semibold font-mono transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center justify-center space-x-2 border border-green-400"
                >
                  <Terminal className="h-5 w-5" />
                  <span>TRANSMIT_ENCRYPTED</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;