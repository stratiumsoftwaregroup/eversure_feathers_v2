// payments-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const payments = new Schema({
    customer_id: {type: Schema.Types.ObjectId, ref: 'customers', required: true},
    amount: {type: Number, required: true},
    interest: {type: Number, required: true},
    rebate: {type: Number, required: true},
    balance: {type: Number, required: true},
    remarks: {type: String},
    added_by: {type: Schema.Types.ObjectId, ref: 'user'},
    payment_date: { type: Date, required: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('payments', payments);
};
