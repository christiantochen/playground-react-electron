// import { apiBaseUrl } from '../../../env'
import { isTokenSet, getToken } from '../../auth'

function getRequestParams(method, useJsonHeaders, data, fetchWithToken) {
  const params = { method }

  if (useJsonHeaders) {
    params.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  } else {
    params.headers = {}
  }

  if (fetchWithToken && isTokenSet()) {
    params.headers.Authorization = `Bearer ${getToken()}`
  }

  if (data !== undefined) {
    params.body = JSON.stringify(data)
  }

  return params
}

export async function submitRequest(url, method, useJsonHeaders, data, fetchWithToken) {
  return fetch(url, getRequestParams(method, useJsonHeaders, data, fetchWithToken)).then(
    res => res,
    () => ({ statusText: '404 (Not Found)' })
  )
}

export async function extractJson(response) {
  return response.ok
    ? {
        data: await response.json().catch(err => {
          console.error(err)
          return null
        }),
      }
    : { error: new Error(response.statusText) }
}
