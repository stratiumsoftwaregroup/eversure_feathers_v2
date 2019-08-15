// Initializes the `transfers` service on path `/transfers`
const createService = require('feathers-mongoose');
const createModel = require('../../models/transfers.model');
const hooks = require('./transfers.hooks');
const filters = require('./transfers.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'transfers',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/transfers', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('transfers');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
