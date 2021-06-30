import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

// redux
import { useDispatch, useSelector } from 'react-redux'

// ui
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

// components
import { Empty } from '../shared/Empty'
import { LoadError } from '../shared/Error'
import { NewsList } from '../shared/NewsList'

// actions
import { getNews } from '../../store/actions'

// selectors
import * as selectors from '../../store/selectors'

// styles
import { useStyles } from './styles'

const propTypes = {
  slug: PropTypes.string.isRequired,
}

const Search = ({ slug }) => {
  const news = useSelector(selectors.getEntities('news'))
  const isLoading = useSelector(selectors.getLoading('news'))
  const error = useSelector(selectors.getError('news'))
  const pagination = useSelector(selectors.getPagination('news'))
  const hasNextPage = useSelector(selectors.getHasNextPage('news'))

  const dispatch = useDispatch()
  const loadNews = (selectedCountry, page) => dispatch(getNews(selectedCountry, page))

  useEffect(() => {
    loadNews('us', 1)
  }, [slug])

  const loadMore = () => {
    const nextPage = pagination.page + 1
    loadNews('us', nextPage)
  }

  const classes = useStyles()

  return (
    <Container maxWidth={false}>
      <Typography className={classes.topNews} variant="h4" component="h2">
        Search results by query {slug}:
      </Typography>
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

Search.propTypes = propTypes

export { Search }
