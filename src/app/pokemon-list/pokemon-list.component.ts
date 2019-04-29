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
  pokemonList: [any];

  constructor(private pokemonService: PokemonService) {
    this.isShowingDetail = false;
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

  showDetailWith(url: string) {
    this.detailUrl = url;
    this.isShowingDetail = true;
    window.scrollTo(0, 0);
  }

  hideDetails() {
    this.isShowingDetail = false;
    window.scrollTo(0, 0);
  }

  setFavoriteWith(name: string) {
    let favorites: string = localStorage.getItem('favorites') !== null ? localStorage.getItem('favorites') : '';
    if (favorites.includes(name)) {
      favorites = favorites.replace(`${name},`, '');
      localStorage.setItem('favorites', favorites);
    } else {
      favorites = `${favorites}${name},`;
      localStorage.setItem('favorites', favorites);
    }
    // @ts-ignore
    this.pokemonPage.pokemonList = this.pokemonPage.pokemonList.map(pokemon => {
      if (pokemon.name === name) {
        pokemon.favIcon = pokemon.favIcon === '&#x2605;' ? '&#x2606;' : '&#x2605;';
      }
      return pokemon;
    });
  }
}
