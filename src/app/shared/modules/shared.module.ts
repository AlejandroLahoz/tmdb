import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from 'src/app/shared/components/card/card.component';

@NgModule({
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  declarations: [CardComponent],
  exports: [CardComponent],
})
export class SharedModule {}
