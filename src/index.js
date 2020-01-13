import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import { ConnectedRouter as Router } from 'connected-react-router'
import { Router } from 'react-router-dom'

import Routes from './routes'
import GlobalStyles from './styles/global'

import * as serviceWorker from './serviceWorker'
import history from './store/history'
import configureStore from './store/configure'
import { PersistGate } from 'redux-persist/es/integration/react'

const initialState = {}
const { persistor, store } = configureStore(initialState, history)
const MOUNT_NODE = document.getElementById('app')

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./firebase-messaging-sw.js')
}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      {/* <ConnectedRouter history={history}> */}
      <Router history={history}>
        <Routes />
        <GlobalStyles />
      </Router>
      {/* </ConnectedRouter> */}
    </PersistGate>
  </Provider>,
  MOUNT_NODE
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
