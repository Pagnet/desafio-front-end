import React from 'react';
import { Pokemons } from './features/pokemons/Pokemons';
import './App.scss';
import { Detail } from './features/detail/Detail';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
 
  return (
    <div className="App">
      <Router>
        <Route path='/detail' component={ Detail } />
        <Route exact path='/' component={ Pokemons } />
      </Router>
    </div>
  );
}

export default App;
