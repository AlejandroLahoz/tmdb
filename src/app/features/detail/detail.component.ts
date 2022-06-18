import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { DetailReqRoot } from 'src/app/shared/interfaces/detail-req';
import {
  loadMovieDetail,
  loadTVShowDetail,
} from 'src/app/shared/store/data/data.actions';
import { getDetail } from 'src/app/shared/store/data/data.selectors';
import { DataState } from 'src/app/shared/store/data/data.state';

type Category = 'movie' | 'tv';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  detailMovie!: DetailReqRoot;
  category!: Category;

  constructor(
    private route: ActivatedRoute,
    private store: Store<{ data: DataState }>,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.category = this.route.snapshot.paramMap.get('category') as Category;
    if (id && this.category) {
      if (this.category === 'movie') {
        this.store.dispatch(loadMovieDetail({ id: Number(id) }));
      } else {
        this.store.dispatch(loadTVShowDetail({ id: Number(id) }));
      }
      this.store
        .select(getDetail)
        .pipe(filter((detail) => !!detail))
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
}
