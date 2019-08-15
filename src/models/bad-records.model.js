// bad_records-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const badRecords = new Schema({
    user_id: { type: String, required: true },
    status: { type: Number, required: true }, // 0 = previous, 1 = current
    set_by: { type: String, required: true },
    delinquent_payee: { type: Number, default: 0} // 0 = not delinquent, 1 = delinquent
  }, {
    timestamps: true
  });

  return mongooseClient.model('badRecords', badRecords);
};

