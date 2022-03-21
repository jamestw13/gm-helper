const { Schema, model } = require('mongoose');

const CampaignSchema = new Schema(
  {
    name: {
      type: String,
      required: 'Campaigns need names.',
      minlength: 5,
      maxlenght: 20,
      trim: true,
    },

    gamemaster: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: 'Campaigns need a master.',
    },

    players: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
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

CampaignSchema.virtual('playerCount').get(() => this.players.length);
CampaignSchema.virtual('characterCount').get(() => this.characters.length);

const Campaign = model('Campaign', CampaignSchema);

module.exports = Campaign;
