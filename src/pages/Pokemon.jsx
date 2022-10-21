import React, { useContext, useEffect, useState } from 'react'
import CardPokemon from '../components/CardPokemon';
import Loader from '../components/Loading';
import { useParams } from 'react-router-dom';
import { usePokemonContext } from '../PokemonsProvider';


const Pokemon = () => {

    const { name } = useParams();
    const [pokemon, setPokemon] = useState();
    const getPokemon = usePokemonContext();

    useEffect(() => {
        getPokemon(name)
            .then(data => setPokemon(data))
            .catch(e => console.log(e.message))
    }, [])

    return (
        <div>
            {
                !pokemon ? <Loader />
                    : <CardPokemon pokemon={pokemon} />
            }
        </div>
    )
}
export default Pokemon