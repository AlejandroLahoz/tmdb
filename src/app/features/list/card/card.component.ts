import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/interfaces/movie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() movie!: Movie;

  constructor() {}

  ngOnInit() {}
}
