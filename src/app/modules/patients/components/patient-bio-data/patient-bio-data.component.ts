import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'patient-bio-data',
  templateUrl: './patient-bio-data.component.html',
  styleUrls: ['./patient-bio-data.component.scss'],
})
export class PatientBioDataComponent {
  readonly router = inject(Router);
  records: { name: string; id: string; description: string }[] = [
    {
      name: 'Personal information',
      id: '0x33dc34',
      description: 'Personal information such as birthday, ssn, blood group',
    },
    {
      name: 'Next of kin',
      id: '0x33dc78',
      description: 'Next of kin information such as birthday, ssn, blood group',
    },
    {
      name: 'Insurance',
      id: '0x335c34',
      description: 'Health insurance provider, and insurance details',
    },
    {
      name: 'Education',
      id: '0x22dc34',
      description: 'Schools attended, certifications obtained,Exams written',
    },
    {
      name: 'Allergy',
      id: '0x22dc34',
      description: 'Allergies, and causative agents',
    },
  ];
}
