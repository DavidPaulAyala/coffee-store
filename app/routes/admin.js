import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addItem(params) {
      var newItem = this.store.createRecord('unit', params);
      newItem.save();
      this.transitionTo('admin');
    }
  }
});
