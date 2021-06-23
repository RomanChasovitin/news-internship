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
      return { ...state, entities: [...action.payload] }
    case actionType.GET_NEWS.SUCCESS:
      return { ...state, isLoading: action.payload }
    case actionType.GET_NEWS.FAILURE:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
