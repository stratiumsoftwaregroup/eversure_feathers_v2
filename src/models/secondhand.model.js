// secondhand-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const secondhand = new Schema({
    customer: { type: String },
    account_number: { type: String },
    date_forclosed: { type: String },
    model: {
    	id: {type: String},
    	name: {type: String},
    },
    branch: {type: Schema.Types.ObjectId, ref: 'branches'},
    engine_number: { type: String },
    remarks: { type: String },
    selling_price: { type: String },
    discount: { type: String },
    origin_id: {type: String},
    date_added_custom: {type: String},
    date_sold: {type: String},
    removal_date: {type: String},
    main_status: {type: Number},
    type: {type: Number}, // 0 = unsold, 1 = sold
  }, {
    timestamps: true
  });

  return mongooseClient.model('secondhand', secondhand);
};

