import { LOGIN_SUCCESS } from './fixtures'

const initialState = {
  token: null,
  refreshToken: null,
}

function reducer(state = initialState, action = {}) {
  console.log(action, state)
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, ...action.data }
    default:
      return state
  }
}

export default reducer
