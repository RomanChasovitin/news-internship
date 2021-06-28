import axios from 'axios'

// Instance
const instance = axios.create({
  baseURL: process.env.REACT_APP_NEWS_API_URL,
  params: {
    apikey: process.env.REACT_APP_NEWS_API_KEY,
  },
})

export const getTopNews = async (country = 'us', page = 1) => {
  try {
    const { data } = await instance.get(`/top-headlines?country=${country}&page=${page}`)
    return data
  } catch (error) {
    return error
  }
}

export const getSearchNews = async query => {
  try {
    const { data } = await instance.get(`/everything?q=${query}`)
    return data
  } catch (error) {
    return error
  }
}

export const getCategoryNews = async category => {
  try {
    const { data } = await instance.get(`/sources?category=${category}`)
    return data
  } catch (error) {
    return error
  }
}

export const getArticleDetails = async (title = 'news') => {
  try {
    const {
      data: { articles },
    } = await instance.get(`/everything?qInTitle="${title}"`)
    return articles[0]
  } catch (error) {
    return error
  }
}
