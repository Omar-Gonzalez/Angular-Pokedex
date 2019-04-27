import {Injectable} from '@angular/core';
import {endpoints} from './api.endpoints';
import {PokemonPage} from './pokemon-page';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonPage: PokemonPage;

  constructor() {
  }

  async fetchPokemonList() {
    const response = await fetch(endpoints.pokemonList);
    const data = await response.json();
    this.pokemonPage = new PokemonPage(data);
    return this.pokemonPage;
  }

  async fetchPrevPage() {
    const response = await fetch(this.pokemonPage.prevPageUrl);
    const data = await response.json();
    this.pokemonPage = new PokemonPage(data);
    return this.pokemonPage;
  }

  async fetchNextPage() {
    const response = await fetch(this.pokemonPage.nextPageUrl);
    const data = await response.json();
    this.pokemonPage = new PokemonPage(data);
    return this.pokemonPage;
  }

  shouldDisplayPrevPage(): boolean {
    return false;
  }
}
