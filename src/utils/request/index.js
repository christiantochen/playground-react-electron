import lo from 'lodash'
import { submitRequest, extractJson } from './base'
import { setToken, getRefreshToken } from '../auth'

// const BASE_URL = 'https://dspvapps-jkt-01.banpuindo.co.id'
const BASE_URL = 'http://localhost:8000'
const REFRESH_TOKEN_URL = '/auth/refresh'

const getSerializedPayload = payload =>
  Object.keys(payload)
    .map(field => `${field}=${payload[field]}`)
    .join('&')

const wrapper = async ({ request, shouldRefresh, isEmpty, refreshRequest, retryRequest }) => {
  let response = await request()

  if (shouldRefresh(response)) {
    const refreshResponse = await refreshRequest()
    const { data } = await extractJson(refreshResponse)

    if (data) {
      setToken(data.token)
      response = await retryRequest()
    }
  }

  if (!isEmpty(response)) return extractJson(response)

  return undefined
}

const wrapWithRefresh = (promise, args) =>
  wrapper({
    request: () => promise.apply(null, args),
    shouldRefresh: ({ status }) => status === 401,
    isEmpty: ({ status }) => status === 201 || status === 204,
    refreshRequest: refreshRaw,
    retryRequest: () => promise.apply(null, args),
  })

const getRaw = (path, data = {}, fetchWithToken) =>
  submitRequest(`${BASE_URL}${path}${getSerializedPayload(data)}`, 'GET', true, {
    fetchWithToken,
  })
const postRaw = (path, payload, fetchWithToken) =>
  submitRequest(`${BASE_URL}${path}`, 'POST', true, payload, fetchWithToken)
const putRaw = (path, payload, fetchWithToken) =>
  submitRequest(`${BASE_URL}${path}`, 'PUT', true, payload, fetchWithToken)
const removeRaw = (path, payload, fetchWithToken) =>
  submitRequest(`${BASE_URL}${path}`, 'DELETE', false, payload, fetchWithToken)
const refreshRaw = () =>
  submitRequest(`${BASE_URL}${REFRESH_TOKEN_URL}`, 'POST', true, { token: getRefreshToken() })

export const get = (path, payload, fetchWithToken) =>
  wrapWithRefresh(getRaw, [path, payload, fetchWithToken])
export const post = (path, payload, fetchWithToken) =>
  wrapWithRefresh(postRaw, [path, payload, fetchWithToken])
export const put = (path, payload, fetchWithToken) =>
  wrapWithRefresh(putRaw, [path, payload, fetchWithToken])
export const remove = (path, payload, fetchWithToken) =>
  wrapWithRefresh(removeRaw, [path, payload, fetchWithToken])
