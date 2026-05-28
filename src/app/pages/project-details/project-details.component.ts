import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PROJECTS, Project } from '../../core/data/projects.data';

@Component({
  selector: 'app-project-details',
  imports: [RouterLink],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css',
})
export class ProjectDetailsComponent implements OnInit {
  project: Project | undefined;
  activeScreenshot = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.project = PROJECTS.find((p) => p.slug === slug);
  }

  setScreenshot(index: number) {
    this.activeScreenshot = index;
  }
}
