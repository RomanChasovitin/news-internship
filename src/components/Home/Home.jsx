import React, { useEffect } from 'react'

// redux
import { useDispatch, useSelector } from 'react-redux'

// layout
import Grid from '@material-ui/core/Grid'

// components
import { Button } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

// react-router-dom
import { Link } from 'react-router-dom'

// routes
import { routes } from '../../config/routes'

// styles
import { useStyles } from './styles'

// actions
import { getNews } from '../../store/actions'

// selectors
import * as selectors from '../../store/selectors'

// base 64
import { fromStringToId } from '../../utils/transformBase64/transformStringToId'

const Home = () => {
  const entities = useSelector(selectors.getEntities('news'))
  const isLoading = useSelector(selectors.getLoading('news'))
  const error = useSelector(selectors.getError('news'))
  const { page } = useSelector(selectors.getPagination('news'))
  const hasNextPage = useSelector(selectors.getHasNextPage('news'))

  const dispatch = useDispatch()
  const loadNews = () => dispatch(getNews())

  useEffect(() => {
    loadNews()
  }, [])

  const classes = useStyles()

  const loadMore = () => {
    const nextPage = page + 1
    dispatch(getNews('us', nextPage))
  }

  return (
    <>
      <Grid container spacing={2}>
        {error}
        <>
          {entities.map(item => (
            <Grid key={item.publishedAt} item xs={12} sm={6} md={3}>
              <Card>
                <CardHeader className={classes.author} subheader={item.author} />
                <CardHeader className={classes.title} title={item.title} subheader="September 14, 2016" />
                <CardMedia
                  className={classes.media}
                  image={
                    item.urlToImage ||
                    'https://static01.nyt.com/images/2021/06/20/world/20Ethiopia-Abiy01/20Ethiopia-Abiy01-facebookJumbo-v2.jpg'
                  }
                  title="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {item.description}
                  </Typography>
                </CardContent>
                <div className={classes.link}>
                  <Link to={routes.newsDetails(fromStringToId(item.title))}>Read more...</Link>
                </div>
              </Card>
            </Grid>
          ))}
        </>
      </Grid>
      {isLoading && <div>Loading...</div>}
      {!isLoading && hasNextPage && (
        <Button onClick={loadMore} variant="contained" color="primary">
          Load more
        </Button>
      )}
    </>
  )
}
export { Home }
