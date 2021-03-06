import React from 'react'

// ui
import Button from '@material-ui/core/Button'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'

// styles
import { useStyles } from './styles'

const Search = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      <Button variant="contained" color="secondary" className={classes.searchButton}>
        Search
      </Button>
    </>
  )
}

export { Search }
