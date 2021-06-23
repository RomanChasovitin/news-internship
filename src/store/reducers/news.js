// action type
import * as actionType from '../actions/actionTypes'

const initialState = {
  entities: [],
  error: null,
  isLoading: false,
  pagination: {
    page: 1,
    isNextPage: false,
    totalResults: 0,
  },
}

const calcTotalResults = (totalResults, articles) => {
  if (totalResults === articles) return 0
  return totalResults - articles
}

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_NEWS.REQUEST:
      return { ...state, isLoading: true }
    case actionType.GET_NEWS.SUCCESS:
      return {
        ...state,
        entities: [...action.payload.articles],
        pagination: {
          ...state.pagination,
          totalResults: calcTotalResults(action.payload.totalResults, action.payload.articles.length),
        },
        isLoading: false,
      }
    case actionType.GET_NEWS.FAILURE:
      return { ...state, error: action.payload, isLoading: false }
    case actionType.GET_NEWS.LOAD_MORE_NEWS:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          page: action.payload.page,
          totalResults: calcTotalResults(state.pagination.totalResults, action.payload.articles.length),
        },
        entities: [...state.entities, ...action.payload.articles],
      }
    default:
      return state
  }
}
