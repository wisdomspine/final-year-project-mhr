import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotConnectedComponent } from '@app/modules/connect/pages/not-connected/not-connected.component';

const routes: Routes = [
  {
    path: '',
    component: NotConnectedComponent,
    title: 'Access Medical Records with Your Wallet - Connect Now!',
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ConnectRoutingModule {}
