// Initializes the `user-position` service on path `/user-position`
const createService = require('feathers-mongoose');
const createModel = require('../../models/user-position.model');
const hooks = require('./user-position.hooks');
const filters = require('./user-position.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'user-position',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/user-position', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('user-position');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
