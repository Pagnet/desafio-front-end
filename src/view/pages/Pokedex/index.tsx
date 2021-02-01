import { Typography, Grid } from "@useblu/ocean-components";

import ErrorMessage from "../../components/ErrorMessage";
import PokemonCard from "../../components/PokemonCard";

import { Container, Content } from "./styled-components";
import usePokedexHook from "./pokedex.hook";

const PokedexPage = () => {
  const {
    pokemonList,
    hasPokemon,
    handleNavigationButtonPress,
    handleRemoveButtonPress,
    handleSeeMoreButtonPress,
  } = usePokedexHook();

  return (
    <Container>
      <Grid.Row>
        <Typography variant="heading1">Pokédex</Typography>
      </Grid.Row>

      <Grid.Row>
        <Typography variant="paragraph">
          Here, you can know more informations about Pokémon you saved on
          Pokédex
        </Typography>
      </Grid.Row>

      <Content>
        {!hasPokemon && (
          <ErrorMessage
            message="Oh no! You don't have Pokémon on your Pokédex."
            buttonText="Search Pokémon"
            buttonAction={handleNavigationButtonPress}
          />
        )}

        {hasPokemon &&
          pokemonList.map((poke) => (
            <PokemonCard
              key={poke.id}
              pokemon={poke}
              primaryButtonText="See more"
              primaryButtonAction={() => {
                handleSeeMoreButtonPress(poke.name);
              }}
              secondaryButtonText="Remove"
              secondaryButtonAction={() => {
                handleRemoveButtonPress(poke.id);
              }}
            />
          ))}
      </Content>
    </Container>
  );
};

export default PokedexPage;
