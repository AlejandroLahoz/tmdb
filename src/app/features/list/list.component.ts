import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListMode } from 'src/app/shared/enums/ListMode';
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

  changeListMode(event: any): void {
    const { value } = event;
    switch (value) {
      case ListMode.MOVIES:
        this.movieList$ = this.tmdbService.getPopularMovies();
        break;
      case ListMode.TVSHOWS:
        this.movieList$ = this.tmdbService.getPopularTVShows();
        break;
    }
  }
}
