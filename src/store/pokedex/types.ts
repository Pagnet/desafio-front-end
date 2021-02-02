export interface PokemonPokedex {
  name: string;
  image: string;
  id: number;
}

export interface PokedexState {
  pokemon: PokemonPokedex[];
}
