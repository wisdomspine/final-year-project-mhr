import { Component, inject } from '@angular/core';
import { IconService, IpfsService } from '@core/services';

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet> `,
})
export class AppComponent {
  readonly iconService = inject(IconService);
  readonly ipfsService = inject(IpfsService);
}
