import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import React from 'react'

const CountryPicker = () => (
  <ButtonGroup color="primary" aria-label="outlined primary button group">
    <Button>US</Button>
    <Button>RU</Button>
    <Button>CN</Button>
    <Button>NZ</Button>
    <Button>AU</Button>
  </ButtonGroup>
)

export { CountryPicker }
