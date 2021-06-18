import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'

import { Search } from './libs/Search'
import { useStyles } from './styles'

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar>
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
