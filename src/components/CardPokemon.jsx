
const CardPokemon = ({ pokemon }) => {

  const sprite = pokemon.sprites.other.dream_world.front_default;

  console.log(pokemon)
  return (
    <div className='card'>
      <img src={sprite} alt={pokemon.name} />
      <div className="card-body">
        <h3 className="card-title">{pokemon.name}</h3>
        <ul className="card-list">
          {
            pokemon.stats.map(item => (
              <li key={item.stat.name}>{item.stat.name}: {item.base_stat}</li>
            ))
          }
        </ul>
        <div>
          {
            pokemon.types.map((item, index) => (
              <p key={index} className="card-text">{item.type.name}</p>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default CardPokemon