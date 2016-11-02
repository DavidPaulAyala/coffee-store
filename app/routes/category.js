import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('unit', {
      orderBy: 'category',
      equalTo: params.category_name
    });
  }
});
