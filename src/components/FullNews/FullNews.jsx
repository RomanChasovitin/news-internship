import React, { useEffect, useState } from 'react'

// routing
import { useParams } from 'react-router-dom'

// api
import { getFullArticle } from '../../api/news'

// base64
import { fromToStr } from '../../utils/transformBase64'

function FullNews() {
  const [article, setArticle] = useState()
  const [isLoadingArticle, setIsLoadingArticle] = useState(false)
  const { id: idTitle } = useParams()

  const loadFullArticle = async () => {
    const { articles } = await getFullArticle(fromToStr(idTitle))
    setArticle(articles[0])
    setIsLoadingArticle(true)
  }

  useEffect(() => {
    loadFullArticle()
  }, [])

  return isLoadingArticle ? (
    <>
      <h2>{article.title}</h2>
      <p>
        Author: <b>{article.author}</b>
      </p>
      <img src={article.urlToImage} alt="article_img" />
    </>
  ) : (
    <div>Loading</div>
  )
}

export { FullNews }
