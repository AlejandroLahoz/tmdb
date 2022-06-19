import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { PopularListRoutingModule } from './popular-list-routing.module';
import { ListComponent } from './popular-list.component';

@NgModule({
  imports: [
    CommonModule,
    PopularListRoutingModule,
    MatButtonToggleModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
  ],
  declarations: [ListComponent],
})
export class PopularListModule {}
