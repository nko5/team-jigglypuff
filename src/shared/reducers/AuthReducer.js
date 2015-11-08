import Immutable from 'immutable';

const defaultState = new Immutable.Map({
  'userName': '',
  'userId': '',
  'isLoggedOn': false
});

export default function authReducer(state = defaultState, action) {
  switch(action.type) {
    case 'SIGN_IN':
      return state.merge({
        'userName': action.userName,
        'userId': action.userId,
        'isLoggedOn': true
      });

    case 'SIGN_OUT':
      return state.merge({
        'userName': '',
        'userId': '',
        'isLoggedOn': false
      });

    default:
      return state;
  }
}
