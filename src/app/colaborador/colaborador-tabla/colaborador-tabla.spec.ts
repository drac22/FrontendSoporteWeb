import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradorTabla } from './colaborador-tabla';

describe('ColaboradorTabla', () => {
  let component: ColaboradorTabla;
  let fixture: ComponentFixture<ColaboradorTabla>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaboradorTabla]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColaboradorTabla);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
