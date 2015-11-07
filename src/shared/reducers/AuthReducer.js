import Immutable from 'immutable';

const defaultState = new Immutable.Map();

export default function authReducer(state = defaultState, action) {
  switch(action.type) {
    case 'GET_USER':
      return state;
    case 'LOGIN_USER':
      return state.set({
        'userName': undefined,
        'idToken': undefined,
        'isLoggedIn': false
      });
    default:
      return state;
  }
}


// export default function todoReducer(state = defaultState, action) {
//   switch(action.type) {
//     case 'GET_TODOS':
//       return state.concat(action.res.data);
//     case 'CREATE_TODO':
//       return state.concat(action.res.data.text);
//     case 'EDIT_TODO':
//       return state.set(action.id, action.text);
//     case 'DELETE_TODO':
//       return state.delete(action.id);
//     default:
//       return state;
//   }
// }
