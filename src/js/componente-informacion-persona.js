// Referencia al html
const contenedorPersona = document.querySelector('#contenedorPersonaje');
let infoPersona;

const crearContenedorPersona = (nombre) => {
	const tituloHtml = `
        <h3 class="mb-3 my-sm-3 ps-sm-4 text-muted text-center text-sm-start">
            ${nombre}
        </h3>
    `;

	const rowInfoHtml = `
        <div class="row" id="informacionPersonaje">
        </div>
    `;

	const divTitulo = document.createElement('div');
	const divRow = document.createElement('div');

	divTitulo.innerHTML = tituloHtml;
	divRow.innerHTML = rowInfoHtml;

	contenedorPersona.append(divTitulo.firstElementChild);
	contenedorPersona.append(divRow.firstElementChild);

	infoPersona = document.querySelector('#informacionPersonaje');
};

const crearInfoPersona = (propiedad, valor) => {
	const tituloHtml = `
        <div class="col-12 col-sm-6 pstart-1">
            <p class="fw-bold text-muted mb-1">
                ${propiedad}
            </p>
        </div>
    `;

	const infoHtml = `
    <div class="col-12 col-sm-6 text-end pe-5">
        <p class="text-muted">${valor}</p>
    </div>
    `;

	const divTitulo = document.createElement('div');
	const divInfo = document.createElement('div');

	divTitulo.innerHTML = tituloHtml;
	divInfo.innerHTML = infoHtml;

	infoPersona.append(divTitulo.firstElementChild);
	infoPersona.append(divInfo.firstElementChild);
};

const dibujarInfoPersona = (datosPersona) => {
	infoPersona.innerHTML = '';
    
    // estos valores coinciden con las propiedades que tiene el objeto datosPersona
    const propiedades = [
		'name',
		'height',
		'mass',
		'hair_color',
		'skin_color',
		'eye_color',
		'birth_year',
		'gender',
	];

    // Recorre la lista para poblar los datos que se requieren, llamando al metodo crearInfoPersona que recibe dos parametros
    // el primero el nombre del atributo y el segundo su valor
	propiedades.forEach((propiedad) => crearInfoPersona(propiedad, datosPersona[propiedad]));
};

export const initInfoPersona = (datosPersona) => {
	// Elimina contenido previo para actualizar informacion
	contenedorPersona.innerHTML = '';
    

    crearContenedorPersona(datosPersona.name);

	dibujarInfoPersona(datosPersona);
};
