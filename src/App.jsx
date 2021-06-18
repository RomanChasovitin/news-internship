import React from 'react'

// ui
import { ThemeProvider } from '@material-ui/core'

// components
import { Sidebar } from './components/core/Sidebar'

// configs
import { theme } from './config/theme'

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
