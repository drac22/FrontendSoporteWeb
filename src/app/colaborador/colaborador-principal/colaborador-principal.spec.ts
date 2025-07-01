import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradorPrincipal } from './colaborador-principal';

describe('ColaboradorPrincipal', () => {
  let component: ColaboradorPrincipal;
  let fixture: ComponentFixture<ColaboradorPrincipal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaboradorPrincipal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColaboradorPrincipal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
