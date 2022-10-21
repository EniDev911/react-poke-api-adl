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

export function PokemonProvider({ children }) {
    const [pokemons, setPokemons] = useState([]);

    const getPokemon = async (pokemon) => await fetchPokemon(pokemon);
    // useEffect
    useEffect(() => {
        fetchPokemons(110).
            then(dataPokemons => setPokemons(dataPokemons))
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