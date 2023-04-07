import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
})
export class PortalComponent {
  readonly router = inject(Router);
  readonly navLinks: { title: string; path: string; svgIcon: string }[] = [
    {
      title: 'Patients',
      svgIcon: 'users-medical',
      path: '/patients',
    },
    {
      title: 'Connections',
      svgIcon: 'link-horizontal',
      path: '/connections',
    },
    {
      title: 'Profile',
      svgIcon: 'user-doctor',
      path: '/profile',
    },
  ];
}
