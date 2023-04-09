import { Component } from '@angular/core';

@Component({
  selector: 'mhr-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent {
  empty: boolean = false;
  readonly notifications: {
    title: string;
    description: string;
    time: Date | string;
  }[] = [
    {
      title: 'Connection accepted',
      description: 'Your request to connect with 0x452fxvx has been approved',
      time: new Date(),
    },
    {
      title: 'Connection rejected',
      description: 'Your request to connect with Mr. John was rejected',
      time: new Date(new Date().setMonth(5, 17)),
    },
  ];
}
