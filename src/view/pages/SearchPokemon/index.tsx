import { Typography, Grid } from "@useblu/ocean-components";

import { Container, Content } from "./styled-components";
import useSearchPokemonHook from "./search-pokemon.hook";
import SearchForm from "./components/SearchForm";
import ErrorMessage from "../../components/ErrorMessage";
import Loader from "../../components/Loader";
import PokemonCard from "../../components/PokemonCard";

const SearchPage = () => {
  const {
    searchInputValue,
    isLoading,
    hasError,
    pokemonFound,
    handleSearchInputChange,
    handleClearButtonPress,
    handleGoButtonPress,
    handleSaveButtonPress,
    handleSeeMoreButtonPress,
  } = useSearchPokemonHook();

  return (
    <Container>
      <Grid.Row>
        <Typography variant="heading1">Search Pokémon</Typography>
      </Grid.Row>

      <SearchForm
        searchInputValue={searchInputValue}
        handleSearchInputChange={handleSearchInputChange}
        handleClearButtonPress={handleClearButtonPress}
        handleGoButtonPress={handleGoButtonPress}
      />

      <Content>
        {isLoading && <Loader message="Searching pokémon..." />}
        {hasError && (
          <ErrorMessage
            message="Something went wrong"
            buttonText="Try again"
            buttonAction={handleGoButtonPress}
          />
        )}
        {pokemonFound && (
          <PokemonCard
            pokemon={pokemonFound}
            primaryButtonText="Save on Pokédex"
            primaryButtonAction={handleSaveButtonPress}
            secondaryButtonText="See more"
            secondaryButtonAction={() => {
              handleSeeMoreButtonPress(pokemonFound.name);
            }}
          />
        )}
      </Content>
    </Container>
  );
};

export default SearchPage;
