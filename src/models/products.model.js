// products-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const products = new Schema({
	branch: {type: Schema.Types.ObjectId, ref: 'branches', required: true},
  brand: {type: Schema.Types.ObjectId, ref: 'brand', required: true},
  model: {type: Schema.Types.ObjectId, ref: 'motorcycleModels', required: true},
  color: { type: String, required: true},
  delivery: {
    date: { type: Date, default: null },
    location: { type: String, required: true },
    receipt_number: { type: String, required: true },
    receipt_date: { type: String, required: true },
  },
  receipt_number: {type: String},
  engine_number: { type: String, required: true},
  chassis_number: { type: String},
  chasis_number: { type: String},
  chas: { type: String },
  invoice: {
    invoice_number: { type: String},
    date: { type: Date, default: null },
  },
  customer: {type: Schema.Types.ObjectId, ref: 'customers'},
  date_sold: { type: String },
  price: { type: Number }, // actual price
  list_price: { type: Number },
  type: { type: Number, required: true, default: 0 },
  warranty_claims: { type: Number, default: 0 },
  clearances: { type: Number, default: 0 },
  tba: { type: Number, default: 0 },
  timestamps: { type: Date, default: Date.now },
  created_by: {type: Schema.Types.ObjectId, ref: 'users'},
	date_created: { type: String, default: null },
	transferred: { type: Number, default: 0}, // 0 = not transferred, 1 = transferred, 2 = received by local branch
  transferredTo: {type: Schema.Types.ObjectId, ref: 'branches', default: null},
  transferred_from_branch: {type: String },
  dateTransferred: {type: Date, default: null },
  dateReceived: {type: Date, default: null },
  brandNew: {type: Number}, // 0 = secondhand, 1 = brand new 
  origin_id: {type: String},
  deletedInBranch: {type: Number, default: 0}, // 0 = not , 1 = deleted,
  year_added: {type: String},
  }, {
    timestamps: true
  });

  return mongooseClient.model('products', products);
};
