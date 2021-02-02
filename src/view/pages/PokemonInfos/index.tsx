import { useLocation } from "react-router-dom";
import { Typography, Grid } from "@useblu/ocean-components";

import { getLastSegment } from "../../helpers/url";
import ErrorMessage from "../../components/ErrorMessage";
import Loader from "../../components/Loader";
import PokemonDetails from "./components/PokemonDetails";

import { Container, Content } from "./styled-components";
import usePokemonInfosHook from "./pokemon-infos.hook";

const PokemonInfosPage = () => {
  const { pathname } = useLocation();

  const name = getLastSegment(pathname);
  const {
    pokemon,
    isLoading,
    hasError,
    pokemonListByType,
    pokemonAbilityState,
    pokemonEvolutionState,
    handleTryAgainButton,
    requestPokemonByType,
    requestAbilityShortEffect,
  } = usePokemonInfosHook(name);

  return (
    <Container>
      <Grid.Row>
        <Typography variant="heading1">Pokémon informations</Typography>
      </Grid.Row>

      <Content>
        {isLoading && <Loader message={`Loading information about ${name}`} />}
        {hasError && (
          <ErrorMessage
            message={`Cannot find informations about ${name}`}
            buttonText="Try again"
            buttonAction={handleTryAgainButton}
          />
        )}

        {pokemon && (
          <PokemonDetails
            data-testid={"pokemonInfos.details"}
            pokemon={pokemon}
            requestAbilityShortEffect={requestAbilityShortEffect}
            pokemonAbilityState={pokemonAbilityState}
            requestPokemonByType={requestPokemonByType}
            pokemonListByType={pokemonListByType}
            pokemonEvolutionState={pokemonEvolutionState}
          />
        )}
      </Content>
    </Container>
  );
};

export default PokemonInfosPage;
