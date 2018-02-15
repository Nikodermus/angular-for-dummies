import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  current_detail: Recipe;
  constructor() { }

  ngOnInit() {
  }

  showDetails(param) {
    this.current_detail = param;
    console.log('recipe', this.current_detail);
  }

}
