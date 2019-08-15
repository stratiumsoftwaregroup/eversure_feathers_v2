const assert = require('assert');
const app = require('../../src/app');

describe('\'secondhand\' service', () => {
  it('registered the service', () => {
    const service = app.service('secondhand');

    assert.ok(service, 'Registered the service');
  });
});
