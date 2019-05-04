import {Component, Input, OnInit} from '@angular/core';
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

  constructor(private pokemonService: PokemonService, private activatedRoute: ActivatedRoute) {
  }

  async ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.loadPokemonWithName(param.name);
    });
  }

  async loadPokemonWithName(name: string) {
    this.pokemon = await this.pokemonService.fetchPokemonWithName(name);
    this.encounterAreas = await this.pokemonService.fetchEncounterAreaWith(this.pokemon.locationEncounterUrl);
    this.specieInfo = await this.pokemonService.fetchSpeciesInfoWith(this.pokemon.speciesUrl);
  }
}
