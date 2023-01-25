import { IResult } from "../../pages/pokemon/Pokemon.interface";

export interface IcardLIst {
  results?: IResult[];
}
export interface IdreamWorld {
  front_default?: string;
  front_shiny?: string;
}
export interface IOther {
  dream_world: IdreamWorld;
  home: IdreamWorld;
}
export interface Isprites {
  other: IOther;
}

interface IName {
  name: string;
}

interface IAbility {
  ability: IName;
}

interface IMoves {
  move: IName;
}

export interface Idata {
  id: number;
  sprites: Isprites;
  name: string;
  abilities: IAbility[];
  weight: number;
  moves: IMoves[];
}
