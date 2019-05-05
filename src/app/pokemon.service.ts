import {Injectable} from '@angular/core';
import {PokemonPage} from './pokemon-page';
import {Pokemon} from './pokemon';
import {EncounterArea} from './encounter-area';
import {SpecieInfo} from './specie-info';

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

  async fetchPokemonWithName(name: string) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    if (response.status === 404) {
      return 404;
    }
    const data = await response.json();
    return new Pokemon(data);
  }
}
