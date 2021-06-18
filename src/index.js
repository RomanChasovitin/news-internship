/* eslint-disable react/jsx-filename-extension */

import React from 'react'
import ReactDOM from 'react-dom'

// redux
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

// Redux dev-tools
import { composeWithDevTools } from 'redux-devtools-extension'

// app
import App from './App'

// reducers
import { newsReducer } from './store/reducers/news-reducer'

const store = createStore(newsReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
