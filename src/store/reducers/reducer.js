// Redux
import { combineReducers } from 'redux'

// Reducers
import { newsReducer } from './news'

const reducer = combineReducers({
  news: newsReducer,
})

export { reducer }
