import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {PokemonPage} from '../pokemon-page';
import {Router} from '@angular/router';
import {endpoints} from '../api.endpoints';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  providers: [PokemonService]
})
export class PokemonListComponent implements OnInit {
  @ViewChild('searchString') searchString: ElementRef;
  pokemonPage: PokemonPage;
  pokemonList: any[];
  alert: any;

  constructor(private pokemonService: PokemonService, private router: Router) {
    this.alert = {
      visible: false,
      msg: ''
    };
  }

  async ngOnInit() {
    this.pokemonPage = await this.pokemonService.fetchPage(endpoints.pokemonList);
  }

  async fetchPage(url: string) {
    this.pokemonPage = await this.pokemonService.fetchPage(url);
  }

  showDetailWith(name: string) {
    this.router.navigate(['pokemon', name]);
  }

  hideAlert() {
    this.alert.visible = false;
    this.searchString.nativeElement.value = '';
  }

  handleIptKeyup(e) {
    if (e.key === 'Enter') {
      this.searchWithName();
    }
  }

  async searchWithName() {
    const name = this.searchString.nativeElement.value;
    if (name.length < 1) {
      this.alert.visible = true;
      this.alert.msg = 'Please type a pokemon name before searching';
      return;
    }
    const wasFound = await this.pokemonService.fetchPokemonWithName(name);
    if (wasFound === 404) {
      this.alert.visible = true;
      this.alert.msg = `I couldn't find any pokemon with given name ${name}, please try again with another name`;
      return;
    }
    this.router.navigate(['pokemon', name]);
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
