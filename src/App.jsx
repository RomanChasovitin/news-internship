import React from 'react'

// ui
import { ThemeProvider } from '@material-ui/core'

// components
import { Header } from './components/core/Header'
import { Sidebar } from './components/core/Sidebar'

// configs
import { theme } from './config/theme'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Sidebar />
      </ThemeProvider>
    </div>
  )
}

export default App
