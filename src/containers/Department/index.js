import React, { Component } from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

class Department extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return <Wrapper>Department</Wrapper>
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
