import React from 'react'
import { useStyles } from './styles'

const Empty = () => {
  const classes = useStyles()
  return <div className={classes.spinnerContainer}>No data</div>
}

export { Empty }
