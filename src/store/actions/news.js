import * as actionType from './actionTypes'

// api
import api from '../../api'

const getNewsSuccess = payload => ({
  type: actionType.GET_NEWS.SUCCESS,
  payload,
})

const getNewsFailure = payload => ({ type: actionType.GET_NEWS.FAILURE, payload })

const getNews = () => async dispatch => {
  dispatch({ type: actionType.GET_NEWS.REQUEST })
  try {
    const payload = await api.getTopNews()
    dispatch(getNewsSuccess(payload))
  } catch (error) {
    dispatch(getNewsFailure(error))
  }
}

const loadMoreNews = page => async dispatch => {
  const payload = await api.getTopNews('us', page)
  try {
    dispatch({ type: actionType.GET_NEWS.LOAD_MORE_NEWS, payload: { ...payload, page } })
  } catch (error) {
    dispatch(getNewsFailure(error))
  }
}

export { getNews, loadMoreNews }
