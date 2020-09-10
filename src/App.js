import React from 'react';
import { Pokemons } from './features/pokemons/Pokemons';
import{ Filter } from './features/filter/Filter';
import './App.scss';
import { Detail } from './features/detail/Detail';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Filter />
      <Router>
        <Route path='/detail' component={ Detail } />
        <Route exact path='/' component={ Pokemons } />
      </Router>
    </div>
  );
}

export default App;
