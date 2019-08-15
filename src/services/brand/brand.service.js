// Initializes the `brand` service on path `/brand`
const createService = require('feathers-mongoose');
const createModel = require('../../models/brand.model');
const hooks = require('./brand.hooks');
const filters = require('./brand.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'brand',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/brand', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('brand');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
