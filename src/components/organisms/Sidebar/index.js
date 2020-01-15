import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  Wrapper,
  HeaderWrapper,
  HeaderContentWrapper,
  Title,
  Content,
  ProfilePicture,
  SubTitle,
} from './styles'

class Sidebar extends Component {
  render() {
    return (
      <Wrapper isOpen={this.props.isOpen}>
        <HeaderWrapper>
          <ProfilePicture alt="" src={this.props.profilePicture} />
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
  profilePicture: PropTypes.string,
  isOpen: PropTypes.bool,
}

Sidebar.defaultProps = {
  isOpen: true,
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
