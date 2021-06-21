import React from 'react'

// router
import { Route, Switch } from 'react-router-dom'

// routes
import { routes } from './config/routes'

// pages
import { Category, Home } from './pages'

const Router = () => (
  <Switch>
    <Route exact path={routes.home()} component={Home} />
    <Route path={routes.category()} component={Category} />
  </Switch>
)

export { Router }
