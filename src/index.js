import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'remote-redux-devtools'
import { Provider } from 'react-redux'
import { cars } from 'shared/redux/car-list/reducer'

import App from 'app/App'

import registerServiceWorker from './registerServiceWorker'

import 'shared/styles/reset.css'
import 'shared/styles/bare.min.css'

let store

if (process.env.NODE_ENV === 'development') {
  console.log('[APP] Initialising store with redux remote devtools')

  store = createStore(combineReducers({ cars }), composeWithDevTools(applyMiddleware(thunk)))
} else {
  store = createStore(combineReducers({ cars }), compose(applyMiddleware(thunk)))
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
