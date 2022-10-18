import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAuditComponent } from './menu-audit.component';

describe('MenuAuditComponent', () => {
  let component: MenuAuditComponent;
  let fixture: ComponentFixture<MenuAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAuditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
