import React from 'react'

// router
import { Route, Switch } from 'react-router-dom'

// routes
import { routes } from './config/routes'

// pages
import { CategoryPage, Home, NewsDetailsPage, SearchPage } from './pages'

const Router = () => (
  <Switch>
    <Route exact path={routes.home()} component={Home} />
    <Route path={routes.category()} component={CategoryPage} />
    <Route path={routes.newsDetails()} component={NewsDetailsPage} />
    <Route path={routes.search()} component={SearchPage} />
  </Switch>
)

export { Router }
