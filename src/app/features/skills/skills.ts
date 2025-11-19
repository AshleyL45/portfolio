import { Component } from '@angular/core';

export type SkillCategory = {
  title: string;
  items: string[];
};

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {

  categories: SkillCategory[] = [

    {
      title: 'Développement Front-End',
      items: [
        'Angular',
        'React',
        'React Native',
        'JavaScript / TypeScript',

        '__SEPARATOR__',

        'Bootstrap / Tailwind / PrimeNG',
        'Figma (maquettes & prototypes)'
      ]
    },

    {
      title: 'Développement Back-End',
      items: [
        'Java',
        'Spring Boot',
        'API REST',
        'Programmation orientée objet'
      ]
    },

    {
      title: 'Base de données',
      items: [
        'MySQL',
        'Modélisation (Merise)',
        'Administration de base de données',
        'Optimisation des requêtes SQL'
      ]
    },

    {
      title: 'Tests & Qualité',
      items: [
        'Jasmine',
        'Karma',
        'Cypress (E2E)',
        'Tests unitaires & fonctionnels'
      ]
    },

    {
      title: 'DevOps',
      items: [
        'Docker',
        'Concepts CI/CD',
        'Préparation à la mise en production'
      ]
    },

    {
      title: 'Soft Skills',
      items: [
        'Communication',
        'Organisation',
        'Stratégie d’influence',
        'Travail en équipe'
      ]
    }
  ];
}
