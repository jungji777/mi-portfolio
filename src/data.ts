import { Project, TimelineItem, Skill } from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution built with React and Node.js',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1280',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://example.com',
    details: 'Full-featured e-commerce platform with cart functionality and payment integration.'
  },
  {
    id: '2',
    title: 'Brand Identity Design',
    description: 'Complete brand identity for a tech startup',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=1280',
    details: 'Created comprehensive brand guidelines including logo, color palette, and typography.'
  },
  {
    id: '3',
    title: 'Gourmet Restaurant Website',
    description: 'Elegant website for a high-end dining establishment',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1280',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://restaurant-example.com',
    details: 'Modern, responsive website featuring an interactive menu, reservation system, and stunning food photography. Includes a custom CMS for menu updates and event management.'
  },
  {
    id: '4',
    title: 'Creative Portfolio Website',
    description: 'Showcase website for a digital artist',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1280',
    technologies: ['React', 'TypeScript', 'Framer Motion'],
    liveUrl: 'https://portfolio-example.com',
    details: 'Dynamic portfolio website with smooth animations, masonry grid gallery, and advanced filtering capabilities. Features a custom-built lightbox for artwork presentation.'
  }
];

export const timeline: TimelineItem[] = [
  {
    year: '2023',
    title: 'Senior Web Developer',
    description: 'Leading development team at Tech Solutions Inc.'
  },
  {
    year: '2021',
    title: 'UI/UX Designer',
    description: 'Created user-centered designs for various clients'
  },
];

export const skills: Skill[] = [
  // Development Skills
  {
    name: 'React',
    level: 92,
    category: 'technical'
  },
  {
    name: 'TypeScript',
    level: 88,
    category: 'technical'
  },
  {
    name: 'JavaScript',
    level: 90,
    category: 'technical'
  },
  {
    name: 'Python',
    level: 85,
    category: 'technical'
  },
  // Design Software
  {
    name: 'Affinity Photo 2',
    level: 90,
    category: 'creative'
  },
  {
    name: 'Adobe Photoshop',
    level: 85,
    category: 'creative'
  },
  {
    name: 'Adobe Lightroom',
    level: 88,
    category: 'creative'
  },
  // Video Editing
  {
    name: 'DaVinci Resolve',
    level: 85,
    category: 'creative'
  },
  {
    name: 'After Effects',
    level: 82,
    category: 'creative'
  },
  // Digital Marketing
  {
    name: 'Digital Marketing',
    level: 88,
    category: 'marketing'
  },
  {
    name: 'Data Analytics',
    level: 85,
    category: 'marketing'
  },
  {
    name: 'SEO',
    level: 90,
    category: 'marketing'
  }
];