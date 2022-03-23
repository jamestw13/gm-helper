const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: 'Username is required',
      unique: true,
      minlength: 2,
      maxlength: 50,
      trim: true,
    },

    email: {
      type: String,
      required: 'Email is required',
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },

    password: {
      type: String,
      required: 'Password is required.',
      minlength: 5,
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

UserSchema.pre('save', async function (next) {
  if (this.isNew || isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
    console.log(this.password);
  }
  next();
});

UserSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

UserSchema.virtual('characterCount').get(() => this.characters.length);
UserSchema.virtual('campaignCount').get(() => this.campaigns.length);

const User = model('User', UserSchema);

module.exports = User;
