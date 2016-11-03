import Ember from 'ember';

export function freeShipping(params) {
  var prices = params[0];

  if(prices >= 50) {
    return Ember.String.htmlSafe('<p>Congratulations, your cart qualifies for free shipping!</p>');
  }
}

export default Ember.Helper.helper(freeShipping);
