import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import { theme } from './config/theme'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>Hello</ThemeProvider>
    </div>
  )
}

export default App
