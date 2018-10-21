import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | resume/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:resume/index');
    assert.ok(route);
  });
});
