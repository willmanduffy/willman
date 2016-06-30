import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this._populateStore();
  },

  _populateStore() {
    Ember.$.getJSON('data/friends.json').then((friends) => {
      this.store.pushPayload(friends);
    });

    Ember.$.getJSON('data/experiences.json').then((experiences) => {
      this.store.pushPayload(experiences);
    });
  }
});
