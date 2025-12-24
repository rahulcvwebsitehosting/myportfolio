
import React from 'react';
import { Layout, Cpu, Gamepad2, Brain, Leaf, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Project, Service, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Hostel Planner',
    problem: 'Manual room allocation and layout planning is slow and prone to errors.',
    impact: 'AI-powered interactive room designer for optimized layouts and furniture placement.',
    tech: ['Next.js', 'Canvas API', 'OpenAI'],
    image: 'https://picsum.photos/seed/hostel/800/600',
    link: 'https://hostel-planner.vercel.app/'
  },
  {
    id: '2',
    title: 'Surya Clothing',
    problem: 'A local women’s wear business needed a clean, mobile-first online presence.',
    impact: 'Developed a product showcase focused on branding and high-speed responsiveness.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    image: 'https://picsum.photos/seed/surya/800/600',
    link: 'https://surya-clothing.vercel.app/'
  },
  {
    id: '3',
    title: 'TypeArena',
    problem: 'Lack of competitive, real-time typing environments to improve speed.',
    impact: 'A multiplayer typing game with real-time socket communication for skill improvement.',
    tech: ['Node.js', 'Socket.io', 'React'],
    image: 'https://picsum.photos/seed/typing/800/600',
    link: 'https://typearenacv.vercel.app/'
  },
  {
    id: '4',
    title: 'Mohan Hot’n Chat',
    problem: 'Viral local restaurant needed branding and a menu showcase to match its popularity.',
    impact: 'Fast, responsive menu and branding platform for a famous West Mambalam spot.',
    tech: ['React', 'Framer Motion', 'Tailwind'],
    image: 'https://picsum.photos/seed/mohan/800/600',
    link: 'https://mohan-hotn-chat.vercel.app/'
  },
  {
    id: '5',
    title: 'OSB Chats',
    problem: 'Busy local restaurant required a lightweight, quick-loading mobile site.',
    impact: 'Modern, high-performance web presence with a focus on usability.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: 'https://picsum.photos/seed/osb/800/600',
    link: 'https://osb-eta.vercel.app/'
  },
  {
    id: '6',
    title: 'TunnelViz',
    problem: 'Civil engineering students struggle to visualize underground fluid dynamics.',
    impact: 'An interactive learning platform that simplifies complex tunnel design concepts.',
    tech: ['Three.js', 'React', 'D3.js'],
    image: 'https://picsum.photos/seed/tunnel/800/600',
    link: 'https://tunnel-viz.vercel.app/'
  },
  {
    id: '7',
    title: 'EcoBrick (Startup)',
    problem: 'Managing plastic waste while creating sustainable construction materials.',
    impact: 'Government-funded climate-tech platform converting waste into high-performance bricks.',
    tech: ['Next.js', '3D Viz', 'System Design'],
    image: 'https://picsum.photos/seed/ecobrick/800/600',
  },
  {
    id: '8',
    title: 'Prototype Machine',
    problem: 'Visualizing industrial manufacturing processes for complex machinery.',
    impact: '3D engineering visualization of a dual-chamber twin-screw extrusion system.',
    tech: ['Three.js', 'Web Engineering'],
    image: 'https://picsum.photos/seed/machine/800/600',
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Business Websites',
    description: 'High-converting, performance-optimized landing pages for SMEs and startups.',
    icon: 'Layout',
  },
  {
    id: 's2',
    title: 'Engineering Platforms',
    description: 'Custom internal tools, dashboards, and data visualization software.',
    icon: 'Cpu',
  },
  {
    id: 's3',
    title: 'Interactive Tools',
    description: 'Unique 3D experiences, games, and simulation tools built for the web.',
    icon: 'Gamepad2',
  },
  {
    id: 's4',
    title: 'AI Integrations',
    description: 'Implementing LLMs and intelligent features to automate business workflows.',
    icon: 'Brain',
  }
];

export const SKILLS: Skill[] = [
  { name: 'React / Next.js', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'design' },
  { name: 'Node.js', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'Three.js / Canvas', category: 'frontend' },
  { name: 'UI/UX Design', category: 'design' },
  { name: 'Framer Motion', category: 'design' },
  { name: 'AI Engineering', category: 'other' },
  { name: 'System Design', category: 'other' }
];
