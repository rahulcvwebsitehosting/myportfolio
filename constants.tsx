import { Project, Service, Skill } from './types';

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
    impact: 'Climate-tech platform converting waste into high-performance bricks (In Progress).',
    tech: ['Next.js', '3D Viz', 'System Design'],
    image: 'https://picsum.photos/seed/ecobrick/800/600',
  },
  {
    id: '8',
    title: 'Prototype Machine',
    problem: 'Visualizing industrial processes for dual-chamber twin-screw extrusion systems.',
    impact: '3D engineering visualization of manufacturing process flow (In Progress).',
    tech: ['Three.js', 'Web Engineering'],
    image: 'https://picsum.photos/seed/machine/800/600',
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