import React from 'react'

// router
import { useLocation, useParams } from 'react-router-dom'

// component
import { NewsDetails } from '../../components/NewsDetails'

const getQueryParams = query => {
  const filtredQuery = query.slice(1, query.length)
  return filtredQuery.split('&').reduce((acc, curr) => {
    const [key, value] = curr.split('=')
    return { ...acc, [key]: value }
  }, {})
}

const NewsDetailsPage = () => {
  const { slug } = useParams()
  const { search } = useLocation()
  const { url } = getQueryParams(search)
  return <NewsDetails slug={slug} url={url} />
}

export { NewsDetailsPage }
