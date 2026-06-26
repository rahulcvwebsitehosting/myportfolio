import { Project, Service, Skill } from './types';

export interface DetailedSkill {
  name: string;
  category: string;
  description: string;
}

export const SKILLS_DETAILED: DetailedSkill[] = [
  { name: 'React / Next.js', category: 'Web', description: 'Building high-performance, dynamic apps like Hostel Planner with SSR and complex state.' },
  { name: 'Tailwind CSS', category: 'UI', description: 'Rapidly creating bespoke, responsive layouts with a utility-first approach.' },
  { name: 'TypeScript', category: 'Logic', description: 'Ensuring enterprise-grade reliability through strict static typing and clean architecture.' },
  { name: 'AI Features', category: 'Intelligence', description: 'Integrating Gemini and OpenAI to automate complex workflows and layout generation.' },
  { name: 'Three.js / 3D Viz', category: 'Engineering', description: 'Visualizing industrial processes and civil engineering structures in interactive 3D.' },
  { name: 'UI/UX Principles', category: 'Design', description: 'Applying neobrutalist logic to ensure clarity and user-centric problem solving.' },
  { name: 'System Design', category: 'Core', description: 'Architecting scalable software solutions by analyzing real-world technical constraints.' },
  { name: 'Engineering UX', category: 'Logic', description: 'Translating complex engineering data into intuitive, functional user interfaces.' }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AutoBOM',
    problem: 'AI-powered Bill of Materials generator built for Build with Gemini XPRIZE 2026.',
    impact: 'AI-powered Bill of Materials generator built for Build with Gemini XPRIZE 2026. Upload construction drawings → Gemini Vision extracts structural/reinforcement details → calculates quantities → generates downloadable BOM reports. First paying customer: ₹199. 5-minute turnaround vs 4 days manual.',
    tech: ['React', 'TypeScript', 'Gemini Vision', 'Tailwind CSS'],
    image: 'https://picsum.photos/seed/autobom/800/600',
    link: 'https://autobomprj.vercel.app/'
  },
  {
    id: '2',
    title: 'wayfinder',
    problem: 'Local-first open-source desktop browser agent.',
    impact: 'Local-first open-source desktop browser agent. Patches Chromium with an AI agent layer connected to local LLMs (Ollama, LM Studio) via Chrome DevTools Protocol. Features visual workflow builder, persistent memory, and MCP server for Claude Code / Cursor integration.',
    tech: ['TypeScript', 'Chromium (CDP)', 'MCP Server', 'Ollama', 'React'],
    image: 'https://picsum.photos/seed/wayfinder/800/600',
    link: 'https://github.com/rahulcvwebsitehosting/wayfinder'
  },
  {
    id: '3',
    title: 'WebNav',
    problem: 'Chrome Extension that turns local LLMs into autonomous browsing agents.',
    impact: 'Chrome Extension that turns local LLMs into autonomous browsing agents. 14 developer tools, risk-tier safety model, zero cloud dependency. Pure Vanilla JS, no build steps.',
    tech: ['Vanilla JS', 'Manifest V3', 'Chrome Extension'],
    image: 'https://picsum.photos/seed/webnav/800/600',
    link: 'https://github.com/rahulcvwebsitehosting/WebNav'
  },
  {
    id: '4',
    title: 'Civilog — ESEC OD Management',
    problem: 'College-wide On-Duty tracking system built for Erode Sengunthar Engineering College.',
    impact: 'College-wide On-Duty tracking system built for Erode Sengunthar Engineering College. Manages request submittals, workflow approvals, and permanent records for the entire student body. RBAC, live state tracking, QR verification, Excel export.',
    tech: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    image: 'https://picsum.photos/seed/civilog/800/600',
    link: 'https://civilog.vercel.app/'
  },
  {
    id: '5',
    title: 'GREnius',
    problem: 'Comprehensive GRE prep platform.',
    impact: 'Comprehensive GRE prep platform with spaced-repetition vocabulary flashcards, interactive quantitative reasoning challenges, and cognitive mini-games — chess engine with Negamax + Alpha-Beta, mental math, memory palace, speed blitz.',
    tech: ['React', 'TypeScript', 'Vite', 'Gemini API'],
    image: 'https://picsum.photos/seed/grenius/800/600',
    link: 'https://gr-enius.vercel.app/'
  },
  {
    id: '6',
    title: 'LevelUp',
    problem: 'Gamified tactical fitness tracker with RPG progression.',
    impact: 'Gamified tactical fitness tracker with RPG progression, workout protocol management, real-time analytics, and pain/injury diagnostics. 100% client-side, zero subscription.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'RPG Mechanics'],
    image: 'https://picsum.photos/seed/levelup/800/600',
    link: 'https://github.com/rahulcvwebsitehosting/LevelUp'
  },
  {
    id: '7',
    title: 'rahixai',
    problem: 'Personal multi-modal AI workspace with real-time grounding and collaborative canvas.',
    impact: 'Personal multi-modal AI workspace with real-time grounding and collaborative canvas. Integrates chat, file indexing/analysis, vector image generation, and interactive document editing.',
    tech: ['React', 'LLM Integration', 'Canvas', 'Web Search'],
    image: 'https://picsum.photos/seed/rahulai/800/600',
    link: 'https://rahul-ai-your-intelligent-workspace-263477567633.us-west1.run.app/'
  },
  {
    id: '8',
    title: 'CivilVision AI',
    problem: 'Mobile-first AI tool using multi-modal LLMs to identify RCC components and categorize defects.',
    impact: 'Mobile-first AI tool using multi-modal LLMs to identify RCC components and categorize defects (honeycombing, spalling) from camera images in real-time.',
    tech: ['React 19', 'Gemini AI', 'Tailwind CSS', 'MediaDevices'],
    image: 'https://picsum.photos/seed/civilvision/800/600',
    link: 'https://civilvision-ai-455773821944.us-west1.run.app/'
  },
  {
    id: '9',
    title: 'TunnelViz',
    problem: 'Interactive 3D tunnel engineering education platform.',
    impact: 'Interactive 3D tunnel engineering education platform with parametric design, geological simulation, and construction method comparison (TBM vs NATM vs Cut and Cover).',
    tech: ['Three.js', 'React', 'D3.js'],
    image: 'https://picsum.photos/seed/tunnel/800/600',
    link: 'https://tunnel-viz.vercel.app/'
  },
  {
    id: '10',
    title: 'IPL Auction — Multiplayer Bidding',
    problem: 'Real-time multiplayer IPL player auction game.',
    impact: 'Real-time multiplayer IPL player auction game. Friends join via room code, bid against each other with 10-second countdown resets. Player stats scraped live from IPLT20.com via Puppeteer.',
    tech: ['React', 'Node.js', 'Socket.io', 'Puppeteer', 'Tailwind CSS'],
    image: 'https://picsum.photos/seed/ipl/800/600',
    link: 'https://ipl-auction-delta.vercel.app'
  },
  {
    id: '11',
    title: 'Hostel Planner',
    problem: 'AI-powered interactive room designer with furniture placement and optimized auto-planning.',
    impact: 'AI-powered interactive room designer with furniture placement and optimized auto-planning.',
    tech: ['Next.js', 'Canvas API', 'OpenAI'],
    image: 'https://picsum.photos/seed/hostel/800/600',
    link: 'https://hostel-planner.vercel.app/'
  },
  {
    id: '12',
    title: 'EcoBrick 3D Twin',
    problem: '3D digital twin of a waste-to-brick machine prototype built with Three.js.',
    impact: '3D digital twin of a waste-to-brick machine prototype built with Three.js for visualization and technical demonstration.',
    tech: ['Next.js', 'Three.js', '3D Viz'],
    image: 'https://picsum.photos/seed/ecobrick/800/600',
    link: 'https://ecobrick-prot.vercel.app/'
  },
  {
    id: '13',
    title: 'Bussy N. Anand — Public Platform',
    problem: 'Web platform for Bussy N. Anand, MLA of T. Nagar, Chennai.',
    impact: 'Web platform for Bussy N. Anand, MLA of T. Nagar, Chennai. Built for accessibility, constituent engagement, and transparency. (Proposed — awaiting formal adoption.)',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    image: 'https://picsum.photos/seed/bussy/800/600',
    link: 'https://bussynanand.vercel.app/'
  },
  {
    id: '14',
    title: 'KM Periyava Sannadhi',
    problem: 'Bilingual platform for Sri Kanchi Mahaperiyava Sannadhi, focusing on community connection and preservation.',
    impact: 'Bilingual platform for Sri Kanchi Mahaperiyava Sannadhi, focusing on community connection and preservation.',
    tech: ['React', 'Bilingual UI', 'Cultural Tech'],
    image: 'https://picsum.photos/seed/temple/800/600',
    link: 'https://km-periyava-sannadhi-329840856867.us-west1.run.app/'
  },
  {
    id: '15',
    title: "Mohan Hot'n Chat",
    problem: 'Responsive food platform website for a West Mambalam restaurant.',
    impact: "Responsive food platform website for a West Mambalam restaurant, focusing on digital menu and online presence.",
    tech: ['React', 'Framer Motion', 'Tailwind'],
    image: 'https://picsum.photos/seed/mohan/800/600',
    link: 'https://mohan-hotn-chat.vercel.app/'
  },
  {
    id: '16',
    title: 'Surya Clothing',
    problem: 'Mobile-first product showcase for a traditional Tamil boutique.',
    impact: "Mobile-first product showcase for a traditional Tamil boutique showcasing traditional Tamil sarees and women's clothing with WhatsApp checkout.",
    tech: ['React', 'Tailwind CSS', 'Vite'],
    image: 'https://picsum.photos/seed/surya/800/600',
    link: 'https://surya-clothing.vercel.app/'
  },
  {
    id: '17',
    title: 'TypeArena',
    problem: 'Multiplayer competitive typing game with real-time socket communication.',
    impact: 'Multiplayer competitive typing game with real-time socket communication.',
    tech: ['Node.js', 'Socket.io', 'React'],
    image: 'https://picsum.photos/seed/typing/800/600',
    link: 'https://typearenacv.vercel.app/'
  },
  {
    id: '18',
    title: "Vishnu — Vinu's Igloo",
    problem: "Web application for Chennai's soft-serve ice cream parlor.",
    impact: "Web application for Chennai's legendary soft-serve ice cream parlor. Digital menu, brand heritage, store locations, WhatsApp event booking.",
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    image: 'https://picsum.photos/seed/icecream/800/600',
    link: 'https://vinusigloo.vercel.app/'
  },
  {
    id: '19',
    title: 'OSB Chats',
    problem: 'Lightweight chat interface for quick mobile communication.',
    impact: 'Lightweight chat interface for quick mobile communication.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: 'https://picsum.photos/seed/osb/800/600',
    link: 'https://osb-eta.vercel.app/'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Web Development',
    description: 'Modern, responsive websites built with React and Next.js.',
    icon: 'Layout',
  },
  {
    id: 's2',
    title: 'Engineering Platforms',
    description: 'Interactive educational tools and 3D visualization platforms.',
    icon: 'Cpu',
  },
  {
    id: 's3',
    title: 'AI Integrations',
    description: 'Building intelligent features and AI-assisted design tools.',
    icon: 'Brain',
  }
];

export const SKILLS: Skill[] = [
  { name: 'React / Next.js', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'design' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Three.js / 3D Viz', category: 'frontend' },
  { name: 'UI/UX Design', category: 'design' },
  { name: 'AI Engineering', category: 'other' },
  { name: 'System Design', category: 'other' }
];