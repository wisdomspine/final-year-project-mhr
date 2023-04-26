import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isConnectedGuard, isNotConnectedGuard } from '@app/core/guards';

const routes: Routes = [
  {
    path: 'connect',
    loadChildren: () => import('@modules/connect').then((m) => m.ConnectModule),
    canActivate: [isNotConnectedGuard],
    canActivateChild: [isNotConnectedGuard],
  },
  {
    path: '',
    loadChildren: () => import('@modules/portal').then((m) => m.PortalModule),
    canActivate: [isConnectedGuard],
    canActivateChild: [isConnectedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
