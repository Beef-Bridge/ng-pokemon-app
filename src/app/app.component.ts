import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Welcome to {{ pokemonList[0] }}!</h1>`
})
export class AppComponent implements OnInit {
  pokemonList = ['Bulbizarre', 'Salamèche', 'Carapuce '];

  constructor() {
    //this.pokemonList = []; 
    // -> Ne pas déclaré une propriete de cette facon !
    // -> Une bonne pratique est de garder la logique du composant en dehors du constructor !
  }

  ngOnInit(): void {
    console.table(this.pokemonList);
    this.selectPokemon('Bulbizarre');
  }

  selectPokemon(pokemonName: string) {
    console.log(`On a cliqué sur le pokémon ${pokemonName}`);
  }
}
 