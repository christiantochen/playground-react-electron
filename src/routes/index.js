import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'

import LoginPage from '../containers/LoginPage'
import Dashboard from '../containers/Dashboard'
import Department from '../containers/Department'

export default function Routes() {
  return (
    <Switch>
      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/department" exact component={Department} isPrivate />
      <Route path="/login" exact component={LoginPage} />

      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={LoginPage} />
    </Switch>
  )
}
