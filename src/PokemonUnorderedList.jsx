
const PokemonUnorderedList = ({ pokemonList }) => {
  return (
    <ul>
      {
        pokemonList.map((singlePokemon) => {
          return <li key={singlePokemon.url}>{singlePokemon.name}</li>
        })
      }
    </ul>
  )
}

export default PokemonUnorderedList;
