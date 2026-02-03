
import React, { Component, ReactNode, useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Linkedin, Mail, Instagram, MessageCircle, X, Lock, Menu as MenuIcon, Globe, Cpu, Brain, MapPin, Download, Info, Award, BookOpen, GraduationCap, Mic2, Github, ArrowUp, Zap, Users, Trophy } from 'lucide-react';
import { motion, useScroll, useSpring, AnimatePresence, animate } from 'framer-motion';
import ChatWidget from './components/ChatWidget';
import Marquee from './components/Marquee';
import { PROJECTS, SKILLS_DETAILED } from './constants';

// Explicit interfaces for ErrorBoundary to ensure state and props are correctly identified by TypeScript
interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

/**
 * Error Boundary Component
 * Using explicit Component import and standard React structure to ensure TypeScript correctly identifies props and state.
 */
// Fix: Using React.Component explicitly to avoid potential shadowing issues with the destructured import and to ensure correct generic typing for props.
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = { hasError: false };

  constructor(props: ErrorBoundaryProps) {
    super(props);
  }

  static getDerivedStateFromError(_: any): ErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: any, errorInfo: any) {
    console.error("Uncaught error:", error, errorInfo);
  }

  // Fix: Explicitly typing the return of render to ReactNode to satisfy strict type checks in complex component trees.
  public render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F1F0D1] flex flex-col items-center justify-center p-6 text-center">
          <div className="border-4 border-black p-10 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-md transform -rotate-1">
            <h1 className="font-display text-4xl font-black uppercase mb-4 tracking-tighter">System Glitch.</h1>
            <p className="font-bold opacity-60 mb-8 leading-relaxed italic text-balance">
              Even engineered solutions face unexpected runtime constraints. We've hit an error boundary.
            </p>
            <div className="space-y-4">
              <button 
                onClick={() => window.location.reload()}
                className="w-full px-8 py-4 bg-black text-[#F1F0D1] font-display font-black uppercase tracking-widest hover:bg-[#F1F0D1] hover:text-black border-2 border-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] active:shadow-none active:translate-x-1 active:translate-y-1"
              >
                Reset Connection
              </button>
              <a 
                href="mailto:rahulshyam2006@outlook.com"
                className="block w-full px-8 py-4 bg-white text-black font-display font-black uppercase tracking-widest border-2 border-black transition-all hover:italic"
              >
                Report Issue
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const RevealSection = ({ children, id, className, delay = 0 }: { children?: React.ReactNode; id?: string; className?: string; delay?: number }) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.section>
  );
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const fadeInItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const App: React.FC = () => {
  const [contactEmail, setContactEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const scrollAnimationRef = useRef<any>(null);

  // Scroll Progress Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSendRequest = () => {
    const subject = encodeURIComponent("Project Inquiry");
    const body = encodeURIComponent("Hi Rahul, I saw your portfolio and would like to discuss a project.");
    window.location.href = `mailto:rahulshyam2006@outlook.com?subject=${subject}&body=${body}`;
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setIsMenuOpen(false);
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const startPosition = window.pageYOffset;
      const targetPosition = elementPosition + startPosition - headerOffset;

      // Stop any existing scroll animation to prevent conflicting updates
      if (scrollAnimationRef.current) {
        scrollAnimationRef.current.stop();
      }

      // Refined scroll animation: Faster duration (1s) and a smoother expo-style easing for a high-end feel
      scrollAnimationRef.current = animate(startPosition, targetPosition, {
        type: "tween",
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1], // Custom expo-style ease-out
        onUpdate: (latest: number) => window.scrollTo(0, latest)
      });
    } else {
      setIsMenuOpen(false);
    }
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

  const collegePresentations = [
    { name: "PSG College of Technology", role: "Paper Presentation & Workshop" },
    { name: "Kongu Engineering College", role: "Technical Paper Presentation" },
    { name: "KPR Institute of Engineering & Tech", role: "Workshop & Symposium" },
    { name: "Sasurie College of Engineering", role: "Technical Paper Presentation" },
    { name: "SRM Institute of Science & Tech", role: "Paper Presentation (Chennai)" },
    { name: "Erode Sengunthar Engineering College", role: "National Conference & Presentations" }
  ];

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'performance', label: 'Academic' },
    { id: 'engagements', label: 'Engagements' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Expertise' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#F1F0D1] text-black selection:bg-black selection:text-[#F1F0D1]">
        {/* Scroll Progress Bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-black z-[100] origin-left"
          style={{ scaleX }}
        />

        {/* Navigation Overlay */}
        <div className={`fixed inset-0 z-[110] bg-black text-[#F1F0D1] transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-4 border-2 border-[#F1F0D1] rounded-full hover:bg-[#F1F0D1] hover:text-black transition-all"
            aria-label="Close Menu"
          >
            <X size={32} />
          </button>
          <nav className="h-full flex flex-col justify-center items-center gap-6 p-10 overflow-y-auto">
            {menuItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-display text-4xl md:text-7xl font-black uppercase tracking-tighter hover:italic hover:text-outline transition-all text-center"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Persistent Header */}
        <header className="fixed top-0 left-0 right-0 z-[90] p-4 md:p-6 flex justify-between items-center pointer-events-none">
          <div className="flex items-center gap-4 pointer-events-auto">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="font-display font-black text-xl md:text-2xl tracking-tighter bg-black text-[#F1F0D1] px-4 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
            >
              RAHUL S.
            </motion.div>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4 pointer-events-auto">
            <motion.button 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              onClick={() => scrollToSection('contact')}
              className="hidden sm:flex items-center gap-2 bg-[#F1F0D1] border-2 border-black px-4 py-2 font-bold uppercase text-xs tracking-widest hover:bg-black hover:text-[#F1F0D1] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1"
            >
              Let's Talk <Mail size={16} />
            </motion.button>
            <motion.button 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-2 bg-black text-[#F1F0D1] border-2 border-black px-4 py-2 font-bold uppercase text-xs tracking-widest hover:bg-[#F1F0D1] hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
              aria-label="Open Menu"
            >
              <span className="hidden md:inline">Browse</span>
              <MenuIcon size={18} />
            </motion.button>
          </div>
        </header>

        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 overflow-hidden scroll-mt-0">
          <div className="relative z-10 max-w-6xl w-full text-center">
            <div className="flex flex-col items-center gap-4">
              <motion.h1 
                initial={{ opacity: 0, scale: 0.94, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 1.4, 
                  ease: [0.16, 1, 0.3, 1],
                  opacity: { duration: 1 }
                }}
                className="font-display text-7xl md:text-[11rem] font-black tracking-tighter leading-none uppercase"
              >
                Rahul Shyam
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-8 md:mt-12 relative"
              >
                <div className="absolute -left-16 top-1/2 w-12 h-px border-t border-dashed border-black/30 hidden lg:block"></div>
                <div className="absolute -right-16 top-1/2 w-12 h-px border-t border-dashed border-black/30 hidden lg:block"></div>
                
                <div className="inline-block px-10 md:px-20 py-6 md:py-10 border-2 border-black rounded-[50%_10%_50%_10%] relative group hover:bg-black hover:text-[#F1F0D1] transition-all duration-500">
                  <span className="font-display text-4xl md:text-8xl font-black italic tracking-tighter text-outline group-hover:text-inherit">
                    Builder
                  </span>
                  <div className="absolute -top-4 -right-4 bg-black text-[#F1F0D1] text-[10px] md:text-xs font-black px-4 py-1 rotate-12 uppercase">
                    CTO & Engineer
                  </div>
                </div>
                
                <div className="absolute left-1/2 -bottom-12 w-px h-12 border-l border-dashed border-black/20 -translate-x-1/2"></div>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-12 font-display text-xl md:text-3xl font-bold italic"
              >
                “I don’t just build websites — I engineer solutions.”
              </motion.p>
            </div>
          </div>
          
          <div className="absolute top-1/4 left-10 w-4 h-4 border-l-2 border-t-2 border-black/10"></div>
          <div className="absolute bottom-1/4 right-10 w-4 h-4 border-r-2 border-b-2 border-black/10"></div>
        </section>

        <Marquee text="Design • Code • Engineer • Solution" />

        {/* About Section */}
        <RevealSection id="about" className="py-24 px-6 border-b border-black scroll-mt-28 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8 relative"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 rounded-2xl -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
                  <div className="aspect-[4/5] bg-white border-2 border-black rounded-2xl overflow-hidden">
                    <img src="https://i.ibb.co/Jwf3JRgV/Headshot-rahul.png" alt="Rahul S" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                </div>
                
                <div className="bg-black text-[#F1F0D1] p-6 rounded-2xl space-y-4 relative">
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
                  <div className="absolute -top-12 left-1/2 w-px h-12 border-l border-dashed border-black/40 -z-10"></div>
                </div>

                <a 
                  href="https://drive.google.com/file/d/11BXxzDZneovwL4tFqS0xxujDtX87W1JI/view" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-8 py-6 bg-black text-[#F1F0D1] rounded-2xl font-display text-xl font-black uppercase tracking-tighter hover:italic hover:scale-[1.02] transition-all group shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]"
                >
                  Download Resume <Download size={24} className="group-hover:translate-y-1 transition-transform" />
                </a>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-12 relative"
              >
                <div className="absolute -left-8 top-12 bottom-0 w-px border-l border-dashed border-black/20 hidden lg:block">
                  <div className="absolute top-0 -left-[3.5px] w-[7px] h-[7px] bg-black rounded-full"></div>
                  <div className="absolute bottom-0 -left-[3.5px] w-[7px] h-[7px] bg-black rounded-full"></div>
                </div>

                <div className="relative">
                  <div className="relative inline-block">
                    <h2 className="font-display text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
                      Engineering<br/>Mindset.
                    </h2>
                    <div className="absolute -bottom-4 left-0 w-full flex items-center gap-2">
                      <div className="w-2 h-2 bg-black rounded-full shrink-0"></div>
                      <div className="flex-1 h-px border-t border-dashed border-black/30"></div>
                    </div>
                  </div>
                  <p className="mt-12 text-2xl md:text-4xl leading-snug font-medium opacity-80 italic">
                    "I’m Rahul S, a web developer and engineering-focused builder who designs and develops intelligent, real-world web experiences. I combine clean UI, logical system thinking, and modern technology to solve practical problems."
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 pt-8 relative">
                   <div className="absolute left-1/2 top-8 bottom-0 w-px border-l border-dashed border-black/10 hidden md:block"></div>
                   
                  <div className="space-y-6 relative">
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
              </motion.div>
            </div>
          </div>
        </RevealSection>

        {/* Academic Performance Section */}
        <RevealSection id="performance" className="py-24 px-6 border-b border-black scroll-mt-28">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-black text-[#F1F0D1] p-10 rounded-2xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group h-full flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-6">
                    <GraduationCap size={40} className="text-[#F1F0D1]" />
                    <div className="text-right">
                      <div className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] opacity-50">CGPA</div>
                      <div className="text-6xl md:text-8xl font-display font-black">8.6</div>
                    </div>
                  </div>
                  <h3 className="font-display text-2xl font-black uppercase mb-4 tracking-tighter">Academic Excellence</h3>
                  <p className="text-lg opacity-70 leading-relaxed italic">
                    Maintaining a strong academic record while actively scaling real-world engineering projects and startups. 
                  </p>
                  <div className="absolute top-2 right-2 w-10 h-10 border-t border-r border-dashed border-[#F1F0D1]/20"></div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-black p-10 rounded-2xl space-y-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative"
              >
                <div className="flex items-center gap-3">
                  <BookOpen size={32} />
                  <h3 className="font-display text-3xl font-black uppercase tracking-tight">Study Philosophy</h3>
                </div>
                <div className="space-y-6">
                  <div className="p-6 bg-black/5 rounded-xl border-l-4 border-black relative">
                    <p className="text-lg font-bold leading-relaxed italic">"True learning happens when theory meets application. I learn best by building tools that visualize the abstract."</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { t: "Concept-First", d: "Deeply understanding first principles." },
                      { t: "Logical Flow", d: "Mapping data paths visually." },
                      { t: "Application", d: "Turning math into usable code." }
                    ].map((p, i) => (
                      <div key={i} className="p-4 border-2 border-black/10 rounded-xl">
                        <div className="font-mono text-[10px] font-black uppercase mb-1">{p.t}</div>
                        <p className="text-xs opacity-60 font-bold leading-tight">{p.d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </RevealSection>

        {/* Academic & Technical Engagements Section */}
        <RevealSection id="engagements" className="py-24 px-6 border-b border-black bg-[#F1F0D1] scroll-mt-28">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <h2 className="font-display text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none relative">
                Academic &<br/>Engagements
                <div className="absolute -bottom-4 left-0 w-24 h-1 bg-black"></div>
              </h2>
              <div className="max-w-md text-right hidden md:block">
                <p className="font-bold opacity-60 uppercase text-xs tracking-widest leading-relaxed">
                  Active presence in the Tamil Nadu engineering ecosystem through research, paper presentations, and collaborative workshops.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
              {/* College Presentations List */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <Mic2 size={32} />
                  <h3 className="font-display text-3xl font-black uppercase tracking-tight">Paper Presentations</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {collegePresentations.map((college, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="group bg-white border-2 border-black p-6 rounded-xl hover:bg-black hover:text-[#F1F0D1] transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-display font-black uppercase text-sm leading-tight max-w-[80%]">{college.name}</h4>
                        <Award size={16} className="opacity-40 group-hover:opacity-100" />
                      </div>
                      <p className="text-[10px] font-mono font-bold uppercase tracking-widest opacity-50 group-hover:opacity-80">
                        {college.role}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hackathons & Competitions */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <Zap size={32} />
                  <h3 className="font-display text-3xl font-black uppercase tracking-tight">Hackathons</h3>
                </div>
                <div className="bg-black text-[#F1F0D1] p-8 rounded-2xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] relative overflow-hidden h-full">
                  <div className="space-y-8 relative z-10">
                    <div className="flex gap-4">
                      <Trophy className="shrink-0 text-yellow-400" size={28} />
                      <div>
                        <h4 className="font-bold uppercase mb-1">Competitive Edge</h4>
                        <p className="text-xs opacity-70 leading-relaxed">Active participant in state-level inter-college technical hackathons and ideations.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Users className="shrink-0 text-cyan-400" size={28} />
                      <div>
                        <h4 className="font-bold uppercase mb-1">Technical Leadership</h4>
                        <p className="text-xs opacity-70 leading-relaxed">Frequently lead technical squads to build functional prototypes under strict 24/48-hour sprints.</p>
                      </div>
                    </div>
                    <div className="pt-6 border-t border-[#F1F0D1]/20">
                      <p className="text-[10px] font-mono opacity-50 uppercase tracking-widest">Core focus: functional prototypes, system logic, & agile leadership.</p>
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.05]">
                    <Zap size={300} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Skills & Tools Section */}
        <section id="skills" className="py-24 px-6 border-b border-black bg-black text-[#F1F0D1] scroll-mt-28 relative">
          <div className="max-w-7xl mx-auto relative">
            <div className="absolute left-1/2 top-40 bottom-0 w-px border-l border-dashed border-[#F1F0D1]/10 hidden lg:block"></div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
            >
              <h2 className="font-display text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none relative">
                Skills &<br/>Tools
                <div className="absolute -bottom-4 left-0 w-24 h-1 bg-[#F1F0D1]"></div>
              </h2>
              <div className="flex items-center gap-2 font-mono text-xs opacity-50 mb-4 animate-pulse">
                <span className="flex items-center gap-1"><Info size={14} /> Hover over items to see applications</span>
              </div>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {SKILLS_DETAILED.map((skill, index) => (
                <motion.div variants={fadeInItem} key={index} className="group relative">
                  <div className="border-2 border-[#F1F0D1]/20 p-8 h-full flex flex-col justify-between hover:bg-[#F1F0D1] hover:text-black hover:border-black transition-all duration-300 cursor-default relative overflow-hidden">
                    <span className="font-mono text-[10px] uppercase opacity-50 group-hover:opacity-100">{skill.category}</span>
                    <h3 className="font-display text-2xl font-black uppercase tracking-tight mt-4">{skill.name}</h3>
                    <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-dashed border-black opacity-0 group-hover:opacity-40 transition-opacity"></div>
                  </div>

                  <div className="invisible group-hover:visible absolute z-50 bottom-full left-0 mb-4 w-64 p-4 bg-[#F1F0D1] text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                    <div className="relative">
                      <p className="text-sm font-bold leading-relaxed">{skill.description}</p>
                      <div className="absolute -bottom-6 left-4 w-4 h-4 bg-[#F1F0D1] border-r-2 border-b-2 border-black rotate-45"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-black text-[#F1F0D1] scroll-mt-28">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative inline-block mb-16"
            >
              <h2 className="font-display text-5xl md:text-8xl font-black uppercase tracking-tighter">Selected Projects</h2>
              <div className="absolute -right-12 top-1/2 w-8 h-px border-t border-dashed border-[#F1F0D1]/40"></div>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="border-t border-[#F1F0D1]/20"
            >
              {PROJECTS.map((project, index) => (
                <motion.div variants={fadeInItem} key={project.id}>
                  <a 
                    href={project.link || '#'} 
                    target={project.link ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className={`group block border-b border-[#F1F0D1]/20 transition-all duration-500 py-12 px-4 relative ${project.link ? 'hover:bg-[#F1F0D1] hover:text-black' : 'opacity-60 cursor-default'}`}
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
                      <div className="flex-1 relative pl-8">
                        <div className="absolute left-0 top-0 bottom-0 w-px border-l border-dashed border-current opacity-20">
                          <div className="absolute top-1/2 -translate-y-1/2 -left-1 w-2 h-2 rounded-full bg-current opacity-40 group-hover:opacity-100"></div>
                        </div>
                        
                        <span className="font-mono text-[10px] mb-2 block opacity-60 uppercase">
                          {String(index + 1).padStart(2, '0')} / {project.tech.join(' • ')} 
                        </span>
                        <h3 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter">
                          {project.title}
                          {!project.link && <span className="ml-4 text-xs font-mono opacity-30 italic">(Building...)</span>}
                        </h3>
                      </div>
                      <div className="flex-1 max-w-md opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                        <p className="text-lg font-medium leading-tight">{project.impact}</p>
                      </div>
                      <div className={`w-16 h-16 rounded-full border border-current flex items-center justify-center transition-all ${project.link ? 'group-hover:scale-110' : ''}`}>
                        {project.link ? <ArrowUpRight size={32} /> : <Lock size={24} />}
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="services" className="bg-[#F1F0D1] py-24 scroll-mt-28 relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative inline-block mb-12"
            >
              <h2 className="font-display text-5xl md:text-8xl font-black uppercase tracking-tighter">Expertise</h2>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-black"></div>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black border border-black overflow-hidden rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              {services.map((service) => (
                <motion.div variants={fadeInItem} key={service.id} className="bg-[#F1F0D1] p-10 flex flex-col group hover:bg-black hover:text-[#F1F0D1] transition-all duration-500 relative">
                  <div className="mb-8 relative inline-block">
                    <div className="relative z-10 transition-transform group-hover:scale-110 duration-500">{service.icon}</div>
                    <div className="absolute -top-4 -left-4 w-8 h-8 border-l border-t border-dashed border-black/20 group-hover:border-[#F1F0D1]/20 transition-colors"></div>
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r border-b border-dashed border-black/20 group-hover:border-[#F1F0D1]/20 transition-colors"></div>
                  </div>
                  
                  <h3 className="font-display text-2xl font-black uppercase tracking-tight mb-4">{service.title}</h3>
                  
                  <div className="w-full flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-[#F1F0D1]"></div>
                    <div className="flex-1 h-px border-t border-dashed border-black/20 group-hover:border-[#F1F0D1]/20"></div>
                  </div>
                  
                  <p className="text-sm leading-relaxed mb-6 opacity-70 group-hover:opacity-100">{service.description}</p>
                  <div className="mt-auto pt-6 border-t border-black/10 group-hover:border-[#F1F0D1]/10">
                     <p className="text-[10px] font-mono font-bold uppercase tracking-widest">Best for: {service.bestFor}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <RevealSection id="contact" className="pt-32 pb-12 bg-[#F1F0D1] scroll-mt-28 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 w-px h-full border-l border-dashed border-black/5 -z-10 pointer-events-none"></div>
          <div className="absolute top-1/2 left-0 w-full h-px border-t border-dashed border-black/5 -z-10 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="font-display text-6xl md:text-8xl font-black uppercase mb-12 tracking-tighter relative inline-block"
            >
              Let's Engineer<br/>Your Product
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-8 border-l border-dashed border-black/20"></div>
            </motion.h2>
            
            <div className="max-w-2xl mx-auto mb-32 group relative">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-px h-12 border-l border-dashed border-black/20"></div>
              
              <div className="flex items-end border-b-2 border-black py-4">
                <input 
                  type="text" 
                  placeholder="YOUR EMAIL" 
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="bg-transparent border-none w-full text-3xl md:text-6xl font-display font-black uppercase focus:outline-none placeholder:text-black/10"
                />
                <button onClick={handleSendRequest} className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-[#F1F0D1] transition-all shrink-0 shadow-lg" aria-label="Send Inquiry">
                  <ArrowUpRight size={32} />
                </button>
              </div>
            </div>
          </div>

          <footer className="py-12 border-t border-black px-6">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 md:gap-12 font-bold uppercase text-xs tracking-widest">
              <a href="https://github.com/rahulcvwebsitehosting" target="_blank" rel="noopener" className="flex items-center gap-2 hover:line-through transition-all"><Github size={16} /> GitHub</a>
              <a href="https://www.linkedin.com/in/rahulshyamcivil/" target="_blank" rel="noopener" className="flex items-center gap-2 hover:line-through transition-all"><Linkedin size={16} /> LinkedIn</a>
              <a href="https://www.instagram.com/rahulcvjps/" target="_blank" rel="noopener" className="flex items-center gap-2 hover:line-through transition-all"><Instagram size={16} /> Instagram</a>
              <a href="https://wa.me/917305169964" target="_blank" rel="noopener" className="flex items-center gap-2 hover:line-through transition-all"><MessageCircle size={16} /> WhatsApp</a>
              <a href="mailto:rahulshyam2006@outlook.com" className="flex items-center gap-2 hover:line-through transition-all"><Mail size={16} /> Email</a>
            </div>
            <div className="text-center mt-12 opacity-30 font-mono text-[9px] tracking-[0.4em] uppercase">
              RAHUL SHYAM • CTO & FULL STACK ENGINEER • {new Date().getFullYear()}
            </div>
          </footer>
        </RevealSection>

        <AnimatePresence>
          {showBackToTop && (
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={() => {
                // Using the refined scrollToSection logic for the back-to-top button as well
                if (scrollAnimationRef.current) scrollAnimationRef.current.stop();
                scrollAnimationRef.current = animate(window.pageYOffset, 0, {
                  type: "tween",
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                  onUpdate: (latest: number) => window.scrollTo(0, latest)
                });
              }}
              className="fixed bottom-6 left-6 w-12 h-12 bg-black text-[#F1F0D1] rounded-full border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all z-50"
              aria-label="Back to Top"
            >
              <ArrowUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>

        <ChatWidget />
      </div>
    </ErrorBoundary>
  );
};

export default App;
