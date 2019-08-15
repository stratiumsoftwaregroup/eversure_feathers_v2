// Initializes the `reports` service on path `/reports`
const createService = require('feathers-mongoose');
const createModel = require('../../models/reports.model');
const hooks = require('./reports.hooks');
const filters = require('./reports.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'reports',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/reports', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('reports');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
