import DS from 'ember-data';

export default DS.Model.extend({
  // attributes
  dates: DS.attr('string'),
  description: DS.attr('array'),
  image: DS.attr('string'),
  inverted: DS.attr('boolean'),
  name: DS.attr('string'),
  title: DS.attr('string'),
  url: DS.attr('string')
});
