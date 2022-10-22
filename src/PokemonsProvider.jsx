import React, { createContext, useState, useEffect, useContext } from "react";
import { fetchPokemon, fetchPokemons } from './api';

const pokemonsContext = createContext();
const pokemonContext = createContext();

export function usePokemonsContext() {
    return useContext(pokemonsContext);
}

export function usePokemonContext() {
    return useContext(pokemonContext);
}

function PokemonProvider({ children }) {
    const [pokemons, setPokemons] = useState([]);

    const getPokemon = async (pokemon) => {
        const data = await fetchPokemon(pokemon);
        const { name, types, sprites, stats } = data;
        return {
            name,
            types,
            sprites,
            stats
        }
    }
    // useEffect
    useEffect(() => {
        fetchPokemons(150)
            .then(dataPokemons => setPokemons(dataPokemons))
            .catch(e => console.log(e))
    }, [])

    return (
        <pokemonsContext.Provider value={pokemons}>
            <pokemonContext.Provider value={getPokemon}>
                {children}
            </pokemonContext.Provider>
        </pokemonsContext.Provider>
    )
};
export default PokemonProvider;