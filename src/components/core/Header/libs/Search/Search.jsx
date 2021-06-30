import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

// react-router-dom
import { useHistory } from 'react-router-dom'

// ui
import Button from '@material-ui/core/Button'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'

// search
import { getTopSearchNews } from '../../../../../store/actions/news'

// styles
import { useStyles } from './styles'

const Search = () => {
  const [inputData, setInputData] = useState('')

  const history = useHistory()

  const MIN_SEARCH_LENGTH = 3
  const ENTER_KEY = 'Enter'

  const dispatch = useDispatch()

  const checkLength = (value = inputData) => value.length >= MIN_SEARCH_LENGTH

  const handleKeyPress = e => {
    if (e.key === ENTER_KEY && checkLength(inputData)) {
      dispatch(getTopSearchNews(inputData))
      history.push(`/search/${inputData}`)
    }
  }

  const handleInputData = e => {
    setInputData(e.target.value)
  }

  const classes = useStyles()

  return (
    <>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          onChange={handleInputData}
          onKeyPress={handleKeyPress}
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      <Button
        variant="contained"
        disabled={checkLength}
        onClick={() => {
          //
        }}
        color="secondary"
        className={classes.searchButton}
      >
        Search
      </Button>
    </>
  )
}

export { Search }
