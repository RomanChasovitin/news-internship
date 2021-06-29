import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

// base 64
import { decode } from 'js-base64'

// api
import { getArticleDetails } from '../../api/news'

const propTypes = {
  slug: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

const NewsDetails = ({ slug, url }) => {
  const [article, setArticle] = useState()
  const [isLoadingArticle, setIsLoadingArticle] = useState(false)

  const loadFullArticle = async () => {
    setIsLoadingArticle(true)
    const articleData = await getArticleDetails(decode(slug))
    if (!articleData && url) window.location.href = decode(url)
    setArticle(articleData)
    setIsLoadingArticle(false)
  }
  useEffect(() => {
    loadFullArticle()
  }, [])

  return !isLoadingArticle && article ? (
    <>
      <h2>{article.title}</h2>
      <p>
        Author: <b>{article.author}</b>
      </p>
      <img src={article.urlToImage} alt="article_img" />
    </>
  ) : (
    <div>Loading...</div>
  )
}
NewsDetails.propTypes = propTypes

export { NewsDetails }
