const db = require('./db.config');
/*
getRecipes(): should return a list of all recipes in the database.
getShoppingList(recipe_id): should return a list of all ingredients and quantities for a given recipe
getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe
 */
module.exports = { 
    findRecipe, //get all of the receipes
    findShoppinglist, //returns list of all ingredients / quantities
    findInstruction //returns list of instructions 
}

// recipesGET
function findRecipe() {
    return db('recipes')
    .join('Recipes', 'Recipe_Book.recipe_id', 'Recipes.id')
    .join('Ingredients', 'Recipe_Book.ingredient_id','Ingredients.id')
    .select('name', 'quantity', 'ingredient', 'instructions');
 }

// shoppinglistGET
function findShoppinglist(shopping_id) {
    return db('shoppinglist')
    .join('Ingredients', 'Recipe_Book.ingredient_id', 'Ingredients.id')
    .select('recipe_id','quantity', 'ingredient')
    .where('recipe_id',recipe_id)
}
// instructionsGET
function findInstruction(instruction_id) {
    return db('instructions')
    .select('instructions')
    .where({id})
}