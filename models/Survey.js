const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecipientSchema = require('./Recipient');

const surveySchema = new Schema ({
  title: String,
  body: String,
  subject: String,
  recepients: [RecipientSchema],
  yes: { Numer, default: 0},
  yes: { Numer, default: 0},
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date,
  lastResponded: Date
});

mongoose.model('surveys', surveySchema);