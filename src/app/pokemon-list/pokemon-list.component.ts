import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {PokemonPage} from '../pokemon-page';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  providers: []
})
export class PokemonListComponent implements OnInit {
  pokemonPage: PokemonPage;

  constructor(private pokemonService: PokemonService) {
  }

  async ngOnInit() {
    this.pokemonPage = await this.pokemonService.fetchPokemonList();
  }

  async prevPage() {
    this.pokemonPage = await this.pokemonService.fetchPrevPage();
  }

  async nextPage() {
    this.pokemonPage = await this.pokemonService.fetchNextPage();
  }
}
