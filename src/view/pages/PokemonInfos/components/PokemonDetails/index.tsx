import { useState } from "react";
import { Typography } from "@useblu/ocean-components";

import type { PokemonType } from "../../../../../store/search-pokemon";
import type {
  PokemonListByTypeState,
  PokemonAbilityState,
  PokemonEvolutionState,
} from "../../pokemon-infos.hook";

import PokemonInfos from "../PokemonInfos";
import PokemonList from "../PokemonList";
import PokemonEvolution from "../PokemonEvolution";

import {
  GridLayout,
  Avatar,
  InfosContainer,
  Infos,
  SectionTitle,
  PokemonTypes,
  ListContainer,
  ListItem,
  PokemonAbilities,
  ShortEffect,
  Clickable,
  PokemonEvolutionContainer,
} from "./styled-components";

interface PokemonDetailsProps {
  "data-testid": string;
  pokemon: PokemonType;
  pokemonAbilityState: PokemonAbilityState;
  pokemonListByType: PokemonListByTypeState;
  pokemonEvolutionState: PokemonEvolutionState;
  requestAbilityShortEffect: (url: string | undefined) => void;
  requestPokemonByType: (url: string | undefined) => void;
}

const PokemonDetails = ({
  "data-testid": testId,
  pokemon,
  pokemonAbilityState,
  pokemonListByType,
  pokemonEvolutionState,
  requestAbilityShortEffect,
  requestPokemonByType,
}: PokemonDetailsProps) => {
  const [selectedType, setSelectedType] = useState<string | undefined>("");
  const [selectedAbility, setSelectedAbility] = useState<string | undefined>(
    ""
  );

  const { types, abilities } = pokemon;

  function handleTypeClick(e) {
    if (selectedType === e.target.value) return clearSelectedType();
    const clickedType = types.find(({ name }) => name === e.target.value);
    requestPokemonByType(clickedType?.url);
    setSelectedType(clickedType?.name);
  }

  function clearSelectedType() {
    setSelectedType("");
  }

  function handleAbilityClick(e) {
    if (selectedAbility === e.target.value) return clearSelectedAbility();
    const clickedAbility = abilities.find(
      ({ name }) => name === e.target.value
    );
    requestAbilityShortEffect(clickedAbility?.url);
    setSelectedAbility(clickedAbility?.name);
  }

  function clearSelectedAbility() {
    setSelectedAbility("");
  }

  return (
    <GridLayout data-testid={testId}>
      <Avatar>
        <Typography variant="heading2">{pokemon.name}</Typography>
        <Typography variant="paragraph">#{pokemon.id}</Typography>
        <img src={pokemon.image} alt={pokemon.name} width={200} />
      </Avatar>

      <InfosContainer>
        <SectionTitle>Size</SectionTitle>
        <Infos>
          <PokemonInfos title="Weight:" text={pokemon.weight.toString()} />
          <PokemonInfos title="Height:" text={pokemon.height.toString()} />
        </Infos>

        <SectionTitle>Stats</SectionTitle>
        <Infos>
          <PokemonInfos title="HP:" text={pokemon.stats.hp.toString()} />
          <PokemonInfos
            title="Attack:"
            text={pokemon.stats.attack.toString()}
          />
          <PokemonInfos
            title="Defense:"
            text={pokemon.stats.defense.toString()}
          />
          <PokemonInfos title="Speed:" text={pokemon.stats.speed.toString()} />
        </Infos>
      </InfosContainer>

      <PokemonTypes>
        <SectionTitle>Types</SectionTitle>
        <ListContainer>
          {types.map(({ name }) => (
            <ListItem key={name} selected={name === selectedType}>
              <Clickable
                title={`click to load ${name} pókemon list`}
                value={name}
                onClick={handleTypeClick}
              >
                {name}
              </Clickable>
            </ListItem>
          ))}
        </ListContainer>

        {selectedType && (
          <PokemonList
            closeList={clearSelectedType}
            pokemonListState={pokemonListByType}
          />
        )}
      </PokemonTypes>

      <PokemonAbilities>
        <SectionTitle>Abilities</SectionTitle>
        <ListContainer>
          {abilities.map(({ name }) => (
            <ListItem key={name} selected={name === selectedAbility}>
              <Clickable
                title={`click to load ${name} short effect`}
                value={name}
                onClick={handleAbilityClick}
              >
                {name}
              </Clickable>
            </ListItem>
          ))}
        </ListContainer>
        {selectedAbility && (
          <>
            {pokemonAbilityState.loading && (
              <ShortEffect>Loading information</ShortEffect>
            )}
            {pokemonAbilityState.error && (
              <ShortEffect>Error loading short effect information</ShortEffect>
            )}
            {pokemonAbilityState.shortEffect && (
              <ShortEffect>{pokemonAbilityState.shortEffect}</ShortEffect>
            )}
          </>
        )}
      </PokemonAbilities>

      <PokemonEvolutionContainer>
        <SectionTitle>Evolution</SectionTitle>
        <PokemonEvolution pokemonEvolutionState={pokemonEvolutionState} />
      </PokemonEvolutionContainer>
    </GridLayout>
  );
};

export default PokemonDetails;
