import DS from 'ember-data';

export default DS.Model.extend({

  // We define the structure of a rental object using the same attributes for our rental
  // that we previously used in our hard-coded array of JavaScript objects
  // - title, owner, city, category, image, bedrooms and description.
  title: DS.attr(),
  owner: DS.attr(),
  city: DS.attr(),
  category: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr(),
  description: DS.attr()

});
