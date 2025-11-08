import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skills = signal([
    'Angular',
    'React',
    'TypeScript',
    'Node.js',
    'TailwindCSS',
    'MySQL',
    'SpringBoot',
    'Python',
    'Docker',
    'VPS (OVH)'
  ]);
}
