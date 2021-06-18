import React from 'react'

// ui
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'

// components
import { Search } from './libs/Search'

// styles
import { useStyles } from './styles'

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar className={classes.header}>
      <Toolbar>
        <Box flexGrow="1">
          {/* <NavLink to="/"> */}
          <img
            src="https://орфографика.рф/800/600/https/yt3.ggpht.com/a/AATXAJx5amDq3xleLn-gf7Kr02azA8uFO3_JVvO7dF3hRw=s900-c-k-c0xffffffff-no-rj-mo"
            alt="logo"
            className={classes.logo}
          />
          {/* </NavLink> */}
        </Box>
        <Search />
      </Toolbar>
    </AppBar>
  )
}

export { Header }
