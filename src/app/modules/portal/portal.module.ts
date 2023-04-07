import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './components/portal/portal.component';
import {
  MhrNavLinkComponent,
  MhrSectionComponent,
  MhrSectionsComponent,
  MhrNotificationLinkComponent,
} from '@mhr/components';
import { DisconnectWalletButtonComponent } from './components/disconnect-wallet-button/disconnect-wallet-button.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PortalComponent, DisconnectWalletButtonComponent],
  imports: [
    CommonModule,
    PortalRoutingModule,
    MhrSectionsComponent,
    MhrSectionComponent,
    MhrNotificationLinkComponent,
    MhrNavLinkComponent,
    MatButtonModule,
  ],
})
export class PortalModule {}
