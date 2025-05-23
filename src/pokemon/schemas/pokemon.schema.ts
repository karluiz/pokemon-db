export type PokemonDocument = Pokemon & Document;

export class Pokemon {
  pokedexNumber: number;
  name: string;
  type1: string;
  type2: string;
  total: number;
  hp: number;
  attack: number;
  defense: number;
  spAtk: number;
  spDef: number;
  speed: number;
  generation: number;
  legendary: boolean;
}
