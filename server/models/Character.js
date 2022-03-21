const { Schema, model } = require('mongoose');

const CharacterSchema = new Schema({
  name: {
    type: String,
    required: 'Characters must have names.',
    minlength: 1,
    maxlength: 100,
    trim: true,
  },
  race: {
    type: String,
    required: 'Characters must have a race.',
  },
  class: {
    type: String,
    required: 'Characters must have a class.',
  },
  level: {
    type: Number,
    required: 'Characters must have a level.',
  },
});

const Character = model('Character', CharacterSchema);

module.exports = Character;
