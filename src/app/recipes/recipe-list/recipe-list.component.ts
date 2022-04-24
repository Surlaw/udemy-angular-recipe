import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Rainbow Cake',
      'Colorful',
      'https://bakerbynature.com/wp-content/uploads/2021/09/17-Stunning-birthday-cake-recipes-19q-1-of-1.jpg'
    ),
    new Recipe(
      'Brownie',
      'Chocolate',
      'https://bakerbynature.com/wp-content/uploads/2021/09/17-Stunning-birthday-cake-recipes-7-1-of-1.jpg'
    ),
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
