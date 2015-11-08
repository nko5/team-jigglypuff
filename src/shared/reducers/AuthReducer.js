import Immutable from 'immutable';

const defaultState = new Immutable.Map({
  'userName': '',
  'userId': '',
  'isLoggedOn': false
});

export default function authReducer(state = defaultState, action) {
  switch(action.type) {
    case 'SIGN_IN':
      return state.set({
        'userName': action.res.data.userName,
        'userId': action.res.data.id,
        'isLoggedOn': true
      });
    case 'SIGN_OUT':
      return state.set(defaultState);
    default:
      return state;
  }
}
