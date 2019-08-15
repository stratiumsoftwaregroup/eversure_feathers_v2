// Initializes the `brands` service on path `/brands`
const createService = require('feathers-mongoose');
const createModel = require('../../models/brands.model');
const hooks = require('./brands.hooks');
const filters = require('./brands.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'brands',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/brands', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('brands');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
