import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './components';
import {
  MhrEmptyRecordsComponent,
  MhrListTileActionComponent,
  MhrListTileComponent,
  MhrListTileSubtitleComponent,
  MhrListTileTitleComponent,
  MhrSectionComponent,
  MhrSectionsComponent,
} from '@mhr/components';
import { NotificationListTileComponent } from './components/notification-list-tile/notification-list-tile.component';
import { MhrRelativeTimePipe } from '@mhr/pipes';

@NgModule({
  declarations: [NotificationsComponent, NotificationListTileComponent],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    MhrSectionComponent,
    MhrSectionsComponent,
    MhrEmptyRecordsComponent,
    MhrRelativeTimePipe,
    MhrListTileActionComponent,
    MhrListTileComponent,
    MhrListTileSubtitleComponent,
    MhrListTileTitleComponent,
  ],
})
export class NotificationsModule {}
