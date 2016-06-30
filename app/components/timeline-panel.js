import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['inverted'],
  inverted: Ember.computed.alias('experience.inverted')
});
