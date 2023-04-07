import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'mhr-notification-link',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  template: `
    <button mat-button>
      <div class="content">
        <mat-icon svgIcon="bell" color="primary"></mat-icon>
        <div class="active-indicator" *ngIf="active" [@active]="active"></div>
      </div>
    </button>
  `,
  styleUrls: ['./mhr-notification-link.component.scss'],
  animations: [
    trigger('active', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('.3s 0s ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('.3s 0s ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class MhrNotificationLinkComponent {
  @Input()
  /**
   * setting this to true brings up the green indicator
   */
  active: boolean = false;
}
