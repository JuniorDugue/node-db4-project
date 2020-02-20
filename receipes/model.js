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
 }

// shoppinglistGET
function findShoppinglist(shopping_id) {
    return db('shoppinglist')
}
// instructionsGET
function findInstruction(instruction_id) {
    return db('instructions')
}