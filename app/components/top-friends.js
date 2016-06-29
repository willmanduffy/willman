import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['small-block-grid-2', 'large-block-grid-4', 'top-friends'],
  friendLimit: 7,

  friends: Ember.computed('model', function() {
    var friends = this.get('model');

    friends = this._randomizeFriends(friends);
    friends = this._limitFriends(friends);

    return friends;
  }),

  tagName: 'ul',

  _limitFriends(friends) {
    var friendLimit = this.get('friendLimit');

    return friends.slice(0, friendLimit);
  },

  _randomizeFriends(friends) {
    // Not really random, but enough to shuffle up the order so we get diferent
    // friends on every page load.

    return friends.sortBy('seed');
  }
});
