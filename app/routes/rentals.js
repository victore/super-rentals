import Route from '@ember/routing/route';

export default Route.extend({
  model() {

    // Call to the Ember Data Store service
    // The store service is injected into all routes and their corresponding controllers in Ember.
    return this.store.findAll('rental');

  }
});
