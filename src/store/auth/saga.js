import lo from 'lodash'
import { call, put, takeLatest, select } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import { LOGIN_REQUEST, LOGIN_SUCCESS, FCM_UPDATE_REQUEST } from './fixtures'
import { loginSucceed, loginFailed } from './actions'
import { post } from '../../utils/request'
import { setToken, setRefreshToken } from '../../utils/auth'

const getAuth = state => state.auth

function* loginRequest({ username, password }) {
  const { data, error } = yield call(post, '/auth/login', { username, password })

  if (data) {
    setToken(data.token)
    setRefreshToken(data.refreshToken)
    yield put(loginSucceed(lo.omit(['token', 'refreshToken'])))
  } else {
    yield put(loginFailed(error))
  }
}

function* login() {
  yield put(push('/dashboard'))
}

function* syncDevice(newToken) {
  const { fcmToken } = yield select(getAuth)
  if (fcmToken !== newToken) yield call(post, '/self/devices', { imei: 0, fcmToken }, true)
}

export default function* rootSaga() {
  yield takeLatest(LOGIN_REQUEST, loginRequest)
  yield takeLatest(LOGIN_SUCCESS, login)
  yield takeLatest(FCM_UPDATE_REQUEST, syncDevice)
}
