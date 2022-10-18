import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpInformationComponent } from './up-information.component';

describe('UpInformationComponent', () => {
  let component: UpInformationComponent;
  let fixture: ComponentFixture<UpInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
