// payment-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const payment = new Schema({
    supplier_name: { type: String},
    receipt_number: { type: String},
    amount: { type: String},
    date_paid: { type: String},
    remarks: { type: String},
  }, {
    timestamps: true
  });

  return mongooseClient.model('payment', payment);
};

