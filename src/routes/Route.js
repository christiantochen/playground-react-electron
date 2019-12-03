import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import DefaultLayout from '../components/templates/DefaultLayout'
import AuthLayout from '../components/templates/AuthLayout'

import { isTokenSet } from '../utils/auth'

export default function RouteWrapper({ component: Component, isPrivate, ...rest }) {
  const isAuthenticated = isTokenSet()
  /**
   * Redirect user to SignIn page if he tries to access a private route
   * without authentication.
   */
  if (isPrivate && !isAuthenticated) {
    return <Redirect to="/" />
  }

  /**
   * Redirect user to Main page if he tries to access a non private route
   * (SignIn or SignUp) after being authenticated.
   */
  if (!isPrivate && isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  const Layout = isAuthenticated ? DefaultLayout : AuthLayout

  /**
   * If not included on both previous cases, redirect user to the desired route.
   */
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  //   component: PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.symbol]),
}

RouteWrapper.defaultProps = {
  isPrivate: false,
}
