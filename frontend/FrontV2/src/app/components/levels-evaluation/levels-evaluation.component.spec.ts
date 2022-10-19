import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelsEvaluationComponent } from './levels-evaluation.component';

describe('LevelsEvaluationComponent', () => {
  let component: LevelsEvaluationComponent;
  let fixture: ComponentFixture<LevelsEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelsEvaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelsEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
