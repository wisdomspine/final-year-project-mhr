import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  BioDataRecordComponent,
  BioDataTypeComponent,
  PatientBioDataComponent,
  PatientComponent,
  PatientConnectionsComponent,
  PatientsComponent,
} from './components';

const routes: Routes = [
  {
    path: '',
    component: PatientsComponent,
    children: [
      {
        path: ':patientAddress',
        component: PatientComponent,
        children: [
          {
            path: 'connections',
            component: PatientConnectionsComponent,
          },
          {
            path: 'bio-data',
            component: PatientBioDataComponent,
          },
          {
            path: 'bio-data/:type',
            component: BioDataTypeComponent,
            children: [
              {
                path: ':transactionAddress',
                component: BioDataRecordComponent,
              },
            ],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsRoutingModule {}
