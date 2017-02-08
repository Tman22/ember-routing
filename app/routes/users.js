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
  model() {
    return users
  }
});
