// Initializes the `customer-secondhand-unit` service on path `/customer-secondhand-unit`
const createService = require('feathers-mongoose');
const createModel = require('../../models/customer-secondhand-unit.model');
const hooks = require('./customer-secondhand-unit.hooks');
const filters = require('./customer-secondhand-unit.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'customer-secondhand-unit',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/customer-secondhand-unit', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('customer-secondhand-unit');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
