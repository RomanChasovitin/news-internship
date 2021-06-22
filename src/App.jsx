import React from 'react'

// router
import { BrowserRouter } from 'react-router-dom'

// ui
import { ThemeProvider } from '@material-ui/core'

// components
import { Header } from './components/core/Header'
import { Router } from './Router'
import { Sidebar } from './components/core/Sidebar'

// configs
import { theme } from './config/theme'

// styles
// eslint-disable-next-line import/named
import { useStyles } from './styles'

const App = () => {
  const classes = useStyles()

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div className={classes.root}>
            <Header />
            <Sidebar />
            <main className={classes.content}>
              <Router />
            </main>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export { App }
