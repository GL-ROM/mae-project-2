// Dependencies for router
const express= require('express');
const router = express.Router();
const CharacterSheet = require('../models/characterSheet.js'); // .. to get up to the main page since this is located in a folder


//Routes

////////////////
//// Index GET /DNDCS
////////////////
router.get('/', (req, res) => {
    CharacterSheet.find({},(error, allCharacter) =>{
        res.render('Index', {character: allCharacter});
    });
});

////////////////
//// Show GET /DNDCS/:id
////////////////
router.get('/:id', (req, res) => {
    CharacterSheet.findById(req.params.id, (err, foundCharacter) => {
        res.render('Show', {character: foundCharacter});
    });
});

////////////////
//// New GET /DNDCS/new
////////////////
router.get('/new', (req, res) => {
    res.render('New');
});

////////////////
//// Create POST /DNDCS
////////////////
router.post('/', (req, res) => {
    CharacterSheet.create(req.body, (error, createdCharacter) =>{
        // Once created - respond to client
        res.redirect('/DNDCS');
    })    
});

////////////////
//// Edit GET /DNDCS/:id/edit
////////////////
router.get('/:id/edit', (req, res) => {
    // Find our document from the collection - using mongoose model
    CharacterSheet.findById(req.params.id, (err, foundCharacter) => {
        // render the edit view and pass it the foundd fruit
        res.render('Edit', {character: foundCharacter});
    });
});

////////////////
//// Update
////////////////
router.put('/:id', (req, res) => {
    CharacterSheet.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/DNDCS');
    });
});

////////////////
//// Destroy
////////////////
router.delete('/:id', (req, res) => {
    CharacterSheet.findByIdAndRemove(req.params.id, (error, deletedCharacter) => {
        res.redirect('/DNDCS');
    })
});

// Export router
module.exports = router;