// reports-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const reports = new Schema({
    report_type: { type: String},
    report_title: { type: String},
    user_id: { type: String},
    user_fullname: { type: String},
    table_data: { type: Schema.Types.Mixed},
    table_type: { type: String},
    extraData: { type: String},
    daterange_start: { type: String},
    daterange_end: { type: String},
    main_branch_status: {type: Number, default: 0},
  }, {
    timestamps: true
  });

  return mongooseClient.model('reports', reports);
};

