import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { ConnectRoutingModule } from './connect-routing.module';
import { NotConnectedComponent } from '@app/modules/connect/pages';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [NotConnectedComponent],
  imports: [
    CommonModule,
    ConnectRoutingModule,
    MatButtonModule,
    RouterModule,
    MatRippleModule,
  ],
})
export class ConnectModule {}
