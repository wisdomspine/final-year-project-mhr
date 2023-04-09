import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mhr-bio-data-type',
  templateUrl: './bio-data-type.component.html',
  styleUrls: ['./bio-data-type.component.scss'],
})
export class BioDataTypeComponent {
  empty: boolean = false;
  readonly router = inject(Router);
  records: { address: string; time: Date }[] = [
    {
      address: 'ZW3ISEHZUHPO7OZGMKLKIIMKVICOUDRCERI454I3DB2BH52HGLSO67W754',
      time: new Date(new Date().setHours(16, 20)),
    },
    {
      address: '5A5OSNE6HPGLBKFTKM4TBTGP5S3CNFA73QHS2S676EZ3HYIBWEVA',
      time: new Date(new Date().setMonth(0)),
    },
    {
      address: 'VGMCCWIADF2MVU3NHON6AM6T6QIZ36FPCYVAWMF3UXEDJJGEYNDA',
      time: new Date(new Date().setFullYear(2022)),
    },
  ];
}
