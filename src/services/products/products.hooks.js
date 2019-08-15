const { authenticate } = require('feathers-authentication').hooks;
const { commonHooks, populate} = require('feathers-hooks-common');

const productsSchema = {
  include: [
    {
      service: 'branches',
      nameAs: 'branches',
      parentField: 'branch',
      childField: '_id'
    },
    {
      service: 'brand',
      nameAs: 'brands',
      parentField: 'brand',
      childField: '_id'
    },
    {
      service: 'motorcycle-models',
      nameAs: 'motorModels',
      parentField: 'model',
      childField: '_id'
    },
    {
      service: 'branches',
      nameAs: 'branchTransferred',
      parentField: 'transferredTo',
      childField: '_id'
    },
    {
      service: 'customers',
      nameAs: 'customer_info',
      parentField: 'customer',
      childField: '_id'
    },
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
    all: [populate({ schema: productsSchema })],
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
