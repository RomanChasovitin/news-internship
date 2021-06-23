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
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

// styles
import { useStyles } from './styles'

// actions
import { getNews, loadMoreNews } from '../../store/actions'

// selectors
import * as selectors from '../../store/selectors'

const Home = () => {
  const entities = useSelector(selectors.getEntities('news'))
  const isLoading = useSelector(selectors.getLoading('news'))
  const error = useSelector(selectors.getError('news'))
  const pageNews = useSelector(selectors.getPage('news'))
  const totalResults = useSelector(selectors.getTotalResults('news'))

  const dispatch = useDispatch()
  const loadNews = () => dispatch(getNews())

  useEffect(() => {
    loadNews()
  }, [])

  const classes = useStyles()

  const loadMoreNewsHandler = () => {
    const nextPage = pageNews + 1
    dispatch(loadMoreNews(nextPage))
  }
  return (
    <Grid container spacing={2}>
      {error}
      {isLoading ? (
        <div>Loading data</div>
      ) : (
        <>
          {entities.map(item => (
            <Grid key={item.publishedAt} item xs={12} sm={6} md={3}>
              <Card>
                <CardHeader className={classes.author} subheader={item.author} />
                <CardHeader
                  className={classes.title}
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
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
                  <Link href="http://www.google.com/">Read more...</Link>
                </div>
              </Card>
            </Grid>
          ))}
          <Button onClick={loadMoreNewsHandler} disabled={totalResults === 0} variant="contained" color="primary">
            Load more
          </Button>
        </>
      )}
    </Grid>
  )
}

export { Home }
