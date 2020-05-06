const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSheetSchema = new Schema({
    
},{timestamps: true});

// Create Model from our Schema
const CharacterSheet = mongoose.model('CharacterSheet', characterSheetSchema);

// Export character Sheet model
module.exports = CharacterSheet;