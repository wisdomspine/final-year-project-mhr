import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mhr-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent {
  readonly router = inject(Router);
}
