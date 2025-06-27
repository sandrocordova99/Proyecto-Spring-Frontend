import { RolesEnum } from "../RolesEnum";
import { AlumnoGradoRespondeDTO } from "./alumno-grado-responde-dto";

export interface ResponseAlumnoDTO {
    nombre: string,

    apellido: string,

    username: string,

    email: string,

    nacimiento: Date;

    //rolesEnum 
    roles: RolesEnum,

    nombreDeApoderado: string,

    grado: AlumnoGradoRespondeDTO;
}
