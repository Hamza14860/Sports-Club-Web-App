import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachAuthComponent } from './coach-auth.component';

describe('CoachAuthComponent', () => {
  let component: CoachAuthComponent;
  let fixture: ComponentFixture<CoachAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
