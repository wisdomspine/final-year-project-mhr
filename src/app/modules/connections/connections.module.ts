import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectionsRoutingModule } from './connections-routing.module';
import {
  MhrAddRecordIconComponent,
  MhrConnectionListTileComponent,
  MhrEmptyRecordsComponent,
  MhrExpandItemIconComponent,
  MhrGoBackButtonComponent,
  MhrListTileActionComponent,
  MhrListTileComponent,
  MhrListTileTitleComponent,
  MhrNavigateToItemIconComponent,
  MhrRecordPageComponent,
  MhrSectionComponent,
  MhrSectionsComponent,
} from '@mhr/components';
import {
  ConnectionComponent,
  ConnectionMetadataComponent,
  ConnectionRecordsComponent,
  ConnectionsComponent,
} from './components';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { ConnectionRecordComponent } from './components/connection-record/connection-record.component';

@NgModule({
  declarations: [
    ConnectionsComponent,
    ConnectionComponent,
    ConnectionMetadataComponent,
    ConnectionRecordsComponent,
    ConnectionRecordComponent,
  ],
  imports: [
    CommonModule,
    ConnectionsRoutingModule,
    MhrSectionsComponent,
    MhrSectionComponent,
    MhrAddRecordIconComponent,
    MhrEmptyRecordsComponent,
    MhrConnectionListTileComponent,
    MhrListTileComponent,
    MhrListTileTitleComponent,
    MhrListTileActionComponent,
    MatIconModule,
    MhrExpandItemIconComponent,
    MatTooltipModule,
    MhrNavigateToItemIconComponent,
    MatButtonModule,
    MhrRecordPageComponent,
    MhrGoBackButtonComponent,
  ],
})
export class ConnectionsModule {}
