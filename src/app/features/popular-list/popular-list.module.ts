import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { PopularListRoutingModule } from './popular-list-routing.module';
import { ListComponent } from './popular-list.component';

@NgModule({
  imports: [
    CommonModule,
    PopularListRoutingModule,
    MatButtonToggleModule,
    SharedModule,
  ],
  declarations: [ListComponent],
})
export class PopularListModule {}
