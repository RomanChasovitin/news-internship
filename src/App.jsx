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

const App = () => (
  <div className="App">
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  </div>
)

export default App
