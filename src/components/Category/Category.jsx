import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

// redux
import { useDispatch } from 'react-redux'

// actions
import { getCategoryNews } from '../../store/actions'

const propTypes = {
  slug: PropTypes.string.isRequired,
}

const Category = ({ slug }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategoryNews(slug))
  }, [slug])
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  )
}

Category.propTypes = propTypes

export { Category }
