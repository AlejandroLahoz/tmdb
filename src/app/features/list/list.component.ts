import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ListMode } from 'src/app/shared/enums/ListMode';
import { Movie } from 'src/app/shared/interfaces/movie';
import { TVShow } from 'src/app/shared/interfaces/tv-shows';
import {
  loadMovies,
  loadTVShows,
} from 'src/app/shared/store/data/data.actions';
import {
  getListMovie,
  getListTVShow,
} from 'src/app/shared/store/data/data.selectors';
import { DataState } from 'src/app/shared/store/data/data.state';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public listMovie$!: Observable<Movie[]>;
  public listTVShow$!: Observable<TVShow[]>;
  public listMode: ListMode = ListMode.MOVIES;

  constructor(
    private store: Store<{ data: DataState }>,
    private router: Router
  ) {}

  ngOnInit() {
    this.listMovie$ = this.store.select(getListMovie);
    this.listTVShow$ = this.store.select(getListTVShow);
  }

  changeListMode(event: any): void {
    this.listMode = Number(event);
    switch (this.listMode) {
      case ListMode.MOVIES:
        this.store.dispatch(loadMovies());
        break;
      case ListMode.TVSHOWS:
        this.store.dispatch(loadTVShows());
        break;
    }
  }

  public goToDetail(id: number) {
    this.router.navigate(['/detail', id]);
  }
}
