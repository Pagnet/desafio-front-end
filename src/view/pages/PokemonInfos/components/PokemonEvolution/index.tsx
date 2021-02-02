import ErrorMessage from "../../../../components/ErrorMessage";
import Loader from "../../../../components/Loader";

import type { PokemonEvolutionState } from "../../pokemon-infos.hook";

import {
  EvolutionContainer,
  PokemonNameContainer,
  PokemonName,
} from "./styled-components";

function printEvolutionNode(node) {
  if (!node) return null;
  return node.map(({ species, evolvesTo }) => (
    <PokemonNameContainer key={species}>
      <PokemonName>{species}</PokemonName>
      {evolvesTo && evolvesTo.map((a) => printEvolutionNode(a))}
    </PokemonNameContainer>
  ));
}
interface PokemonEvolutionProps {
  pokemonEvolutionState: PokemonEvolutionState;
}

const PokemonEvolution = ({ pokemonEvolutionState }: PokemonEvolutionProps) => {
  const {
    loading,
    error,
    evolutionChain,
    requestEvolutionChain,
  } = pokemonEvolutionState;

  if (loading) {
    return <Loader message="Loading pókemon evolution chain" />;
  }

  if (error) {
    return (
      <ErrorMessage
        message="Error loading pókemon evolution chain"
        buttonText="Try again"
        buttonAction={requestEvolutionChain}
      />
    );
  }

  return (
    <EvolutionContainer>
      {printEvolutionNode(evolutionChain)}
    </EvolutionContainer>
  );
};

export default PokemonEvolution;
