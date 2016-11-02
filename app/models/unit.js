import DS from 'ember-data';

export default DS.Model.extend({
  "item": DS.attr(),
  "description": DS.attr(),
  "price": DS.attr(),
  "reviews": DS.attr(),
  "image": DS.attr(),
  "category": DS.attr()
});
