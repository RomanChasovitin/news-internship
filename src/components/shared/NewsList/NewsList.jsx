import PropTypes from 'prop-types'
import React from 'react'

// layout
import Grid from '@material-ui/core/Grid'

// ui
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

// functions
import { formatDate, textEllipsis } from '../../../utils'

// styles
import { useStyles } from './styles'

const propTypes = {
  news: PropTypes.string.isRequired,
}

const NewsList = ({ news }) => {
  const classes = useStyles()

  return (
    <Grid container spacing={3}>
      {news.map(newsItem => (
        <Grid item key={newsItem.author + newsItem.title} xs={12} sm={6} md={3}>
          <Card>
            <CardMedia
              className={classes.media}
              image={
                newsItem.urlToImage ||
                'https://universeinform.com/wp-content/uploads/2021/04/Marketplace-Lending-News.jpg'
              }
            />
            <CardHeader titleTypographyProps={{ className: classes.title }} title={textEllipsis(newsItem.title)} />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {textEllipsis(newsItem.description, 80)}
              </Typography>
            </CardContent>
            <div className={classes.info}>
              <CardHeader
                className={classes.author}
                subheader={!newsItem.author ? newsItem.source.name : textEllipsis(newsItem.author, 12)}
              />
              <CardHeader className={classes.author} subheader={formatDate(newsItem.publishedAt)} />
            </div>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

NewsList.propTypes = propTypes

export { NewsList }
