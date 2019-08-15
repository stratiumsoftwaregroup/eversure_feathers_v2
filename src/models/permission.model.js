// permission-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const permission = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'users', required: true},
    permissions: {
    	dashboard: { type: Number, default: 0 },
    	inventory: { type: Number, default: 0 },
    	user: { type: Number, default: 0 },
    	customer: { type: Number, default: 0 },
    	report: { type: Number, default: 0 },
    	category: { type: Number, default: 0 },
    }
  }, {
    timestamps: true
  });

  return mongooseClient.model('permission', permission);
};
