const { authenticate } = require('feathers-authentication').hooks;
const { commonHooks, populate } = require('feathers-hooks-common');
const { restrictToOwner, restrictToRoles } = require('feathers-authentication-hooks');

const { hashPassword } = require('feathers-authentication-local').hooks;

const restrict = [
  authenticate('jwt'),
  restrictToOwner({
    idField: '_id',
    ownerField: '_id'
  })
];

const restrictPatch = [
  restrictToRoles({
    roles: ['superadmin','admin','branchadmin'],
    fieldName: 'username',
  })
]

const userSchema = {
  include: [
    {
      service: 'branches',
      nameAs: 'branch_info',
      parentField: 'branch',
      asArray: true,
      childField: '_id',
    },
    {
      service: 'user-position',
      nameAs: 'user_position_info',
      parentField: 'type',
      asArray: true,
      childField: '_id',
    },
  ]
}

module.exports = {
  before: {
    all: [],
    find: [ authenticate('jwt') ],
    get: [ ...restrict ],
    create: [ hashPassword() ],
    update: [ ...restrict, hashPassword() ],
    // patch: [ ...restrict, hashPassword() ],
    patch: [ ...restrictPatch, hashPassword() ],
    remove: [ ...restrict ]
  },

  after: {
    all: [

      populate({ schema: userSchema })

      // commonHooks.when(
      //   hook => hook.params.provider,
      //   commonHooks.discard('password')
      // )

    ],
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
