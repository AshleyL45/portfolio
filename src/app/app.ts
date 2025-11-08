import { Component } from '@angular/core';
import { Hero } from './features/hero/hero';
import { Skills } from './features/skills/skills';
import { Contact } from './features/contact/contact';
import { Footer } from './features/footer/footer';
import {ProjectList} from './features/projects/projectList/project-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Hero,
    ProjectList,
    Skills,
    Contact,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
