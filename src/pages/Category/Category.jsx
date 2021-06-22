import React from 'react'
import { useParams } from 'react-router-dom'

// component
import { Category } from '../../components/Category'

const CategoryPage = () => {
  const { slug } = useParams()
  return <Category slug={slug} />
}

export { CategoryPage }
