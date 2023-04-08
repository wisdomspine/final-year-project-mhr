import { Component } from '@angular/core';
import { MhrConnectionStatus } from '@mhr/components';

@Component({
  selector: 'mhr-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss'],
})
export class ConnectionComponent {
  status: MhrConnectionStatus = 'active';
}
