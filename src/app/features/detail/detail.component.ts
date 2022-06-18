import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { DetailMovieReqRoot } from 'src/app/shared/interfaces/detail-movie-req';
import { loadDetail } from 'src/app/shared/store/data/data.actions';
import { getDetailMovie } from 'src/app/shared/store/data/data.selectors';
import { DataState } from 'src/app/shared/store/data/data.state';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  detailMovie!: DetailMovieReqRoot;

  constructor(
    private route: ActivatedRoute,
    private store: Store<{ data: DataState }>
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.store.dispatch(loadDetail({ id: Number(id) }));
      this.store
        .select(getDetailMovie)
        .pipe(take(1))
        .subscribe((detail) => {
          if (detail) {
            this.detailMovie = detail;
          }
        });
    }
  }
}
