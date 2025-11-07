import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = signal([
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with Next.js and Stripe',
      image: 'assets/img/project-1.jpg',
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat application powered by OpenAI',
      image: 'assets/img/project-2.jpg',
    },
    {
      title: 'Task Management',
      description: 'Collaborative task management tool with real-time updates',
      image: 'assets/img/project-3.jpg',
    },
    {
      title: 'Portfolio Generator',
      description: 'Dynamic portfolio generator for developers',
      image: 'assets/img/project-4.jpg',
    },
  ]);
}
