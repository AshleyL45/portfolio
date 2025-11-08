import { Project } from '../models/project';

export const PROJECTS: Project[] = [
  {
    title: 'Eshop',
    description: 'Site e-commerce de plantes.',
    image: 'assets/projects/eshop.png',
    githubUrl: 'https://github.com/AshleyL45/front---odyssea',
    projectUrl: 'https://ecommerce.example.com',
    technologies: ['Angular', 'TypeScript', 'Spring Boot', 'MySQL', 'VPS (OVH)'],
    date: '2025'
  },
  {
    title: 'Portfolio',
    description: 'Portfolio de mes différents projets.',
    image: 'assets/projects/portfolio.png',
    githubUrl: 'https://github.com/AshleyL45/portfolio',
    projectUrl: 'https://aichat.example.com',
    technologies: ['Angular', 'TypeScript', 'Spring Boot', 'MySQL', 'VPS (OVH)'],
    date: '2025'
  },
  {
    title: 'Odyssea',
    description: 'Site de réservation de voyages personnalisés hauts de gamme.',
    image: 'assets/projects/odyssea.png',
    frontGithubUrl: 'https://github.com/AshleyL45/portfolio',
    backGithubUrl: 'https://github.com/AshleyL45/back---odyssea',
    projectUrl: 'https://ecommerce.example.com',
    technologies: ['React', 'Node.js', 'TypeScript', 'Spring Boot', 'MySQL'],
    date: '2024'
  }
];
