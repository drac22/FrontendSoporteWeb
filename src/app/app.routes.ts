import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Admin } from './admin/admin';
import { Clientes } from './admin/clientes/clientes';
import { Usuarios } from './admin/usuarios/usuarios';
import { AsignacionComponent } from './admin/asignacion/asignacion';
import { TablaClientes } from './admin/clientes/tabla/tabla';
import { TablaUsuarios } from './admin/usuarios/tabla/tabla';
import { Colaboradorcomponent } from './admin/colaboradores/colaboradorcomponent/colaboradorcomponent';
import { Colaboradortabla } from './admin/colaboradores/colaboradortabla/colaboradortabla';
import { Principal } from './usuario/principal/principal';
import { SolicitudComponente } from './usuario/solicitud-componente/solicitud-componente';
import { TablaSolicitudes } from './usuario/tabla-solicitudes/tabla-solicitudes';
import { ColaboradorPrincipal } from './colaborador/colaborador-principal/colaborador-principal';
import { ColaboradorTabla } from './colaborador/colaborador-tabla/colaborador-tabla';
import { AsignacionTabla } from './admin/asignacion/asignacion-tabla/asignacion-tabla';
import { ColaboradorComponent } from './colaborador/colaborador-component/colaborador-component';

export const routes: Routes = [
  { path: '', component: Login },
  {
    path: 'vistaAdmin',
    component: Admin,
    children: [
      {
        path: 'clientes',
        children: [
          { path: 'lista', component: TablaClientes },
          { path: 'agregar', component: Clientes },
        ],
      },
      {
        path: 'usuarios',
        children: [
          { path: 'lista', component: TablaUsuarios },
          { path: 'agregar', component: Usuarios },
        ],
      },
      {
        path: 'colaboradores',
        children: [
          { path: 'lista', component: Colaboradortabla },
          { path: 'agregar', component: Colaboradorcomponent },
        ],
      },
      {
        path: 'asignacion',
        children: [
          { path: '', component: AsignacionTabla },
          { path: 'agregar/:idSolicitud', component: AsignacionComponent },
        ],
      },
    ],
  },
  {
    path: 'vistaUsuario',
    component: Principal,
    children: [
      { path: 'solicitud', component: SolicitudComponente },
      { path: 'estado', component: TablaSolicitudes },
    ],
  },
  {
    path: 'vistaColaborador',
    component: ColaboradorPrincipal,
    children: [
      { path: 'asignaciones', component: ColaboradorTabla },
      { path: 'culminacion', component: TablaSolicitudes },
      {
        path: 'agregarActividad/:idAsignacion',
        component: ColaboradorComponent,
      },
    ],
  },
];
