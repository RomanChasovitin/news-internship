import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  slug: PropTypes.string.isRequired,
}

const Category = ({ slug }) => (
  <div>
    <h1>{slug}</h1>
  </div>
)

Category.propTypes = propTypes

export { Category }
