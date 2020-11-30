
import React, { useState, useEffect } from 'react';
import Accordion from './components/Accordion';
import './App.scss';

const App = () => {
  // useState hook preserving the fetched data
  const [pokemonData, setPokemonData] = useState([]);
  // useState hook managing the loading phase of the app
  const [loading, setLoading] = useState(true);
  
  // useEffect hook managing the data fetch on app mount
  useEffect(() => {
    const fetchData = async () => {
      // the variable preserves the list of the first 9 pokemons
      let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
        .then(res => res.json());
      // the array of the fetch results is passed to the function
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])
  
  // the function maps through the list of 9 pokemons and returns detailed data about each of them
  const loadingPokemon = async data => {
    // the variable preserves the detailed data about all 9 pokemons
    let _pokemonData = await Promise.all(
      data.map(async pokemon => {
        // the variable receives the data about a pokemon specified with the pokemon.url
        let pokemonRecord = await fetch(pokemon.url)
          .then(res => res.json());
        return pokemonRecord;
      })
    );

    setPokemonData(_pokemonData);
  }

  return (
    <div>
      { loading ? <h1 className="loading">Načítavam...</h1> : (
        <>
          <div className="container">
            <h1>Gotta Catch 'Em All!</h1>
            {pokemonData.map((pokemon, i) => {
              return <Accordion key={i} props={pokemon} />
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
