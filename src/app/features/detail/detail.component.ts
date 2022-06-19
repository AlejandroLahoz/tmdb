import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, Subject, takeUntil } from 'rxjs';
import { DetailReqRoot } from 'src/app/shared/interfaces/detail-req';
import {
  loadMovieDetail,
  loadTVShowDetail,
} from 'src/app/shared/store/detail/detail.actions';
import { getDetail } from 'src/app/shared/store/detail/detail.selectors';
import { DetailState } from 'src/app/shared/store/detail/detail.state';

type Category = 'movie' | 'tv';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
  detailMovie!: DetailReqRoot;
  category!: Category;
  id: string;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private route: ActivatedRoute,
    private store: Store<{ data: DetailState }>,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.category = this.route.snapshot.paramMap.get('category') as Category;
  }

  ngOnInit() {
    if (this.id && this.category) {
      if (this.category === 'movie') {
        this.store.dispatch(loadMovieDetail({ id: Number(this.id) }));
      } else {
        this.store.dispatch(loadTVShowDetail({ id: Number(this.id) }));
      }
      this.store
        .select(getDetail)
        .pipe(
          filter((detail) => !!detail),
          takeUntil(this.destroy$)
        )
        .subscribe((detail) => {
          if (detail) {
            this.detailMovie = detail;
          }
        });
    }
  }

  public goToDetail(id: number) {
    this.router.navigate(['/detail', this.category, id]);
  }

  ngOnDestroy(): void {
    this.destroy$.next(false);
    this.destroy$.unsubscribe();
  }
}
