// Dependencies for router
const express= require('express');
const router = express.Router();
const CharacterSheet = require('../models/characterSheet.js'); // .. to get up to the main page since this is located in a folder


//Routes

////////////////
//// Seed GET /DNDCS/seed
////////////////
router.get('/seed', (req, res) => {
    CharacterSheet.create([
        {
            name: 'Forlan Grismen',
            role: 'fighter',
            race: 'gnome',
            level: 1,
            stats: {
                strength: 12,
                dexterity: 10,
                constitution: 12,
                intelligence: 10,
                wisdom: 10,
                charisma: 10
            }
        },
        {
            name: 'Duncan Molach',
            role: 'Wizard',
            race: 'Human',
            level: 2,
            stats: {
                strength: 9,
                dexterity: 12,
                constitution: 10,
                intelligence: 13,
                wisdom: 13,
                charisma: 10
            }
        },
        {
            name: 'Morphram Brimblebrew',
            role: 'Cleric',
            race: 'Dwarf',
            level: 2,
            stats: {
                strength: 14,
                dexterity: 8,
                constitution: 15,
                intelligence: 11,
                wisdom: 13,
                charisma: 8
            }
        }
    ],(err, data)=>{
        res.redirect('/DNDCS');
    });
});

////////////////
//// Index GET /DNDCS
////////////////
router.get('/', (req, res) => {
    CharacterSheet.find({},(error, allCharacters) =>{
        res.render('Index', {character: allCharacters});
    });
});

////////////////
//// New GET /DNDCS/new
////////////////
router.get('/new', (req, res) => {
    res.render('New');
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