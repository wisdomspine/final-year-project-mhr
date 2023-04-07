import { Component, inject } from '@angular/core';
import { IconService } from '@app/core/services';

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet> `,
})
export class AppComponent {
  readonly iconService = inject(IconService);
}
