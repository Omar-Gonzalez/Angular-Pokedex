export interface PokemonItem {
  name: string;
  url: string;
  pokemonId: number;
}

export class PokemonList {
  pokemons: PokemonItem[];

  constructor(data) {
    this.pokemons = data.results.map(r => {
      const pokemon = {} as PokemonItem;
      pokemon.name = r.name.replace('-', ' ');
      pokemon.url = r.url;
      const splitUrl = r.url.split('/');
      // tslint:disable-next-line:radix
      pokemon.pokemonId = parseInt(splitUrl[6]);
      return pokemon;
    });
  }
}
