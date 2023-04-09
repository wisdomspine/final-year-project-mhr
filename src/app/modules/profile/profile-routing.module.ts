import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  NewProfileRecordComponent,
  ProfileComponent,
  ProfileDataTypeComponent,
  ProfileRecordComponent,
} from './components';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: ':type',
        component: ProfileDataTypeComponent,
        children: [
          {
            path: 'add-record',
            component: NewProfileRecordComponent,
          },
          {
            path: ':address',
            component: ProfileRecordComponent,
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
export class ProfileRoutingModule {}
