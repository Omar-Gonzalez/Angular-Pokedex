export class PokemonPage {
  count: number;
  prevPageUrl: string;
  nextPageUrl: string;
  pokemonList: any[];
  shouldDisplayPrevPage: boolean;
  shouldDisplayNextPage: boolean;

  constructor(data: any) {
    const favorites: string[] = localStorage.getItem('favorites') !== null ? localStorage.getItem('favorites').split(',') : [];
    this.count = data.count;
    this.prevPageUrl = data.previous;
    this.nextPageUrl = data.next;
    this.pokemonList = data.results.map(pokemon => {
      const isFavorite: string = favorites.includes(pokemon.name) ? 'favorite' : '';
      return {
        name: pokemon.name,
        url: pokemon.url,
        isFavorite
      };
    });
    if (data.previous) {
      this.shouldDisplayPrevPage = true;
    } else {
      this.shouldDisplayPrevPage = false;
    }
    if (data.next) {
      this.shouldDisplayNextPage = true;
    } else {
      this.shouldDisplayNextPage = false;
    }
  }
}
