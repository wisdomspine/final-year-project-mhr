import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mhr-section',
  standalone: true,
  imports: [CommonModule],
  template: ` <ng-content></ng-content> `,
  styleUrls: ['./mhr-section.component.scss'],
})
export class MhrSectionComponent {
  @HostBinding('style.width')
  @Input()
  width!: string;

  @HostBinding('style.flex')
  @Input()
  flex!: string;

  @HostBinding('class.vertical-padding')
  @Input()
  verticalPadding: boolean = true;
}
