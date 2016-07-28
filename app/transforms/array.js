import Ember from 'ember';
import DS from 'ember-data';

export default DS.Transform.extend({
  _toArray(value) {
    if (Ember.isArray(value)) {
      return Ember.A(value);
    } else {
      return Ember.A();
    }
  },

  deserialize(value) {
    return this._toArray(value);
  },

  serialize(value) {
    return this._toArray(value);
  }
});
