// customers-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const customers = new Schema({
    name: { type: String, required: true },
    unit: { type: Schema.Types.ObjectId, ref: 'products', required: true },
    unitPrice: { type: Number },
    unitName: { type: String, required: true },
    branchId: { type: String },
    branch: { type: Schema.Types.ObjectId, ref: 'branches', required: true },
    mobile: { type: Number },
    tin: { type: Number},
    address: { 
    	present: { type: String },
    	length_of_stay: { type: String }
    },
    birthplace: { type: String },
    age: { type: Number},
    employer: {
    	present: { type: String},
    	telephone_number: { type: String },
    	address: { type: String },
    	position: { type: String }
    },
    type: { type: Number}, 
    terms: {
      months: { type: Number}, 
      down_payment: {type: Number},
      monthly_payment: { type: Number}
    },
    term: {type: String},
    payment: {type: Number},
    created_by: { type: Schema.Types.ObjectId, ref: 'users'},
    date_added: { type: Date, default: Date.now },
    date_added_custom: { type: String },
    image_url: { type: String },
    local_customer_id: { type: String, default: null },
    bad_record: {type: Number, default: 0}, // 1 = bad record
    account_number: {type: String},
    origin_id: {type: String},
  }, {
    timestamps: true
  });

  return mongooseClient.model('customers', customers);
};
