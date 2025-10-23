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
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
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
