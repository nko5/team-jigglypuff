import Immutable from 'immutable';

const defaultState = new Immutable.Map({
  'userName': '',
  'userId': '',
  'isLoggedOn': false
});

export default function authReducer(state = defaultState, action) {
  switch(action.type) {
    case 'SIGN_IN':
      // return state.merge({
      //   'userName': action.userName,
      //   'userId': action.userId,
      //   'isLoggedOn': true
      // });
      return new Immutable.Map({
        'userName': action.userName,
        'userId': action.userId,
        'isLoggedOn': true
      });

      return newState;
    case 'SIGN_OUT':
      return state.set(defaultState);
    default:
      return state;
  }
}
