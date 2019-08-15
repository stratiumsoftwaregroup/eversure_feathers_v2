const assert = require('assert');
const app = require('../../src/app');

describe('\'user-position\' service', () => {
  it('registered the service', () => {
    const service = app.service('user-position');

    assert.ok(service, 'Registered the service');
  });
});
