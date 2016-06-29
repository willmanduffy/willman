import modelHasAttributes from 'willman/tests/helpers/unit/model-has-attributes';

import {
  moduleForModel,
  test
} from 'ember-qunit';

var model;

moduleForModel('friend', 'unit/models/user', {
  beforeEach: function() {
    model = this.subject();
  }
});

test('has expected attributes', function(assert) {
  modelHasAttributes(assert, model, [
    'image',
    'name',
    'url'
  ]);
});
