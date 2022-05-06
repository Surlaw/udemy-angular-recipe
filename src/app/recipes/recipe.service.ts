import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Rainbow Cake',
      'Colorful',
      'https://bakerbynature.com/wp-content/uploads/2021/09/17-Stunning-birthday-cake-recipes-19q-1-of-1.jpg',
      [new Ingredient('Apple', 1), new Ingredient('Tomato', 2)]
    ),
    new Recipe(
      'Brownie',
      'Chocolate',
      'https://bakerbynature.com/wp-content/uploads/2021/09/17-Stunning-birthday-cake-recipes-7-1-of-1.jpg',
      [new Ingredient('Bread', 3), new Ingredient('Cheese', 4)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipe(id: number) {
    return this.recipes[id];
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
