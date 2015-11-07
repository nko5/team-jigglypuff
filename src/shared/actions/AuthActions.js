export function login(jwt) {
  return {
    type: 'LOGIN_USER',
    idToken: jwt
  }
}

export function getUser() {
  return {
    type: 'GET_USER'
  }
}
