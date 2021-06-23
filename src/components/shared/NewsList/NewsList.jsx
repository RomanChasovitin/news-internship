import PropTypes from 'prop-types'
import React from 'react'

// layout
import Grid from '@material-ui/core/Grid'

// ui
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

// styles
import { useStyles } from './styles'

const propTypes = {
  news: PropTypes.string.isRequired,
}

const NewsList = ({ news }) => {
  const classes = useStyles()

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card>
        <CardHeader className={classes.author} subheader={news.author} />
        <CardHeader className={classes.title} title={news.title} subheader={news.publishedAt} />
        <CardMedia className={classes.media} image={news.urlToImage} title="Paella dish" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {news.description}
          </Typography>
        </CardContent>
        <div className={classes.link}>
          <Link href="http://www.google.com/">Read more...</Link>
        </div>
      </Card>
    </Grid>
  )
}

NewsList.propTypes = propTypes

export { NewsList }
