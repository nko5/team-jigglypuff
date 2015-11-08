import request from 'superagent';

export function addItemRequest(item) {
  return dispatch => {
    return request
            .post('/api/addItem')
            .send(item)
            .end((err, res) => {
              dispatch(addItemClient(res.body.Name, res.body._id, res.body.description));
            });
  }
}

function addItemClient(name, description, id) {
  return {
    type: 'ADD_ITEM',
    name,
    description,
    id
  }
}
