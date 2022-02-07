export class PersonasLista {

    constructor(personasLista) {
        this.personasLista = personasLista;
    }

    obtenerListaNombres() {
        const nombres = this.personasLista.map( (persona) => persona.name );
        return nombres;
    }

    buscarPorNombre(nombre) {
        const datos = this.personasLista.filter( (persona) => persona.name == nombre );
        return datos[0];
    }
}