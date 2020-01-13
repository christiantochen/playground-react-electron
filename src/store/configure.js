/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { persistStore, persistCombineReducers } from 'redux-persist'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import sagas from './sagas'
import storage from 'redux-persist/lib/storage'

const config = {
  key: 'root',
  storage,
  blacklist: ['router'],
  debug: true, //to get useful logging
}

export default function configureStore(initialState = {}, history) {
  let composeEnhancers = compose
  let reduxSagaMonitorOptions = {}

  // If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    /* eslint-disable no-underscore-dangle */
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})

    // NOTE: Uncomment the code below to restore support for Redux Saga
    // Dev Tools once it supports redux-saga version 1.x.x
    if (window.__SAGA_MONITOR_EXTENSION__)
      reduxSagaMonitorOptions = {
        sagaMonitor: window.__SAGA_MONITOR_EXTENSION__,
      }
    /* eslint-enable */
  }

  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions)
  const middlewares = [sagaMiddleware, routerMiddleware(history), createLogger()]

  const enhancers = [applyMiddleware(...middlewares)]
  const persistConfig = { enhancers }

  const store = createStore(
    persistCombineReducers(config, reducers),
    initialState,
    composeEnhancers(...enhancers)
  )
  const persistor = persistStore(store, persistConfig, () => {})

  sagas.forEach(saga => sagaMiddleware.run(saga))

  return { persistor, store }
}
