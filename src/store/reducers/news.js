// action type
import * as actionType from '../actions/actionTypes'

const initialState = {
  entities: [],
  error: null,
  isLoading: false,
  pagination: {
    page: 1,
    isNextPage: false,
    totalResults: null,
  },
}

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_NEWS.REQUEST:
      return { ...state, isLoading: true, entities: action.payload.page === 1 ? [] : state.entities }
    case actionType.GET_NEWS.SUCCESS:
      return {
        ...state,
        entities: [...state.entities, ...action.payload.articles],
        pagination: {
          ...state.pagination,
          totalResults: action.payload.totalResults,
        },
        isLoading: false,
      }
    case actionType.GET_NEWS.FAILURE:
      return { ...state, error: action.payload, isLoading: false }
    default:
      return state
  }
}
