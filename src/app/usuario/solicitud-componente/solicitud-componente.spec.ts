import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudComponente } from './solicitud-componente';

describe('SolicitudComponente', () => {
  let component: SolicitudComponente;
  let fixture: ComponentFixture<SolicitudComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
