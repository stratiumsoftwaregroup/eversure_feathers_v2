const assert = require('assert');
const app = require('../../src/app');

describe('\'permission\' service', () => {
  it('registered the service', () => {
    const service = app.service('permission');

    assert.ok(service, 'Registered the service');
  });
});
