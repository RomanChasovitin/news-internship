// Redux
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// Reducer
import { reducer } from './reducers'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)))

export { store }
