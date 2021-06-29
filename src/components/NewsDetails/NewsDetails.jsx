import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

// material ui
import { Grid, Link, Typography } from '@material-ui/core'

// api
import { getArticleDetails } from '../../api/news'

// base64
import { fromIdToString } from '../../utils/transformBase64/transformIdToString'

// utils
import { formatDate } from '../../utils'

// styles
import { useStyles } from './styles'

const propTypes = {
  slug: PropTypes.string.isRequired,
}

const NewsDetails = ({ slug }) => {
  const [article, setArticle] = useState()
  const [isLoadingArticle, setIsLoadingArticle] = useState(false)

  const loadFullArticle = async () => {
    setIsLoadingArticle(true)
    const articleData = await getArticleDetails(fromIdToString(slug))
    setArticle(articleData)
    setIsLoadingArticle(false)
  }
  useEffect(() => {
    loadFullArticle()
  }, [])

  const classes = useStyles()

  return !isLoadingArticle && article ? (
    <>
      <Grid container spacing={3}>
        <Grid item>
          <Typography className={classes.boxMargin} variant="h4">
            {article.title}
          </Typography>
          <div className={classes.boxImg}>
            <img
              className={classes.img}
              src={
                article.urlToImage ||
                'https://universeinform.com/wp-content/uploads/2021/04/Marketplace-Lending-News.jpg'
              }
              alt=""
            />
          </div>
          <Typography
            className={classes.boxMargin}
            variant="h5"
            dangerouslySetInnerHTML={{ __html: article.description }}
          />
          <Typography className={classes.boxMargin} variant="h5">
            {article.url}
          </Typography>
          <Typography className={classes.boxMargin} variant="h5">
            {article.content}
          </Typography>
          <Link href={article.url} variant="h5" target="_blank" className={classes.boxMargin}>
            Source
          </Link>
          <div className={classes.info}>
            <Typography variant="h5">Author: {article.author}</Typography>
            <Typography variant="h5">Publish date: {formatDate(article.publishedAt)}</Typography>
          </div>
        </Grid>
      </Grid>
    </>
  ) : (
    <div>Loading...</div>
  )
}
NewsDetails.propTypes = propTypes

export { NewsDetails }
