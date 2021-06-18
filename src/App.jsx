import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import { theme } from './config/theme'
import { Header } from './components/core/Header'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </div>
  )
}

export default App
