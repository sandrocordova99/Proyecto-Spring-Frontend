import { UsuarioBaseDTO } from "../UsuarioBaseDTO";

export interface AlumnoEditDTO extends UsuarioBaseDTO {

    alumnoID: string,
    // Alumno
    nombreDeApoderado: string,

    gradoID: string

}
