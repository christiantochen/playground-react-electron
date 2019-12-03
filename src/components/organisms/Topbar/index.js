import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  height: 96px;
  padding: 16px;
  box-shadow: 0px 1px 8px #bfbfbf;
  align-items: center;
`

const Icon = styled.button`
  height: 48px;
  width: 48px;
  background: #463191;
  margin: 8px;
`

const PageTitle = styled.label`
  margin-left: 8px;
  font-size: 24px;
  font-weight: bold;
`

const RightWrapper = styled.div`
  margin-left: auto;
`

class Topbar extends Component {
  render() {
    return (
      <Wrapper>
        <Icon onClick={this.props.onToggleSidebar} />
        <PageTitle>{this.props.title}</PageTitle>
        <RightWrapper>
          <Icon />
          <Icon />
        </RightWrapper>
      </Wrapper>
    )
  }
}

Topbar.propTypes = {
  title: PropTypes.string.isRequired,
  onToggleSidebar: PropTypes.func,
}

export default Topbar
