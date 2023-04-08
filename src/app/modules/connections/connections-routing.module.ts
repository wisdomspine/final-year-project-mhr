import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ConnectionComponent,
  ConnectionMetadataComponent,
  ConnectionRecordComponent,
  ConnectionRecordsComponent,
  ConnectionsComponent,
} from './components';

const routes: Routes = [
  {
    path: '',
    component: ConnectionsComponent,
    children: [
      {
        path: ':connectionId',
        component: ConnectionComponent,
        children: [
          {
            path: 'metadata',
            component: ConnectionMetadataComponent,
          },
          {
            path: 'records',
            component: ConnectionRecordsComponent,
            children: [
              {
                path: ':recordId',
                component: ConnectionRecordComponent,
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
export class ConnectionsRoutingModule {}
