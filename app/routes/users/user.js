import Ember from 'ember';
const users = [
    {
      id: 1,
      firstName: 'Mike',
      lastName: 'VikingsAreBad',
      email: 'MyTeamIsBad.@email.com',
      password: 'password'
    },
    {
      id: 2,
      firstName: 'Noah',
      lastName: 'Unclear',
      email: 'N.Unclear@email.com',
      password: 'password'
    }
]

export default Ember.Route.extend({
  model(params){
    return users.find(user => user.id === params.user_id)
  }
});
// this.get('store').findRecord('photo', params.photo_id);
