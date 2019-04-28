export class PokemonPage {
  count: number;
  prevPageUrl: string;
  nextPageUrl: string;
  pokemonList: [any];
  shouldDisplayPrevPage: boolean;
  shouldDisplayNextPage: boolean;

  constructor(data: any) {
    this.count = data.count;
    this.prevPageUrl = data.previous;
    this.nextPageUrl = data.next;
    this.pokemonList = data.results;
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
