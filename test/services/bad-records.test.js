const assert = require('assert');
const app = require('../../src/app');

describe('\'bad-records\' service', () => {
  it('registered the service', () => {
    const service = app.service('bad-records');

    assert.ok(service, 'Registered the service');
  });
});
