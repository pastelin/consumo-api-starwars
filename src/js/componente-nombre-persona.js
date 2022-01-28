import { obtenerPersonasLista } from './http-provider';
import { PersonasLista } from '../classes/personas-lista.class';
import { initOpcionesPersona } from './componente-opcion-persona';

// Referencias al HTML
const btnNombres = document.querySelector('#btnNombres');
const btnNombresDropdown = document.querySelector('#btnNombresDropdown');

let personasLista;
let datosPersona;

const crearBtnNombresHtml = (nombre) => {
	const html = `
        <button type="button" class="btn btn-lg btn-26a0ff">${nombre}</button>
    `;

	const dropdownHtml = `
        <li><a class="dropdown-item">${nombre}</a></li>
    `;

	const divBtn = document.createElement('div');
	const divBtnDropdown = document.createElement('div');

	divBtn.innerHTML = html;
	divBtnDropdown.innerHTML = dropdownHtml;

	btnNombres.append(divBtn.firstElementChild);
	btnNombresDropdown.append(divBtnDropdown.firstElementChild);
};

const dibujarBtnNombres = async () => {
	const nombres = personasLista.obtenerListaNombres();
	nombres.map(crearBtnNombresHtml);
};

const nuevaInstanciaPeopleList = async () => {
	personasLista = new PersonasLista(await obtenerPersonasLista());
};

const eventos = () => {
	btnNombres.addEventListener('click', (event) => {
		const filtro = event.target.tagName;
		const activoIzquierdo = document.querySelector('.activo-izquierdo');

		if (filtro === 'BUTTON') {
			const personaSeleccionada = event.target.textContent;

			if (activoIzquierdo && activoIzquierdo != null) {
				activoIzquierdo.classList.remove('activo-izquierdo');
			}

			event.target.classList.add('activo-izquierdo');
			datosPersona = personasLista.buscarPorNombre(personaSeleccionada);

			initOpcionesPersona(datosPersona);
		}
	});
};

export const init = async () => {
	console.time('23');
	
	await nuevaInstanciaPeopleList();
	
	dibujarBtnNombres();
	
	eventos();

	initOpcionesPersona({name: 'Por implementar'});
	
	console.timeEnd('23');
};
