import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule,
    MatButtonToggleModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [ListComponent, CardComponent],
})
export class ListModule {}
