import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/shared/interfaces/movie';
import { TmdbService } from 'src/app/shared/services/tmdb/tmdb.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public movieList$!: Observable<Movie[]>;

  constructor(private tmdbService: TmdbService) {}

  ngOnInit() {
    this.movieList$ = this.tmdbService.getPopularMovies();
  }
}
