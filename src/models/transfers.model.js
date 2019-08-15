// transfers-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const transfers = new Schema({
  	units: { type: Schema.Types.Mixed},
    transferred_by: {
      user_id: {type: Schema.Types.ObjectId},
      user_name: {type: String}
    },
  	local_branch: { type: Schema.Types.ObjectId, ref: 'branches', required: true },
    date_transferred: {type: String},
  }, {
    timestamps: true
  });

  return mongooseClient.model('transfers', transfers);
};
