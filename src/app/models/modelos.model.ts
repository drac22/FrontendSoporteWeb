export interface TipoClienteModel {
  idTipoCliente: number;
  tipoCliente: string;
}

export interface SoftwareModel {
  idSoftware: number;
  nombre: string;
}

export interface ClienteModel {
  idCliente: number;
  nombreCliente: string;
  tipoCliente: TipoClienteModel;
  softwares: SoftwareModel[];
}

export interface UsuarioModel {
  idUsuario: number;
  nombreUsuario: string;
  telefonoUsuario: string;
  cliente: ClienteModel;
}

export interface RolModel{
  idRol: number;
  rol: string;
}

export interface ColaboradorModel{
  idColaborador:number;
  nombreColaborador:string;
  telefonoColaborador:string;
  rol: RolModel;
}

export interface TipoSolicitudModel{
  idTipoSolicitud:number;
  tipoSolicitud:string;
}

export interface AsignacionDTOResponse {
  idAsignacion: number;
  idSolicitud: number;
  motivo: string;
  nombreUsuario: string;
  nombreTipoSolicitud: string;
  estado: string;
  fechaRegistro: string; // o Date
}