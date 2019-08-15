const { authenticate } = require('feathers-authentication').hooks;
const { commonHooks, populate} = require('feathers-hooks-common');

const brandSchema = {
  include: [
    {
      service: 'products',
      nameAs: 'allproducts',
      parentField: '_id',
      asArray: true,
      childField: 'brand',
    },
    {
      service: 'branches',
      nameAs : 'branch',
      parentField: 'localbranch_id',
      childField: '_id'
    }
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
    all: [populate({ schema: brandSchema })],
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
