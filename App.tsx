
import React, { useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, Instagram, MessageCircle, Chrome, Figma, X, Lock, Menu as MenuIcon } from 'lucide-react';
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
    { id: 'ux', title: "UX/UI", description: "I provide peace of mind to my clients by demystifying the complex and ever-changing landscape of the web." },
    { id: 'branding', title: "Branding", description: "Crafting unique visual identities that resonate with your core audience and stand the test of time." },
    { id: 'illustration', title: "Illustration", description: "Bringing digital products to life with custom-made visual assets and character designs." },
    { id: 'motion', title: "Motion", description: "Adding the fourth dimension to designs with purposeful, smooth animations that guide user behavior." }
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
        <nav className="h-full flex flex-col justify-center items-center gap-8 md:gap-12">
          {['home', 'projects', 'services', 'contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item === 'home' ? 'root' : item)}
              className="font-display text-5xl md:text-8xl font-black uppercase tracking-tighter hover:italic hover:text-outline transition-all"
            >
              {item}
            </button>
          ))}
          <div className="mt-12 flex gap-8">
            <a href="https://www.linkedin.com/in/rahulshyamcivil/" target="_blank" rel="noopener" className="p-4 border-2 border-black rounded-full hover:bg-black hover:text-[#F1F0D1] transition-all"><Linkedin size={24} /></a>
            <a href="https://wa.me/917305169964" target="_blank" rel="noopener" className="p-4 border-2 border-black rounded-full hover:bg-black hover:text-[#F1F0D1] transition-all"><MessageCircle size={24} /></a>
          </div>
        </nav>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center mix-blend-difference invert">
        <div className="font-display font-black text-2xl tracking-tighter">RAHUL.</div>
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
        {/* Animated Background Path */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full opacity-10">
            <path d="M 50 100 L 150 100 Q 200 100 200 150 L 200 400 Q 200 450 250 450 L 600 450" fill="none" stroke="black" strokeWidth="2" strokeDasharray="10 10" />
            <circle cx="50" cy="100" r="6" fill="black" />
            <circle cx="600" cy="450" r="6" fill="black" />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl w-full text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-12">
              <h1 className="font-display text-6xl md:text-[11rem] font-black tracking-tighter leading-none uppercase">
                Rahul
              </h1>
              <div className="hidden md:block"><ToggleSwitch /></div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-12 -mt-4 md:-mt-10">
              <div className="hidden md:block"><ToggleSwitch /></div>
              <h1 className="font-display text-6xl md:text-[11rem] font-black tracking-tighter leading-none uppercase">
                Shyam
              </h1>
            </div>

            <div className="mt-8 md:mt-12 relative">
              <div className="inline-block px-10 md:px-20 py-6 md:py-10 border-2 border-black rounded-[50%_10%_50%_10%] relative group hover:bg-black hover:text-[#F1F0D1] transition-all duration-500">
                <span className="font-display text-4xl md:text-8xl font-black italic tracking-tighter text-outline group-hover:text-inherit">
                  Engineer
                </span>
                <div className="absolute -top-4 -right-4 bg-[#F1F0D1] text-black text-[10px] md:text-xs font-black border-2 border-black px-4 py-1 rotate-12 uppercase">
                  CTO & Builder
                </div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full border-2 border-black bg-black"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee text="Build digital products, brands and experience" />

      {/* Projects Section */}
      <section id="projects" className="border-t border-black bg-black text-[#F1F0D1]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="font-display text-5xl md:text-8xl font-black uppercase mb-16 tracking-tighter">Selected Works</h2>
          <div className="space-y-0 border-t border-[#F1F0D1]/20">
            {PROJECTS.map((project, index) => {
              const Content = (
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                  <div className="flex-1">
                    <span className="font-mono text-[10px] mb-2 block opacity-60 uppercase tracking-widest">
                      {String(index + 1).padStart(2, '0')} / {project.tech.join(' • ')} 
                    </span>
                    <h3 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter">
                      {project.title}
                      {!project.link && <span className="ml-4 text-xs font-mono opacity-30 italic">(In progress)</span>}
                    </h3>
                  </div>
                  <div className="flex-1 max-w-md opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <p className="text-lg leading-snug font-medium">{project.problem}</p>
                    <p className="text-xs mt-3 font-bold uppercase tracking-widest opacity-60">{project.impact}</p>
                  </div>
                  <div className={`w-16 h-16 rounded-full border border-current flex items-center justify-center transition-all duration-300 ${project.link ? 'group-hover:bg-[#F1F0D1] group-hover:text-black group-hover:scale-110' : 'opacity-20 cursor-not-allowed'}`}>
                    {project.link ? <ArrowUpRight size={32} /> : <Lock size={24} />}
                  </div>
                </div>
              );

              return project.link ? (
                <a 
                  key={project.id} 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group block border-b border-[#F1F0D1]/20 hover:bg-[#F1F0D1] hover:text-black transition-all duration-500 py-12 px-4"
                >
                  {Content}
                </a>
              ) : (
                <div 
                  key={project.id} 
                  className="group border-b border-[#F1F0D1]/10 py-12 px-4 cursor-default"
                >
                  {Content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="border-t border-black bg-[#F1F0D1]">
        {services.map((service) => (
          <div key={service.id} className="group border-b border-black hover:bg-black hover:text-[#F1F0D1] transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-12 flex-1">
                <h3 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter">{service.title}</h3>
                {/* No 'Open' button here as per user request - keeping only the arrow for aesthetic but non-navigational */}
                <div className="w-12 h-12 rounded-full border-2 border-black group-hover:border-[#F1F0D1] flex items-center justify-center opacity-40 group-hover:opacity-100">
                  <ArrowUpRight size={24} />
                </div>
              </div>
              <div className="flex-1 md:max-w-md opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <p className="text-lg leading-snug font-bold">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-32 bg-[#F1F0D1]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-6xl md:text-8xl font-black uppercase mb-12 tracking-tighter">Send Your Request</h2>
          
          <div className="max-w-2xl mx-auto mb-32 group">
            <div className="flex items-end border-b-2 border-black py-4">
              <input 
                type="text" 
                placeholder="YOUR EMAIL" 
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="bg-transparent border-none w-full text-3xl md:text-6xl font-display font-black uppercase focus:outline-none placeholder:text-black/5"
              />
              <button 
                onClick={handleSendRequest}
                className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-[#F1F0D1] transition-all shrink-0"
              >
                <ArrowUpRight size={32} />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-black text-[#F1F0D1] py-8">
           <Marquee text="Lets Work Together" reverse className="border-none py-0" />
        </div>

        <footer className="py-12 border-t border-black px-6">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16 font-bold uppercase text-xs tracking-[0.2em]">
            <a href="https://www.linkedin.com/in/rahulshyamcivil/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:line-through">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href="https://www.instagram.com/rahulcvjps" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:line-through">
              <Instagram size={16} /> Instagram
            </a>
            <a href="https://wa.me/917305169964" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:line-through">
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a href="mailto:rahulshyam2006@outlook.com" className="flex items-center gap-2 hover:line-through">
              <Mail size={16} /> Email
            </a>
          </div>
          <div className="text-center mt-12 opacity-30 font-mono text-[9px] uppercase tracking-[0.4em]">
            RAHUL S • CTO & FULL STACK ENGINEER • {new Date().getFullYear()}
          </div>
        </footer>
      </section>

      <ChatWidget />
    </div>
  );
};

export default App;
