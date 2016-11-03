import Ember from 'ember';

export default Ember.Route.extend({
  cart: Ember.inject.service(),

  model() {
    var cart = [];
    this.get('cart').unitArray.forEach(function(item){
      cart.push(item);
    });
    return cart;
  }
});
