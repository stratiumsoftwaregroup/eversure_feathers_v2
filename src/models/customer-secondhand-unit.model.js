// customer-secondhand-unit-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const customerSecondhandUnit = new Schema({
    name: { type: String},
    unit_id: { type: Schema.Types.ObjectId, ref: 'secondhand' },
    unit: {
    	name: {type: String},
    },
    payment_method: {type: Number}, // 0 installment, 1 = cash
    payment: {type: String},
    term: {type: String},
    account_number: {type: String},
    unit_price: {type: String},
    origin_id: {type: String},
    branch: { type: Schema.Types.ObjectId, ref: 'branches' },
  }, {
    timestamps: true
  });

  return mongooseClient.model('customerSecondhandUnit', customerSecondhandUnit);
};
