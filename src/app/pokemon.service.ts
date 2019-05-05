import {Injectable} from '@angular/core';
import {PokemonPage} from './pokemon-page';
import {Pokemon} from './pokemon';
import {EncounterArea} from './encounter-area';
import {SpecieInfo} from './specie-info';
import {PokemonList} from './pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor() {
  }

  async fetchPage(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    const pokePage = new PokemonPage(data);
    return pokePage;
  }

  async fetchPokemonList() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964');
    const data = await response.json();
    return new PokemonList(data);
  }

  async fetchPokemonWith(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    return new Pokemon(data);
  }

  async fetchEncounterAreaWith(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    return data.map(area => new EncounterArea(area));
  }

  async fetchSpeciesInfoWith(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    return new SpecieInfo(data);
  }

  async fetchPokemonWithAny(value: any) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}/`);
    if (response.status === 404) {
      return 404;
    }
    const data = await response.json();
    return new Pokemon(data);
  }

}
