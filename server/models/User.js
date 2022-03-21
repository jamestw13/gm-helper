const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: 'Username is required',
      unique: true,
      minlength: 5,
      maxlength: 50,
      trim: true,
    },

    email: {
      type: String,
      required: 'Email is required',
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },

    campaigns: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Campaign',
      },
    ],

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
UserSchema.virtual('campaignCount').get(() => this.campaigns.length);

const User = model('User', UserSchema);

module.exports = User;
