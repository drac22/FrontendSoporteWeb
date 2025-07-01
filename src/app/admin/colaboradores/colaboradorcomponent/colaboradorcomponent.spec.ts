import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Colaboradorcomponent } from './colaboradorcomponent';

describe('Colaboradorcomponent', () => {
  let component: Colaboradorcomponent;
  let fixture: ComponentFixture<Colaboradorcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Colaboradorcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Colaboradorcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
