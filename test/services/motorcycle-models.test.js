const assert = require('assert');
const app = require('../../src/app');

describe('\'motorcycle-models\' service', () => {
  it('registered the service', () => {
    const service = app.service('motorcycle-models');

    assert.ok(service, 'Registered the service');
  });
});
