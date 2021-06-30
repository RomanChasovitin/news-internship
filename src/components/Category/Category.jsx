import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

// redux
import { useDispatch, useSelector } from 'react-redux'

// material ui
import { Button, CircularProgress, Container, Typography } from '@material-ui/core'

// actions
import { getCategoryNews } from '../../store/actions'

// selectors
import * as selectors from '../../store/selectors'

// components
import { CountryPicker } from '../shared/CountryPicker'
import { Empty } from '../shared/Empty'
import { LoadError } from '../shared/Error'
import { NewsList } from '../shared/NewsList'

// utils
import { captionToUpperCase } from '../../utils/captionToUpperCase'

// styles
import { useStyles } from './styles'

const propTypes = {
  slug: PropTypes.string.isRequired,
}

const Category = ({ slug }) => {
  const dispatch = useDispatch()

  const news = useSelector(selectors.getEntities('news'))
  const isLoading = useSelector(selectors.getLoading('news'))
  const hasNextPage = useSelector(selectors.getHasNextPage('news'))
  const error = useSelector(selectors.getError('news'))
  const pagination = useSelector(selectors.getPagination('news'))

  const [country, setCountry] = useState('us')

  const loadNews = (category, selectedCountry, page) => dispatch(getCategoryNews(category, selectedCountry, page))

  useEffect(() => {
    loadNews(slug, country, 1)
  }, [slug, country])

  const onCountryPick = selectedCountry => {
    setCountry(selectedCountry)
  }

  const loadMore = () => {
    const nextPage = pagination.page + 1
    loadNews(slug, country, nextPage)
  }

  const classes = useStyles()

  return (
    <>
      <Container maxWidth={false}>
        <Typography className={classes.title} variant="h4" component="h2">
          {captionToUpperCase(slug)}
        </Typography>

        <div className={classes.countryPicker}>
          <p>Filter by country:</p>
          <CountryPicker selectedCountry={country} onCountryPick={onCountryPick} />
        </div>
        {!isLoading && !news.length && !error && <Empty />}
        {!isLoading && error && <LoadError />}
        <NewsList news={news} />
        <div className={classes.spinnerContainer}>
          {!isLoading && hasNextPage && (
            <Button onClick={loadMore} variant="contained" color="primary">
              Load more
            </Button>
          )}
          {isLoading && <CircularProgress />}
        </div>
      </Container>
    </>
  )
}

Category.propTypes = propTypes

export { Category }
