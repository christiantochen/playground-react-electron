import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  width: 300px;
  display: flex;
  flex-direction: column;
  z-index: var(--sidebar-z);
  transition: transform 0.3s ease-out;
  transform: translateX(${props => (props.isOpen ? '0%' : '-100%')});
`

const HeaderWrapper = styled.div`
  display: flex;
  padding: 16px;
  height: 96px;
  background: #463191;
  align-items: center;
  z-index: 2;
  position: relative;
`

const ProfilePicture = styled.div`
  height: 64px;
  width: 64px;
  background: white;
  border-radius: 50%;
`

const HeaderContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`
const Title = styled.label`
  font-size: 16px;
  color: white;
  font-weight: bold;
`

const SubTitle = styled.label`
  font-size: 14px;
  color: #ffffff60;
  font-weight: bold;
`

const Content = styled.div`
  height: 100%;
  padding: 16px;
  transition: box-shadow 0.3s ease-out;
  box-shadow: ${props => (props.isOpen ? '1px 0px 8px #bfbfbf' : 'none')};
`

class Sidebar extends Component {
  render() {
    return (
      <Wrapper isOpen={this.props.isOpen}>
        <HeaderWrapper>
          <ProfilePicture alt="" src={this.props.src} />
          <HeaderContentWrapper>
            <Title>{this.props.title}</Title>
            <SubTitle>{this.props.subtitle}</SubTitle>
          </HeaderContentWrapper>
        </HeaderWrapper>
        <Content isOpen={this.props.isOpen}>sidebar contents</Content>
      </Wrapper>
    )
  }
}

function mapStateToProps(state) {
  return {}
}
function mapDispatchToProps(dispatch) {
  return {}
}

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  src: PropTypes.string,
  isOpen: PropTypes.bool,
}

Sidebar.defaultProps = {
  isOpen: true,
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
