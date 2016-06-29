import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  // Properties
  image: DS.attr('string'),
  name: DS.attr('string'),
  url: DS.attr('string'),

  seed: Ember.computed(function() {
    return Math.random();
  })
});
