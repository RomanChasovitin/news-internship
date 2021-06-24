import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  onCountryPick: PropTypes.string.isRequired,
}

const countries = ['us', 'ru', 'cn', 'nz', 'au']

const CountryPicker = ({ onCountryPick }) => (
  <ButtonGroup color="primary" aria-label="outlined primary button group">
    {countries.map(item => (
      <Button
        onClick={() => {
          onCountryPick(item)
        }}
      >
        {item}
      </Button>
    ))}
  </ButtonGroup>
)

CountryPicker.propTypes = propTypes

export { CountryPicker }
