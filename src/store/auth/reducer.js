import createReducer from '../../lib/createReducer'
import { LOGIN_SUCCESS, LOGIN_REQUEST } from './fixtures'

const initialState = {
  token: null,
  refreshToken: null,
}

export default createReducer(initialState, {
  [LOGIN_REQUEST](state) {
    return { ...state }
  },
  [LOGIN_SUCCESS](state, action) {
    return { ...state, ...action.data }
  },
})
