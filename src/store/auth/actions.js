import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, FCM_UPDATE_REQUEST } from './fixtures'

export function loginRequest({ username, password }) {
  return {
    type: LOGIN_REQUEST,
    username,
    password,
  }
}

export function loginSucceed({ token, refreshToken }) {
  return {
    type: LOGIN_SUCCESS,
    token,
    refreshToken,
  }
}

export function loginFailed(error) {
  return {
    type: LOGIN_FAILED,
    error,
  }
}

export function fcmUpdateRequest(fcmToken) {
  return {
    type: FCM_UPDATE_REQUEST,
    fcmToken,
  }
}
