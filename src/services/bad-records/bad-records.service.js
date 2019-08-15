// Initializes the `bad-records` service on path `/bad-records`
const createService = require('feathers-mongoose');
const createModel = require('../../models/bad-records.model');
const hooks = require('./bad-records.hooks');
const filters = require('./bad-records.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'bad-records',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/bad-records', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('bad-records');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
