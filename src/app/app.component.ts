import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;

  constructor() {
    //this.pokemonList = []; 
    // -> Ne pas déclaré une propriete de cette facon !
    // -> Une bonne pratique est de garder la logique du composant en dehors du constructor !
  }

  ngOnInit(): void {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(`On a cliqué sur le pokémon ${pokemon.name}`);
  }
}
 