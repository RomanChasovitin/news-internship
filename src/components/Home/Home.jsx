import React, { useEffect, useState } from 'react'

// redux
import { useDispatch, useSelector } from 'react-redux'

// ui
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

// components
import { CountryPicker } from '../shared/CountryPicker'
import { Empty } from '../shared/Empty'
import { LoadError } from '../shared/Error'
import { NewsList } from '../shared/NewsList'

// actions
import { getNews } from '../../store/actions'

// selectors
import * as selectors from '../../store/selectors'

// styles
import { useStyles } from './styles'

const Home = () => {
  const news = useSelector(selectors.getEntities('news'))
  const isLoading = useSelector(selectors.getLoading('news'))
  const error = useSelector(selectors.getError('news'))
  const pagination = useSelector(selectors.getPagination('news'))
  const hasNextPage = useSelector(selectors.getHasNextPage('news'))

  const [country, setCountry] = useState('us')

  const dispatch = useDispatch()
  const loadNews = (selectedCountry, page) => dispatch(getNews(selectedCountry, page))

  useEffect(() => {
    loadNews(country, 1)
  }, [country])

  const onCountryPick = selectedCountry => {
    setCountry(selectedCountry)
  }

  const loadMore = () => {
    const nextPage = pagination.page + 1
    loadNews(country, nextPage)
  }

  const classes = useStyles()

  return (
    <Container maxWidth={false}>
      <Typography className={classes.topNews} variant="h4" component="h2">
        Top news
      </Typography>
      <div className={classes.countryPicker}>
        <p>Search by country:</p>
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
  )
}

export { Home }
