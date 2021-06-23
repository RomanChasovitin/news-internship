// action type
import * as actionType from '../actions/actionTypes'

const initialState = {
  entities: [],
  success: null,
  isLoading: false,
  error: null,
  pagination: {
    page: 1,
  },
}

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_NEWS:
      return { ...state, entities: [...action.payload] }
    case actionType.IS_LOADING:
      return { ...state, isLoading: action.payload }
    default:
      return state
  }
}
