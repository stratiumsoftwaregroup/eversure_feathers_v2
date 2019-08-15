// Initializes the `motorcycle-models` service on path `/motorcycle-models`
const createService = require('feathers-mongoose');
const createModel = require('../../models/motorcycle-models.model');
const hooks = require('./motorcycle-models.hooks');
const filters = require('./motorcycle-models.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'motorcycle-models',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/motorcycle-models', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('motorcycle-models');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
