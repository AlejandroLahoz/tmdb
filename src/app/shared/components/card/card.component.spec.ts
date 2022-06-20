/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event with id onDetailClicked', async () => {
    component.id = 1;
    fixture.detectChanges();
    const spy = spyOn(component.detailClicked, 'emit').and.callThrough();
    component.onDetailClicked();
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should changeSource', () => {
    const mockEvent = {
      target: {
        src: 'imageNotFound.jpg',
      },
    };
    component.changeSource(mockEvent);
    expect(mockEvent.target.src).toEqual('assets/images/undefined.jpg');
  });
});
