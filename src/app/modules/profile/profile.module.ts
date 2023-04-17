import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import {
  NewProfileRecordComponent,
  ProfileComponent,
  ProfileDataTypeComponent,
  ProfileRecordComponent,
  ProfileRecordListTileComponent,
} from './components';
import {
  MhrAddRecordIconComponent,
  MhrEmptyRecordsComponent,
  MhrListTileActionComponent,
  MhrListTileComponent,
  MhrListTileSubtitleComponent,
  MhrListTileTitleComponent,
  MhrNavigateToItemIconComponent,
  MhrRecordFormComponent,
  MhrRecordPageComponent,
  MhrSectionComponent,
  MhrSectionsComponent,
} from '@mhr/components';
import { MhrRelativeTimePipe } from '@mhr/pipes';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileDataTypeComponent,
    ProfileRecordListTileComponent,
    ProfileRecordComponent,
    NewProfileRecordComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MhrSectionComponent,
    MhrSectionsComponent,
    MhrListTileActionComponent,
    MhrListTileTitleComponent,
    MhrNavigateToItemIconComponent,
    MhrListTileSubtitleComponent,
    MhrListTileComponent,
    MhrAddRecordIconComponent,
    MhrEmptyRecordsComponent,
    MhrRelativeTimePipe,
    MatTooltipModule,
    MhrRecordPageComponent,
    MatButtonModule,
    ReactiveFormsModule,
    MhrRecordFormComponent,
  ],
})
export class ProfileModule {}
