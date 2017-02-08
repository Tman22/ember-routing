import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    handleSubmit(model) {
      console.log(model, 'controller: woot I got here')
      return true;
    }
  }
});
