import { initInfoPersona } from './componente-informacion-persona';

// Referencia al HTML
const btnOpcionesSuperior = document.querySelector('#btnOpcionesPersonajeSuperior');
const btnOpcionesIzquierdo = document.querySelector('#btnOpcionesPersonajeIzquierdo');

const opciones = ['Personal', 'Homeworld', 'Species', 'Vehicles', 'Starships'];

const crearBtnOpcionesPersona = (opcion) => {
	const superiorHtml = `
        <li class="nav-item"><a class="nav-link">${opcion}</a></li>
    `;

	const izquierdaHtml = `
        <a class="nav-link" href="#">${opcion}</a>
    `;

	const divSuperior = document.createElement('div');
	const divIzquierdo = document.createElement('div');

	divSuperior.innerHTML = superiorHtml;
	divIzquierdo.innerHTML = izquierdaHtml;

	// Usa firstElementChild para que no integre el elemento <div>, ya que solo necesitamos el elemento <li> o <a>
	btnOpcionesSuperior.append(divSuperior.firstElementChild);
	btnOpcionesIzquierdo.append(divIzquierdo.firstElementChild);
};

const dibujarOpcionePersona = () => {
	opciones.forEach(crearBtnOpcionesPersona);
};

export const initOpcionesPersona = (datosPersona) => {
	// Elimina contenido previo para actualizar informacion
	btnOpcionesSuperior.innerHTML = '';
	btnOpcionesIzquierdo.innerHTML = '';

	dibujarOpcionePersona();

	initInfoPersona(datosPersona);
};
