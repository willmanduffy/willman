import DS from 'ember-data';

export default DS.Model.extend({
  // Properties
  image: DS.attr('string'),
  name: DS.attr('string'),
  url: DS.attr('string')
});