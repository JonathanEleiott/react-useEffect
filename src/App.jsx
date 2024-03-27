import { useState, useEffect } from 'react';
import PokemonUnorderedList from './PokemonUnorderedList';
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const POKE_API_BASE_URL = `https://pokeapi.co/api/v2/`;

  useEffect(() => {
    const getPokemon = async() => {
      const response = await fetch(`${POKE_API_BASE_URL}pokemon`);
      const jsonObject = await response.json();
      const top20Pokemon = jsonObject.results;
      setPokemonList(top20Pokemon);
    }

    getPokemon();
  }, []);

  return (
    <>
      <h1>Pokemon React</h1>
      <PokemonUnorderedList pokemonList={pokemonList} />
    </>
  )
}

export default App