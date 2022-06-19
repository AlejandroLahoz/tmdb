import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() rating!: number;
  @Input() count_rating!: number;
  @Input() title!: string;
  @Input() overview!: string;
  @Input() id!: number;
  @Input() poster!: string;
  @Input() date!: string;
  @Output() detailClicked: EventEmitter<number> = new EventEmitter();

  constructor() {}

  onDetailClicked() {
    this.detailClicked.emit(this.id);
  }
}
