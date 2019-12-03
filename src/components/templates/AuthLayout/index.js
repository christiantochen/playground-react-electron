import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Cover, Content } from './styles'

class AuthLayout extends PureComponent {
  constructor(props) {
    super(props)

    console.log(props)
  }

  render() {
    return (
      <Wrapper>
        <Cover />
        <Content>{this.props.children}</Content>
      </Wrapper>
    )
  }
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthLayout
