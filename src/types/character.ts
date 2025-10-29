import { ALIEN_SPECIES, ALIVE_STATUS, DEAD_STATUS, FEMALE_GENDER, GENDERLESS_GENDER, HUMAN_SPECIES, MALE_GENDER, UNKNOWN_GENDER, UNKNOWN_SPECIES, UNKNOWN_STATUS } from "../constants";

export type StatusType = typeof ALIVE_STATUS | typeof DEAD_STATUS | typeof UNKNOWN_STATUS;
export type SpeciesType = typeof HUMAN_SPECIES | typeof ALIEN_SPECIES | typeof UNKNOWN_SPECIES;
export type GenderType = typeof MALE_GENDER | typeof FEMALE_GENDER | typeof GENDERLESS_GENDER | typeof UNKNOWN_GENDER;

export type CharacterLocation = {
  name: string;
  url: string;
};

export type CharacterOrigin = {
  name: string;
  url: string;
};

export type Character = {
  id: number;
  name: string;
  status: StatusType;
  species: SpeciesType;
  type: string;
  gender:GenderType;
  origin: CharacterOrigin;
  location: CharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type PageInfo = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type CharactersResponse = {
  info: PageInfo;
  results: Character[];
};
