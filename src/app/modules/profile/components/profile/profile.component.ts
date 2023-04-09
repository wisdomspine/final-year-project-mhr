import { Component } from '@angular/core';

@Component({
  selector: 'mhr-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  records: { name: string; id: string; description: string }[] = [
    {
      name: 'Professional information',
      id: '0x33dc34',
      description:
        'Personal information such as birthday, ssn, blood group, department',
    },
    {
      name: 'Education',
      id: '0x33dc78',
      description: 'Academic degrees, wards, research papers,publications, etc',
    },
  ];
}
