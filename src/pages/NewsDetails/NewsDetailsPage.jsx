import React from 'react'
import { useParams } from 'react-router-dom'

// component
import { NewsDetails } from '../../components/NewsDetails'

const NewsDetailsPage = () => {
  const { slug } = useParams()
  return <NewsDetails type={slug} />
}

export { NewsDetailsPage }
