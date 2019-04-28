import {Component, OnInit, Input} from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Pokemon} from '../pokemon';

@Component({
  selector: 'app-pokemon-snippet',
  templateUrl: './pokemon-snippet.component.html',
  styleUrls: ['./pokemon-snippet.component.scss'],
  providers: [PokemonService]
})
export class PokemonSnippetComponent implements OnInit {
  @Input() url: string;
  pokemon: Pokemon;

  constructor(private pokemonService: PokemonService) {
  }

  async ngOnInit() {
    this.pokemon = await this.pokemonService.fetchPokemonWith(this.url);
  }

}
