const test = require('node:test');
const assert = require('node:assert');
const service = require('../src/services/cangrejoService');

test('lista cangrejos', () => {
  assert.ok(service.listar().length > 0);
});
