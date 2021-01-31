export interface PokemonType {
  name: string;
  id: number;
  image: string;
  weight: number;
  height: number;
  types: PokemonBasicInfo[];
  abilities: PokemonBasicInfo[];
  stats: PokemonStat[];
  species: PokemonBasicInfo;
}

export interface PokemonBasicInfo {
  name: string;
  url: string;
}

export interface PokemonStat {
  name: string;
  baseStat: number;
}

export interface SearchPokemonState {
  loading: boolean;
  error: string | null;
  pokemonFound: PokemonType | null;
}
