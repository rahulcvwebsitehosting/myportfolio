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
    title: 'Wayfinder',
    problem: 'Commercial browser automation tools leak sensitive data and lack offline, local AI integration.',
    impact: 'Local-first browser agent and automation platform. Patches Chromium with local LLMs (Ollama/LM Studio) via CDP. Features a visual workflow builder, persistent memory, and MCP server support for direct tool control.',
    tech: ['TypeScript', 'Chromium (CDP)', 'MCP Server', 'Ollama', 'React'],
    image: 'https://picsum.photos/seed/wayfinder/800/600',
    link: 'https://github.com/rahulcvwebsitehosting/wayfinder'
  },
  {
    id: '2',
    title: 'AutoBOM',
    problem: 'Manual calculation of construction drawings is slow, error-prone, and unaffordable for small contractors.',
    impact: 'AI-powered Bill of Materials generator built for Build with Gemini XPRIZE 2026. Automatically extracts reinforcement/structural details from drawings to calculate quantities and generate downloadable BOM reports.',
    tech: ['React', 'TypeScript', 'Gemini Vision', 'Tailwind CSS'],
    image: 'https://picsum.photos/seed/autobom/800/600',
    link: 'https://autobomprj.vercel.app/'
  },
  {
    id: '3',
    title: 'rahixai',
    problem: 'Managing personalized developer workflows, dynamic quick-scratch files, and structured chat logs in a single unified interface.',
    impact: 'Personal AI-assisted workspace playground. Integrates real-time chats, custom file indexing/analysis, vector image generation, and interactive canvases for rapid document tweaking.',
    tech: ['React', 'Gemini API', 'Canvas', 'Web Search'],
    image: 'https://picsum.photos/seed/rahulai/800/600',
    link: 'https://rahul-ai-your-intelligent-workspace-263477567633.us-west1.run.app/'
  },
  {
    id: '4',
    title: 'CivilVision AI',
    problem: 'Diagnostic gaps for structural elements and site defects on construction floors.',
    impact: 'Mobile-first AI tool using multi-modal LLMs to identify RCC components and categorized defects (honeycombing, spalling) in real-time.',
    tech: ['React 19', 'Gemini AI', 'Tailwind CSS', 'MediaDevices'],
    image: 'https://picsum.photos/seed/civilvision/800/600',
    link: 'https://civilvision-ai-455773821944.us-west1.run.app/'
  },
  {
    id: '5',
    title: 'TravelCrew AI',
    problem: 'Manual hotel research is time-consuming and inefficient.',
    impact: 'Multi-agent AI platform that researches, compares, and recommends hotels in India via natural conversation.',
    tech: ['Next.js', 'AI Agents', 'Travel Discovery'],
    image: 'https://picsum.photos/seed/travelcrew/800/600',
    link: 'https://travelcrew-ai-944531131576.us-west1.run.app'
  },
  {
    id: '6',
    title: 'Hostel Planner',
    problem: 'Manual room allocation and layout planning is slow and prone to errors.',
    impact: 'AI-powered interactive room designer with furniture placement and optimized auto-planning.',
    tech: ['Next.js', 'Canvas API', 'OpenAI'],
    image: 'https://picsum.photos/seed/hostel/800/600',
    link: 'https://hostel-planner.vercel.app/'
  },
  {
    id: '7',
    title: 'BuildFlow CRM',
    problem: 'Poor coordination between job sites and office staff in construction projects.',
    impact: 'CRM specializing in job tracking, site-to-office communication, and AI-powered project summaries.',
    tech: ['Full Stack', 'AI Summaries', 'Construction CRM'],
    image: 'https://picsum.photos/seed/buildflow/800/600',
    link: 'https://buildflow-crm-487875595367.us-west1.run.app'
  },
  {
    id: '8',
    title: 'GREnius',
    problem: 'Traditional GRE preparation lacks adaptive spaced-repetition and cognitive agility training.',
    impact: 'Comprehensive, deployed GRE prep platform with spaced-repetition vocabulary flashcards, interactive quantitative reasoning challenges, and mental sharpening cognitive mini-games.',
    tech: ['React', 'TypeScript', 'Vite', 'Gemini API'],
    image: 'https://picsum.photos/seed/grenius/800/600',
    link: 'https://gr-enius.vercel.app'
  },
  {
    id: '9',
    title: 'Civilog — ESEC OD Management',
    problem: 'Paper-based college On-Duty tracking systems are inefficient, slow, and prone to record manipulation.',
    impact: 'College-wide OD tracking system built for Erode Sengunthar Engineering College. Manages request submittals, workflow approvals, and permanent records for the student body.',
    tech: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    image: 'https://picsum.photos/seed/civilog/800/600',
    link: 'https://civilog.vercel.app'
  },
  {
    id: '10',
    title: 'IPL Auction — Multiplayer Bidding',
    problem: 'Existing sports fantasy systems are static and lack real-time competitive face-to-face bidding mechanics.',
    impact: 'Real-time multiplayer player auction game with dynamic browser-scraped player stats via Puppeteer and synchronized multi-client bidding states via Socket.io.',
    tech: ['React', 'Node.js', 'Socket.io', 'Puppeteer', 'Tailwind CSS'],
    image: 'https://picsum.photos/seed/ipl/800/600',
    link: 'https://ipl-auction-delta.vercel.app'
  },
  {
    id: '11',
    title: 'WebXR Shooter',
    problem: 'Immersive AR gaming usually requires expensive hardware or heavy app installations.',
    impact: 'Gesture-controlled AR game using MediaPipe for real-time hand tracking and Three.js for 3D rendering.',
    tech: ['Three.js', 'MediaPipe', 'Web Audio API', 'TypeScript'],
    image: 'https://picsum.photos/seed/shooter/800/600',
    link: 'https://disc-shooter.vercel.app/'
  },
  {
    id: '12',
    title: 'EcoBrick (Startup & 3D Twin)',
    problem: 'Converting plastic waste into sustainable bricks and visualizing complex machinery/processes to non-engineers.',
    impact: 'Climate-tech platform converting waste into high-performance bricks. Integrated with a 3D Digital Twin built with Three.js for investor pitches, client transparency, and technical training.',
    tech: ['Next.js', 'Three.js', '3D Viz', 'System Design'],
    image: 'https://picsum.photos/seed/ecobrick/800/600',
    link: 'https://sngreensolutions.vercel.app/'
  },
  {
    id: '13',
    title: 'TunnelViz',
    problem: 'Civil engineering students struggle to visualize underground design details.',
    impact: 'Educational platform designed to teach tunnel engineering visually and interactively.',
    tech: ['Three.js', 'React', 'D3.js'],
    image: 'https://picsum.photos/seed/tunnel/800/600',
    link: 'https://tunnel-viz.vercel.app/'
  },
  {
    id: '14',
    title: 'CV Craft',
    problem: 'Creating structured, high-impact resumes is a hurdle for many job seekers.',
    impact: 'AI-powered resume builder that structures content through guided LLM-powered technical inputs.',
    tech: ['React', 'LLM Integration', 'Resume Engineering'],
    image: 'https://picsum.photos/seed/cvcraft/800/600',
    link: 'https://cvresume-crafter.vercel.app/'
  },
  {
    id: '15',
    title: 'Bussy N. Anand — Public Platform',
    problem: 'Political representatives lack fast, professional web channels for direct constituent engagement and public transparency.',
    impact: 'Official public-facing web platform for Bussy N. Anand, MLA of T. Nagar, Chennai. Built for high accessibility, constituent engagement, and transparency.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    image: 'https://picsum.photos/seed/bussy/800/600',
    link: 'https://bussynanand.vercel.app/'
  },
  {
    id: '16',
    title: 'KM Periyava Sannadhi',
    problem: 'Preserving cultural heritage through digital mediums with high accessibility.',
    impact: 'Bilingual platform for Sri Kanchi Mahaperiyava Sannadhi, focusing on community connection and preservation.',
    tech: ['React', 'Bilingual UI', 'Cultural Tech'],
    image: 'https://picsum.photos/seed/temple/800/600',
    link: 'https://km-periyava-sannadhi-329840856867.us-west1.run.app/'
  },
  {
    id: '17',
    title: 'TypeArena',
    problem: 'Lack of competitive, real-time typing environments to improve accuracy.',
    impact: 'Multiplayer competitive typing game with real-time socket communication.',
    tech: ['Node.js', 'Socket.io', 'React'],
    image: 'https://picsum.photos/seed/typing/800/600',
    link: 'https://typearenacv.vercel.app/'
  },
  {
    id: '18',
    title: 'Surya Clothing',
    problem: 'A small business owner needed a professional presence for a women’s wear boutique.',
    impact: 'Clean, mobile-first product showcase improving branding and customer engagement.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    image: 'https://picsum.photos/seed/surya/800/600',
    link: 'https://surya-clothing.vercel.app/'
  },
  {
    id: '19',
    title: 'Mohan Hot’n Chat',
    problem: 'Viral local restaurant needed a fast menu showcase to match its local popularity.',
    impact: 'Responsive food platform for a famous West Mambalam spot focusing on speed.',
    tech: ['React', 'Framer Motion', 'Tailwind'],
    image: 'https://picsum.photos/seed/mohan/800/600',
    link: 'https://mohan-hotn-chat.vercel.app/'
  },
  {
    id: '20',
    title: 'OSB Chats',
    problem: 'Popular restaurant required a lightweight, quick-loading mobile site.',
    impact: 'Modern, high-performance presence built for fast mobile usability.',
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