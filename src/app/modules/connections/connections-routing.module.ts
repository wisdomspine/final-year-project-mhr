import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ConnectionComponent,
  ConnectionMetadataComponent,
  ConnectionRecordComponent,
  ConnectionRecordsComponent,
  ConnectionsComponent,
  RequestConnectionDialogComponent,
  ConnectionRecordSegmentComponent,
} from './components';

const routes: Routes = [
  {
    path: '',
    component: ConnectionsComponent,
    children: [
      { path: 'test', component: RequestConnectionDialogComponent },
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
          },
          {
            path: 'records/:recordId',
            component: ConnectionRecordComponent,
            children: [
              {
                path: ':segmentId',
                component: ConnectionRecordSegmentComponent,
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
