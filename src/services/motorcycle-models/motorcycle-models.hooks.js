const { authenticate } = require('feathers-authentication').hooks;
const { commonHooks, populate } = require('feathers-hooks-common');

const motorcycleModelSchema = {
  include: [
    {
      service: 'branches',
      nameAs : 'branch',
      parentField: 'localbranch_id',
      childField: '_id'
    },
    {
      service: 'brands',
      nameAs : 'brand_details',
      parentField: 'brand',
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
    all: [populate({schema: motorcycleModelSchema})],
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
