const BASE_URL = "http://pokeapi.co/api/v2/pokemon"
/**
 * 
 * @param {Number} limit 'La cantidad de pokemones que vamos a recuperar' 
 * @param {Number} offset  'desde que pokemon comenzar a recuperar'
 */
export const fetchPokemons = async (limit = 20, offset = 0) => {
    try {
        const res = await fetch(`${BASE_URL}/?limit=${limit}&offset=${offset}`);
        const { results } = await res.json();
        return results;
    } catch (e) {
        console.log(e.message)
    }
}

/**
 * 
 * @param {String} 'Nombre del pokemón para realizar el fetch' 
 * @returns {Object} 'Información del pokemón'
 */
export const fetchPokemon = async (pokemon) => {
    try {
        const res = await fetch(BASE_URL + "/" + pokemon);
        const data = await res.json();
        const { name, types, sprites, stats } = data;
        return {
            name,
            types,
            sprites,
            stats
        };
    } catch (e) {
        console.log(e.message);
    }
}

