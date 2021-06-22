import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  slug: PropTypes.string.isRequired,
}

const NewsDetails = ({ slug }) => (
  <div>
    <h1>{slug}</h1>
  </div>
)

NewsDetails.propTypes = propTypes

export { NewsDetails }
