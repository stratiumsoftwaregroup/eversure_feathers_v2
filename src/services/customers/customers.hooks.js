const { authenticate } = require('feathers-authentication').hooks;

const { commonHooks, populate} = require('feathers-hooks-common');
const customersSchema = {
  include: [
    {
      service: 'products',
      nameAs: 'product',
      parentField: 'unit',
      childField: '_id'
    },
    {
      service: 'branches',
      nameAs: 'branch',
      parentField: 'branch',
      childField: '_id',
      useInnerPopulate: true
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
    all: [populate({ schema: customersSchema })],
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
