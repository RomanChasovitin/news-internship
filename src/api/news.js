import axios from 'axios'

// Instance
const instance = axios.create({
  baseURL: process.env.REACT_APP_NEWS_API_URL,
  params: {
    apikey: process.env.REACT_APP_NEWS_API_KEY,
  },
})

export const getTopNews = async (us, page) => {
  try {
    const { data } = await instance.get(`/top-headlines?country=${us || 'us'}&page=${page || '1'}`)
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
