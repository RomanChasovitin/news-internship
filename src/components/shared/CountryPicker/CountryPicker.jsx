import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  onCountryPick: PropTypes.string.isRequired,
  selectedCountry: PropTypes.oneOf(['us', 'ru', 'cn', 'nz', 'au']).isRequired,
}

const countries = ['us', 'ru', 'cn', 'nz', 'au']

const CountryPicker = ({ onCountryPick, selectedCountry }) => (
  <ButtonGroup color="primary" aria-label="outlined primary button group">
    {countries.map(item => (
      <Button
        key={item}
        variant={item === selectedCountry ? 'contained' : 'outlined'}
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
