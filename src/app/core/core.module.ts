import { NgModule } from '@angular/core';
import { authFeature, authEffects } from './store/auth';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    StoreModule.forFeature(authFeature),
    EffectsModule.forFeature(authEffects),
  ],
})
export class CoreModule {}
