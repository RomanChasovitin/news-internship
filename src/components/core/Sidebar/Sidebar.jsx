import React from 'react'

// ui
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Toolbar from '@material-ui/core/Toolbar'

// icons
import Brightness5Icon from '@material-ui/icons/Brightness5'
import BusinessIcon from '@material-ui/icons/Business'
import DesktopMacIcon from '@material-ui/icons/DesktopMac'
import HealingIcon from '@material-ui/icons/Healing'
import MailIcon from '@material-ui/icons/Mail'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu'
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball'

// styles
import { useStyles } from './styles'

const mainItem = { url: '/topNews', title: 'Top News', icon: <MailIcon />, id: '0' }
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

const Sidebar = () => {
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
              <ListItemIcon>{mainItem.icon}</ListItemIcon>
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

export { Sidebar }
