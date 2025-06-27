import { RolesEnum } from "../RolesEnum";

export interface ProfesorResponseDTO {


    nombre: string,

    apellido: string,

    username: string,

    email: string,

    nacimiento: Date,

    roles: RolesEnum,

    contratacion: Date,

    sueldo: number,

    // CUrsos y grados
    nombreGrados: Set<String>

    // Categorias
    nombreCurso: string,

    // Categorias
    nombreCategorias: Set<String>

}
