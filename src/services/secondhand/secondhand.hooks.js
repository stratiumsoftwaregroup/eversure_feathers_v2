const { authenticate } = require('feathers-authentication').hooks;
const { commonHooks, populate} = require('feathers-hooks-common');
const secondhandProductsSchema = {
  include: [
    {
      service: 'customer_secondhand_unit',
      nameAs: 'secondhand_unit_info',
      parentField: 'unit_id',
      childField: '_id'
    },
    {
     service: 'branches',
     nameAs: 'branch_info',
     parentField: 'branch',
     childField: '_id'
    }
  ]
};
module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [populate({ schema: secondhandProductsSchema })],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
