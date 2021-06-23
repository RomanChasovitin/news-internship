import React, { useEffect } from 'react'

// redux
import { useDispatch, useSelector } from 'react-redux'

// ui
import { CircularProgress } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

// // components
import { CountryPicker } from '../shared/CountryPicker'
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

  const dispatch = useDispatch()
  const loadNews = () => dispatch(getNews())

  useEffect(() => loadNews(), [])

  const classes = useStyles()

  return (
    <Container maxWidth="xlg">
      <Typography className={classes.countryPicker} variant="h4" component="h2">
        Top news
      </Typography>
      <div className={classes.countryPicker}>
        <CountryPicker />
      </div>
      {!isLoading && !news.length && !error && <span>NO DATA</span>}
      {!isLoading && error && <span>ERROR</span>}
      {!isLoading && Boolean(news.length) && <NewsList news={news} />}
      <div className={classes.spinnerContainer}>{isLoading && <CircularProgress />}</div>
    </Container>
  )
}

export { Home }
