export class PokemonPage {
  count: number;
  prevPageUrl: string;
  nextPageUrl: string;
  pokemonList: [any];
  shouldDisplayPrevPage: boolean;
  shouldDisplayNextPage: boolean;

  constructor(data: any) {
    try {
      this.count = data.count;
      this.prevPageUrl = data.previous;
      this.nextPageUrl = data.next;
      this.pokemonList = data.results.map(pokemon => pokemon);
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
    } catch (e) {
      alert('Error fetching a pokemon resource page');
    }
  }
}
