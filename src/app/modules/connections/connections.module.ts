import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectionsRoutingModule } from './connections-routing.module';
import {
  MhrAddRecordIconComponent,
  MhrAlertPanelComponent,
  MhrCloseIconComponent,
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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ConnectionRecordComponent } from './components/connection-record/connection-record.component';
import { RequestConnectionDialogComponent } from './components/request-connection-dialog/request-connection-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ConnectionsComponent,
    ConnectionComponent,
    ConnectionMetadataComponent,
    ConnectionRecordsComponent,
    ConnectionRecordComponent,
    RequestConnectionDialogComponent,
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
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MhrAlertPanelComponent,
    MhrCloseIconComponent,
    MatDialogModule,
  ],
})
export class ConnectionsModule {}
