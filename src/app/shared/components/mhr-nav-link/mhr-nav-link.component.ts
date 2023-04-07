import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'mhr-nav-link',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  template: `
    <button mat-button>
      <div class="content">
        <mat-icon [svgIcon]="svgIcon"></mat-icon>
        <span class="text">
          {{ title }}
        </span>
      </div>
    </button>
  `,
  styleUrls: ['./mhr-nav-link.component.scss'],
})
export class MhrNavLinkComponent {
  @Input()
  title!: string;

  @Input()
  svgIcon!: string;

  @HostBinding('class.active')
  @Input()
  active: boolean = false;
}
