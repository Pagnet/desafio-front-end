import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getPokemonsAsync,
  selectPokemons,
} from './pokemonsSlice';


export function Pokemons() {
  const pokemons = useSelector(selectPokemons);
  const dispatch = useDispatch();

  const [pokemonsData, setPokemonsData] = useState();

  useEffect(() => {
    !pokemonsData && dispatch(getPokemonsAsync());
  });

  useEffect(()=>{
    setPokemonsData(pokemons.state.pokemons.results)
  }, [pokemons])

  return (
    <div>
      {pokemonsData && pokemonsData.map((value, index) => {
        return (
          <div key={index}>
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
