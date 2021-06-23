import React, { useEffect } from 'react'

// redux
import { useDispatch, useSelector } from 'react-redux'

// ui
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

// components
import { CountryPicker } from '../shared/CountryPicker'
import { NewsList } from '../shared/NewsList'

// actions
import { getNews } from '../../store/actions'

// selectors
import * as selectors from '../../store/selectors'

const Home = () => {
  const news = useSelector(selectors.getEntities('news'))
  // const isLoading = useSelector(selectors.getLoading('news'))
  // const error = useSelector(selectors.getError('news'))

  const dispatch = useDispatch()
  const loadNews = () => dispatch(getNews())

  useEffect(() => loadNews(), [])
  return (
    <Container maxWidth="xlg">
      <Typography align="center" variant="h4" component="h2" mb={30}>
        Top news
      </Typography>
      <div align="center">
        <CountryPicker />
      </div>
      <NewsList news={news} />
    </Container>
  )
}

export { Home }
