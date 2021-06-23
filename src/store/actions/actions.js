import * as actionType from './actionTypes'

// api
import api from '../../api'

const getNews = articles => ({
  type: actionType.GET_NEWS,
  payload: articles,
})
const changeLoading = isLoading => ({
  type: actionType.IS_LOADING,
  payload: isLoading,
})

const loadNews = () => dispatch => {
  api.getTopNews().then(r => {
    dispatch(getNews(r.articles))
    dispatch(changeLoading(true))
  })
}

export { loadNews }
