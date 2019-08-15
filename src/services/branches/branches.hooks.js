const { authenticate } = require('feathers-authentication').hooks;
const { commonHooks, populate} = require('feathers-hooks-common');

const branchesSchema = {
  include: [
    {
      service: 'customers',
      nameAs: 'allcustomers',
      parentField: '_id',
      asArray: true,
      childField: 'branchId',
    },
  ]
}

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
    all: [populate({ schema: branchesSchema })],
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
