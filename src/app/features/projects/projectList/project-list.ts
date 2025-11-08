import { Component, signal } from '@angular/core';
import { Project } from '../../../core/models/project';
import {ProjectCard} from '../project-card/project-card';
import {PROJECTS} from '../../../core/data/projects.data';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.html',
  imports: [
    ProjectCard
  ],
  styleUrls: ['./project-list.css']
})
export class ProjectList {
  projects = signal<Project[]>(PROJECTS);
}
