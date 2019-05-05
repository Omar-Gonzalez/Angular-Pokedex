import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Pokemon} from '../pokemon';
import {EncounterArea} from '../encounter-area';
import {SpecieInfo} from '../specie-info';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  providers: [PokemonService]
})
export class PokemonComponent implements OnInit {
  pokemon: Pokemon;
  encounterAreas: [EncounterArea];
  specieInfo: SpecieInfo;
  pokemonWasFound: boolean;

  constructor(private pokemonService: PokemonService, private activatedRoute: ActivatedRoute) {
    this.pokemonWasFound = false;
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.name !== undefined) {
        this.loadPokemonWith(params.name, null);
      }
      if (params.pokemonId !== undefined) {
        this.loadPokemonWith(null, params.pokemonId);
      }
    });
  }

  async ngOnInit() {
  }

  async loadPokemonWith(name: string, pokemonId: number) {
    let pokemon;
    if (name) {
      pokemon = await this.pokemonService.fetchPokemonWithAny(name);
    }
    if (pokemonId) {
      pokemon = await this.pokemonService.fetchPokemonWithAny(pokemonId);
    }
    if (pokemon !== 404) {
      this.pokemonWasFound = true;
    }
    // @ts-ignore
    this.pokemon = pokemon;
    this.encounterAreas = await this.pokemonService.fetchEncounterAreaWith(this.pokemon.locationEncounterUrl);
    this.specieInfo = await this.pokemonService.fetchSpeciesInfoWith(this.pokemon.speciesUrl);
  }
}
