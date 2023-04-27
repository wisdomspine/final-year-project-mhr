import { NgModule } from '@angular/core';
import { authFeature, authEffects } from './store/auth';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { hl7DataFeature } from './store/hl7-data';
import { profileEffects, profileFeature } from '@core/store/profile';

@NgModule({
  imports: [
    StoreModule.forFeature(authFeature),
    EffectsModule.forFeature(authEffects),
    StoreModule.forFeature(hl7DataFeature),
    StoreModule.forFeature(profileFeature),
    EffectsModule.forFeature(profileEffects),
  ],
})
export class CoreModule {}
