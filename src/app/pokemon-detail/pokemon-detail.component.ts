import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/mergeMap';

import { Pokemon, PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit, OnDestroy {
  pokemon;

  types = '';

  constructor(private pokemonService: PokemonService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .mergeMap(({ name }) => this.pokemonService.getPokemon(name))
      .subscribe((pokemon: Pokemon) => {
        this.pokemon = pokemon;

        this.types = this.pokemon.types.map(({ type }) => type.name).join(', ');
      });
  }

  ngOnDestroy() {
    console.log('component destroyed');
  }
}
