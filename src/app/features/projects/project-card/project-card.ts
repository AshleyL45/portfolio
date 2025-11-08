import { Component, input } from '@angular/core';
import { Project } from '../../../core/models/project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.html',
  styleUrls: ['./project-card.css']
})
export class ProjectCard {
  project = input.required<Project>();
}
