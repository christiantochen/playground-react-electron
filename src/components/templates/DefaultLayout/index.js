import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Sidebar from '../../organisms/Sidebar'
import Topbar from '../../organisms/Topbar'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
`

const Container = styled.div`
  flex: 1;
  position: absolute;
  z-index: var(--topbar-z);
  top: 0;
  bottom: 0;
  right: 0;
  left: ${props => (props.isSidebarOpen ? '300px' : '0')};
  transition: left 0.3s ease-out;
`

const Content = styled.div`
  padding: 16px;
`

class DefaultLayout extends Component {
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

DefaultLayout.propTypes = {
  children: PropTypes.node,
  containerStyle: PropTypes.object,
}

export default DefaultLayout
