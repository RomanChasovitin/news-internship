import React from 'react'
import { useStyles } from './styles'

const LoadError = () => {
  const classes = useStyles()
  return <div className={classes.spinnerContainer}>Error</div>
}

export { LoadError }
