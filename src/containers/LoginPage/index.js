import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginRequest } from '../../store/auth/actions'
import View from './view'

class LoginPage extends Component {
  render() {
    return <View {...this.props} />
  }
}

function mapStateToProps(state) {
  return {}
}
function mapDispatchToProps(dispatch) {
  return { submit: data => dispatch(loginRequest(data)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
