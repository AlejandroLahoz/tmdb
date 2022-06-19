import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { DetailEffects } from 'src/app/shared/store/detail/detail.effects';
import { detailReducer } from 'src/app/shared/store/detail/detail.reducer';
import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';

@NgModule({
  imports: [
    CommonModule,
    DetailRoutingModule,
    MatChipsModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    SharedModule,
    StoreModule.forFeature('detail', detailReducer),
    EffectsModule.forFeature([DetailEffects]),
  ],
  declarations: [DetailComponent],
})
export class DetailModule {}
