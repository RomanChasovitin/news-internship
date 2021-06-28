import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

// api
import { getArticleDetails } from '../../api/news'

// base64
import { fromIdToString } from '../../utils/transformBase64/transformIdToString'

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
