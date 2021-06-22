import axios from 'axios'

// Instance
const instance = axios.create({
  baseURL: process.env.REACT_APP_NEWS_API_URL,
  params: {
    apikey: process.env.REACT_APP_NEWS_API_KEY,
  },
})

export const getTopNews = async () => {
  try {
    const { data } = await instance.get('/top-headlines?country=us')
    return data
  } catch (error) {
    return error
  }
}

export const getQuery = async query => {
  try {
    const { data } = await instance.get(`/everything?q=${query}`)
    return data
  } catch (error) {
    return error
  }
}

export const getCategory = async category => {
  try {
    const { data } = await instance.get(`/sources?category=${category}`)
    return data
  } catch (error) {
    return error
  }
}
