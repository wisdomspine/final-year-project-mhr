import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from '@app/modules/portal/components';

const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
    children: [
      {
        path: 'notifications',
        title: 'Notifications',
        loadChildren: () =>
          import('@modules/notifications').then((m) => m.NotificationsModule),
      },
      {
        path: 'patients',
        title: 'Patients',
        loadChildren: () =>
          import('@modules/patients').then((m) => m.PatientsModule),
      },
      {
        path: 'connections',
        title: 'Connections',
        loadChildren: () =>
          import('@modules/connections').then((m) => m.ConnectionsModule),
      },
      {
        path: 'profile',
        title: 'Profile',
        loadChildren: () =>
          import('@modules/profile').then((m) => m.ProfileModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalRoutingModule {}
