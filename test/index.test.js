var test = require('tape');

console.log('hello world');

test('A passing test', (assert) => {

  assert.pass('This test will pass.');

  assert.end();
});
