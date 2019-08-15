const assert = require('assert');
const app = require('../../src/app');

describe('\'customer-secondhand-unit\' service', () => {
  it('registered the service', () => {
    const service = app.service('customer-secondhand-unit');

    assert.ok(service, 'Registered the service');
  });
});
