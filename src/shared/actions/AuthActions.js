import request from 'superagent';

export function login(userName) {
  return dispatch => {
    return request
            .post('/api/login')
            .send({ userName })
            .end((err, res) => {
              dispatch(loginClient(res.body.UserName, res.body._id));
            });
  }
}

export function loginClient(userName, userId) {
  return {
    type: 'SIGN_IN',
    userName,
    userId
  }
}

export function logout() {
  return dispatch => {
    return request
            .post('/api/logout')
            .end((err, res) => {
              dispatch(logoutClient());
            });
  }
}

export function logoutClient() {
  return {
    type: 'SIGN_OUT'
  }
}
