import {Component, Input, OnInit} from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Pokemon} from '../pokemon';
import {EncounterArea} from '../encounter-area';
import {SpecieInfo} from '../specie-info';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  providers: [PokemonService]
})
export class PokemonComponent implements OnInit {
  @Input() url: string;
  pokemon: Pokemon;
  encounterAreas: [EncounterArea];
  specieInfo: SpecieInfo;

  constructor(private pokemonService: PokemonService) {
  }

  async ngOnInit() {
    this.pokemon = await this.pokemonService.fetchPokemonWith(this.url);
    this.encounterAreas = await this.pokemonService.fetchEncounterAreaWith(this.pokemon.locationEncounterUrl);
    this.specieInfo = await this.pokemonService.fetchSpeciesInfoWith(this.pokemon.speciesUrl);
  }
}
