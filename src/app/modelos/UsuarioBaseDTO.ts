import { RolesEnum } from "./RolesEnum";

export interface UsuarioBaseDTO {

    nombre: string,

    apellido: string,

    username: string,

    password: string,

    confirm_password: string,

    email: string,

    nacimiento: Date,

    //RolesEnum
    roles: RolesEnum,

    edicion: boolean;

    
}
