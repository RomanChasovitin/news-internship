import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MailIcon from '@material-ui/icons/Mail'
import BusinessIcon from '@material-ui/icons/Business'
import HealingIcon from '@material-ui/icons/Healing'
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball'
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu'
import Brightness5Icon from '@material-ui/icons/Brightness5'
import DesktopMacIcon from '@material-ui/icons/DesktopMac'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'

import { useStyles } from './styles'

const mainItem = { url: '/topNews', title: 'Top News', icon: 'Top News', id: '0' }
const menuItems = [
  {
    url: '/business',
    title: 'Business',
    icon: <BusinessIcon />,
    id: '1',
  },
  {
    url: '/entertainment',
    title: 'Entertainment',
    icon: <RestaurantMenuIcon />,
    id: '2',
  },
  {
    url: '/general',
    title: 'General',
    icon: <DesktopMacIcon />,
    id: '3',
  },
  {
    url: '/health',
    title: 'Health',
    icon: <HealingIcon />,
    id: '4',
  },
  {
    url: '/science',
    title: 'Science',
    icon: <Brightness5Icon />,
    id: '5',
  },
  {
    url: '/sports',
    title: 'Sports',
    icon: <SportsBaseballIcon />,
    id: '6',
  },
  {
    url: '/technology',
    title: 'Technology',
    icon: <PhoneIphoneIcon />,
    id: '7',
  },
]

export default function Sidebar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button key={mainItem.id}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={mainItem.title} />
            </ListItem>
          </List>
          <Divider />
          <List>
            {menuItems.map(item => (
              <ListItem button key={item.id}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  )
}
