import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Sidebar from '../../organisms/Sidebar'
import Topbar from '../../organisms/Topbar'
import { Wrapper, Container, Content } from './styles'

class DefaultLayoutView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: true,
      //
      displayName: 'Christianto Chen',
      displayPicture: '',
      department: {
        displayName: 'Software Developer',
      },
    }

    this.handleToggleSidebar = this.handleToggleSidebar.bind(this)
  }

  handleToggleSidebar() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))
  }

  render() {
    const { containerStyle, children } = this.props

    return (
      <Wrapper>
        <Sidebar
          title={this.state.displayName}
          subtitle={this.state.department.displayName}
          src={this.state.displayPicture}
          isOpen={this.state.isOpen}
        />
        <Container isSidebarOpen={this.state.isOpen}>
          <Topbar title="Dashboard" onToggleSidebar={this.handleToggleSidebar} />
          <Content style={containerStyle}>{children}</Content>
        </Container>
      </Wrapper>
    )
  }
}

DefaultLayoutView.propTypes = {
  children: PropTypes.node,
  containerStyle: PropTypes.object,
}

export default DefaultLayoutView
