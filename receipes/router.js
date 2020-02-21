const express = require('express');
const data = require('./model');
const router = express.Router();

// Returns a list of all recipes in the database /recipe/ 
router.get('/', (req, res) => {
    data.findRecipe()
        .then(recipes => {
            res.status(200).json({recipes})
        })
        .catch(err => {
            res.status(500).json({error: 'Could not get the list of recipes'})
        })
})

router.get('/ingredients', (req, res) => {
    data.findIngredients()
    .then(ingredients => {
        res.status(200).json({ingredients})
    })
    .catch(err => {
        res.status(500).json({error: 'could not get the list'})
    })
})

// ingredients table
router.get('/:id/ingredients', (req, res) => {
    const id = req.params.id;

    data.findIngredientsId(id)
    .then(ingredients => {
        res.status(200).json({ingredients})
    }) 
    .catch(err => {
        res.status(500).json({error: 'no ingredients could be found'})
    })
})

  //Returns a list of the quantity and ingredients of a recipe /recipe/recipeIngredients/id
//   router.get('/ingredients/:id', (req, res) => {
//     const id = req.params.id;
//     data.findShoppinglist(id)
//         .then(shoppingList => {
//             if(!shoppingList) {
//                 res.status(404).json({error: 'The specified ID does not exist.'})
//             } else {
//                 res.status(200).json({shoppingList})
//             }
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(500).json({error: 'Could not get the list of Shopping Ingredients'})
//         })
// })

  //Returns a list of instructions of a recipe /recipe/instructions/id
  router.get('/instructions/:id', (req, res) => {
    const id = req.params.id;
    data.findInstruction(id)
        .then(instructions => {
            if(!instructions) {
                res.status(404).json({error: 'The specified ID does not exist.'})
            } else {
                res.status(200).json({instructions})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'Could not get the list of Instructions'})
        })
})   

  module.exports = router;