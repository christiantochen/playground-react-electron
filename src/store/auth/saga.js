import { call, put, takeLatest } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import { LOGIN_REQUEST, LOGIN_SUCCESS } from './fixtures'
import { setLoginData } from './actions'
import { post } from '../../utils/request'

function* loginRequest(action) {
  const response = yield call(post, '/login', action.data)
  yield put(setLoginData(response))
}

function* login() {
  yield put(push('/dashboard'))
}

export default function* rootSaga() {
  yield takeLatest(LOGIN_REQUEST, loginRequest)
  yield takeLatest(LOGIN_SUCCESS, login)
}
