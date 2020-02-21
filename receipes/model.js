const db = require('./db.config');
/*
getRecipes(): should return a list of all recipes in the database.
getShoppingList(recipe_id): should return a list of all ingredients and quantities for a given recipe
getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe
 */
module.exports = { 
    findRecipe, //get all of the receipes
    findShoppinglist, //returns list of all ingredients / quantities
    findInstruction, //returns list of instructions 
    findIngredients,
    findIngredientsId,
}

// recipesGET
function findRecipe(){
    return db('Recipes')
    .select('name')
}

// 
function findIngredientsId(id){ 
    return db('Ingredients')
    .where({id})
    .first()
}

function findIngredients(){ //to get everything
    return db('Ingredients')
}

function findIngredients(){ 
    return db('Ingredients')
    .select('Receipe_Book.ingredient_id', 'Receipe_Book.quantity')
    // .join('Receipe_Book', 'Receipe_Book.quantity', 'Ingredients.ingredient')
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

// for ingredients
// function findIngredients(){
//     return db('ingredient')
//     .select('Ingredients')
//     .where({id})
// }