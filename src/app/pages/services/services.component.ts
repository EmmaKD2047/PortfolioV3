import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  services = [
    {
      icon: 'dashboard',
      title: 'Dashboard Development',
      desc: 'High-performance dashboards with real-time data, charts, and rich interactivity tailored to your business needs.',
    },
    {
      icon: 'design',
      title: 'Design Systems',
      desc: 'Scalable, reusable component libraries with design tokens, theming, and comprehensive documentation.',
    },
    {
      icon: 'arch',
      title: 'Frontend Architecture',
      desc: 'Maintainable and scalable application structures — mono-repos, state management, and performance budgets.',
    },
    {
      icon: 'angular',
      title: 'Angular Development',
      desc: 'End-to-end Angular apps with best practices — lazy loading, optimistic UI, SSR, and clean code.',
    },
    {
      icon: 'perf',
      title: 'Performance Optimization',
      desc: 'Diagnose and resolve bottlenecks. Improve load times, Core Web Vitals, and user experience.',
    },
    {
      icon: 'fights',
      title: 'Figma to Frontend',
      desc: 'Convert designs to pixel-perfect, responsive frontend code with meticulous attention to detail.',
    },
  ];
}
