import React from 'react'
import { useParams } from 'react-router-dom'

// component
import { Search } from '../../components/Search'

const SearchPage = () => {
  const { slug } = useParams()

  return <Search slug={slug} />
}

export { SearchPage }
