import { Project } from '../models/project';

export const PROJECTS: Project[] = [
  {
    title: "Mobil'Easy",
    description: 'Plateforme de réservation de logements adaptés aux personnes en situation de handicap.',
    image: 'assets/projects/mobil-easy.png',
    frontGithubUrl: 'https://github.com/Mobil-Easy/mobileasy_front',
    backGithubUrl: 'https://github.com/Mobil-Easy/mobileasy_api',
    dashboardGithubUrl: 'https://github.com/Mobil-Easy/mobileasy_dashboards',
    projectUrl: 'https://mobil-easy.fr/',
    technologies: ['Vue.js', 'Astro', 'Java', 'Spring Boot', 'MySQL'],
    date: '2026'
  },
  {
    title: 'Joker',
    description: 'Application de gestion des données de santé des animaux.',
    image: 'assets/projects/jokeur.png',
    frontGithubUrl: 'https://github.com/Djymini/jokeur_frontend',
    backGithubUrl: 'https://github.com/Djymini/jokeur_backend',
    projectUrl: 'https://staging.jokeur.ashleydev.fr/',
    technologies: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'MySQL'],
    date: '2026'
  },
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
    description: 'Site de réservation de voyages personnalisés haut de gamme.',
    image: 'assets/projects/odyssea.png',
    frontGithubUrl: 'https://github.com/AshleyL45/portfolio',
    backGithubUrl: 'https://github.com/AshleyL45/back---odyssea',
    technologies: ['React', 'TypeScript', 'Java', 'Spring Boot', 'MySQL'],
    date: '2024'
  }
];
