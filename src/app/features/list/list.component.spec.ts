/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { Movie } from 'src/app/shared/interfaces/movie';
import { TVShow } from 'src/app/shared/interfaces/tv-shows';
import { DataState, intialState } from 'src/app/shared/store/data/data.state';

import { ListComponent } from './list.component';

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

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  const mockListMovie = [
    {
      title: 'Interstellar',
      overview: 'Awesome film',
    },
  ] as Movie[];
  const mockListTVShow = [
    {
      name: 'Interstellar',
      overview: 'Awesome film',
    },
  ] as TVShow[];
  const initialState: DataState = {
    ...intialState,
    listMovie: mockListMovie,
    listTVShow: mockListTVShow,
  };
  let storeInjected: StoreStub;
  let routerInjected: RouterStub;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
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
      ],
    }).compileComponents();
    storeInjected = TestBed.inject(Store);
    routerInjected = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadTVShows on changeListMode and change listMode', () => {
    const event = 1;
    const spy = spyOn(storeInjected, 'dispatch').and.callThrough();
    component.changeListMode(event);
    expect(spy).toHaveBeenCalled();
    expect(component.listMode).toEqual(Number(event));
  });

  it('should dispatch loadMovies on changeListMode and change listMode', () => {
    const event = 0;
    const spy = spyOn(storeInjected, 'dispatch').and.callThrough();
    component.changeListMode(event);
    expect(spy).toHaveBeenCalled();
    expect(component.listMode).toEqual(Number(event));
  });

  it('should navigate to another detail on goToDetail with movie category and id', () => {
    component.listMode = 0;
    fixture.detectChanges();
    const idToNavigate = 1234;
    const spy = spyOn(routerInjected, 'navigate').and.callThrough();
    component.goToDetail(idToNavigate);
    expect(spy).toHaveBeenCalledWith(['/detail', 'movie', idToNavigate]);
  });

  it('should navigate to another detail on goToDetail with tv show category and id', () => {
    component.listMode = 1;
    fixture.detectChanges();
    const idToNavigate = 1234;
    const spy = spyOn(routerInjected, 'navigate').and.callThrough();
    component.goToDetail(idToNavigate);
    expect(spy).toHaveBeenCalledWith(['/detail', 'tv', idToNavigate]);
  });
});
