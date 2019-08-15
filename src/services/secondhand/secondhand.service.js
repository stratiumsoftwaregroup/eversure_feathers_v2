// Initializes the `secondhand` service on path `/secondhand`
const createService = require('feathers-mongoose');
const createModel = require('../../models/secondhand.model');
const hooks = require('./secondhand.hooks');
const filters = require('./secondhand.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'secondhand',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/secondhand', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('secondhand');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
