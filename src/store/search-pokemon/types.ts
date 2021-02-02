export interface PokemonType {
  name: string;
  id: number;
  image: string;
  weight: number;
  height: number;
  types: PokemonBasicInfo[];
  abilities: PokemonBasicInfo[];
  stats: PokemonStat;
  species: PokemonBasicInfo;
}

export interface PokemonBasicInfo {
  name: string;
  url: string;
}

export interface PokemonStat {
  [key: string]: number;
}

export interface SearchPokemonState {
  loading: boolean;
  error: string | null;
  pokemonFound: PokemonType | null;
}
