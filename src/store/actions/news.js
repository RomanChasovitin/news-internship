import * as actionType from './actionTypes'

// api
import api from '../../api'

const getNewsSuccess = payload => ({
  type: actionType.GET_NEWS.SUCCESS,
  payload,
})

const getNewsFailure = payload => ({ type: actionType.GET_NEWS.FAILURE, payload })

const getNews =
  (country = 'us', page = 1) =>
  async dispatch => {
    dispatch({ type: actionType.GET_NEWS.REQUEST, payload: { page } })
    try {
      const payload = await api.getTopNews(country, page)
      dispatch(getNewsSuccess(payload))
    } catch (error) {
      dispatch(getNewsFailure(error))
    }
  }

const getCategoryNews =
  (slug = 'business', country = 'us', page = 1) =>
  async dispatch => {
    dispatch({ type: actionType.GET_NEWS.REQUEST, payload: { page } })
    try {
      const payload = await api.getCategoryNews(slug, country, page)
      dispatch(getNewsSuccess(payload))
    } catch (error) {
      dispatch(getNewsFailure(error))
    }
  }
export { getNews, getCategoryNews }
