import { LOGIN_REQUEST, LOGIN_SUCCESS } from './fixtures'
import { setAuthData } from '../../utils/auth'

export function loginRequest(data) {
  return {
    type: LOGIN_REQUEST,
    data,
  }
}

export function setLoginData(data) {
  setAuthData(data)
  return {
    type: LOGIN_SUCCESS,
    data,
  }
}
