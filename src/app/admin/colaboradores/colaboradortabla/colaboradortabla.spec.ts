import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Colaboradortabla } from './colaboradortabla';

describe('Colaboradortabla', () => {
  let component: Colaboradortabla;
  let fixture: ComponentFixture<Colaboradortabla>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Colaboradortabla]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Colaboradortabla);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
