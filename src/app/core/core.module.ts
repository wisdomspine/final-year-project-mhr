import { NgModule } from '@angular/core';
import { authFeature, authEffects } from './store/auth';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { hl7DataFeature } from './store/hl7-data';

@NgModule({
  imports: [
    StoreModule.forFeature(authFeature),
    EffectsModule.forFeature(authEffects),
    StoreModule.forFeature(hl7DataFeature),
  ],
})
export class CoreModule {}
