import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosAuditoriasComponent } from './resultados-auditorias.component';

describe('ResultadosAuditoriasComponent', () => {
  let component: ResultadosAuditoriasComponent;
  let fixture: ComponentFixture<ResultadosAuditoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosAuditoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosAuditoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
