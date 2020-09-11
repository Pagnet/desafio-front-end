import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Pokemon.scss';
import {
  getPokemonsAsync,
  selectPokemons,
} from './pokemonsSlice';


export function Pokemons() {
  const pokemons = useSelector(selectPokemons);

  const [pokemonsData, setPokemonsData] = useState();

  useEffect(() => {
    setPokemonsData(pokemons.state.pokemons.results);
  }, [pokemons])

  return (
    <div className="pokemons-container">
      {<h2>digite o nome do seu pokemon</h2>}
      {pokemonsData && pokemonsData.map((value, index) => {
        return (
          <div className="box" key={index}>
            <Link to={'/detail/' + index} className="nav-link">
              <h1>
                {value.name}
              </h1>
            </Link>
          </div>
        )
      })}
    </div>
  );
}
