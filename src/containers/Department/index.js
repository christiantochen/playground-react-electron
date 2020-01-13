import React, { Component } from 'react'
import { connect } from 'react-redux'
import View from './view'

class Department extends Component {
  constructor(props) {
    super(props)

    this.state = {}
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

Department.propTypes = {}

export default connect(mapStateToProps, mapDispatchToProps)(Department)
