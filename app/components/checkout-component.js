import Ember from 'ember';

export default Ember.Component.extend({

  itemCount: Ember.computed('cart', function(){
    var currentCart = this.get('cart');
    return currentCart.length;
  }),

  totalPrice: Ember.computed('cart', function(){
    var total = 0;
    var currentCart = this.get('cart');
    // console.log(currentCart[0].get('price'));
    currentCart.forEach(function(unit){
      console.log(unit.get('price'));
      total += parseFloat(unit.get('price'));
    })
    return total;
  })


});
