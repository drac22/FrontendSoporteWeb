import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActividadService } from '../../service/Actividad/actividad-service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-colaborador-component',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './colaborador-component.html',
  styleUrl: './colaborador-component.css',
})
export class ColaboradorComponent {
  actividadForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private actividadService: ActividadService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.actividadForm = this.fb.group({
      detalle: ['', Validators.required],
      tiempo: ['', [Validators.required, Validators.min(1)]],
    });
  }

  registrarActividad(): void {
    if (this.actividadForm.valid) {
      const idAsignacion = parseInt(
        this.route.snapshot.params['idAsignacion'],
        10
      );

      const dto = {
        idAsignacion: idAsignacion,
        detalleActividad: this.actividadForm.value.detalle,
        minutosTrabajados: this.actividadForm.value.tiempo,
      };

      this.actividadService.registrarActividad(dto).subscribe({
        next: (resp) => {
          console.log('Actividad registrada', resp);
          alert('Actividad registrada');
        },
        error: (error) => {
          console.error('Error registrando actividad:', error);
          alert('Error al registrar la actividad');
        },
      });
    }
  }
}
