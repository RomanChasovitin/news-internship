// action type
import * as actionType from '../actions/actionTypes'

const initialState = {
  entities: [],
  error: null,
  isLoading: false,
  pagination: {
    page: 1,
  },
}

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_NEWS.REQUEST:
      return { ...state, isLoading: true }
    case actionType.GET_NEWS.SUCCESS:
      return { ...state, entities: [...action.payload.articles], isLoading: false }
    case actionType.GET_NEWS.FAILURE:
      return { ...state, error: action.payload, isLoading: false }
    default:
      return state
  }
}
