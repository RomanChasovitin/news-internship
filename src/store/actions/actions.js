import * as actionType from './actionTypes'

// api
import api from '../../api'

const getNewsSuccess = success => ({
  type: actionType.GET_NEWS.SUCCESS,
  payload: success,
})

const getNewsFailure = error => ({ type: actionType.GET_NEWS.FAILURE, payload: error })

const getNews = () => async dispatch => {
  try {
    const { articles } = await api.getTopNews()
    dispatch({ type: actionType.GET_NEWS.REQUEST, payload: articles })
    dispatch(getNewsSuccess(true))
  } catch (error) {
    dispatch(getNewsFailure(error))
  }
}

export { getNews }
