import React, { Component } from 'react'
import { messaging } from '../../../firebase'
import { connect } from 'react-redux'
import View from './view'
import { fcmUpdateRequest } from '../../../store/auth/actions'

class DefaultLayout extends Component {
  async componentDidMount() {
    const { fcmUpdateRequest } = this.props
    await messaging
      .requestPermission()
      .then(() => messaging.getToken())
      .then(token => fcmUpdateRequest(token))
      .catch(function(err) {
        // if (err.code === "messaging/token-unsubscribe-failed")
        // turnOnNotification();
        console.log('Unable to get permission to notify.', err)
      })
  }

  render() {
    return <View {...this.props} />
  }
}

function mapStateToProps(state) {
  return {}
}
function mapDispatchToProps(dispatch) {
  return {
    fcmUpdateRequest: token => dispatch(fcmUpdateRequest(token)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout)
