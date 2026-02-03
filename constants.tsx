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
    title: 'Hostel Planner',
    problem: 'Manual room allocation and layout planning is slow and prone to errors.',
    impact: 'AI-powered interactive room designer with furniture placement and optimized auto-planning.',
    tech: ['Next.js', 'Canvas API', 'OpenAI'],
    image: 'https://picsum.photos/seed/hostel/800/600',
    link: 'https://hostel-planner.vercel.app/'
  },
  {
    id: '2',
    title: 'Surya Clothing',
    problem: 'A small business owner needed a professional presence for a women’s wear boutique.',
    impact: 'Clean, mobile-first product showcase improving branding and customer engagement.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    image: 'https://picsum.photos/seed/surya/800/600',
    link: 'https://surya-clothing.vercel.app/'
  },
  {
    id: '3',
    title: 'TypeArena',
    problem: 'Lack of competitive, real-time typing environments to improve accuracy.',
    impact: 'Multiplayer competitive typing game with real-time socket communication.',
    tech: ['Node.js', 'Socket.io', 'React'],
    image: 'https://picsum.photos/seed/typing/800/600',
    link: 'https://typearenacv.vercel.app/'
  },
  {
    id: '4',
    title: 'Mohan Hot’n Chat',
    problem: 'Viral local restaurant needed a fast menu showcase to match its local popularity.',
    impact: 'Responsive food platform for a famous West Mambalam spot focusing on speed.',
    tech: ['React', 'Framer Motion', 'Tailwind'],
    image: 'https://picsum.photos/seed/mohan/800/600',
    link: 'https://mohan-hotn-chat.vercel.app/'
  },
  {
    id: '5',
    title: 'OSB Chats',
    problem: 'Popular restaurant required a lightweight, quick-loading mobile site.',
    impact: 'Modern, high-performance presence built for fast mobile usability.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: 'https://picsum.photos/seed/osb/800/600',
    link: 'https://osb-eta.vercel.app/'
  },
  {
    id: '6',
    title: 'TunnelViz',
    problem: 'Civil engineering students struggle to visualize underground design details.',
    impact: 'Educational platform designed to teach tunnel engineering visually and interactively.',
    tech: ['Three.js', 'React', 'D3.js'],
    image: 'https://picsum.photos/seed/tunnel/800/600',
    link: 'https://tunnel-viz.vercel.app/'
  },
  {
    id: '7',
    title: 'EcoBrick (Startup)',
    problem: 'Converting plastic waste into sustainable construction materials.',
    impact: 'Climate-tech platform converting waste into high-performance bricks.',
    tech: ['Next.js', '3D Viz', 'System Design'],
    image: 'https://picsum.photos/seed/ecobrick/800/600',
    link: 'https://sngreensolutions.vercel.app/'
  },
  {
    id: '8',
    title: 'EcoBrick Proto-X',
    problem: 'Explaining complex industrial machinery and twin-screw extrusion processes to non-engineers.',
    impact: 'Interactive 3D Digital Twin used for investor confidence, client transparency, and technical training.',
    tech: ['Three.js', 'Web Engineering', 'Digital Twin'],
    image: 'https://picsum.photos/seed/machine/800/600',
    link: 'https://ecobrick-prot.vercel.app/'
  },
  {
    id: '9',
    title: 'WebXR Shooter',
    problem: 'Immersive AR gaming usually requires expensive hardware or heavy app installations.',
    impact: 'Gesture-controlled AR game using MediaPipe for real-time hand tracking and Three.js for 3D rendering.',
    tech: ['Three.js', 'MediaPipe', 'Web Audio API', 'TypeScript'],
    image: 'https://picsum.photos/seed/shooter/800/600',
    link: 'https://disc-shooter.vercel.app/'
  },
  {
    id: '10',
    title: 'CivilVision AI',
    problem: 'Diagnostic gaps for structural elements and site defects on construction floors.',
    impact: 'Mobile-first AI tool using multi-modal LLMs to identify RCC components and categorized defects (honeycombing, spalling) in real-time.',
    tech: ['React 19', 'Gemini AI', 'Tailwind CSS', 'MediaDevices'],
    image: 'https://picsum.photos/seed/civilvision/800/600',
    link: 'https://civilvision-ai-455773821944.us-west1.run.app/'
  },
  {
    id: '11',
    title: 'Rahul AI',
    problem: 'Fragmented workflows for chat, file analysis, and code editing.',
    impact: 'Intelligent workspace integrating chat, web search, image generation, and a collaborative canvas for document/code editing.',
    tech: ['React', 'Gemini API', 'Canvas', 'Web Search'],
    image: 'https://picsum.photos/seed/rahulai/800/600',
    link: 'https://rahul-ai-your-intelligent-workspace-263477567633.us-west1.run.app/'
  },
  {
    id: '12',
    title: 'TravelCrew AI',
    problem: 'Manual hotel research is time-consuming and inefficient.',
    impact: 'Multi-agent AI platform that researches, compares, and recommends hotels in India via natural conversation.',
    tech: ['Next.js', 'AI Agents', 'Travel Discovery'],
    image: 'https://picsum.photos/seed/travelcrew/800/600',
    link: 'https://travelcrew-ai-944531131576.us-west1.run.app'
  },
  {
    id: '14',
    title: 'BuildFlow CRM',
    problem: 'Poor coordination between job sites and office staff in construction projects.',
    impact: 'CRM specializing in job tracking, site-to-office communication, and AI-powered project summaries.',
    tech: ['Full Stack', 'AI Summaries', 'Construction CRM'],
    image: 'https://picsum.photos/seed/buildflow/800/600',
    link: 'https://buildflow-crm-487875595367.us-west1.run.app'
  },
  {
    id: '16',
    title: 'CV Craft',
    problem: 'Creating structured, high-impact resumes is a hurdle for many job seekers.',
    impact: 'AI-powered resume builder that structures content through guided LLM-powered technical inputs.',
    tech: ['React', 'LLM Integration', 'Resume Engineering'],
    image: 'https://picsum.photos/seed/cvcraft/800/600',
    link: 'https://cvresume-crafter.vercel.app/'
  },
  {
    id: '17',
    title: 'KM Periyava Sannadhi',
    problem: 'Preserving cultural heritage through digital mediums with high accessibility.',
    impact: 'Bilingual platform for Sri Kanchi Mahaperiyava Sannadhi, focusing on community connection and preservation.',
    tech: ['React', 'Bilingual UI', 'Cultural Tech'],
    image: 'https://picsum.photos/seed/temple/800/600',
    link: 'https://km-periyava-sannadhi-329840856867.us-west1.run.app/'
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