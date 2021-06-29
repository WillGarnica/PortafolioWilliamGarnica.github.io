export class Ciudad {
    ideCiudad!: number;
    nomCiudad!: string;
}

export class Sucursal {
    idSucursal!: number;
    direccion!: string;
    idAdministrador!: number;
    nombre!: string;
    ciudad!: Ciudad;
}

export class FormatoPelicula {
    ideFormatoPelicula!: number;
    nomFormatoPelicula!: string;
}

export class Sala {
    ideSala!: number;
    numFilas!: number;
    numMaxSillasPorFila!: number;
    formatoPelicula!: FormatoPelicula;
    sucursal!: Sucursal;
}

