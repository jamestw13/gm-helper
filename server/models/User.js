const { Schema, model } = require('mongoose');
const Character = require('./Character');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: 'Username is required',
      unique: true,
      minlength: 7,
      maxlength: 20,
      trim: true,
    },
    email: {
      type: String,
      required: 'Email is required',
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    characters: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Character',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

UserSchema.virtual('characterCount').get(() => this.characters.length);

const User = model('User', UserSchema);

module.exports = User;
