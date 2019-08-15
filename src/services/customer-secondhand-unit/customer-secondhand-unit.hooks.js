const { authenticate } = require('feathers-authentication').hooks;
const { commonHooks, populate } = require('feathers-hooks-common');

const customer_secondhand_unit_schema = {
 include: [
  {
   service: 'secondhand',
   nameAs: 'secondhand_unit_info',
   parentField: 'unit_id',
   childField: '_id',
  },
  {
   service: 'branches',
   nameAs: 'branch_info',
   parentField: 'branch',
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
    all: [populate({ schema: customer_secondhand_unit_schema })],
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
