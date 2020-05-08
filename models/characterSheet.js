const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSheetSchema = new Schema({
    name: {type: String, required: true},
    role: {type: String, required: true},
    race: {type: String, required: true},
    level: {type: String, required: true},
    stats: {
        strength: {type: Number, minimum: 1},
        dexterity: {type: Number, minimum: 1},
        constitution: {type: Number, minimum: 1},
        intelligence: {type: Number, minimum: 1},
        wisdom: {type: Number, minimum: 1},
        charisma: {type: Number, minimum: 1}
    },
    Skills: {
               acrobatics:  {type: Number, minimum: 0},
               animalHandling: {type: Number, minimum: 0},
               arcana:      {type: Number, minimum: 0},
               athletics:   {type: Number, minimum: 0},
               deception:   {type: Number, minimum: 0},
               history:     {type: Number, minimum: 0},
               insight:     {type: Number, minimum: 0},
               intimidation: {type: Number, minimum: 0}, 
               investigation: {type: Number, minimum: 0},
               medicine:    {type: Number, minimum: 0},
               nature:      {type: Number, minimum: 0},
               perception:  {type: Number, minimum: 0},
               performance: {type: Number, minimum: 0},
               persuasion:  {type: Number, minimum: 0},
               religion:    {type: Number, minimum: 0},
               sleightOfHand: {type: Number, minimum: 0},
               stealth:     {type: Number, minimum: 0},
               survival:    {type: Number, minimum: 0},
    }
},{timestamps: true});

// Create Model from our Schema
const CharacterSheet = mongoose.model('CharacterSheet', characterSheetSchema);

// Export character Sheet model
module.exports = CharacterSheet;