export interface Pokemon {
  name: string;
  image: string;
  id: number;
}

export interface PokedexState {
  pokemon: Pokemon[];
}
