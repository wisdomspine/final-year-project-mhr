import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import {
  BioDataRecordComponent,
  BioDataTypeComponent,
  PatientBioDataComponent,
  PatientComponent,
  PatientConnectionsComponent,
  PatientListTileComponent,
  PatientsComponent,
} from './components';
import {
  MhrConnectionListTileComponent,
  MhrEmptyRecordsComponent,
  MhrGoBackButtonComponent,
  MhrListTileActionComponent,
  MhrListTileComponent,
  MhrListTileSubtitleComponent,
  MhrListTileTitleComponent,
  MhrNavigateToItemIconComponent,
  MhrRecordPageComponent,
  MhrSectionComponent,
  MhrSectionsComponent,
} from '@mhr/components';
import { MhrRelativeTimePipe } from '@mhr/pipes';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    PatientsComponent,
    PatientListTileComponent,
    PatientComponent,
    PatientConnectionsComponent,
    PatientBioDataComponent,
    BioDataTypeComponent,
    BioDataRecordComponent,
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    MhrSectionComponent,
    MhrSectionsComponent,
    MhrEmptyRecordsComponent,
    MhrListTileComponent,
    MhrListTileActionComponent,
    MhrListTileSubtitleComponent,
    MhrListTileTitleComponent,
    MhrNavigateToItemIconComponent,
    MhrConnectionListTileComponent,
    MhrGoBackButtonComponent,
    MhrRecordPageComponent,
    MhrRelativeTimePipe,
    MatTooltipModule,
  ],
})
export class PatientsModule {}
