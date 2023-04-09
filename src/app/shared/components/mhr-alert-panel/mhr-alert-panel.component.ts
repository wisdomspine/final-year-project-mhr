import {
  AfterViewInit,
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  transition,
  animate,
  keyframes,
  style,
  AnimationEvent,
} from '@angular/animations';

@Component({
  selector: 'mhr-alert-panel',
  standalone: true,
  imports: [CommonModule],
  template: ` <ng-content> </ng-content> `,
  styleUrls: ['./mhr-alert-panel.component.scss'],
  animations: [
    trigger('panelAnimation', [
      transition(':enter', [
        animate(
          '.5s 0s ease-in-out',
          keyframes([
            style({
              offset: 0,
              position: 'relative',
              right: '64px',
              left: '-64px',
              top: '-16px',
              opacity: '0',
            }),
            style({
              offset: 0.2,
              right: '64px',
              left: '-64px',
              top: '0px',
              opacity: '1',
            }),
            style({
              offset: 0.5,
              right: '-34px',
              left: '34px',
              top: '0px',
              opacity: '1',
            }),
            style({
              offset: 0.8,
              right: '16px',
              left: '-16px',
              top: '0px',
              opacity: '1',
            }),

            style({
              offset: 1,
              right: '0px',
              left: '0px',
              top: '0px',
              opacity: '1',
            }),
          ])
        ),
      ]),
      transition(':leave', [
        animate(
          '.35s 0s ease-in-out',
          keyframes([
            style({
              offset: 0.0,
              position: 'relative',
              top: '0px',
              opacity: '1',
            }),
            style({
              offset: 1,
              top: '-16px',
              opacity: '0',
            }),
          ])
        ),
      ]),
    ]),
  ],
})
export class MhrAlertPanelComponent implements AfterViewInit {
  @Input()
  set duration(duration: number) {
    this.duration = 500 + Math.max(100, duration);
  }
  /**
   * The duration for which the alert should be shown
   */
  _duration: number = 5_850;

  @HostBinding('class')
  @Input()
  color: 'error' | 'success' | 'info' = 'error';

  @Output()
  onDismissStart: EventEmitter<void> = new EventEmitter();

  @Output()
  onDismissed: EventEmitter<void> = new EventEmitter();

  @HostBinding('@panelAnimation')
  animate = true;

  private dismissTimeout: any = null;
  readonly viewContainer = inject(ViewContainerRef);

  ngAfterViewInit(): void {
    setTimeout(() => {
      let element = this.viewContainer.element.nativeElement as HTMLElement;

      element.remove();
    }, this._duration + 350);
  }

  @HostListener('@panelAnimation.done', ['$event'])
  @HostListener('@panelAnimation.start', ['$event'])
  handleAnimationEvents(event: AnimationEvent, start: boolean) {
    if (start && event.toState == 'void') {
      // leaving
      this.onDismissStart.emit();
    } else if (!start && event.toState == 'void') {
      this.onDismissed.emit();
    }
  }
}
