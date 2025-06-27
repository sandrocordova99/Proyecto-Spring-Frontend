import { UsuarioBaseDTO } from "../UsuarioBaseDTO";

export interface ProfesorRequestDTO extends UsuarioBaseDTO {

    contratacion: Date,

    sueldo: number,

    cursoId: string

}
