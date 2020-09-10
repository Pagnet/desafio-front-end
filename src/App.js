import React from 'react';
import { Pokemons } from './features/pokemons/Pokemons';
import{ Filter } from './features/filter/Filter';
import './App.css';

function App() {
  return (
    <div className="App">
        <Filter />
        <Pokemons />
    </div>
  );
}

export default App;
