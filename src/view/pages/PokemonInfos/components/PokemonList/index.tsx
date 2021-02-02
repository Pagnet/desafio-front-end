import ErrorMessage from "../../../../components/ErrorMessage";
import Loader from "../../../../components/Loader";

import type { PokemonListByTypeState } from "../../pokemon-infos.hook";

import {
  ListContainer,
  CloseButton,
  List,
  ListItem,
} from "./styled-components";

interface PokemonListProps {
  closeList: () => void;
  pokemonListState: PokemonListByTypeState;
}

const PokemonList = ({ closeList, pokemonListState }: PokemonListProps) => {
  const { loading, error, pokemonList } = pokemonListState;

  if (loading) {
    return <Loader message="Loading pókemon list" />;
  }

  if (error) {
    return <ErrorMessage message="Error loading pókemon list" />;
  }

  return (
    <ListContainer>
      <CloseButton onClick={closeList}>Close List</CloseButton>

      <List>
        {pokemonList.map(({ pokemon }) => {
          return <ListItem key={pokemon.name}>{pokemon.name}</ListItem>;
        })}
      </List>
    </ListContainer>
  );
};

export default PokemonList;
