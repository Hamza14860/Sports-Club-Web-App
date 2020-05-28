import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachRanksComponent } from './coach-ranks.component';

describe('CoachRanksComponent', () => {
  let component: CoachRanksComponent;
  let fixture: ComponentFixture<CoachRanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachRanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachRanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
