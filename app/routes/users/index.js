import Ember from 'ember';

export default Ember.Route.extend(NodeMixin, {
  model() {
    return Ember.Object.create({})
  },
  actions: {
    handleSubmit(model) {
      console.log('Route Woot')
      this.transitionTo('about')
    }
  }
});
