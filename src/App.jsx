import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import { theme } from './config/theme'
import Sidebar from './components/core/Sidebar/Sidebar'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Sidebar />
      </ThemeProvider>
    </div>
  )
}

export default App
