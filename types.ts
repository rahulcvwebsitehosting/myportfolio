
export interface Project {
  id: string;
  title: string;
  problem: string;
  impact: string;
  tech: string[];
  image: string;
  link?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'other';
}
