import Ember from 'ember';

export default Ember.Service.extend({

  unitArray: [],
  add(unit){
    this.get('unitArray').push(unit);
  }
});
