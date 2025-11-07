import { Component } from '@angular/core';
import { Hero } from './features/hero/hero';
import { Projects } from './features/projects/projects';
import { Skills } from './features/skills/skills';
import { Contact } from './features/contact/contact';
import { Footer } from './features/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Hero,
    Projects,
    Skills,
    Contact,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
