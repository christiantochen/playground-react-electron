import React, { Component } from 'react'
import { messaging } from '../../../firebase'
import { connect } from 'react-redux'
import View from './view'

class DefaultLayout extends Component {
  async componentDidMount() {
    const fcmToken = await messaging
      .requestPermission()
      .then(function() {
        return messaging.getToken()
      })
      .catch(function(err) {
        // if (err.code === "messaging/token-unsubscribe-failed")
        // turnOnNotification();
        console.log('Unable to get permission to notify.', err)
      })

    console.log(fcmToken)
    this.setState({ fcmToken })
  }

  render() {
    return <View {...this.props} />
  }
}

function mapStateToProps(state) {
  return {}
}
function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout)
