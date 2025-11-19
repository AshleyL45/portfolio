import { Project } from '../models/project';

export const PROJECTS: Project[] = [
  {
    title: 'Eshop (En cours)',
    description: 'Site e-commerce de plantes.',
    image: 'assets/projects/eshop.png',
    githubUrl: 'https://github.com/AshleyL45/e-shop',
    projectUrl: 'https://ashleydev.fr/',
    technologies: ['Angular', 'TypeScript', 'VPS (OVH)'],
    date: '2025'
  },
  {
    title: 'Portfolio',
    description: 'Portfolio de mes différents projets.',
    image: 'assets/projects/portfolio.png',
    githubUrl: 'https://github.com/AshleyL45/portfolio',
    projectUrl: 'https://ashleylabory.fr/',
    technologies: ['Angular', 'TypeScript', 'TailwindCSS', 'VPS (OVH)'],
    date: '2025'
  },
  {
    title: 'Odyssea',
    description: 'Site de réservation de voyages personnalisés hauts de gamme.',
    image: 'assets/projects/odyssea.png',
    frontGithubUrl: 'https://github.com/AshleyL45/portfolio',
    backGithubUrl: 'https://github.com/AshleyL45/back---odyssea',
    technologies: ['React', 'TypeScript',  'Java', 'Spring Boot', 'MySQL'],
    date: '2024'
  }
];
