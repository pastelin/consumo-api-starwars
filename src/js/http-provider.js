const people = 'https://swapi.dev/api/people/';

const obtenerPersonasLista = async () => {
	try {
		console.time("in");
		const resp = await fetch(people);
		console.timeEnd("in");
		if (!resp.ok) throw 'No se pudo realizar la peticion';

		const { results } = await resp.json();

		return results;
	} catch (err) {
		throw err;
	}
};

export { obtenerPersonasLista };
