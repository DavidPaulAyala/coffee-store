import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addItem(params) {
      var newItem = this.store.createRecord('unit', params);
      newItem.save();
      this.transitionTo('admin');
    },

    updateUnit(unit, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          unit.set(key,params[key]);
        }
      });
      unit.save();
      this.transitionTo('admin');
    }

  },
  model() {
    return this.store.findAll('unit');
  }
});
