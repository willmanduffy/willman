export default function(assert, model, attributes) {
  /**
   * This asserts that a model has all attributes that are expected.
   *
   * Example:
   *
   *     modelHasAttributes([
   *       'name',
   *       'email',
   *       'password'
   *     ], model);
   */

  for (var attribute in attributes) {
    if (!attributes.hasOwnProperty(attribute)) {
      continue;
    }

    var success = Object.keys(model.toJSON()).contains(attributes[attribute]);
    assert.ok(success, 'Model has ' + attributes[attribute] + ' attribute');
  }
}
