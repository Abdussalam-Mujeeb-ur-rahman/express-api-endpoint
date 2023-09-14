const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 5 // Minimum length of 5 characters
    }
});


const Person = mongoose.model('Person', personSchema);
module.exports = Person;