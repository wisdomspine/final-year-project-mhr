import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './components/portal/portal.component';
import { MhrSectionComponent, MhrSectionsComponent } from '@mhr/components';

@NgModule({
  declarations: [PortalComponent],
  imports: [
    CommonModule,
    PortalRoutingModule,
    MhrSectionsComponent,
    MhrSectionComponent,
  ],
})
export class PortalModule {}
