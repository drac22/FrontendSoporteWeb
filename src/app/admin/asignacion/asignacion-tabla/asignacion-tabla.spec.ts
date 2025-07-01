import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionTabla } from './asignacion-tabla';

describe('AsignacionTabla', () => {
  let component: AsignacionTabla;
  let fixture: ComponentFixture<AsignacionTabla>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignacionTabla]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignacionTabla);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
