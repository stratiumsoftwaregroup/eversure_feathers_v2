// brands-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const brands = new Schema({
    brand_name: {type: String, required: true },
    localbranch_id: {type: Schema.Types.ObjectId, ref: 'branches'},
    date_added: {type: Date, default: Date.now}
  }, {
    timestamps: true
  });

  return mongooseClient.model('brands', brands);
};

