// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    fullname: { type: String, required: true, unique: true},
    email: { type: String, required: true},
    branch: {type: Schema.Types.ObjectId, ref: 'branches', default: null},
    type: { type: Schema.Types.ObjectId, ref: 'userPosition', default: null} ,
    address: {type: String},
    status: { type: Number, default: 1 },
    access_level: { type: Number, default: 0},
    date_created: { type: Date, default: Date.now },
    imageUrl: {type: String}
  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
