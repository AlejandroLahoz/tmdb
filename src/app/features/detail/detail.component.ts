import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map, take } from 'rxjs';
import { DetailMovieReqRoot } from 'src/app/shared/interfaces/detail-movie-req';
import { loadDetail } from 'src/app/shared/store/data/data.actions';
import { getDetailMovie } from 'src/app/shared/store/data/data.selectors';
import { DataState } from 'src/app/shared/store/data/data.state';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  detailMovie!: DetailMovieReqRoot;

  constructor(
    private route: ActivatedRoute,
    private store: Store<{ data: DataState }>,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.store.dispatch(loadDetail({ id: Number(id) }));
      this.store
        .select(getDetailMovie)
        .pipe(
          filter((detail) => !!detail),
          take(5),
          map((detail) => {
            return {
              ...detail,
              recommendations: {
                ...detail?.recommendations,
                results: detail?.recommendations.results.slice(0, 3),
              },
            } as DetailMovieReqRoot;
          })
        )
        .subscribe((detail) => {
          this.detailMovie = detail;
        });
    }
  }

  public goToDetail(id: number) {
    this.router.navigate(['/detail', id]);
  }
}
