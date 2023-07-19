import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.mode";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("Spareribs", 
        "Juicy MEATY Ribs, ohh soo finger licking good!", 
        "https://bbq-junkie.nl/wp-content/uploads/2022/07/sweet-sour-spareribs-uitgelicht.jpg",
        [
            new Ingredient('Meat', 1)
        ]),
        new Recipe("Burger", 
        "The best burger you ever had.", 
        "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
        [
            new Ingredient('Meat', 1),
            new Ingredient('Tomato', 1),
            new Ingredient('pickles', 4),
            new Ingredient('Bread', 2)
        ]),
        new Recipe("Salad", 
        "Simple Salad with tomato and dressing", 
        "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps6498_MRR133247D07_30_5b_WEB-21.jpg",
        [
            new Ingredient('tomato', 1),
            new Ingredient('dressing', 1)
        ]),
      ];

    constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }
}