// Initializes the `permission` service on path `/permission`
const createService = require('feathers-mongoose');
const createModel = require('../../models/permission.model');
const hooks = require('./permission.hooks');
const filters = require('./permission.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'permission',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/permission', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('permission');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
