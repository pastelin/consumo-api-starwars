export class PersonaComponente {
	constructor() {
		this.objPropiedades = {
			personal: [
				'name',
				'height',
				'mass',
				'hair_color',
				'skin_color',
				'eye_color',
				'birth_year',
				'gender',
			],
			homeworld: [
				'name',
				'rotation_period',
				'orbital_period',
				'diameter',
				'climate',
				'gravity',
				'terrain',
				'surface_water',
				'population',
			],
			species: [
				'name',
				'classification',
				'designation',
				'average_height',
				'skin_colors',
				'hair_colors',
				'average_lifespan',
				'homeworld',
				'language',
			],
			vehicles: [
				'name',
				'model',
				'manufacturer',
				'cost_in_credits',
				'length',
				'max_atmosphering_speed',
				'crew',
				'passengers',
				'cargo_capacity',
				'consumables',
				'vehicle_class',
			],
			starships: [
				'name',
				'model',
				'manufacturer',
				'cost_in_credits',
				'length',
				'max_atmosphering_speed',
				'crew',
				'passengers',
				'cargo_capacity',
				'consumables',
				'hyperdrive_rating',
				'MGLT',
				'starship_class',
			],
		};
	}

	obtenerTituloHtml(propiedad) {
		return `
            <div class="col-12 col-sm-6 pstart-1">
                <p class="fw-bold text-muted mb-1">
                    ${propiedad}
                </p>
            </div>
        `;
	}

	obtenerInfoHtml(valor) {
		return `
            <div class="col-12 col-sm-6 text-end pe-5">
                <p class="text-muted mb-2">${valor}</p>
            </div>
        `;
	}

	buscarPorPropiedad(nombrePropiedad) {
		return this.objPropiedades[nombrePropiedad];
	}
}
