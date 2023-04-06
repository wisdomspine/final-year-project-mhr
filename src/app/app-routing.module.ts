import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'connect',
    loadChildren: () => import('@modules/connect').then((m) => m.ConnectModule),
  },
  {
    path: '',
    loadChildren: () => import('@modules/portal').then((m) => m.PortalModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
