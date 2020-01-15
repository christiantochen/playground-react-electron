import createReducer from '../../lib/createReducer'
import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILED, FCM_UPDATE_REQUEST } from './fixtures'

const initialState = {
  username: undefined,
  password: undefined,
}

export default createReducer(initialState, {
  [LOGIN_REQUEST](state, { username, password }) {
    return { ...state, username, password }
  },
  [LOGIN_SUCCESS](state, { token, refreshToken }) {
    return { ...state, token, refreshToken }
  },
  [LOGIN_FAILED](state, error) {
    return { ...state, error }
  },
  [FCM_UPDATE_REQUEST](state, { fcmToken }) {
    return { ...state, fcmToken }
  },
})
