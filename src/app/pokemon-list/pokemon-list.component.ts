import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {PokemonPage} from '../pokemon-page';
import {Router} from '@angular/router';
import {endpoints} from '../api.endpoints';
import {PokemonList} from '../pokemon-list';
import {PokemonItem} from '../pokemon-list';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  providers: [PokemonService]
})
export class PokemonListComponent implements OnInit {
  @ViewChild('searchString') searchString: string;
  pokemonPage: PokemonPage;
  pokemonList: PokemonList;
  searchResults: PokemonItem[];

  constructor(private pokemonService: PokemonService, private router: Router) {
  }

  async ngOnInit() {
    this.pokemonPage = await this.pokemonService.fetchPage(endpoints.pokemonList);
    this.pokemonList = await this.pokemonService.fetchPokemonList();
  }

  async fetchPage(url: string) {
    this.pokemonPage = await this.pokemonService.fetchPage(url);
  }

  showDetailWith(name: string) {
    this.router.navigate(['pokemon/'], {
      queryParams: {
        name,
      }
    });
  }

  showDetailWithId(pokemonId: number) {
    this.router.navigate(['pokemon/'], {
      queryParams: {
        pokemonId,
      }
    });
  }

  search() {
    // @ts-ignore
    const name = this.searchString.nativeElement.value.toLowerCase();
    if (name.length < 1) {
      this.searchResults = [];
      return;
    }
    this.searchResults = this.pokemonList.pokemons.filter(pokemon => pokemon.name.includes(name.toLowerCase()));
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
        pokemon.isFavorite = pokemon.isFavorite === 'favorite' ? '' : 'favorite';
      }
      return pokemon;
    });
  }
}
