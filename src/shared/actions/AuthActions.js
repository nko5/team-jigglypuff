export function login(userName) {
  return {
    type: 'SIGN_IN',
    userName,
    userId: "1"
  }
}

export function logout(id) {
  return {
    type: 'SIGN_OUT',
    id
  }
}
