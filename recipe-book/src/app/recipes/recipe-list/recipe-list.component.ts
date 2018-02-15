import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() current_recipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Chicken',
      'This is certainly delicious', 'https://scontent.fbog3-1.fna.fbcdn.net/v/t1.0-9/12122589_10208153929711041_4559985554017374188_n.jpg?oh=343cbc7e8c2da9acd93a78269e20643e&oe=5B05A30D'
    ),
    new Recipe('burger',
      'Yummy', 'https://foodloversonline.files.wordpress.com/2014/08/north-indian-dishes.jpg'
    )
  ];


  constructor() { }

  ngOnInit() {
  }

  sendDetails(param) {
    this.current_recipe.emit(param);
  }

}
