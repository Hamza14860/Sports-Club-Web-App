import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseGamesComponent } from './choose-games.component';

describe('ChooseGamesComponent', () => {
  let component: ChooseGamesComponent;
  let fixture: ComponentFixture<ChooseGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
