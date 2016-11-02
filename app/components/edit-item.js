import Ember from 'ember';

export default Ember.Component.extend({
  formIsShowing: false,
  actions: {
    showEditForm() {
      this.toggleProperty('formIsShowing');
    },
    updateUnit(unit) {
      var params={
        item: this.get('item'),
        description: this.get('description'),
        price: this.get('price'),
        reviews: this.get('reviews'),
        image: this.get('image'),
        category: this.get('category'),
      };
      this.set('item', '');
      this.set('description', '');
      this.set('price', '');
      this.set('reviews', '');
      this.set('image', '');
      this.set('category', '');
      this.sendAction('updateUnit', unit, params);
    }
  }
});
