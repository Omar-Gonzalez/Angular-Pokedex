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
  isShowingDetail: boolean;
  detailUrl: string;

  constructor(private pokemonService: PokemonService) {
    this.isShowingDetail = false;
  }

  showDetailWith(url: string) {
    this.detailUrl = url;
    this.isShowingDetail = true;
    window.scrollTo(0, 0);
  }

  hideDetails() {
    this.isShowingDetail = false;
    window.scrollTo(0, 0);
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
