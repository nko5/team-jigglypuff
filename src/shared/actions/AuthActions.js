export function login(userName) {
  return {
    type: 'SIGN_IN',
    userName
  }
}

export function logout(id) {
  return {
    type: 'SIGN_OUT',
    id
  }
}
