import { Project, Service, Skill } from './types';

export interface DetailedSkill {
  name: string;
  category: string;
  description: string;
}

export const SKILLS_DETAILED: DetailedSkill[] = [
  { name: 'AI Model Routing', category: 'Infrastructure', description: 'Expert in chaining free-tier AI providers (Cerebras, Cloudflare AI, OpenRouter :free, SiliconFlow, Z.AI) to build production apps at $0 cost. Built custom fallback logic for rate limits and RPM caps.' },
  { name: 'React / Next.js', category: 'Web', description: 'Building high-performance, dynamic apps with SSR and complex state management.' },
  { name: 'Tailwind CSS', category: 'UI', description: 'Rapidly creating bespoke, responsive layouts with a utility-first approach.' },
  { name: 'TypeScript', category: 'Logic', description: 'Ensuring enterprise-grade reliability through strict static typing and clean architecture.' },
  { name: 'AI / Gemini Vision', category: 'Intelligence', description: 'Integrating Gemini SDK and OpenCV to automate document analysis, defect detection, and structural extraction workflows.' },
  { name: 'Three.js / 3D Viz', category: 'Engineering', description: 'Visualizing industrial processes and civil engineering structures in interactive 3D.' },
  { name: 'UI/UX Principles', category: 'Design', description: 'Applying neobrutalist logic to ensure clarity and user-centric problem solving.' },
  { name: 'System Design', category: 'Core', description: 'Architecting scalable software solutions by analyzing real-world technical constraints.' },
  { name: 'Engineering UX', category: 'Logic', description: 'Translating complex engineering data into intuitive, functional user interfaces.' }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Civilog — ESEC OD Management',
    problem: 'College-wide On-Duty tracking system deployed for 400+ students.',
    impact: 'College-wide On-Duty tracking system deployed for 400+ students. Features role-based access control (RBAC), QR verification, live state tracking, and PDF/Excel export. 100+ commits proving production-grade iteration.',
    tech: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    image: 'https://picsum.photos/seed/civilog/800/600',
    link: 'https://github.com/rahulcvwebsitehosting/civilog'
  },
  {
    id: '2',
    title: 'AutoBOM',
    problem: 'AI-powered Bill of Materials generator for rural contractors.',
    impact: 'Uploads construction drawings → Gemini Vision extracts structural details → validates against IS 456/1786 codes → generates BOQ. Reduced bidding time from 4 days to 5 minutes. First paying customer: ₹199.',
    tech: ['React', 'TypeScript', 'Gemini 2.5 Pro Vision', 'PyMuPDF', 'OpenCV'],
    image: 'https://picsum.photos/seed/autobom/800/600',
    link: 'https://autobomprj.vercel.app'
  },
  {
    id: '3',
    title: 'WebNav',
    problem: 'Chrome Extension that turns local LLMs into autonomous browsing agents.',
    impact: 'A developer-friendly Chrome Extension that turns local LLMs (Ollama, LM Studio) into autonomous browsing agents. 100% privacy-first, zero cloud dependency. Includes CI/CD workflows and unit tests.',
    tech: ['Vanilla JS', 'Manifest V3', 'Chrome Extension API'],
    image: 'https://picsum.photos/seed/webnav/800/600',
    link: 'https://github.com/rahulcvwebsitehosting/WebNav'
  },
  {
    id: '4',
    title: 'OpenCluely',
    problem: 'Free, open-source AI copilot overlay that sees your screen and hears meetings.',
    impact: 'Free, open-source AI copilot overlay that sees your screen and hears meetings. Bring-your-own-key architecture supporting 8+ providers. Real Windows x64 release published.',
    tech: ['Electron', 'JavaScript', 'WebRTC'],
    image: 'https://picsum.photos/seed/opencluely/800/600',
    link: 'https://github.com/rahulcvwebsitehosting/opencluely'
  },
  {
    id: '5',
    title: 'Open-Source Tools Directory',
    problem: 'A curated directory of 348 privacy-respecting, browser-based tools.',
    impact: 'A curated directory of 348 privacy-respecting, browser-based tools. No signups, no tracking. Organized across 9 categories. Earned 6 GitHub stars organically.',
    tech: ['PowerShell', 'Markdown', 'Static Site Generation'],
    image: 'https://picsum.photos/seed/tools/800/600',
    link: 'https://github.com/rahulcvwebsitehosting/awesome-privacy-tools'
  },
  {
    id: '6',
    title: 'FabricScan-MSME',
    problem: 'Garment defect detection tool for MSMEs.',
    impact: 'Garment defect detection tool for MSMEs. Uses computer vision to identify manufacturing flaws in real-time, optimized for low-resource environments.',
    tech: ['React', 'TypeScript', 'Gemini Vision'],
    image: 'https://picsum.photos/seed/fabric/800/600',
    link: 'https://github.com/rahulcvwebsitehosting/fabricscan-msme'
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
  { name: 'AI Model Routing', category: 'other' },
  { name: 'React / Next.js', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'design' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Three.js / 3D Viz', category: 'frontend' },
  { name: 'UI/UX Design', category: 'design' },
  { name: 'Gemini SDK / OpenCV', category: 'other' },
  { name: 'System Design', category: 'other' }
];