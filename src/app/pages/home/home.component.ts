import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { PROJECTS, Project } from '../../core/data/projects.data';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ProjectCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  featuredProjects: Project[] = PROJECTS.slice(0, 3);

  techStack = [
    { name: 'Angular', icon: 'angular' },
    { name: 'React', icon: 'react' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Tailwind', icon: 'tailwind' },
    { name: 'Nx', icon: 'nx' },
  ];
}
