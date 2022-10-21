import React, { useContext, useEffect, useState } from 'react';
import { usePokemonsContext } from '../PokemonsProvider';
import { useNavigate } from 'react-router-dom'

const Pokemones = () => {

    const pokemones = usePokemonsContext();
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState("");
    const goToPokemon = () => {
        pokemon ? navigate(`/pokemon/${pokemon}`)
            : alert("Selecciona un pokemón para ver")
    }

    return (
        <div className='container'>
            <h2>Selecciona un pokemón</h2>
            <select onChange={({ target }) => setPokemon(target.value)}>
                <option value="" selected>Elige un pokemón</option>
                {pokemones.sort((a,b) => a.name > b.name ? 1 : -1).map((pokemon, index) => (
                    <option value={pokemon.name} key={index}>{pokemon.name}</option>
                ))}
            </select>
            <button onClick={goToPokemon}>Ver detalles</button>
        </div>
    )
}

export default Pokemones