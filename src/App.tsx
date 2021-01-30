import React from "react";
import { Switch, Route } from "react-router-dom";

import "@useblu/ocean-components/dist/ocean-ds.min.css";
import { Grid } from "@useblu/ocean-components/";

import NavigationBar from "./view/components/NavigationBar";
import { ROUTES } from "./constants";
import SearchPokemonPage from "./view/pages/SearchPokemon";
import PokedexPage from "./view/pages/Pokedex";
import PokemonInfosPage from "./view/pages/PokemonInfos";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <NavigationBar />
      <Grid.Container>
        <Grid.Row>
          <Grid.Col>
            <Switch>
              <Route exact path={ROUTES.POKEDEX}>
                <PokedexPage />
              </Route>

              <Route exact path={ROUTES.SEARCH}>
                <SearchPokemonPage />
              </Route>

              <Route path={ROUTES.INFOS}>
                <PokemonInfosPage />
              </Route>
            </Switch>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </div>
  );
}

export default App;
