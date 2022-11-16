import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhvaComponent } from './phva.component';

describe('PhvaComponent', () => {
  let component: PhvaComponent;
  let fixture: ComponentFixture<PhvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
