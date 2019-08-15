// user-position-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const userPosition = new Schema({
    position_type: {type: String, required: true, unique: true },
    date_added: {type: Date, default: Date.now}
  }, {
    timestamps: true
  });

  return mongooseClient.model('userPosition', userPosition);
};
