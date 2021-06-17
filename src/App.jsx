import React from 'react'

function App() {
  // const [news, setNews] = useState([])

  // const getNews = async () => {
  //   const response = await fetch(`${process.env.REACT_APP_NEWS_API_URL}/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
  //   const { articles } = await response.json()
  //   console.log(articles)
  // }

  // useEffect(() => {
  //   getNews()
  // })

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
