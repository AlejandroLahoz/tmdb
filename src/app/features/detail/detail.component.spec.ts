/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  convertToParamMap,
  Router,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { DetailReqRoot } from 'src/app/shared/interfaces/detail-req';

import { DetailComponent } from './detail.component';

class StoreStub {
  dispatch(action: any): void {}
}
class RouterStub {
  navigate([]: any): void {}

  routeReuseStrategy = {
    shouldReuseRoute: (
      future: ActivatedRouteSnapshot,
      curr: ActivatedRouteSnapshot
    ) => true,
  };
}

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  const mockDetail = {
    title: 'Interstellar',
    overview: 'Awesome film',
  } as DetailReqRoot;
  const initialState = {
    data: {
      detail: mockDetail,
    },
  };
  let storeInjected: StoreStub;
  let routerInjected: RouterStub;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: Store,
          useClass: StoreStub,
        },
        {
          provide: Router,
          useClass: RouterStub,
        },
        provideMockStore({ initialState }),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({
                category: 'movie',
                id: '1234',
              }),
            },
          },
        },
      ],
    }).compileComponents();
    storeInjected = TestBed.inject(Store);
    routerInjected = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be changed reuseStrategy to false', () => {
    const test = routerInjected.routeReuseStrategy.shouldReuseRoute(
      new ActivatedRouteSnapshot(),
      new ActivatedRouteSnapshot()
    );
    expect(test).toEqual(false);
  });

  it('should dispatch loadTVShowDetail if category is not movie', () => {
    component.category = 'tv';
    fixture.detectChanges();
    const spy = spyOn(storeInjected, 'dispatch').and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should dispatch loadMovieDetail if category is movie', () => {
    component.category = 'movie';
    fixture.detectChanges();
    const spy = spyOn(storeInjected, 'dispatch').and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
    expect(component.detailMovie).toEqual(mockDetail);
  });

  it('should navigate to another detail on goToDetail with category and id', () => {
    const idToNavigate = 1234;
    const spy = spyOn(routerInjected, 'navigate').and.callThrough();
    component.goToDetail(idToNavigate);
    expect(spy).toHaveBeenCalledWith([
      '/detail',
      component.category,
      idToNavigate,
    ]);
  });
});
