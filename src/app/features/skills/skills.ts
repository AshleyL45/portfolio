import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skills = signal([
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'TailwindCSS',
    'GraphQL',
    'Python',
    'AWS',
  ]);
}
