import Immutable from 'immutable';

const defaultState = new Immutable.List();

export default function userItemReducer(state = defaultState, action) {
  switch (action.type) {
    case 'GET_USER_ITEMS':
      return state.concat(action.userItems);
    case 'ADD_ITEM':
      return state.push({
        name: action.name,
        description: action.description,
        id: action.id
      });
    case 'EDIT_ITEM':
      return state.concat(action.userItems);
    case 'DELETE_ITEM':
      return state.concat(action.userItems);
    default:
      return state;
  }
}
