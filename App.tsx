import React, { useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, Instagram, MessageCircle, Chrome, Figma, X, Lock, Menu as MenuIcon, Globe, Cpu, Brain, Gamepad2, Utensils, Zap, Code2, FileText, MapPin, Download } from 'lucide-react';
import ChatWidget from './components/ChatWidget';
import ToggleSwitch from './components/ToggleSwitch';
import Marquee from './components/Marquee';
import { PROJECTS } from './constants';

const App: React.FC = () => {
  const [contactEmail, setContactEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSendRequest = () => {
    if (!contactEmail) return;
    const subject = encodeURIComponent("Project Request from Portfolio");
    const body = encodeURIComponent(`Hi Rahul,\n\nI'm reaching out from your portfolio. Let's discuss a project.\n\nBest regards,\n${contactEmail}`);
    window.location.href = `mailto:rahulshyam2006@outlook.com?subject=${subject}&body=${body}`;
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const services = [
    { 
      id: 'web', 
      title: "Custom Website Development", 
      icon: <Globe size={32} />,
      tagline: "Fast, responsive websites built to look professional and work flawlessly.",
      bestFor: "Businesses, startups, personal brands",
      description: "I design and build modern websites tailored to your business. From landing pages to full applications, I focus on performance and usability."
    },
    { 
      id: 'engineering', 
      title: "Engineering & Educational Platforms", 
      icon: <Cpu size={32} />,
      tagline: "Interactive platforms that turn complex engineering ideas into clear experiences.",
      bestFor: "EdTech, technical founders, students",
      description: "I build interactive platforms for learning and visualization, turning complex technical concepts into simple web-based experiences."
    },
    { 
      id: 'ai', 
      title: "AI-Powered Web Applications", 
      icon: <Brain size={32} />,
      tagline: "Smart web apps that use AI to solve real problems automatically.",
      bestFor: "Productivity apps, smart tools, innovative startups",
      description: "I develop applications that use AI to automate tasks, assist users intelligently, and solve business problems through automation."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F1F0D1] text-black selection:bg-black selection:text-[#F1F0D1]">
      {/* Menu Overlay */}
      <div className={`fixed inset-0 z-[100] bg-[#F1F0D1] transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 p-4 border-2 border-black rounded-full hover:bg-black hover:text-[#F1F0D1] transition-all"
        >
          <X size={32} />
        </button>
        <nav className="h-full flex flex-col justify-center items-center gap-8">
          {['home', 'about', 'projects', 'services', 'contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item)}
              className="font-display text-5xl md:text-8xl font-black uppercase tracking-tighter hover:italic hover:text-outline transition-all"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center mix-blend-difference invert">
        <div className="font-display font-black text-2xl tracking-tighter">RAHUL S.</div>
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center gap-2 group"
        >
          <span className="text-sm font-bold uppercase tracking-widest group-hover:line-through">Menu</span>
          <MenuIcon size={20} />
        </button>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 overflow-hidden">
        <div className="relative z-10 max-w-6xl w-full text-center">
          <div className="flex flex-col items-center gap-4">
            <h1 className="font-display text-7xl md:text-[11rem] font-black tracking-tighter leading-none uppercase">
              Rahul Shyam
            </h1>
            
            <div className="mt-8 md:mt-12 relative">
              <div className="inline-block px-10 md:px-20 py-6 md:py-10 border-2 border-black rounded-[50%_10%_50%_10%] relative group hover:bg-black hover:text-[#F1F0D1] transition-all duration-500">
                <span className="font-display text-4xl md:text-8xl font-black italic tracking-tighter text-outline group-hover:text-inherit">
                  Builder
                </span>
                <div className="absolute -top-4 -right-4 bg-black text-[#F1F0D1] text-[10px] md:text-xs font-black px-4 py-1 rotate-12 uppercase">
                  CTO & Engineer
                </div>
              </div>
            </div>

            <p className="mt-12 font-display text-xl md:text-3xl font-bold italic opacity-60">
              “I don’t just build websites — I engineer solutions.”
            </p>
          </div>
        </div>
      </section>

      <Marquee text="Design • Code • Engineer • Solution" />

      {/* About Section */}
      <section id="about" className="py-24 px-6 border-b border-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <div className="space-y-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 rounded-2xl -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
                <div className="aspect-[4/5] bg-white border-2 border-black rounded-2xl overflow-hidden">
                  <img src="https://i.ibb.co/Jwf3JRgV/Headshot-rahul.png" alt="Rahul S" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
              </div>
              
              <div className="bg-black text-[#F1F0D1] p-6 rounded-2xl space-y-4">
                <div className="flex items-center gap-3 border-b border-[#F1F0D1]/20 pb-4">
                  <MapPin size={20} />
                  <span className="font-bold text-sm uppercase tracking-widest">Chennai, India</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="opacity-50 font-bold mb-1 uppercase text-[10px]">Languages</div>
                    <div className="font-bold">English, Tamil, Hindi</div>
                  </div>
                  <div>
                    <div className="opacity-50 font-bold mb-1 uppercase text-[10px]">Education</div>
                    <div className="font-bold">B.E. Civil Eng.</div>
                  </div>
                </div>
              </div>

              <a 
                href="https://drive.google.com/file/d/11BXxzDZneovwL4tFqS0xxujDtX87W1JI/view" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-8 py-6 bg-black text-[#F1F0D1] rounded-2xl font-display text-xl font-black uppercase tracking-tighter hover:italic hover:scale-[1.02] transition-all group"
              >
                Download Resume <Download size={24} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="font-display text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
                  Engineering<br/>Mindset.
                </h2>
                <p className="text-2xl md:text-4xl leading-snug font-medium opacity-80 italic">
                  "I’m Rahul S, a web developer and engineering-focused builder who designs and develops intelligent, real-world web experiences. I combine clean UI, logical system thinking, and modern technology to solve practical problems."
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="font-display text-2xl font-black uppercase border-b-2 border-black pb-2">Academic Path</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-black">Bachelor of Engineering – Civil Engineering</h4>
                      <p className="text-sm font-bold opacity-60">Erode Sengunthar Engineering College (ESEC)</p>
                      <p className="text-xs font-mono mt-1">2023 – 2027 (Second Year)</p>
                    </div>
                    <p className="text-sm opacity-70 leading-relaxed">
                      Applying civil engineering principles to interactive educational platforms and 3D visualization tools while building products alongside academics.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="font-display text-2xl font-black uppercase border-b-2 border-black pb-2">Active Roles</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-black">Chief Technology Officer</h4>
                      <p className="text-sm font-bold opacity-60">Green-Tech Infrastructure Startup</p>
                      <p className="text-xs font-mono">2025 – Present</p>
                      <p className="text-xs mt-2 opacity-70">Leading technical development for a government-funded climate-tech venture converting waste into construction bricks.</p>
                    </div>
                    <div>
                      <h4 className="font-black">Web Developer & Builder</h4>
                      <p className="text-sm font-bold opacity-60">Freelance</p>
                      <p className="text-xs font-mono">2024 – Present</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-black text-[#F1F0D1]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="font-display text-5xl md:text-8xl font-black uppercase mb-16 tracking-tighter">Selected Projects</h2>
          <div className="border-t border-[#F1F0D1]/20">
            {PROJECTS.map((project, index) => (
              <a 
                key={project.id} 
                href={project.link || '#'} 
                target={project.link ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className={`group block border-b border-[#F1F0D1]/20 transition-all duration-500 py-12 px-4 ${project.link ? 'hover:bg-[#F1F0D1] hover:text-black' : 'opacity-60 cursor-default'}`}
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                  <div className="flex-1">
                    <span className="font-mono text-[10px] mb-2 block opacity-60 uppercase">
                      {String(index + 1).padStart(2, '0')} / {project.tech.join(' • ')} 
                    </span>
                    <h3 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter">
                      {project.title}
                      {!project.link && <span className="ml-4 text-xs font-mono opacity-30 italic">(Building...)</span>}
                    </h3>
                  </div>
                  <div className="flex-1 max-w-md opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <p className="text-lg font-medium">{project.impact}</p>
                  </div>
                  <div className={`w-16 h-16 rounded-full border border-current flex items-center justify-center transition-all ${project.link ? 'group-hover:scale-110' : ''}`}>
                    {project.link ? <ArrowUpRight size={32} /> : <Lock size={24} />}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-[#F1F0D1] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-5xl md:text-8xl font-black uppercase mb-12 tracking-tighter">Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black border border-black overflow-hidden rounded-2xl">
            {services.map((service) => (
              <div key={service.id} className="bg-[#F1F0D1] p-10 flex flex-col group hover:bg-black hover:text-[#F1F0D1] transition-all duration-500">
                <div className="mb-8">{service.icon}</div>
                <h3 className="font-display text-2xl font-black uppercase tracking-tight mb-4">{service.title}</h3>
                <p className="text-sm leading-relaxed mb-6 opacity-70 group-hover:opacity-100">{service.description}</p>
                <div className="mt-auto pt-6 border-t border-black/10 group-hover:border-[#F1F0D1]/10">
                   <p className="text-[10px] font-mono font-bold uppercase tracking-widest">Best for: {service.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-32 pb-12 bg-[#F1F0D1]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-6xl md:text-8xl font-black uppercase mb-12 tracking-tighter">Let's Engineer<br/>Your Product</h2>
          <div className="max-w-2xl mx-auto mb-32 group">
            <div className="flex items-end border-b-2 border-black py-4">
              <input 
                type="text" 
                placeholder="YOUR EMAIL" 
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="bg-transparent border-none w-full text-3xl md:text-6xl font-display font-black uppercase focus:outline-none placeholder:text-black/10"
              />
              <button onClick={handleSendRequest} className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-[#F1F0D1] transition-all shrink-0">
                <ArrowUpRight size={32} />
              </button>
            </div>
          </div>
        </div>

        <footer className="py-12 border-t border-black px-6">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12 font-bold uppercase text-xs tracking-widest">
            <a href="https://www.linkedin.com/in/rahulshyamcivil/" target="_blank" rel="noopener" className="hover:line-through">LinkedIn</a>
            <a href="https://wa.me/917305169964" target="_blank" rel="noopener" className="hover:line-through">WhatsApp</a>
            <a href="mailto:rahulshyam2006@outlook.com" className="hover:line-through">Email</a>
          </div>
          <div className="text-center mt-12 opacity-30 font-mono text-[9px] tracking-[0.4em] uppercase">
            RAHUL SHYAM • CTO & FULL STACK ENGINEER • {new Date().getFullYear()}
          </div>
        </footer>
      </section>

      <ChatWidget />
    </div>
  );
};

export default App;