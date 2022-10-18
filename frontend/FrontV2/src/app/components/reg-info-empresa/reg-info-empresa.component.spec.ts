import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegInfoEmpresaComponent } from './reg-info-empresa.component';

describe('RegInfoEmpresaComponent', () => {
  let component: RegInfoEmpresaComponent;
  let fixture: ComponentFixture<RegInfoEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegInfoEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegInfoEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
