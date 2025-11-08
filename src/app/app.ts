import { Component } from '@angular/core';
import { Hero } from './features/hero/hero';
import { Skills } from './features/skills/skills';
import { Contact } from './features/contact/contact';
import {ProjectList} from './features/projects/projectList/project-list';
import {Experience} from './features/experience/experience';
import {Header} from './shared/components/header/header';
import {Footer} from './shared/components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Hero,
    ProjectList,
    Skills,
    Contact,
    Header,
    Experience,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
