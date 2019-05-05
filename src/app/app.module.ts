import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import {PokemonComponent} from './pokemon/pokemon.component';
import {PokemonSnippetComponent} from './pokemon-snippet/pokemon-snippet.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: '', component: PokemonListComponent},
  {path: 'pokemon', component: PokemonComponent, pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PokemonListComponent,
    PokemonComponent,
    PokemonSnippetComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
