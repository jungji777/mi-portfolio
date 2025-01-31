export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'design' | 'branding';
  image: string;
  technologies?: string[];
  liveUrl?: string;
  details?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'creative' | 'marketing';
}